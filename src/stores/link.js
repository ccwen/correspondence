var Reflux=require("reflux");
var action=require("../actions/link");
var Link=Reflux.createStore({
	listenables:link
	,onAdd:function(selections) {
		console.log("addlink",selections);
		//create a intertextual link
	}
});
module.exports=Link;