var Firebase=require("firebase");
var rootRef = new Firebase("https://correspondence.firebaseio.com");

var deploy=function(path,key,json,overwrite) {
	var ref=rootRef.child(path).child(key);
	ref.once("value",function(snapshot){
		if (!snapshot.val() || overwrite) {
			var obj={};
			obj[key]=json;
			rootRef.child(path).update(obj,function(err){
				if (err) console.log('cannot save ',key,"on ",path);
				else console.log("saved",key,"on ",path)
			});
		} else {
			console.log(key,"already on firebaseio.com/",path)
		}
	});
}


var markups=
{
		"xxx":{
		 "s10-5":[[21,13,"bodhisattven"]]
		,"k10-5":[[7,3,"諸菩薩"]]
		,"b10-5":[[7,3,"諸菩薩"]]
		,"g10-5":[[7,2,"菩薩"]]
		,"y10-5":[[6,2,"菩薩"]]
		,"x10-5":[[6,2,"菩薩"]]
		,"c10-5":[[25,15,"the Bodhisattva"]]
		,"t10-5":[[21,16,"བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ"]]
	}
}

var overwrite=true;
deploy("markups","10-5",markups,overwrite);
