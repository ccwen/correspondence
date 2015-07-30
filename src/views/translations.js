var React=require("react/addons");
var E=React.createElement;

var Reflux=require("reflux");
var bs=require("react-bootstrap");
var Table=bs.Table;
var LinkView=require("ksana-layer-react").LinkView;
var markuputil=require("ksana-layer-react").markuputil;
var action_selection=require("../actions/selection");
var action_link=require("../actions/link");
var action_suggest=require("../actions/suggest");
var store_link=require("../stores/link");
var store_highlight=require("../stores/highlight");
var store_selection=require("../stores/selection");
var store_suggest=require("../stores/suggest");
var action_highlight=require("../actions/highlight");
var User=require("../stores/user");

var Translations=React.createClass({
	mixins:[Reflux.listenTo(store_link,"onLinkData")
					,Reflux.listenTo(store_selection,"onSelectionData")
					,Reflux.listenTo(store_highlight,"onHighlightData")
					,Reflux.listenTo(store_suggest,"onSuggestData")]
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
	,onLinkData:function(links) {
		this.setState({links:links});
	}
	,onSuggestData:function(suggestions,sels) {
		//TODO: change to immutable
		var selections=this.state.selections;
		for (var i in sels) {
			if (sels[i]) selections[i]=sels[i];
		}
		this.setState({selections:selections});
	}
	,onHighlightData:function(highlights) {
		this.setState({highlights:highlights});
	}
	,onEnterTag:function(e,tid,linkid) {
		if (store_selection.isEmpty())	action_highlight.enter(linkid);
	}
	,onLeaveTag:function(e,tid,linkid) {
		action_highlight.leave(linkid);
	}
	,onSelectText:function(start,len,text,params,sels) {
		var links=this.getLink(params.sender,"array");
		var overlapped=markuputil.hasOverlap(start+1,len-2,links);
		if (overlapped) return true;

		if (params.sender[0]=="s" && len>0) {
			action_suggest.get(text,this.props.data,this.state.links);
		}

		action_selection.set(params.sender,sels);
	}
	,onClickTag:function(e,reactid,tag) {
		if (User.editable() && store_selection.isEmpty()) {
			action_highlight.leave(tag);
			action_selection.setAll(store_link.pluck(tag),tag);
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