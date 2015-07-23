var React=require("react");
var action=require("./actions/link");
var Controls=React.createClass({
  addLink:function() {
		action.add();
	}
	,clear:function() {
		actions.clear();
	}
	,render:function() {
		return <div>
      		<button onClick={this.addLink}>Add Link</button>
      		<button>Remove Link</button>
     </div>
	}
});

module.exports=Controls;