var Reflux=require("reflux");
var action=require("../actions/link");
var store_selection=require("../stores/selection");
var action_selection=require("../actions/selection");
//var mockdata=require("./mockdata").links;
var firebaseurl=require("./firebaseurl");
var Link=Reflux.createStore({
	listenables:action
	,links:{}
	,init:function() {
		firebaseurl.rootpath("markups").on("child_added",this.markupAdded);
		firebaseurl.rootpath("markups").on("child_removed",this.markupRemoved);
		firebaseurl.rootpath("markups").on("child_changed",this.markupChanged);
	}
	,updateMarkupsFromSnapshot:function(snapshot,remove) {
		var markups=snapshot.val();
		
		return markups;
	}
	,markupAdded:function(childSnapshot,prevChildName) {
		var r=this.updateMarkupsFromSnapshot(childSnapshot);
		if (!r) return;
		//console.log("markup added",r.markup,r.dbid,r.segid);
		this.links=r;
		this.trigger(this.links);
	}
	,markupRemoved:function(childSnapshot) {
		var r=this.updateMarkupsFromSnapshot(childSnapshot,"remove");
		if (!r) return;
		//console.log("markup removed",r.markup,r.dbid,r.segid);
		this.links=r;
		this.trigger(this.links);
	}
	,markupChanged:function(childSnapshot) {
		var r=this.updateMarkupsFromSnapshot(childSnapshot);
		if (!r) return;
		//console.log("markup changed",r.markup,r.dbid,r.segid);
		this.links=r;
		this.trigger(this.links);
	}
	,buildMarkupFromSelections:function(seg,sels) {
		var markups=[];
		for (var i in sels) {
			markups.push( {uti:i , value: sels[i]});
		}
		return markups;
	}
	,onAdd:function(seg) {
		var selections=store_selection.get();
		if (!Object.keys(selections).length)return;
		action_selection.clear();

		var key='L'+Math.random().toString().substr(2,5);
		
		var ref=firebaseurl.markups(seg).push();
		var markupid=ref.key();
		var markups=this.buildMarkupFromSelections(seg,selections);
		ref.set(markups);
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
		firebaseurl.markups(uid).once("value",function(res){
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