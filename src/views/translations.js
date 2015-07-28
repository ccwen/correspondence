var React=require("react/addons");
var E=React.createElement;

var Reflux=require("reflux");
var bs=require("react-bootstrap");
var Table=bs.Table;
var LinkView=require("ksana-layer-react").LinkView;
var markuputil=require("ksana-layer-react").markuputil;
var action_selection=require("../actions/selection");
var action_link=require("../actions/link");
var store_link=require("../stores/link");
var store_highlight=require("../stores/highlight");
var store_selection=require("../stores/selection");
var action_highlight=require("../actions/highlight");
var User=require("../stores/user");

var Translations=React.createClass({
	mixins:[Reflux.listenTo(store_link,"onLinkData")
					,Reflux.listenTo(store_selection,"onSelectionData")
					,Reflux.listenTo(store_highlight,"onHighlightData")]
	,getInitialState:function(){
		return {links:{},selections:{},highlights:{}};
	}
	,onSelectionData:function(selections){
		this.setState({selections:selections});
	}
	,fromRawlinks:function(rawlinks) {
		var links={};
		for (var key in rawlinks) {
			var markups=rawlinks[key];
			var m={};
			for (var i in markups) {
				m [markups[i].uti ] = markups[i].value;
			}
			links[key]=m;
		}
		return links;
	}
	,fromRawArray:function(rawarray) {
		var out={};
		if (rawarray) rawarray.forEach(function(h){
			out[h.uti] = h.value;
		});
		return out;
	}
	,onLinkData:function(rawlinks) {
		var links=this.fromRawlinks(rawlinks)
		this.setState({links:links});
	}
	,onHighlightData:function(rawhighlight) {
		var highlights=this.fromRawArray(rawhighlight);

		this.setState({highlights:highlights});
	}
	,onEnterTag:function(e,tid,linkid) {
		action_highlight.enter(linkid);
	}
	,onLeaveTag:function(e,tid,linkid) {
		action_highlight.leave(linkid);
	}
	,onSelectText:function(start,len,text,params,sels) {
		var links=this.getLink(params.sender,"array");
		var overlapped=markuputil.hasOverlap(start+1,len-2,links);
		if (overlapped) return true;

		action_selection.set(params.sender,sels);
	}
	,noSelection:function() {
		var c=0;
		for (var i in this.state.selections) {
			c+=this.state.selections[i].length;
		}
		return c===0;
	}
	,onClickTag:function(e,reactid,tag) {
		if (User.editable() && this.noSelection()) {
			this.setState({editing:tag});
			action_highlight.leave(tag);

			var sels=this.fromRawArray(store_link.pluck(tag));
			action_selection.setAll(sels);
		}
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
	,getHighlight:function(uti) {
		return this.state.highlights[uti];
	}
	,renderItem:function(item,idx) {
		var uti=item[1];
		var links=this.getLink(uti);
		var selections=this.getSel(uti);
		var highlights=this.getHighlight(uti);

		return E("tr",{key:idx},
			E("td",null,item[0])
			,E("td",null,E(LinkView,{
				id:uti
				,onClickTag:this.onClickTag,onEnterTag:this.onEnterTag,onLeaveTag:this.onLeaveTag
				,selections:selections,links:links,highlights:highlights
				,onSelectText:this.onSelectText,text:item[2]}))
		);
	}
	,render:function() {
		return E(Table,{striped:true,bordered:true,condensed:true},
			this.props.data.map(this.renderItem));
	}
})
module.exports=Translations;