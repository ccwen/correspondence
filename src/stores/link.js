var Reflux=require("reflux");
var action=require("../actions/link");
var store_selection=require("../stores/selection");
var action_selection=require("../actions/selection");
var mockdata=require("./mockdata").links;
var Link=Reflux.createStore({
	listenables:action
	,links:mockdata
	,onAdd:function() {
		var selections=store_selection.get();
		if (!Object.keys(selections).length)return;
		action_selection.clear();

		var key='L'+Math.random().toString().substr(2,5);
		this.links[key]=selections;
		this.trigger(this.links);
		//create a intertextual link
	}
	,get:function(id) {
		return this.links[id];
	}
	,onFetch:function(){
		setTimeout(function(){
			this.trigger(this.links);	
		}.bind(this),100);
		
	}
});
module.exports=Link;