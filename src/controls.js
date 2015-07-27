var React=require("react");
var action=require("./actions/link");
var SegNav=require("ksana2015-segnav");
var action_sourcetext=require("./actions/sourcetext");
var store_sourcetext=require("./stores/sourcetext");

var segs=store_sourcetext.segments();

var Controls=React.createClass({
	startSeg:"1.1"
  ,addLink:function() {
		action.add();
	}
	,clear:function() {
		actions.clear();
	}
	,onGoSegment:function(segnow) {
		action_sourcetext.fetch(segnow);
	}
	,componentDidMount:function() {
		action_sourcetext.fetch(this.startSeg);
	}
	,render:function() {
		return <div>
				<SegNav segs={segs} segpat=".(\d+\.\d+)" value={this.startSeg} onGoSegment={this.onGoSegment}/>
      		<button onClick={this.addLink}>Add Link</button>
      		<button>Remove Link</button>
     </div>
	}
});

module.exports=Controls;