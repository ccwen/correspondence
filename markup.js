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
		"xxx":[
		 {"uti":"s10.5","value":[[21,13,"bodhisattven"]]}
		,{"uti":"k10.5","value":[[7,3,"諸菩薩"]]}
		,{"uti":"b10.5","value":[[7,3,"諸菩薩"]]}
		,{"uti":"g10.5","value":[[7,2,"菩薩"]]}
		,{"uti":"y10.5","value":[[6,2,"菩薩"]]}
		,{"uti":"x10.5","value":[[6,2,"菩薩"]]}
		,{"uti":"c10.5","value":[[25,15,"the Bodhisattva"]]}
		,{"uti":"t10.5","value":[[21,16,"བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ"]]}
	]
}

var overwrite=true;
deploy("markups","10_5",markups,overwrite);
