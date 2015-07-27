var Reflux=require("reflux");
var action=require("../actions/sourcetext");

var User=Reflux.createStore({
	editable:true
});
module.exports=User;