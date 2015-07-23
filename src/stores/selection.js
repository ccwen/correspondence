var Reflux=require("reflux");
var action=require("../actions/selection");

var Link=Reflux.createStore({
	listenables:action
	,selections:{}
	,onSet:function(id,selections) {
		this.selections[id]=selections.filter(function(sel){return sel[1]});
		//automatical search possible other selection
	//	if (id=="s10.5" && (!this.selections["b10.5"] || this.selections["b10.5"].length==0)) {
	//		this.selections["b10.5"]=[[1,5]];
	//	}
		this.trigger(this.selections);
	}
	,get:function() {
		var out={};
		for (var i in this.selections) {
			var sel=this.selections[i];
			if (sel && sel.length) out[i]=JSON.parse(JSON.stringify(sel));
		}
		return out;
	}
	,clear:function() {
		for (var i in this.selections) {
			this.selections[i]=[];
		}
		this.trigger(this.selections);
	}
});
module.exports=Link;