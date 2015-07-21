var Reflux=require("reflux");
var action=require("../actions/selection");
var Link=Reflux.createStore({
	listenables:link
	,onAdd:function(selections) {
		console.log("addselection",selections);
		//find possible mapping,
		//auto select other translation
		
	}
});
module.exports=Link;