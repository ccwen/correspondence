var Reflux=require("reflux");
var action=require("../actions/sourcetext");
var action_link=require("../actions/link");
var data=require("../diamond");
var versions={"s":"sanskrit","k":"kumarajiva","b":"bodhiruci","g":"gupta"
  ,"y":"yijing","x":"xuanzang","t":"tibetan","c":"conze","p":"paramartha"}

var SourceText=Reflux.createStore({
	listenables:action
	,onFetch:function(seg,cb) {
		var out=[];
		for (var key in data) {
			var version=versions[key[0]];
			if (key.substr(1)===seg) {
				out.push([version,key[0]+seg, data[key]]);
			}
		}
		action_link.fetch(seg);

		this.trigger(out,seg);
		if (typeof cb=="function") out.length?cb(0):cb("not found");
	}
	,segments:function() {
		return Object.keys(data);
	}
});
module.exports=SourceText;