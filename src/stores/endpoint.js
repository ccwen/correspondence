var Firebase=require("firebase");

var markups=function(key) {
	return new Firebase("https://correspondence.firebaseio.com/markups/"+key);
}

var correspond=function(key) {
	return new Firebase("https://correspondence.firebaseio.com/correspond/"+key);	
}

var user=function() {
	return new Firebase("https://correspondence.firebaseio.com/");	
}
var rootpath=function(path){
	return new Firebase("https://correspondence.firebaseio.com/"+path);
}
module.exports={markups:markups,user:user,rootpath:rootpath,correspond:correspond};