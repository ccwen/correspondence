var React=require("react");
var actions=require("./actions");
var Controls=React.createClass({
  	add:function() {
		actions.add(Math.random().toString().substr(2,5));
	}
	,clear:function() {
		actions.clear();
	}
	,render:function() {
		return <div>
      		<button>Add Link</button>
      		<button>Remove Link</button>
     </div>
	}
});

module.exports=Controls;