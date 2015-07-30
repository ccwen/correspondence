var Reflux=require("reflux");
var action=require("../actions/link");
var store_selection=require("../stores/selection");
//var mockdata=require("./mockdata").links;
var endpoint=require("./endpoint");
var Link=Reflux.createStore({
	listenables:action
	,links:{}
	,savingToFirebase:false
	,updateMarkupsFromSnapshot:function(snapshot,remove) {
		var markups=snapshot.val();		
		return markups;
	}
	,markupAdded:function(childSnapshot,prevChildName) {
		var r=this.updateMarkupsFromSnapshot(childSnapshot);
		if (!r) return;
		var key=childSnapshot.ref().key();
		this.links[key]=r;
		this.trigger(this.links);
	}
	,markupRemoved:function(childSnapshot) {
		var r=this.updateMarkupsFromSnapshot(childSnapshot,"remove");
		if (!r) return;
		var key=childSnapshot.ref().key();
		delete this.links[key];
		this.links;
		this.trigger(this.links);
	}
	,markupChanged:function(childSnapshot) {
		var r=this.updateMarkupsFromSnapshot(childSnapshot);
		if (!r) return;
		var key=childSnapshot.ref().key();
		this.links[key]=r;
		this.trigger(this.links);
	}
	,buildMarkupFromSelections:function(seg,sels) {
		var markups=[];
		for (var i in sels) {
			markups.push( {uti:i , value: sels[i]});
		}
		return markups;
	}
	,onCancelEdit:function() {
		if (!this.uid) return;
		this.onFetch(this.uid);
	}
	,onRemove:function(seg,markupkey) {
		endpoint.markups(seg).child(markupkey).remove();
	}
	,onSet:function(seg,markupkey) {
		if (this.savingToFirebase) return;
		var selections=store_selection.get();
		if (!Object.keys(selections).length)return;
		var ref=null;
		if (markupkey)	 {
			ref=endpoint.markups(seg).child(markupkey);
		} else {
			ref=endpoint.markups(seg).push();
		}
		this.savingToFirebase=true;
		ref.set(selections,function(){
			this.savingToFirebase=false;
		}.bind(this));
	}
	,get:function(id) {
		return this.links[id];
	}
	,pluck:function(id) {
		var sels=this.links[id];

		delete this.links[id];
		this.trigger(this.links);
		return sels;
	}	
	,onFetch:function(uid){

		if (this.uid!==uid) {
			if (this.uid) {
				endpoint.markups(uid).off();
			} else {
				endpoint.markups(uid).on("child_added",this.markupAdded);
				endpoint.markups(uid).on("child_removed",this.markupRemoved);
				endpoint.markups(uid).on("child_changed",this.markupChanged);			
			}			
		}

		this.uid=uid;

		endpoint.markups(uid).once("value",function(res){
			this.links={};
			var data=res.val();
			for (var key in data) {
				this.links[key]=data[key];	
			}
			this.trigger(this.links);
		}.bind(this));
	}
});
module.exports=Link;