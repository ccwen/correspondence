var React=require("react/addons");
var bs=require("react-bootstrap");
var Table=bs.Table;
var SelectableView=require("ksana-layer-react").SelectableView;
var E=React.createElement;
var action_selection=require("../actions/selection");
var action_link=require("../actions/link");


var Translations=React.createClass({

	onSelectText:function(start,len,text,params,sels) {
		console.log("selectext",arguments)
		//return true if already has markup.
		//action_selection.set(params.sender,sels);
	}
	,renderItem:function(item,idx) {
		return E("tr",null,
			E("td",null,item[0])
			,E("td",null,E(SelectableView,{
				selections:[[1,2,"a"]],id:idx,onSelectText:this.onSelectText,text:item[2]}))
		);
	}
	,render:function() {
		return E(Table,{striped:true,bordered:true,condensed:true},
			this.props.data.map(this.renderItem));
	}
})
module.exports=Translations;