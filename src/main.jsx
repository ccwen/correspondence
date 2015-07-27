var React=require("react");
var Reflux=require("reflux");
var data=require("./mockdata");
var Translations=require("./views/translations");
var Controls=require("./controls");
var sourcetext_store=require("./stores/sourcetext");
var Maincomponent = React.createClass({
	mixins:[Reflux.listenTo(sourcetext_store,"onData")]
	,onData:function(data,uti) {
		this.setState({data:data,uti:uti});
	}
	,getInitialState:function() {
		return {data:[],uti:""};
	}
  ,render: function() {
    return <div>
    	<Controls/>
      <Translations data={this.state.data} uti={this.state.uti}/>
    </div>;
  }
});
module.exports=Maincomponent;