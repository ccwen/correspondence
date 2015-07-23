var React=require("react/addons");
var Reflux=require("reflux");
var bs=require("react-bootstrap");
var Table=bs.Table;
var LinkView=require("ksana-layer-react").LinkView;
var markuputil=require("ksana-layer-react").markuputil;
var E=React.createElement;
var action_selection=require("../actions/selection");
var action_link=require("../actions/link");
var store_link=require("../stores/link");
var store_selection=require("../stores/selection");

var Translations=React.createClass({
	mixins:[Reflux.listenTo(store_link,"onLinkData"),
					Reflux.listenTo(store_selection,"onSelectionData")]
	,getInitialState:function(){
		return {links:{},selections:{}};
	}
	,onSelectionData:function(selections){
		this.setState({selections:selections});
	}
	,onLinkData:function(links) {
		this.setState({links:links});
	}
	,onHoverLink:function(i) {
		console.log(i);
	}
	,componentDidMount:function(){
		action_link.fetch();
	}
	,onSelectText:function(start,len,text,params,sels) {
		var links=this.getLink(params.sender,"array");
		var overlapped=markuputil.hasOverlap(start,len,links);
		if (overlapped) return true;

		action_selection.set(params.sender,sels);
	}
	,onClickTag:function(e,reactid,tag) {
		console.log(tag);
	}
	,getLink:function(uti,format) {
		var obj={},out=[];
		for (var i in this.state.links) {
			var group=this.state.links[i];
			if (group[uti]) {
				obj[i]=group[uti];
				out=out.concat(group[uti]);
			}
		};
		return (format=="array")?out:obj;	
	}
	,getSel:function(uti) {
		return this.state.selections[uti];
	}
	,renderItem:function(item,idx) {
		var uti=item[1];
		var links=this.getLink(uti);
		var selections=this.getSel(uti);
		return E("tr",null,
			E("td",null,item[0])
			,E("td",null,E(LinkView,{
				onClickTag:this.onClickTag,
				selections:selections,
				links:links,id:uti,onSelectText:this.onSelectText,text:item[2]}))
		);
	}
	,render:function() {
		return E(Table,{striped:true,bordered:true,condensed:true},
			this.props.data.map(this.renderItem));
	}
})
module.exports=Translations;