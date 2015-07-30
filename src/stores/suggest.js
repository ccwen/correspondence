var Reflux=require("reflux");
var endpoint=require("./endpoint");
var actions=require("../actions/suggest");

var Suggest=Reflux.createStore({
	listenables: actions
	,init:function() {

	}
	,tagPositions:function(existingtags) {
		var out={};
		for (var i in existingtags) {
			var obj=existingtags[i];
			for (var uid in obj) {
				var tags=obj[uid];
				for (var j in tags) {
					var start=tags[j][0];
					if (!out[uid]) out[uid]=[];
					out[uid].push(start);
				}
			}
		}
		for (var i in out) out[i].sort();
		return out;
	}
	,genCorrespondFromSelections:function(sels) {
		var out={key:"",correspond:[]};
		for (var i in sels) {
			var w=sels[i][0][2];
			if (i[0]=="s") { //sanskrit
				out.key=w;
			} else {
				if (out.correspond.indexOf(w)===-1) {
					out.correspond.push(sels[i][0][2]);	
				}
			}
		}
		return out;
	}
	,onAdd:function(sels) {
		var sel=this.genCorrespondFromSelections(sels);
		if (!sel.key) return;

		endpoint.correspond(sel.key).once("value",function(res){
			var correspond=res.val() || [];
			for (var i=0;i<correspond.length;i++) {
				if (sel.correspond.indexOf(correspond[i])==-1){
					sel.correspond.push(correspond[i]);
				}
			}

			res.ref().set(sel.correspond);
		});
	}
	,onGet:function(key,sourcetext,existingtags) {

		endpoint.correspond(key).once("value",function(res){
			var correspond=res.val();
			if (!correspond)return;
			var tagpos=this.tagPositions(existingtags);

			var sels=this.findIn(correspond,sourcetext,tagpos);
			setTimeout(function(){
				this.trigger(correspond,sels);	
			}.bind(this),100);
		}.bind(this));
	}
	,findIn:function(correspond,sourcetext,tagpos) {
		var sels={};
		for (var i=0;i<sourcetext.length;i++) {
			var text=sourcetext[i][2], uid=sourcetext[i][1];
			for (var j=0;j<correspond.length;j++) {
				var w=correspond[j],s=0,idx=0;
				do {
					idx=text.indexOf(w,s);
					if (idx>-1) {
						if (tagpos[uid] && tagpos[uid].indexOf(idx)>-1) {
							s=idx+1;
							continue;
						}
						break;
					}
				} while (idx>-1);

				if (idx>-1) {
					if (!sels[uid]) sels[uid]=[];
					sels[uid].push( [idx,w.length,w]);
				}
			}
		}
		return sels;
	}
});

module.exports=Suggest;