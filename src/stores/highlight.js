var Reflux=require("reflux");
var store_link=require("../stores/link");
var action_highlight=require("../actions/highlight");

var Highlight=Reflux.createStore({
	listenables:action_highlight
	,highlight:""
	,onEnter:function(linkid) {
		this.trigger(store_link.get(linkid)||[]);
	}
	,onLeave:function(linkid) {
		this.trigger([]);
	}
});
module.exports=Highlight;