var Reflux=require("reflux");
var action=require("../actions/sourcetext");
var data=require("../diamond");
var versions={"s":"sanskrit","k":"kumarajiva","b":"bodhiruci","g":"gupta"
  ,"y":"yijing","x":"xuanzang","t":"tibetan","c":"conze"}

var SourceText=Reflux.createStore({
	listenables:action
	,onFetch:function(seg) {
		var out=[];
		for (var key in data) {
			var version=versions[key[0]];
			if (key.substr(1)===seg) {
				out.push([version,key[0]+seg, data[key]]);
			}
		}
		this.trigger(out,seg);
	}
	,segments:function() {
		return Object.keys(data);
	}
});
module.exports=SourceText;