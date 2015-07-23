(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\ksana2015\\correspondence\\index.js":[function(require,module,exports){
var React=require("react");
require("ksana2015-webruntime/livereload")(); 
var ksanagap=require("ksana2015-webruntime/ksanagap");
ksanagap.boot("correspondence",function(){
	var Main=React.createElement(require("./src/main.jsx"));
	ksana.mainComponent=React.render(Main,document.getElementById("main"));
});
},{"./src/main.jsx":"C:\\ksana2015\\correspondence\\src\\main.jsx","ksana2015-webruntime/ksanagap":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\ksanagap.js","ksana2015-webruntime/livereload":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\livereload.js","react":"react"}],"C:\\ksana2015\\correspondence\\src\\actions\\highlight.js":[function(require,module,exports){
module.exports=require("reflux").createActions(["enter","leave"]);
},{"reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\actions\\link.js":[function(require,module,exports){
module.exports=require("reflux").createActions(["add","remove","replace","fetch"]);
},{"reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\actions\\selection.js":[function(require,module,exports){
module.exports=require("reflux").createActions(["set","clear"]);
},{"reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\controls.js":[function(require,module,exports){
var React=require("react");
var action=require("./actions/link");
var Controls=React.createClass({displayName: "Controls",
  addLink:function() {
		action.add();
	}
	,clear:function() {
		actions.clear();
	}
	,render:function() {
		return React.createElement("div", null, 
      		React.createElement("button", {onClick: this.addLink}, "Add Link"), 
      		React.createElement("button", null, "Remove Link")
     )
	}
});

module.exports=Controls;
},{"./actions/link":"C:\\ksana2015\\correspondence\\src\\actions\\link.js","react":"react"}],"C:\\ksana2015\\correspondence\\src\\main.jsx":[function(require,module,exports){
var React=require("react");
var data=require("./mockdata");
var Translations=require("./views/translations");
var Controls=require("./controls");
var Maincomponent = React.createClass({displayName: "Maincomponent",
  render: function() {
    return React.createElement("div", null, 
    	React.createElement(Controls, null), 
      React.createElement(Translations, {data: data, uti: "10.5"})
    );
  }
});
module.exports=Maincomponent;
},{"./controls":"C:\\ksana2015\\correspondence\\src\\controls.js","./mockdata":"C:\\ksana2015\\correspondence\\src\\mockdata.js","./views/translations":"C:\\ksana2015\\correspondence\\src\\views\\translations.js","react":"react"}],"C:\\ksana2015\\correspondence\\src\\mockdata.js":[function(require,module,exports){
module.exports=[
 ["sanskrit","s10.5","tasmāt tarhi subhūte bodhisattvena mahāsattvenaivam apratiṣṭhitaṃcittam utpādayitavyaṃ yanna kvacit pratiṣṭhitaṃ cittam utpādayitavyaṃna rūpa-pratiṣṭhitaṃ cittam utpādayitavyaṃ naśabda-gandha-rasa-spraṣṭavya-dharma-pratiṣṭhitaṃ cittamutpādayitavyam |"]
,["kumarajiva","k10.5","「是故須菩提，諸菩薩摩訶薩應如是生清淨心，不應住色生心，不應住聲、香、味、觸、法生心，應無所住而生其心。"]
,["bodhiruci","b10.5","	是故須菩提！諸菩薩摩訶薩，應如是生清淨心，而無所住，不住色生心，不住聲、香、味、觸、法生心，應無所住而生其心。"]
,["gupta","g10.5","彼故此，善實！菩薩摩訶薩如是不住心發生應，不色住心發生應，不聲、香、味、觸、法住心發生應，無所住心發生應！"]
,["yijing","y10.5","是故，妙生！菩薩不住於事，不住隨處，不住色、聲、香、味、觸、法，應生其心；應生不住事心，應生不住隨處心，應生不住色、聲、香、味、觸、法心。"]
,["xuanzang","x10.5","是故，善現，菩薩如是都無所住應生其心，不住於色應生其心，不住非色應生其心，不住聲、香、味、觸、法應生其心，不住非聲、香、味、觸、法應生其心，都無所住應生其心。"]
,["tibetan","t10.5","རབ་འབྱོར་དེ་ལྟ་བས་ན། བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ་ཆེན་པོས་འདི་ལྟར་མི་གནས་པར་སེམས་པ་བསྐྱེད་པར་བྱ་སྟེ། ཅི་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། ། གཟུགས་ལ་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། ། སྒྲ་དང་དྲི་དང་རོ་དང་རེག་བྱ་དང་ཆོས་ལ་ཡང་མི་གནས་པར་སེམས་བསྐྱེད་པར་བྱའོ། །"]
,["conze","c10.5","Therefore then, Subhuti, the Bodhisattva, the great being, should produce an unsupported thought, i.e. a thought which is nowhere supported, a thought unsupported by sights, sounds, smells, tastes, touchables or mind-objects."]
];

/*
"s9.2":"subhūtir āha | no hīdaṃ bhagavan | na srotāpannasyaivaṃ bhavati mayāsrotāpatti-phalaṃ prāptam iti | tat kasya hetoḥ | na hi sa bhagavan kaṃciddharmam āpannaḥ | tenocyate srotāpanna iti | na rūpam āpanno na śabdānna gandhān na rasān na spraṣṭavyān dharmān āpannaḥ | tenocyatesrotāpanna iti |"
,"k9.2":"須菩提言：「不也，世尊！何以故？須陀洹名為入流，而無所入，不入色、聲、香、味、觸、法，是名須陀洹。」"
,"b9.2":"須菩提言：「不也，世尊！何以故？實無有法名須陀洹。不入色聲香味觸法，是名須陀洹。」"
,"g9.2":"善實言：「不如此，世尊！彼何所因？不彼，世尊！一人，彼故說名流入。不色入，不聲、不香、不味、不觸、不法入，彼故說名流入者。"
,"y9.2":"妙生言：「不爾，世尊！何以故？諸預流者，無法可預，故名預流。不預色、聲、香、味、觸、法，故名預流。"
,"x9.2":"善現答言：不也，世尊！諸預流者不作是念『我能證得預流之果』！何以故？世尊，諸預流者無少所預，故名預流；不預色、聲、香、味、觸、法，故名預流。"
,"t9.2":"རབ་འབྱོར་གྱིས་གསོལ་པ། བཅོམ་ལྡན་འདས་དེ་ནི་མ་ལགས་སོ། ། དེ་ཅིའི་སླད་དུ་ཞེ་ན། བཅོམ་ལྡན་འདས་དེ་ནི་ཅི་ལའང་ཞུགས་པ་མ་མཆིས་པའི་སླད་དུ་སྟེ། དེས་ན་རྒྱུན་དུ་ཞུགས་པ་ཞེས་བགྱིའོ། ། གཟུགས་ལའང་མ་ཞུགས། སྒྲ་ལ་ཡང་མ་ལགས། དྲི་ལ་ཡང་མ་ལགས། རོ་ལ་ཡང་མ་ལགས། རེག་བྱ་ལ་ཡང་མ་ལགས། ཆོས་རྣམས་ལ་ཡང་མ་ཞུགས་ཏེ། དེས་ན་རྒྱུན་དུ་ཞུགས་པ་ཞེས་བགྱིའོ། །"
,"e9.2":"Subhuti replied: No indeed, O Lord. And why? Because, O Lord, he has not won any dharma. Therefore is he called a Stream-winner. No sight-object has been won, no sounds, smells, tastes, touchables, or objects of mind. That is why he is called a 'Streamwinner'."
*/
},{}],"C:\\ksana2015\\correspondence\\src\\stores\\highlight.js":[function(require,module,exports){
var Reflux=require("reflux");
var store_link=require("../stores/link");
var action_highlight=require("../actions/highlight");

var Highlight=Reflux.createStore({
	listenables:action_highlight
	,highlight:""
	,onEnter:function(linkid) {
		this.trigger(store_link.get(linkid)||{});
	}
	,onLeave:function(linkid) {
		this.trigger({});
	}
});
module.exports=Highlight;
},{"../actions/highlight":"C:\\ksana2015\\correspondence\\src\\actions\\highlight.js","../stores/link":"C:\\ksana2015\\correspondence\\src\\stores\\link.js","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\stores\\link.js":[function(require,module,exports){
var Reflux=require("reflux");
var action=require("../actions/link");
var store_selection=require("../stores/selection");
var action_selection=require("../actions/selection");
var mockdata=require("./mockdata").links;
var Link=Reflux.createStore({
	listenables:action
	,links:mockdata
	,onAdd:function() {
		var selections=store_selection.get();
		if (!Object.keys(selections).length)return;
		action_selection.clear();

		var key='L'+Math.random().toString().substr(2,5);
		this.links[key]=selections;
		this.trigger(this.links);
		//create a intertextual link
	}
	,get:function(id) {
		return this.links[id];
	}
	,onFetch:function(){
		setTimeout(function(){
			this.trigger(this.links);	
		}.bind(this),100);
		
	}
});
module.exports=Link;
},{"../actions/link":"C:\\ksana2015\\correspondence\\src\\actions\\link.js","../actions/selection":"C:\\ksana2015\\correspondence\\src\\actions\\selection.js","../stores/selection":"C:\\ksana2015\\correspondence\\src\\stores\\selection.js","./mockdata":"C:\\ksana2015\\correspondence\\src\\stores\\mockdata.js","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\stores\\mockdata.js":[function(require,module,exports){
var links={
	"xxx":{
	"s10.5":[[21,13,"bodhisattven"]]
	,"k10.5":[[7,3,"諸菩薩"]]
	,"b10.5":[[7,3,"諸菩薩"]]
	,"g10.5":[[7,2,"菩薩"]]
	,"y10.5":[[6,2,"菩薩"]]
	,"x10.5":[[6,2,"菩薩"]]
	,"c10.5":[[25,15,"the Bodhisattva"]]
	,"t10.5":[[21,16,"བྱང་ཆུབ་སེམས་དཔའ་སེམས་དཔའ"]]
	}
};
module.exports={links:links}; 
},{}],"C:\\ksana2015\\correspondence\\src\\stores\\selection.js":[function(require,module,exports){
var Reflux=require("reflux");
var action=require("../actions/selection");

var Link=Reflux.createStore({
	listenables:action
	,selections:{}
	,onSet:function(id,selections) {
		this.selections[id]=selections.filter(function(sel){return sel[1]});
		//automatical search possible other selection
	//	if (id=="s10.5" && (!this.selections["b10.5"] || this.selections["b10.5"].length==0)) {
	//		this.selections["b10.5"]=[[1,5]];
	//	}
		this.trigger(this.selections);
	}
	,get:function() {
		var out={};
		for (var i in this.selections) {
			var sel=this.selections[i];
			if (sel && sel.length) out[i]=JSON.parse(JSON.stringify(sel));
		}
		return out;
	}
	,clear:function() {
		for (var i in this.selections) {
			this.selections[i]=[];
		}
		this.trigger(this.selections);
	}
});
module.exports=Link;
},{"../actions/selection":"C:\\ksana2015\\correspondence\\src\\actions\\selection.js","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\correspondence\\src\\views\\translations.js":[function(require,module,exports){
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
var store_highlight=require("../stores/highlight");
var store_selection=require("../stores/selection");
var action_highlight=require("../actions/highlight");

var Translations=React.createClass({displayName: "Translations",
	mixins:[Reflux.listenTo(store_link,"onLinkData")
					,Reflux.listenTo(store_selection,"onSelectionData")
					,Reflux.listenTo(store_highlight,"onHighlightData")]
	,getInitialState:function(){
		return {links:{},selections:{},highlights:{}};
	}
	,onSelectionData:function(selections){
		this.setState({selections:selections});
	}
	,onLinkData:function(links) {
		this.setState({links:links});
	}
	,onHighlightData:function(highlights) {
		this.setState({highlights:highlights});
	}
	,onEnterTag:function(e,tid,linkid) {
		action_highlight.enter(linkid);
	}
	,onLeaveTag:function(e,tid,linkid) {
		action_highlight.leave(linkid);
	}
	,componentDidMount:function(){
		action_link.fetch();
	}
	,onSelectText:function(start,len,text,params,sels) {
		var links=this.getLink(params.sender,"array");
		var overlapped=markuputil.hasOverlap(start+1,len-2,links);
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
},{"../actions/highlight":"C:\\ksana2015\\correspondence\\src\\actions\\highlight.js","../actions/link":"C:\\ksana2015\\correspondence\\src\\actions\\link.js","../actions/selection":"C:\\ksana2015\\correspondence\\src\\actions\\selection.js","../stores/highlight":"C:\\ksana2015\\correspondence\\src\\stores\\highlight.js","../stores/link":"C:\\ksana2015\\correspondence\\src\\stores\\link.js","../stores/selection":"C:\\ksana2015\\correspondence\\src\\stores\\selection.js","ksana-layer-react":"C:\\ksana2015\\node_modules\\ksana-layer-react\\index.js","react-bootstrap":"react-bootstrap","react/addons":"react/addons","reflux":"C:\\ksana2015\\node_modules\\reflux\\index.js"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\index.js":[function(require,module,exports){
var FlattenView=require("./src/flattenview");
var SelectableView=require("./src/selectableview");
var InterlineView=require("./src/interlineview");
var LinkView=require("./src/linkview");

var textrange=require("./src/textrange");
var markuputil=require("./src/markuputil");

//var BaseView=require("./src/baseview");
//var MultiSelectView=require("./src/multiselectview");
//var ReviseView=require("./src/reviseview");


//var RevisionView=require("./src/revisionview");

module.exports={FlattenView:FlattenView
	,SelectableView:SelectableView
	,InterlineView:InterlineView
	,LinkView:LinkView
	,textrange:textrange
  ,markuputil:markuputil
};
},{"./src/flattenview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\flattenview.js","./src/interlineview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interlineview.js","./src/linkview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\linkview.js","./src/markuputil":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markuputil.js","./src/selectableview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selectableview.js","./src/textrange":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\textrange.js"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\caretpos.js":[function(require,module,exports){
var create=function(_text) {
	var caretPos={},pos=0,text=_text;

	caretPos.get=function(){
		return pos;
	}

	var nonstop=function(code) {
		return (code>=0xDC00 && code<=0xDFFF) || (code>=0x0f71 && code<=0x0f87)|| (code>=0x0f8d && code<=0x0fbc);
	}

	var snapNext=function(_pos) {
		if (typeof _pos=="undefined") _pos=pos;
		var code=text.charCodeAt(_pos);
		while (nonstop(code)) {
			_pos++;
			code=text.charCodeAt(_pos);
		}
		return _pos	}
	var snapPrev=function(_pos) {
		if (typeof _pos=="undefined") _pos=pos;
		var code=text.charCodeAt(_pos);
		while (nonstop(code)) {
			_pos--;
			code=text.charCodeAt(_pos);
		}
		return _pos;	
	}	
	caretPos.next=function(_pos){
		pos=snapPrev(_pos);
		pos++;	
		var code=text.charCodeAt(pos);
		while (nonstop(code)) {
			pos++;
			code=text.charCodeAt(pos);
		}
		if (pos>text.length) pos=text.length;
		return pos;
	}
	caretPos.nextToken=function(_pos) {
		var start=snapPrev(_pos);
		this.next(start);
		return text.substring(start,pos);
	}
	caretPos.prevToken=function(_pos) {
		var end=snapNext(_pos);
		this.prev(end);
		return text.substring(pos,end);
	}
	caretPos.prev=function(_pos) {
		pos=snapNext(_pos);
		pos--;
		var code=text.charCodeAt(pos);
		while (nonstop(code)) {
			pos--;
			code=text.charCodeAt(pos);
		}
		if (pos<0) pos=0;
		return pos;
	}
	caretPos.valid=function(_pos) {
		return !nonstop(text.charCodeAt(_pos));
	}

	return caretPos;
}
module.exports={create:create};
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\defaultspan.js":[function(require,module,exports){
/*
  Span's styles is created by merging styles of all tags covering the span.
*/
try {
  var React=require("react-native");
  var PureRenderMixin=null;
} catch(e) {
  var React=require("react/addons");
  var PureRenderMixin = React.addons.PureRenderMixin;
}
var E=React.createElement,PT=React.PropTypes;


var mergeStyles=function(styles) {
  if (!styles.length) return {}; //should return {} instead of null , otherwise react don't apply style
  var out={};
  for (var i=0;i<styles.length;i++) {
    for (var key in styles[i]) {
      out[key]=styles[i][key];
    }
  }
  return out;
}
var SpanClass = React.createClass({
  displayName:"defaultSpan"
  ,mixins:[PureRenderMixin]
  ,propTypes:{
    tid:PT.array
    ,index:PT.number
    ,tags:PT.array.isRequired
    ,start:PT.number.isRequired
    ,tagStyles:PT.object
    ,onLeaveTag:PT.func
    ,onEnterTag:PT.func
  }
  ,getTagStyle:function(tid) {
    if (!tid) return {};
    var out=[];
    for (var i=0;i<tid.length;i++){
      var m=tid[i];
      var styles=this.props.styles;
      var tag=this.props.tags[m];
      tag.style&&out.push(tag.style);
      var type=tag.className;
      styles[type]&&out.push(styles[type]);
      styles[type+"_first"]&&out.push(styles[type+"_first"]);
      styles[type+"_last"]&&out.push(styles[type+"_last"]);        
    };
    return out;
  }
  ,getTagType:function(tid){
    if (!tid) return [];
    var out=[];
    for (var i=0;i<tid.length;i++){
      var m=tid[i];
      var styles=this.props.styles;
      var tag=this.props.tags[m];
      var type=tag.className;
      type&&out.push(type);
    }
    return out;
  }
  ,getTid:function(e) {
    var node=e.target;
    while (node&&typeof node.dataset["start"]=="undefined") {
      node=node.parentNode;
    }
    var tid=node.dataset["tid"];
    return tid;
  }
  ,onMouseEnter:function(e) {
    var tid=this.getTid(e);
    if(this.props.onEnterTag && tid) this.props.onEnterTag(e,tid);
  }
  ,onMouseLeave:function(e) {
    var tid=this.getTid(e);
    if(this.props.onLeaveTag && tid) this.props.onLeaveTag(e,tid);
  }
  ,render:function() {
    var styles=this.getTagStyle(this.props.tid);
    var style=mergeStyles(styles);
    var span=React.Text||"span";
    
    var props={"data-tid":this.props.tid,style:style,"data-start":this.props.start
    ,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave};    
    props.className=this.getTagType(this.props.tid).join(" ");  //pass className as it's  
    
    return E(span,props,this.props.children);
  }
});
module.exports=SpanClass;

},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\flattenview.js":[function(require,module,exports){
/*
	Core markup display component,
	"flatten" text, tags (with styles) to single layer.
*/
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;


var spreadMarkup=require("./markuputil").spreadMarkup;
var caretPos=require("./caretpos");
var defaultSpan=require("./defaultspan");
var FlattenView=React.createClass({
	displayName:"FlattenView"
	,mixins:[PureRenderMixin]
	,propTypes:{
		text:React.PropTypes.string.isRequired
		,tags:PT.array
		,styles:PT.object
		,span:PT.func
		,style:PT.object
		,allowKeys:PT.array
		,onEnterTag:PT.func
		,onLeaveTag:PT.func
	}
	,getDefaultProps:function() {
		return {tags:[],styles:{},span:defaultSpan};
	}
	,tagAtPos:[] // hold covering tags given a text position
	,mergeStyle:function(style) {
		this.style=style||{};
		if (!this.style.lineHeight||!this.style.outline) {
			this.style=update(this.style,{$merge:{
				outline : "0px solid transparent", lineHeight:"180%"
			}});
		}		
	}
	,componentWillMount:function() {
		this.mergeStyle(this.props.style);
		this.tagAtPos=spreadMarkup(this.props.tags);
	}
	,componentWillReceiveProps:function(nextProps) {
		this.mergeStyle(nextProps.style);
		this.tagAtPos=spreadMarkup(nextProps.tags);
	}
	,renderSpan:function(out,start,end,spantext,tid) {
		var before=[],after=[], tags=this.props.tags;
		(tid||[]).map(function(m){ 
			if (tags[m].before&& start===tags[m].s) { 
				before.push(tags[m].before);
			}
		});
		before.length && out.push(E(React.Text||"span",{key:"b"+start},before));

		out.push(E(this.props.span,{index:this.props.index
					,onEnterTag:this.props.onEnterTag,onLeaveTag:this.props.onLeaveTag
					,styles:this.props.styles,key:'s'+start, tags:tags,tid:tid,start:start}
				,spantext)
		);

		(tid||[]).map(function(m){ 
			if (tags[m].after && end===tags[m].s+tags[m].l) {
				after.push(tags[m].after);
			} 
		});
		
		after.length && out.push(E(React.Text||"span",{key:"a"+start},after));
		return out;
	}
	,renderChildren:function() {
		var sameArray=function(a1,a2) {
			if (!a1 && !a2) return true; //both are empty
			if ((!a1 && a2) || (a1 && !a2) ) return false;
			return a1.toString()===a2.toString(); //one dimensional array
		}
		var out=[], spantext="" ,start=0, previous=["impossible item"] ;
		var caretpos=caretPos.create(this.props.text);

		while (caretpos.get()<this.props.text.length) {
			var i=caretpos.get();
			if (!sameArray(this.tagAtPos[i],previous)) {
				spantext && (out=this.renderSpan(out,start,i,spantext,previous));
				start=i;
				spantext="";
			}
			previous=(this.tagAtPos[i]&&this.tagAtPos[i].length)?JSON.parse(JSON.stringify(this.tagAtPos[i])):null; 
			if (i>this.tagAtPos.length) break;
			spantext += caretpos.nextToken();
		}
		spantext=this.props.text.substr(start);
		spantext && (out=this.renderSpan(out,start,i,spantext,previous));
		return out;
	}
	,render:function() {
		var props=update(this.props, {$merge:{spellCheck:false, style:this.style}});
		return E(React.View||"div",props,this.renderChildren());
	}
});
module.exports=FlattenView;
},{"./caretpos":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\caretpos.js","./defaultspan":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\defaultspan.js","./markuputil":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markuputil.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interline.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var Embed=React.createClass({
	render:function() {
		return E("span",this.props,this.props.children);
	}
});
var Super=React.createClass({
	render:function() {
		return E("div",{style:{position:"absolute",left:0,top:"-1.2em",width:"1000px"}}
			,this.props.children);
	}
});
var Sub=React.createClass({
	render:function() {
		return E("div",{style:{position:"absolute",left:0,top:"0.6em",width:"1000px"}}
			,this.props.children);
	}
});
var Container=React.createClass({
	render:function() {
		return E("span",{style:{position:"relative"}}
			,this.props.children);
	}
});

module.exports={Container:Container,Super:Super, Sub:Sub, Embed:Embed};
},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interlineview.js":[function(require,module,exports){
/*
	InterlineView
	filter markups and create tags and pass to selectableview

	markups : data from firebase,
	          interline editor mutate markups and write back to database.

	tags: with before/after component and className, ready for render
		    tags are generated on-the-fly , no need to save.

*/

try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var SelectableView=require("./selectableview");
var markup2tag=require("./markup2tag");
var keyboard_mixin=require("./keyboard_mixin");
var InterlineView=React.createClass({
	mixins:[PureRenderMixin]
	,propTypes:{
		markups:PT.object.isRequired  //markup from firebase
		,user:PT.string
		,allowkeys:PT.array
		,onKeyPress:PT.func
	}
	,getInitialState:function() {
		var allowKeys=keyboard_mixin.arrowkeys;
		if (this.props.allowKeys && this.props.allowKeys.length) {
			allowKeys=allowKeys.concat(this.props.allowKeys);
		}
		//markupActivated : { mid: true , mid: false }; //otherwise it is not initialized
		return {tags:[],editing:null,hovering:null,markupActivated:{},allowKeys:allowKeys};
	}
	,onKeyPress:function(e) {
		var nn=e.target.nodeName;
		if (nn==="INPUT" || nn==="TEXTAREA") return;

		if (this.state.allowKeys.indexOf(e.key)>-1) {
			if (this.props.onKeyPress) this.props.onKeyPress(e);
		} else {
			e.preventDefault();
		}
	}
	,componentWillUpdate:function(nextProps,nextState) {
		this.markup2tag(nextProps,nextState);
	}
	,componentDidMount:function() {
		this.forceUpdate();
	}
	,markup2tag:function(nextProps,nextState) {
		var status={editing:nextState.editing,hovering:nextState.hovering
			,text:nextProps.text
			,action:this.action,markupActivated:nextState.markupActivated,action:this.action};

		nextState.tags=markup2tag(nextProps.markups,status);
		nextState.markupActivated=status.markupActivated; //markup2tag might change markupActivated
	}
  ,activateMarkup:function(mid) {
  	var m=this.props.markups[mid];
  	if (!m)return;
		var markupActivated=this.deactivateOverlapMarkup(m.s,m.l);
		var activate={};
		activate[mid]=true;
		var ma=update(markupActivated,{$merge:activate});
		this.setState({editing:null,hovering:null,markupActivated:ma});
  }
  ,componentWillReceiveProps:function(nextProps) {
  	if (nextProps.editing!==this.props.editing) {
  		this.activateOrEditMarkup(nextProps.editing,nextProps);
  	}
  }
  ,activateOrEditMarkup:function(mid,props) {
  	if (!props) props=this.props;
  	if (!mid || !this.props.markups[mid]) return;
  	if (this.props.markups[mid].author===this.props.user) {
  		this.setState({editing:mid,hovering:null});
  	} else {
  		this.activateMarkup(mid);
  	}
  }
  ,deactivateMarkup:function(mid) {
		var markupActivated=this.state.markupActivated;
		var deactive={};
		deactive[mid]=false;
		var ma=update(markupActivated,{$merge:deactive});
		this.setState({editing:null,hovering:null,markupActivated:ma});
  }
  ,deactivateOverlapMarkup:function(start,len) {
		//set state to 0 for any overlap markup
		var deactive={};
		for (var mid in this.props.markups) {
			var m=this.props.markups[mid];
			if (!(start>=m.s+m.l || start+len<=m.s) ) {
				if (this.state.markupActivated[mid]) deactive[mid]=false;
		  }
			if (start===m.s && this.state.markupActivated[mid]) deactive[mid]=false;
		};
		return update(this.state.markupActivated,{$merge:deactive});
  }
  ,setMarkup:function(mid,key,value) {
  	var m=this.props.markups[mid];
  	var obj={};
  	obj[key]=value;
  	this.props.markups[mid]=update(m,{$merge:obj});
  	this.forceUpdate();
  }
	,action:function(act,p1,p2,p3) {
		if(act==="enter") {
 			this.setState({hovering:p1})
		} else if (act==="leave") {
			if (this.state.editing) {
				this.props.onDoneEdit&&this.props.onDoneEdit(this.state.editing);
			}
			this.setState({hovering:null,editing:null});
		} else if (act==="activate") {
			this.activateMarkup(p1);
		} else if (act==="deactivate") {
			this.deactivateMarkup(p1)
		} else if (act==="activate_edit") { //
			this.activateOrEditMarkup(p1);
		} else if (act==="setMarkup") {
			this.setMarkup(p1,p2,p3);
		}
	}
	,render:function(){
		var props=update(this.props,{$merge:{tags:this.state.tags,
			selectable:this.props.selectable,
			allowKeys:this.state.allowKeys,
			onFocus:this.props.onFocus,
			onBlur:this.props.onBlur,
			onKeyPress:this.onKeyPress}});
		delete props.markups;//hide markups from flattenview
		return E(SelectableView,props);
	}

});

module.exports=InterlineView;
},{"./keyboard_mixin":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\keyboard_mixin.js","./markup2tag":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markup2tag.js","./selectableview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selectableview.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\keyboard_mixin.js":[function(require,module,exports){

var keyboard_mixin={
	arrowkeys:["ArrowRight","ArrowLeft","ArrowUp","ArrowDown","PageUp","PageDown","Home","End"],
	onkeydown:function(e) {
		var nodename=e.target.nodeName;
		if (nodename==="INPUT" || nodename==="TEXTAREA") return;
		var allowkeys=this.state.allowkeys||[];
		if (allowkeys.indexOf(e.key)>-1 || (e.ctrlKey && e.keyCode===67)) return; //allow ctrl+c

		e.preventDefault();
	}
}
module.exports=keyboard_mixin;
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\linkview.js":[function(require,module,exports){
/*
	View for building intertextual link.
*/
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var SelectableView=require("./selectableview");
var keyboard_mixin=require("./keyboard_mixin");
var styles={
	link:{borderBottom:"2px solid #0000ff"}
	,highlight:{background:"yellow"}
}

var InterlineView=React.createClass({
	mixins:[PureRenderMixin]
	,propTypes:{
		links:PT.object
		,highlights:PT.array
		,selections:PT.array
		,user:PT.string
		,allowkeys:PT.array
		,onKeyPress:PT.func
		,onHoverLink:PT.func
	}
	,getDefaultProps:function() {
		return {links:{},highlights:[],selections:[],user:"anonymous"};
	}
	,componentWillUpdate:function(nextProps,nextState) {
		this.combinetag(nextProps,nextState);
	}
	,componentDidMount:function() {
		this.forceUpdate();
	}
	,combinetag:function(props,state) {
		var tags=[];
		for (var key in props.links) {
			props.links[key].forEach(function(H){
				tags.push({s:H[0], l:H[1],style:styles.link, mid:key});
			});
		}
		for (var i=0;i<props.highlights.length;i++) {
			var H=props.highlights[i];
			tags.push({s:H[0], l:H[1], style:styles.highlight, mid:"hover_"+i});	
		}
		state.tags=tags;
	}	
	,getInitialState:function() {
		var allowKeys=keyboard_mixin.arrowkeys;
		if (this.props.allowKeys && this.props.allowKeys.length) {
			allowKeys=allowKeys.concat(this.props.allowKeys);
		}
		return {tags:[],editing:null,hovering:null,markupActivated:{},allowKeys:allowKeys};
	}
	,onClick:function(e,reactid) {
		if (this.hoveringTag && this.props.onClickTag) {
			this.props.onClickTag(e,reactid,this.hoveringTag);
		}
	}
	,onLeaveTag:function(e,tid) {
		this.hovering=null;
		this.hoveringTag=null;
		var leavingTag=null;
		if (this.state.tags[tid]) leavingTag=this.state.tags[tid].mid;
		e.target.style.cursor="";
		if (this.props.onLeaveTag) {
			this.props.onLeaveTag(e,tid,leavingTag);
		}
	}
	,onEnterTag:function(e,tid) {
		this.hovering=e.target;
		this.hoveringTag=null;	
		if (this.state.tags[tid]) this.hoveringTag=this.state.tags[tid].mid;
		if (this.props.onEnterTag) {
			this.props.onEnterTag(e,tid,this.hoveringTag);
		}
		e.target.style.cursor="pointer";
	}
	,render:function(){
		var props=update(this.props,{$merge:{tags:this.state.tags,
			selectable:this.props.selectable,
			allowKeys:this.state.allowKeys,
			onEnterTag:this.onEnterTag,
			onLeaveTag:this.onLeaveTag,
			onFocus:this.props.onFocus,
			onBlur:this.props.onBlur,
			onClick:this.onClick,
			selections:this.props.selections,
			onKeyPress:this.onKeyPress}});
		delete props.markups;//hide markups from flattenview
		return E(SelectableView,props);
	}

});

module.exports=InterlineView;
},{"./keyboard_mixin":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\keyboard_mixin.js","./selectableview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selectableview.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markup2tag.js":[function(require,module,exports){
var React=require("react");
var E=React.createElement;
var typedef=require("./typedef");
var markuputil=require("./markuputil");
var MarkupSelector=require("./markupselector");

/**
	put no conflict markup in object markupActivated
*/
var defaultActiveMarkups=function(gbo,markupActivated) {
	for (var start in gbo){
		var markupcount= Object.keys(gbo[start]).length;
		for (var mid in gbo[start]){
			if (typeof markupActivated[mid]==="undefined") {
				markupActivated[mid]= markupcount===1? true:false;
			}
		}
	}
}

var allDisabled=function(markups,markupActivated) {
	for (var mid in markups) {
		if (markupActivated[mid]) return false;
	}
	return true;
}

var createMarkupSelector=function(start,context,markups) {
	var selector=E(MarkupSelector,{markups:markups,context:context,key:"selector"} );
	return {s:start,l:0,before:selector};
}


var markup2tag=function(markups,context) {
	var gbo=markuputil.groupByOffset(markups);
	defaultActiveMarkups(gbo,context.markupActivated);
	var out=[];
	var createTag=function(mid,showSuper) {
			var m=markups[mid], cls=cls||m.type;
			var Component=typedef[m.type].Component;
			var getStyle=typedef[m.type].getStyle||function(){return {}};
			//console.log("style",context.hovering,getStyle(mid,context),mid)
			var before=E(Component,
							{ mid:mid,showSuper:showSuper,
								hovering:context.hovering===mid,
								editing:context.editing===mid,
								markup:m,context:context,key:mid,
								activated:context.markupActivated[mid]
							}
					);
			return {s:start, l:m.l, mid:mid, before: before, style:getStyle(m,mid,context)};
	}
	for (var i in gbo) {
		var start=parseInt(i), markups=gbo[i];
		var hovering=markups[context.hovering]?context.hovering:null; //this group has hovering markup
		var editing=markups[context.editing]?context.editing:null;    //this group has editing markup
		var markupcount=Object.keys(markups).length;
		var showSuper=true;
		if (!context.editing && markupcount>1 && allDisabled(markups,context.markupActivated )) {
			showSuper=false;
			out.push(createMarkupSelector(start,context,markups));
		}
		if (editing||hovering) {
			out.push(createTag(editing||hovering,showSuper));
		} else {
			for (var mid in markups) {
				out.push(createTag(mid, showSuper && (context.markupActivated[mid]||markupcount===1)));
			}
		}
	}
	
	return out;
}


module.exports=markup2tag;
},{"./markupselector":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markupselector.js","./markuputil":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markuputil.js","./typedef":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\typedef.js","react":"react"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markupselector.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;
var IL=require("./interline");
var handlerStyle={borderStyle:"solid",borderColor:"gray",fontSize:"50%",color:"silver",borderWidth:2
			,borderRadius:"20%",cursor:"pointer",verticalAlign:"top",
			backgroundColor:"drakgray",height:"0.5em",width:"0.5em"};
var handlerStyle_hover=update(handlerStyle,{$merge:{borderColor:"brown"}});

var MarkupSelector=React.createClass({
	mixins:[PureRenderMixin]
	,propTypes:{
		markups:PT.object.isRequired
		,context:PT.object.isRequired
	}
	,onClick:function(e) {
		var mid=e.target.dataset.mid;
		var act=this.props.activated?"deactivate":"activate_edit";
		this.props.context.action(act,mid);
	}
	,renderHandlers:function() {
		var out=[];
		for (var mid in this.props.markups) {
			var m=this.props.markups[mid];
			var hovering=this.props.context.hovering===mid;
			var style=hovering?handlerStyle_hover:handlerStyle;
			out.push(E("span",{"data-mid":mid,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,
			onClick:this.onClick, key:mid,style:style},m.username||m.author));
		}
		return out;
	}
	,onMouseEnter:function(e) {
		clearTimeout(this.leavetimer);
		var mid=e.target.dataset.mid;
		this.props.context.action("enter",mid);
	}
	,onMouseLeave:function() {
		var action=this.props.context.action;
		action("leave");//have to leave immediately as parent might be destroyed
	}
	,renderHandler:function() {
		if (this.props.markups[this.props.context.hovering]) {
			return E("span",{},this.renderHandlers());
		} else {
			var mid=Object.keys(this.props.markups)[0];
			var markupcount=Object.keys(this.props.markups).length;
			return E("span",{"data-mid":mid,
				style:handlerStyle,onMouseEnter:this.onMouseEnter
				,onMouseLeave:this.onMouseLeave},"+"+markupcount);
		}
		
	}
	,render:function() {
		return E(IL.Container,{},
				 E(IL.Super, {},this.renderHandler() )
			);
	}
});
module.exports=MarkupSelector;
},{"./interline":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interline.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\markuputil.js":[function(require,module,exports){
/**
	input : { markupid:{markup}, markupid:{markup} }
	return { offset: { markupid:{markup} , markupid:{markup}] }	
*/
var groupByOffset=function(markups) {
	var out={};
	for (var id in markups) {
		var m=markups[id];
		if (!out[m.s]) out[m.s]={};
		out[m.s][id]=m;
	}
	return out;
}

var	hasOverlap=function(start,len,markups){
	for (var i in markups) {
		var m=markups[i];
		if (!(m[0]>start+len || m[0]+m[1]<start)) return true;
	}
	return false;
}

var nmarkupAtPos=function(markups,offset) {
    return markups.reduce(function(prev,m){return (m.s===offset)?prev+1:prev },0);
}

// create minimum spans for overlap markup.
// each span holds an array of markups id in props.mid
// this.spreaded is the starting offset of the text snippnet in the span
// markup other than _select_ (the build in classname for selection)
// with len==0 is same as len==1

var spreadMarkup=function(markups){
	if (!markups) return [];
	var out=[];
	for (var n in markups) {
		var m=markups[n];
		for (var j=m.s;j<m.s+m.l+1;j++) {
			if ( (!m.l && m.type!=="_selected_") || j<m.s+m.l ) {
				if (!out[j]) out[j]=[];
				out[j].push(n);
			}
		}
	}
	for (var i=0;i<out.length;i++) {
		out[i]&&out[i].sort(function(a,b){return a-b});
	}
	return out;
}

module.exports={groupByOffset:groupByOffset,nmarkupAtPos:nmarkupAtPos,
	spreadMarkup:spreadMarkup,hasOverlap:hasOverlap};
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\edit.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;
var containerStyle={
	borderBottom:"solid 0.1em green"
}
var inputStyle={
	  backgroundColor: "transparent",
//		textDecoration: "underline",
    outline:0,
    border:0,
    fontSize:"100%",
    fontFamily:"inherit",
    color: "inherit"
}
var RevisionEdit=React.createClass({
	displayName:"RevisionEdit"
	,mixins:[PureRenderMixin]
	,propTypes:{
		editing:PT.bool.isRequired
		,action:PT.func.isRequired
	}
	,setCaret:function() {
		var that=this;
		setTimeout(function(){
			if (!that.refs.input) return;//input destroyed
			var input=that.refs.input.getDOMNode();	
			input.focus();
			clearTimeout(this.blurtimer);
			var val=input.value;
			input.setSelectionRange(val.length,val.length);
		},100);
	}
	,onKeyPress:function(e) {
		if (e.key=="Enter") {
			var input=this.refs.input.getDOMNode();
			this.props.action("setText",input.value);	
		}
	}
	,componentDidMount:function() {
		this.setCaret();
	}
	,componentDidUpdate:function() {
		if (this.props.editing) this.setCaret();
	}	
	,onFocus:function() {
		if (!this.props.editing)  return;
		clearTimeout(this.blurtimer);
	}
	,onBlur:function() {
		if (!this.props.editing)  return;
		var that=this;
		clearTimeout(this.blurtimer);
		this.blurtimer=setTimeout(function(){
			that.props.action("leave");
		},500);
	},
	render:function() {
		var size=this.props.markup.l||1;
		return E("span",{style:containerStyle},E("input",{ref:"input",size:size,style:inputStyle,
			onKeyPress:this.onKeyPress,onFocus:this.onFocus,onBlur:this.onBlur,
			defaultValue:this.props.markup.t}));
	}
});
module.exports=RevisionEdit;
},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\editcontrol.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var style={fontSize:"35%",borderStyle:"solid",borderColor:"gray",borderRadius:"25%",cursor:"pointer"};
var RevisionEditControl=React.createClass({
	displayName:"RevisionEditControl"
	,mixins:[PureRenderMixin]
	,propTypes:{
		editing:PT.bool.isRequired
		,action:PT.func.isRequired
	}
	,caretprev:function() {
		this.props.action("adjustlen",-1);
	}
	,caretnext:function() {
		this.props.action("adjustlen",1);
	}
	,render:function() {
		return (E("span",{},
				E("a",{key:"prev",onClick:this.caretprev,style:style},"←")
				,E("a",{key:"next",onClick:this.caretnext,style:style},"→")
			)
		);
	}
});

module.exports=RevisionEditControl;
},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\editmode.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var IL=require("../interline");
var RevisionNote=require("./note");
var RevisionEdit=require("./edit");
var RevisionEditControl=require("./editcontrol");
var caretPos=require("../caretpos");

var RevisionEditMode=React.createClass({
	displayName:"RevisionEditMode"
	,mixins:[PureRenderMixin]
	,style:{display:"none"}
	,propTypes:{
		markup:PT.object.isRequired
		,mid:PT.string.isRequired
		,context:PT.object.isRequired
	}
	,getInitialState:function(){
		return {editNote:false};
	}
	,adjustlen:function(direction) {
		var m=this.props.markup;
		var caretpos=caretPos.create(this.props.context.text.substr(m.s));
		var newlen=direction<0?caretpos.prev(m.l):caretpos.next(m.l);
		this.action("setLength",newlen);
	}
	,action:function(act,p1) {
		if (act==="editNote") {
			console.log("editnote")
			this.setState({editNote:true});
		} else if (act==="leaveNote") {
			console.log("leavenote")
			this.setState({editNote:false});
		} else if (act==="leave") {
			if (!this.state.editNote) {
				this.props.context.action("leave",this.props.mid);
			}
		} else if (act==="setLength") {
			this.props.context.action("setMarkup",this.props.mid,"l",parseInt(p1)||0);
		} else if (act==="setText") {
			this.props.context.action("setMarkup",this.props.mid,"t",p1);
			this.props.context.action("activate",this.props.mid);
			this.props.context.action("leave",this.props.mid);
		} else if (act==="setNote") {
			this.props.context.action("setMarkup",this.props.mid,"note",p1);
		} else if (act==="adjustlen") {
			this.adjustlen(p1);
		}
	}
	,renderNote:function() {
		return E(RevisionNote,
				{note:this.props.markup.note,action:this.action,editing:this.state.editNote
					,mid:this.props.mid,activated:this.props.activated},
				this.props.markup.note);
	}
	,render:function() {
		var props=update(this.props,{$merge:{
			editing:!this.state.editNote,action:this.action}
		});
		return E(IL.Container,{}
			,E(IL.Super, {}, E(RevisionEditControl,props) )
			,E(IL.Embed, {}, E(RevisionEdit,props))
			,E(IL.Sub  , {}, this.renderNote() )
			);
	}
});
module.exports=RevisionEditMode;
},{"../caretpos":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\caretpos.js","../interline":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interline.js","./edit":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\edit.js","./editcontrol":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\editcontrol.js","./note":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\note.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\index.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var IL=require("../interline");
var RevisionNote=require("./note");
var RevisionEditMode=require("./editmode");
var redlinethrough=require("./redlinethrough");
var authorButtonStyle={
			borderStyle:"solid",borderColor:"gray",fontSize:"50%",color:"silver",borderWidth:2
			,borderRadius:"20%",cursor:"pointer",verticalAlign:"top",
			backgroundColor:"drakgray",height:"0.5em",width:"0.5em"};

var AuthorButton=React.createClass({
	mixins:[PureRenderMixin]
	,propTypes:{
		action:PT.func.isRequired
		,mid:PT.string.isRequired
		,activated:PT.bool.isRequired
		,editable:PT.bool.isRequired
	}
	,activatedStyle: update(authorButtonStyle,{$merge:{borderColor:"green"}})
	,getInitialState:function() {
		return {style:{}};
	}
	,onMouseLeave:function(e) {
		this.props.action("leave",this.props.mid);
	}
	,onClick:function(e) {
		var act=this.props.activated?"deactivate":"activate_edit";
		this.props.action(act,this.props.mid);
	}
	,onMouseEnter:function(e) {
		this.props.action("enter",this.props.mid);
	}
	,render:function(){
		return E("span",{style:this.props.activated?this.activatedStyle:authorButtonStyle,
			onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onClick:this.onClick},
			this.props.children);
	}
});


var Revision=React.createClass({
	displayName:"Revision"
	,mixins:[PureRenderMixin]
	,style:{display:"none"}
	,propTypes:{
		markup:PT.object.isRequired
		,mid:PT.string.isRequired
		,context:PT.object.isRequired
		,activated:PT.bool
		,showSuper:PT.bool
	}
	,renderAuthor:function() {
		if (this.props.showSuper) {
			return E(AuthorButton,
				{action:this.props.context.action,mid:this.props.mid
				,activated:this.props.activated,editable:this.props.editable||false},
				this.props.markup.username||this.props.markup.author)
		};
	}
	,renderNote:function() {
		if(this.props.hovering) {
			return E(RevisionNote,
				{editing:false,action:this.props.context.action,note:this.props.markup.note,
				 mid:this.props.mid},
				this.props.markup.note);
		};
	}
	,getNewTextStyle:function() {
		var style={display:"none"};
		if (this.props.hovering) style={borderBottom:"solid 0.1em green",display:"inline"};
		else if (this.props.activated) style={display:"inline"};
		return style;
	}
	,render:function() {
		if (this.props.context.editing===this.props.mid) {
			return E(RevisionEditMode,this.props);
		} else {
		 return E(IL.Container,{}
			,E(IL.Super, {}, this.renderAuthor() )
			,E(IL.Embed, {style:this.getNewTextStyle() }, this.props.markup.t)
			,E(IL.Sub  , {}, this.renderNote() )
			);
		}
	}
});
var linethroughstyle={background:"url("+redlinethrough+") repeat center"};
//var linethroughstyle={textDecoration:"line-through"};
var getOldTextStyle=function(markup,mid,context) {
	var style={};
	if (context.hovering===mid) style=linethroughstyle;
	else if (context.editing===mid) style=linethroughstyle;
	else if (context.markupActivated[mid]) style={display:"none"};
	if (markup.l==0) style={};
	return style;
}
module.exports={Component:Revision, getStyle:getOldTextStyle } ;
},{"../interline":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\interline.js","./editmode":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\editmode.js","./note":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\note.js","./redlinethrough":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\redlinethrough.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\note.js":[function(require,module,exports){
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var textareaStyle={top:"0.6em",lineHeight:"100%",fontSize:"75%",position:"absolute",outline:"none",borderRadius:"5px"};
var staticStyle={fontSize:"75%",cursor:"pointer"};
var RevisionNote=React.createClass({
	displayName:"RevisionNote"
	,mixins:[PureRenderMixin]
	,propTypes:{
		action:PT.func.isRequired
		,mid:PT.string.isRequired
		,editing:PT.bool.isRequired
		,note:PT.string.isRequired
	}
	,onBlur:function(){
		this.props.action("setNote",this.refs.note.getDOMNode().value);
		this.props.action("leaveNote");
	}
	,componentDidUpdate:function() {
		if (!this.props.editing) return;
		var that=this;
		setTimeout(function(){
				that.refs.note.getDOMNode().focus();
		},200);
	}
	,onClick:function() {
		this.props.action("editNote");
	}
	,render:function(){

		if (this.props.editing) {
			return E("textarea",
				{rows:4,cols:20,ref:"note",onBlur:this.onBlur,style:textareaStyle,
				defaultValue:this.props.note}
			);
		} else{
			return E("span",{style:staticStyle,onClick:this.onClick},this.props.note||"...");	
		}
	}
});

module.exports=RevisionNote;
},{"react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\redlinethrough.js":[function(require,module,exports){
var redline="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAADtHCT///+jR4VkAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAXSURBVDjLY2AYBcMWhKIBqgiMglGAAAAfDRqRFmX93gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNS0wNS0yMFQwNzo1NTo0OCswMjowMCznXDoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTUtMDUtMjBUMDc6NTU6NDgrMDI6MDBduuSGAAAAAElFTkSuQmCC";
//var messy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAKJSURBVGhD1ZhBbtwwDEWdK3Td7Nr7H6jLrpsrTAV8g6OhSJqkKI/yFkWKSvR7jAdB+vF4PI7vzHYBX5+/z6+O48ffP+dXOlsE9NI9+wZoxoRHHdwXcCkN/OpgbYBTGkTVwZIA+51m/5rzJsoCbGlQqw4KAkR1JrdCHSQDPNKN8VihOvAGiMbEW9SBFRCVBuxWwlt8rjaHBxjStsrMyu1NEeLAl4CcROLWpTFNoJPazLUf4h5berzbnzcmxwI0CfEBUeMep33DGzDalEsTNMRz/iLA421IO42JfpTzrhwgOvUTC6UBG+gfwgNGM5pVLg3S6uAM0LwXSYNJdVz/+PfzF/7uYV4a5NTFbV4HVEmDqLooTbTrPKBWtyekrnmPt86Add4Nv7rorZ3HYe8Pshwz6vZO6fySAL9N1LvRX2mHiwNCQuzwpXqD2bc/ywJCNqOHjTG8ICC6yJA9G95gV6YCouoNuhJV185nAi63ouG0D+0lFpBWb3jsQ+ogENBP93sD235mL9cBia0wDPsZdWAFzE8HmMPuzu8FqAH9A9LTQR9QtRRCCChUB6M0KBnOA8rtGyygaix4Bnw7dXAG1Nozb2JVAD1vhTpm1i6o5xkwM1fz7hnPpOmX8vydOBfgUWcUljTyvxMzj1z/CMa2ac7Ol/+VcEoUqoe+G2LVy4f4Hi63q22kv0Vn5J8Dd+L8BpIeO/8M0BC770fTsAI2USfEd0QNcNqLQyexl8WeKAfQIZq1QnQGEhMCoq7lb5dTAM/lAcblctEEvZ4rYAdpoImpH+J9sHe6b8D4Mouvw44BTnWwV0DiE7hFQGjljHcGjN4Nvzp4T8DMyhl3ByTecptbA8R3xomcehz/AYPHXX9v/QOyAAAAAElFTkSuQmCC";
//var mesh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAKCAIAAAARhxgeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAAVSURBVBhXYwCC////gzEEkM5jYAAAFmgd41TlhHAAAAAASUVORK5CYII=";
module.exports=redline;
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selectableview.js":[function(require,module,exports){
/*
	Select text by mouse or keyboard
*/
try {
	var React=require("react-native");
	var PureRenderMixin=null;
} catch(e) {
	var React=require("react/addons");
	var PureRenderMixin=React.addons.PureRenderMixin;
}
var update=React.addons.update, E=React.createElement, PT=React.PropTypes;

var selectedTextStyle={"backgroundColor":"highlight",color:"black"};

var KeyboardMixin=require("./keyboard_mixin");
var selection=require("./selection");
var FlattenView=require("./flattenview");
var textrange=require("./textrange");
var selection=require("./selection");
var SelectableView=React.createClass({
	mixins:[PureRenderMixin,KeyboardMixin]
	,propTypes:{
		selectable: PT.oneOf(['no', 'single', 'multiple'])
		,showCaret:PT.bool
		,onSelectText: PT.func
		,tags:PT.array
		,selections:PT.array
		,allowKeys:PT.array
		,onMouseUp:PT.func
		,onSpanEnter:PT.func,onSpanLeave:PT.func
	}
	,updateSelection:function(tags) {
		var seltags=this.tagFromSel(tags||this.state.tags,this.ranges.get());
		this.setState({tags:seltags});
	}
	,setSelections:function(props,tags) {
		if (props.selections) {
			this.ranges.set(props.selections);
			return this.updateSelection(tags);
		}
	}
	,componentWillMount:function() {
		this.ranges=textrange.create();
		this.setSelections(this.props);
	}
	,getInitialState:function(){
		var allowkeys=KeyboardMixin.arrowkeys;
		if (this.props.allowKeys) allowkeys=update(allowkeys,{$push:this.props.allowKeys});
		return {allowkeys:allowkeys,tags:this.props.tags};
	}
	,getDefaultProps:function(){
		return {showCaret:true,selectable:"multiple",tags:[]};
	}
	,componentWillReceiveProps:function(nextProps) {
		var seltags=nextProps.tags;
		if (this.props.selectable!=="no") {
			seltags=this.tagFromSel(seltags,this.ranges.get());	
			this.setState({tags:seltags});
		}
		this.setSelections(nextProps,seltags);
	}
	,componentDidMount:function() {
		//turn contentEditable on for caret, cannot set in render as React will give warning
		if (this.props.showCaret) this.getDOMNode().contentEditable=true;
	}
	,tagFromSel:function(tags,sels) {
		if (!tags)return;
		tags=tags.filter(function(m){ return m.type!=="_selected_";});
		sels.map(function(sel){
			if (sel[1]>0) tags.push({s:sel[0],l:sel[1],type:"_selected_",style:selectedTextStyle});
		});
		return tags;
	}
	,markSelection:function(start,len,selectedtext,params){
		var selectable=this.props.selectable;
		if (selectable==="no") return;

		if (params.ctrlKey&&selectable==="multiple") {
			this.ranges.add(start,len,selectedtext)	
		} else {
			this.ranges.set([[start,len,selectedtext]]);	
		}

		if(this.props.onSelectText){
			var cancel=this.props.onSelectText(start,len,selectedtext,params,this.ranges.get());
			if (cancel) {
					this.ranges.remove(start,len,selectedtext);
			};
		}

		this.updateSelection(this.state.tags);
	}
	,onDoubleClick:function(e) {
		this.onMouseUp(e);
	}
	,removeBlankInselection:function(sel,text) {
		if (text.trim()==="") return;
		var s=0,c=text.charCodeAt(0);
		while (c<0x33 || (c>=0xf0b && c<=0xf0e)) {
			sel.start++;
			sel.len--;
			text=text.substr(1);
			c=text.charCodeAt(0);
		}

		var e=e=text.length-1;
		c=text.charCodeAt(text.length-1);
		while (c<0x33 || (c>=0xf0b && c<=0xf0e)) {
			sel.len--;
			text=text.substr(0,text.length-2);
			c=text.charCodeAt(text.length-1);
		}
		return text;
	}
	,onMouseUp:function(e) {
		if (e.target.nodeName!="SPAN") return;
		var sel=selection.get(this.getDOMNode());
		if (!sel || isNaN(sel.start))return;

		if (sel.len) sel.selection.empty();
		var text=this.props.text.substr(sel.start,sel.len||1);
		if (text.charCodeAt(0)>=0xD800 ) { //surrogate
			text=this.props.text.substr(sel.start,sel.len||2);
		}
		text=this.removeBlankInselection(sel,text);
		var cancel=sel&&this.markSelection(sel.start,sel.len,text,
			{ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,sender:this.props.id});
		if (!cancel) this.selection=sel;
	}
	,onFocus:function(e){
	}
	,onBlur:function(e){
	}	
	,render:function(){
		var props=update(this.props,{$merge:{
			onMouseUp:this.onMouseUp
			,onClick:this.props.onClick
			,onSpanEnter:this.props.onSpanEnter
			,onSpanLeave:this.props.onSpanLeave
			,onKeyDown:this.props.onKeyDown||this.onkeydown
			,onKeyUp:this.props.onKeyUp||this.onkeyup
			,onKeyPress:this.props.onKeyPress||this.onkeypress
			,onDoubleClick:this.onDoubleClick
			,onFocus:this.props.onFocus||this.onFocus
			,onBlur:this.props.onBlur||this.onBlur			
			,tags:this.state.tags
		}});
		
		return E(FlattenView,props);
	}
});
module.exports=SelectableView;
},{"./flattenview":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\flattenview.js","./keyboard_mixin":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\keyboard_mixin.js","./selection":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selection.js","./textrange":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\textrange.js","react-native":"react-native","react/addons":"react/addons"}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\selection.js":[function(require,module,exports){
/**
    Return text position at system caret 
    @param {object} DOM node holding the text
    @param {object} baseNode or extendNode node return by system getSelection
    @param {number} offset from the selected node
*/
var getPos=function(rootele,node,off){
    if (!node) return;
    while (node && node.parentElement!==rootele) node=node.parentElement;
    while (node && !node.dataset.start) node=node.nextSibling;
    if (!node) return -1;

    var pos=parseInt(node.dataset.start)+off;
    return pos;
}
/**
    Return the span and offset containing the pos (return by getPos)
    @param {array} spans
    @param {number} text position
*/
var posInSpan=function(children,pos) {
    var lasti;
	for (var i=0;i<children.length;i++) {
        if (!children[i].dataset.start)continue;
		var spanstart=parseInt(children[i].dataset.start);
		if (spanstart>pos) {
			laststart=parseInt(children[lasti].dataset.start);
			return {idx:i-1,element:children[lasti], offset:pos-laststart};
		}
        lasti=i;
	}
	laststart=parseInt(children[children.length-1].dataset.start);
	return {idx:children.length-1,element:children[children.length-1], offset:pos-laststart };
}
/**
    Set Caret to a saved selection
*/
var restore=function(domnode,oldsel) {
    if (!oldsel) return;
	var span=posInSpan(domnode.childNodes,oldsel.start+oldsel.len)
    if (!span) return;
    if (!span.element.childNodes[0])return;

    var range = document.createRange();
    if (span.element.nodeType!==3 && span.element.childNodes[0].nodeType===3) {
    	span.element=span.element.childNodes[0];
    }
    if (span.offset>span.element.length) {
        range.setStart(span.element, 0);
        range.setEnd( span.element, 0);
    } else {
        range.setStart(span.element ,span.offset);
        range.setEnd( span.element,span.offset);        
    }
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}
/**
    Get the start and len of current selection
    @param {object} root domnode holding the text
*/
var get=function(rootele) {
    var sel=window.getSelection();
    if (!sel.baseNode) return;

    var off=getPos(rootele,sel.anchorNode,sel.anchorOffset);
    var off2=getPos(rootele,sel.focusNode,sel.focusOffset);

    var p1=sel.baseNode.parentElement,p2=sel.extentNode.parentElement;
    if (p1.nodeName!="SPAN"||p2.nodeName!="SPAN") return;

	return {start:off,len:off2-off, selection:sel};
}

module.exports={get:get,restore:restore};
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\textrange.js":[function(require,module,exports){
/**
	Combining multiple range
*/
var create=function() {
	var textrange={};
	var _ranges=[];

	var removeOverlap=function(start,len) {
		var overlap=[];
		_ranges=_ranges.filter(function(r){
			if (r[0]>start+len || r[0]+r[1]<start) return true;
			else {
				overlap.push(r);
				return false;
			}
		});
		return overlap;
	}
	var combine=function(ranges) {
		var start=Number.MAX_VALUE,end=0;
		var text=[];
		for (var i=0;i<ranges.length;i++) {
			var r=ranges[i];

			for (var j=r[0];j<r[0]+r[1];j++) {
				if (!text[j]) text[j]=r[2][j-r[0]]||"";
			}
			if (r[0]<start) start=r[0];
			if (r[0]+r[1]>end) end=r[0]+r[1];
		}
		var t="";
		for (var i=start;i<end;i++) t+=text[i];
		return [start,end-start,t];
	}

	var find=function(start,length) {
		for (var i=0;i<_ranges.length;i++) {
			var r=_ranges[i];
			if (r[0]===start && r[1]===length)return i;
		}
		return -1;
	}
	var add=function(start,len,text) {
		var text=text||"";

		var same=find(start,len);
		if (same>-1) {
			_ranges.splice(same,1);
			return ;
		}
		
		var overlap=removeOverlap(start,len);

		if (overlap.length) {
			overlap.push([start,len,text]);
			var combined=combine(overlap);
			_ranges.push( combined );
		} else {
			_ranges.push([start,len,text]);	
		}
		_ranges.sort(function(s1,s2){ //sort by start and len
			return (s1[0]==s2[0])?(s1[1]-s2[1]):(s1[0]-s2[0]);
		});
	}
	var get=function() {
		return _ranges;
	}
	var removeAll=function() {
		_ranges=[];
	}
	var remove=function(start,len,text) {
		var idx=find(start,len);
		if (idx>-1) {
			_ranges.splice(idx,1);
		}
	}
	var set=function(ranges) {
		removeAll();
		for (var i=0;i<ranges.length;i++) {
			var r=ranges[i];
			add(r[0],r[1],r[2]);
		}
	}
	textrange.add=add;
	textrange.get=get;
	textrange.removeAll=removeAll;
	textrange.remove=remove;
	textrange.set=set;
	textrange.find=find;

	return textrange;
}
var markupInRange=function(markups,ranges) {
	if (!ranges || !ranges.length) return [];
	if (typeof ranges[0]==="number") ranges=[ranges];
	if (ranges.length==0) return [];
	var out=[];
	for (var j=0;j<markups.length;j++) {
		var m=markups[j];
		for (var i=0;i<ranges.length;i++) {
			var r=ranges[i];
			if (m.s>=r[0] && m.s+m.l<=r[0]+r[1] && out.indexOf(m)===-1) {
				out.push(m);
			}
		};
	};
	return out;
}
module.exports={create:create, markupInRange:markupInRange };
},{}],"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\typedef.js":[function(require,module,exports){
var revision=require("./revision");
module.exports={"rev":revision};
},{"./revision":"C:\\ksana2015\\node_modules\\ksana-layer-react\\src\\revision\\index.js"}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\downloader.js":[function(require,module,exports){

var userCancel=false;
var files=[];
var totalDownloadByte=0;
var targetPath="";
var tempPath="";
var nfile=0;
var baseurl="";
var result="";
var downloading=false;
var startDownload=function(dbid,_baseurl,_files) { //return download id
	var fs     = require("fs");
	var path   = require("path");

	
	files=_files.split("\uffff");
	if (downloading) return false; //only one session
	userCancel=false;
	totalDownloadByte=0;
	nextFile();
	downloading=true;
	baseurl=_baseurl;
	if (baseurl[baseurl.length-1]!='/')baseurl+='/';
	targetPath=ksanagap.rootPath+dbid+'/';
	tempPath=ksanagap.rootPath+".tmp/";
	result="";
	return true;
}

var nextFile=function() {
	setTimeout(function(){
		if (nfile==files.length) {
			nfile++;
			endDownload();
		} else {
			downloadFile(nfile++);	
		}
	},100);
}

var downloadFile=function(nfile) {
	var url=baseurl+files[nfile];
	var tmpfilename=tempPath+files[nfile];
	var mkdirp = require("./mkdirp");
	var fs     = require("fs");
	var http   = require("http");

	mkdirp.sync(path.dirname(tmpfilename));
	var writeStream = fs.createWriteStream(tmpfilename);
	var datalength=0;
	var request = http.get(url, function(response) {
		response.on('data',function(chunk){
			writeStream.write(chunk);
			totalDownloadByte+=chunk.length;
			if (userCancel) {
				writeStream.end();
				setTimeout(function(){nextFile();},100);
			}
		});
		response.on("end",function() {
			writeStream.end();
			setTimeout(function(){nextFile();},100);
		});
	});
}

var cancelDownload=function() {
	userCancel=true;
	endDownload();
}
var verify=function() {
	return true;
}
var endDownload=function() {
	nfile=files.length+1;//stop
	result="cancelled";
	downloading=false;
	if (userCancel) return;
	var fs     = require("fs");
	var mkdirp = require("./mkdirp");

	for (var i=0;i<files.length;i++) {
		var targetfilename=targetPath+files[i];
		var tmpfilename   =tempPath+files[i];
		mkdirp.sync(path.dirname(targetfilename));
		fs.renameSync(tmpfilename,targetfilename);
	}
	if (verify()) {
		result="success";
	} else {
		result="error";
	}
}

var downloadedByte=function() {
	return totalDownloadByte;
}
var doneDownload=function() {
	if (nfile>files.length) return result;
	else return "";
}
var downloadingFile=function() {
	return nfile-1;
}

var downloader={startDownload:startDownload, downloadedByte:downloadedByte,
	downloadingFile:downloadingFile, cancelDownload:cancelDownload,doneDownload:doneDownload};
module.exports=downloader;
},{"./mkdirp":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\mkdirp.js","fs":false,"http":false,"path":false}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\html5fs.js":[function(require,module,exports){
/* emulate filesystem on html5 browser */
var get_head=function(url,field,cb){
	var xhr = new XMLHttpRequest();
	xhr.open("HEAD", url, true);
	xhr.onreadystatechange = function() {
			if (this.readyState == this.DONE) {
				cb(xhr.getResponseHeader(field));
			} else {
				if (this.status!==200&&this.status!==206) {
					cb("");
				}
			}
	};
	xhr.send();
}
var get_date=function(url,cb) {
	get_head(url,"Last-Modified",function(value){
		cb(value);
	});
}
var get_size=function(url, cb) {
	get_head(url,"Content-Length",function(value){
		cb(parseInt(value));
	});
};
var checkUpdate=function(url,fn,cb) {
	if (!url) {
		cb(false);
		return;
	}
	get_date(url,function(d){
		API.fs.root.getFile(fn, {create: false, exclusive: false}, function(fileEntry) {
			fileEntry.getMetadata(function(metadata){
				var localDate=Date.parse(metadata.modificationTime);
				var urlDate=Date.parse(d);
				cb(urlDate>localDate);
			});
		},function(){
			cb(false);
		});
	});
}
var download=function(url,fn,cb,statuscb,context) {
	 var totalsize=0,batches=null,written=0;
	 var fileEntry=0, fileWriter=0;
	 var createBatches=function(size) {
		var bytes=1024*1024, out=[];
		var b=Math.floor(size / bytes);
		var last=size %bytes;
		for (var i=0;i<=b;i++) {
			out.push(i*bytes);
		}
		out.push(b*bytes+last);
		return out;
	 }
	 var finish=function() {
		 rm(fn,function(){
				fileEntry.moveTo(fileEntry.filesystem.root, fn,function(){
					setTimeout( cb.bind(context,false) , 0) ;
				},function(e){
					console.log("failed",e)
				});
		 },this);
	 };
		var tempfn="temp.kdb";
		var batch=function(b) {
		var abort=false;
		var xhr = new XMLHttpRequest();
		var requesturl=url+"?"+Math.random();
		xhr.open('get', requesturl, true);
		xhr.setRequestHeader('Range', 'bytes='+batches[b]+'-'+(batches[b+1]-1));
		xhr.responseType = 'blob';
		xhr.addEventListener('load', function() {
			var blob=this.response;
			fileEntry.createWriter(function(fileWriter) {
				fileWriter.seek(fileWriter.length);
				fileWriter.write(blob);
				written+=blob.size;
				fileWriter.onwriteend = function(e) {
					if (statuscb) {
						abort=statuscb.apply(context,[ fileWriter.length / totalsize,totalsize ]);
						if (abort) setTimeout( cb.bind(context,false) , 0) ;
				 	}
					b++;
					if (!abort) {
						if (b<batches.length-1) setTimeout(batch.bind(context,b),0);
						else                    finish();
				 	}
			 	};
			}, console.error);
		},false);
		xhr.send();
	}

	get_size(url,function(size){
		totalsize=size;
		if (!size) {
			if (cb) cb.apply(context,[false]);
		} else {//ready to download
			rm(tempfn,function(){
				 batches=createBatches(size);
				 if (statuscb) statuscb.apply(context,[ 0, totalsize ]);
				 API.fs.root.getFile(tempfn, {create: 1, exclusive: false}, function(_fileEntry) {
							fileEntry=_fileEntry;
						batch(0);
				 });
			},this);
		}
	});
}

var readFile=function(filename,cb,context) {
	API.fs.root.getFile(filename, {create: false, exclusive: false},function(fileEntry) {
		fileEntry.file(function(file){
			var reader = new FileReader();
			reader.onloadend = function(e) {
				if (cb) cb.call(cb,this.result);
			};
			reader.readAsText(file,"utf8");
		});
	}, console.error);
}

function createDir(rootDirEntry, folders,  cb) {
  // Throw out './' or '/' and move on to prevent something like '/foo/.//bar'.
  if (folders[0] == '.' || folders[0] == '') {
    folders = folders.slice(1);
  }
  rootDirEntry.getDirectory(folders[0], {create: true}, function(dirEntry) {
    // Recursively add the new subfolder (if we still have another to create).
    if (folders.length) {
      createDir(dirEntry, folders.slice(1),cb);
    } else {
			cb();
		}
  }, cb);
};


var writeFile=function(filename,buf,cb,context){
	var write=function(fileEntry){
		fileEntry.createWriter(function(fileWriter) {
			fileWriter.write(buf);
			fileWriter.onwriteend = function(e) {
				if (cb) cb.apply(cb,[buf.byteLength]);
			};
		}, console.error);
	}

	var getFile=function(filename){
		API.fs.root.getFile(filename, {exclusive:true}, function(fileEntry) {
			write(fileEntry);
		}, function(){
				API.fs.root.getFile(filename, {create:true,exclusive:true}, function(fileEntry) {
					write(fileEntry);
				});

		});
	}
	var slash=filename.lastIndexOf("/");
	if (slash>-1) {
		createDir(API.fs.root, filename.substr(0,slash).split("/"),function(){
			getFile(filename);
		});
	} else {
		getFile(filename);
	}
}

var readdir=function(cb,context) {
	var dirReader = API.fs.root.createReader();
	var out=[],that=this;
	dirReader.readEntries(function(entries) {
		if (entries.length) {
			for (var i = 0, entry; entry = entries[i]; ++i) {
				if (entry.isFile) {
					out.push([entry.name,entry.toURL ? entry.toURL() : entry.toURI()]);
				}
			}
		}
		API.files=out;
		if (cb) cb.apply(context,[out]);
	}, function(){
		if (cb) cb.apply(context,[null]);
	});
}
var getFileURL=function(filename) {
	if (!API.files ) return null;
	var file= API.files.filter(function(f){return f[0]==filename});
	if (file.length) return file[0][1];
}
var rm=function(filename,cb,context) {
	var url=getFileURL(filename);
	if (url) rmURL(url,cb,context);
	else if (cb) cb.apply(context,[false]);
}

var rmURL=function(filename,cb,context) {
	webkitResolveLocalFileSystemURL(filename, function(fileEntry) {
		fileEntry.remove(function() {
			if (cb) cb.apply(context,[true]);
		}, console.error);
	},  function(e){
		if (cb) cb.apply(context,[false]);//no such file
	});
}
function errorHandler(e) {
	console.error('Error: ' +e.name+ " "+e.message);
}
var initfs=function(grantedBytes,cb,context) {
	webkitRequestFileSystem(PERSISTENT, grantedBytes,  function(fs) {
		API.fs=fs;
		API.quota=grantedBytes;
		readdir(function(){
			API.initialized=true;
			cb.apply(context,[grantedBytes,fs]);
		},context);
	}, errorHandler);
}
var init=function(quota,cb,context) {
	navigator.webkitPersistentStorage.requestQuota(quota,
			function(grantedBytes) {
				initfs(grantedBytes,cb,context);
		}, errorHandler
	);
}
var queryQuota=function(cb,context) {
	var that=this;
	navigator.webkitPersistentStorage.queryUsageAndQuota(
	 function(usage,quota){
			initfs(quota,function(){
				cb.apply(context,[usage,quota]);
			},context);
	});
}
var API={
	init:init
	,readdir:readdir
	,checkUpdate:checkUpdate
	,rm:rm
	,rmURL:rmURL
	,getFileURL:getFileURL
	,writeFile:writeFile
	,readFile:readFile
	,download:download
	,get_head:get_head
	,get_date:get_date
	,get_size:get_size
	,getDownloadSize:get_size
	,queryQuota:queryQuota
}
module.exports=API;

},{}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\ksanagap.js":[function(require,module,exports){
var appname="installer";
if (typeof ksana=="undefined") {
	window.ksana={platform:"chrome"};
	if (typeof process!=="undefined" && 
		process.versions && process.versions["node-webkit"]) {
		window.ksana.platform="node-webkit";
	}
}
var switchApp=function(path) {
	var fs=require("fs");
	path="../"+path;
	appname=path;
	document.location.href= path+"/index.html"; 
	process.chdir(path);
}
var downloader={};
var rootPath="";

var deleteApp=function(app) {
	console.error("not allow on PC, do it in File Explorer/ Finder");
}
var username=function() {
	return "";
}
var useremail=function() {
	return ""
}
var runtime_version=function() {
	return "1.4";
}

//copy from liveupdate
var jsonp=function(url,dbid,callback,context) {
  var script=document.getElementById("jsonp2");
  if (script) {
    script.parentNode.removeChild(script);
  }
  window.jsonp_handler=function(data) {
    if (typeof data=="object") {
      data.dbid=dbid;
      callback.apply(context,[data]);    
    }  
  }
  window.jsonp_error_handler=function() {
    console.error("url unreachable",url);
    callback.apply(context,[null]);
  }
  script=document.createElement('script');
  script.setAttribute('id', "jsonp2");
  script.setAttribute('onerror', "jsonp_error_handler()");
  url=url+'?'+(new Date().getTime());
  script.setAttribute('src', url);
  document.getElementsByTagName('head')[0].appendChild(script); 
}


var loadKsanajs=function(){

	if (typeof process!="undefined" && !process.browser) {
		var ksanajs=require("fs").readFileSync("./ksana.js","utf8").trim();
		downloader=require("./downloader");
		ksana.js=JSON.parse(ksanajs.substring(14,ksanajs.length-1));
		rootPath=process.cwd();
		rootPath=require("path").resolve(rootPath,"..").replace(/\\/g,"/")+'/';
		ksana.ready=true;
	} else{
		var url=window.location.origin+window.location.pathname.replace("index.html","")+"ksana.js";
		jsonp(url,appname,function(data){
			ksana.js=data;
			ksana.ready=true;
		});
	}
}

loadKsanajs();

var boot=function(appId,cb) {
	if (typeof appId=="function") {
		cb=appId;
		appId="unknownapp";
	}
	if (!ksana.js && ksana.platform=="node-webkit") {
		loadKsanajs();
	}
	ksana.appId=appId;
	var timer=setInterval(function(){
			if (ksana.ready){
				clearInterval(timer);
				cb();
			}
		});
}


var ksanagap={
	platform:"node-webkit",
	startDownload:downloader.startDownload,
	downloadedByte:downloader.downloadedByte,
	downloadingFile:downloader.downloadingFile,
	cancelDownload:downloader.cancelDownload,
	doneDownload:downloader.doneDownload,
	switchApp:switchApp,
	rootPath:rootPath,
	deleteApp: deleteApp,
	username:username, //not support on PC
	useremail:username,
	runtime_version:runtime_version,
	boot:boot
}
module.exports=ksanagap;
},{"./downloader":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\downloader.js","fs":false,"path":false}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\livereload.js":[function(require,module,exports){
var started=false;
var timer=null;
var bundledate=null;
var get_date=require("./html5fs").get_date;
var checkIfBundleUpdated=function() {
	get_date("bundle.js",function(date){
		if (bundledate &&bundledate!=date){
			location.reload();
		}
		bundledate=date;
	});
}
var livereload=function() {
	if (started) return;

	timer1=setInterval(function(){
		checkIfBundleUpdated();
	},2000);
	started=true;
}

module.exports=livereload;
},{"./html5fs":"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\html5fs.js"}],"C:\\ksana2015\\node_modules\\ksana2015-webruntime\\mkdirp.js":[function(require,module,exports){
function mkdirP (p, mode, f, made) {
     var path = nodeRequire('path');
     var fs = nodeRequire('fs');
	
    if (typeof mode === 'function' || mode === undefined) {
        f = mode;
        mode = 0x1FF & (~process.umask());
    }
    if (!made) made = null;

    var cb = f || function () {};
    if (typeof mode === 'string') mode = parseInt(mode, 8);
    p = path.resolve(p);

    fs.mkdir(p, mode, function (er) {
        if (!er) {
            made = made || p;
            return cb(null, made);
        }
        switch (er.code) {
            case 'ENOENT':
                mkdirP(path.dirname(p), mode, function (er, made) {
                    if (er) cb(er, made);
                    else mkdirP(p, mode, cb, made);
                });
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                fs.stat(p, function (er2, stat) {
                    // if the stat fails, then that's super weird.
                    // let the original error be the failure reason.
                    if (er2 || !stat.isDirectory()) cb(er, made)
                    else cb(null, made);
                });
                break;
        }
    });
}

mkdirP.sync = function sync (p, mode, made) {
    var path = nodeRequire('path');
    var fs = nodeRequire('fs');
    if (mode === undefined) {
        mode = 0x1FF & (~process.umask());
    }
    if (!made) made = null;

    if (typeof mode === 'string') mode = parseInt(mode, 8);
    p = path.resolve(p);

    try {
        fs.mkdirSync(p, mode);
        made = made || p;
    }
    catch (err0) {
        switch (err0.code) {
            case 'ENOENT' :
                made = sync(path.dirname(p), mode, made);
                sync(p, mode, made);
                break;

            // In the case of any other error, just see if there's a dir
            // there already.  If so, then hooray!  If not, then something
            // is borked.
            default:
                var stat;
                try {
                    stat = fs.statSync(p);
                }
                catch (err1) {
                    throw err0;
                }
                if (!stat.isDirectory()) throw err0;
                break;
        }
    }

    return made;
};

module.exports = mkdirP.mkdirp = mkdirP.mkdirP = mkdirP;

},{}],"C:\\ksana2015\\node_modules\\reflux\\index.js":[function(require,module,exports){
module.exports = require('./src');

},{"./src":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js"}],"C:\\ksana2015\\node_modules\\reflux\\node_modules\\eventemitter3\\index.js":[function(require,module,exports){
'use strict';

/**
 * Representation of a single EventEmitter function.
 *
 * @param {Function} fn Event handler to be called.
 * @param {Mixed} context Context for function execution.
 * @param {Boolean} once Only emit once
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal EventEmitter interface that is molded against the Node.js
 * EventEmitter interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() { /* Nothing to set */ }

/**
 * Holds the assigned EventEmitters by name.
 *
 * @type {Object}
 * @private
 */
EventEmitter.prototype._events = undefined;

/**
 * Return a list of assigned event listeners.
 *
 * @param {String} event The events that should be listed.
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  if (!this._events || !this._events[event]) return [];
  if (this._events[event].fn) return [this._events[event].fn];

  for (var i = 0, l = this._events[event].length, ee = new Array(l); i < l; i++) {
    ee[i] = this._events[event][i].fn;
  }

  return ee;
};

/**
 * Emit an event to all registered event listeners.
 *
 * @param {String} event The name of the event.
 * @returns {Boolean} Indication if we've emitted an event.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  if (!this._events || !this._events[event]) return false;

  var listeners = this._events[event]
    , len = arguments.length
    , args
    , i;

  if ('function' === typeof listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Register a new EventListener for the given event.
 *
 * @param {String} event Name of the event.
 * @param {Functon} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Add an EventListener that's only called once.
 *
 * @param {String} event Name of the event.
 * @param {Function} fn Callback function.
 * @param {Mixed} context The context of the function.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true);

  if (!this._events) this._events = {};
  if (!this._events[event]) this._events[event] = listener;
  else {
    if (!this._events[event].fn) this._events[event].push(listener);
    else this._events[event] = [
      this._events[event], listener
    ];
  }

  return this;
};

/**
 * Remove event listeners.
 *
 * @param {String} event The event we want to remove.
 * @param {Function} fn The listener that we need to find.
 * @param {Boolean} once Only remove once listeners.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, once) {
  if (!this._events || !this._events[event]) return this;

  var listeners = this._events[event]
    , events = [];

  if (fn) {
    if (listeners.fn && (listeners.fn !== fn || (once && !listeners.once))) {
      events.push(listeners);
    }
    if (!listeners.fn) for (var i = 0, length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || (once && !listeners[i].once)) {
        events.push(listeners[i]);
      }
    }
  }

  //
  // Reset the array, or remove it completely if we have no more listeners.
  //
  if (events.length) {
    this._events[event] = events.length === 1 ? events[0] : events;
  } else {
    delete this._events[event];
  }

  return this;
};

/**
 * Remove all listeners or only the listeners for the specified event.
 *
 * @param {String} event The event want to remove all listeners for.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  if (!this._events) return this;

  if (event) delete this._events[event];
  else this._events = {};

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the module.
//
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.EventEmitter2 = EventEmitter;
EventEmitter.EventEmitter3 = EventEmitter;

//
// Expose the module.
//
module.exports = EventEmitter;

},{}],"C:\\ksana2015\\node_modules\\reflux\\node_modules\\native-promise-only\\npo.js":[function(require,module,exports){
/*! Native Promise Only
    v0.7.6-a (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
!function(t,n,e){n[t]=n[t]||e(),"undefined"!=typeof module&&module.exports?module.exports=n[t]:"function"==typeof define&&define.amd&&define(function(){return n[t]})}("Promise","undefined"!=typeof global?global:this,function(){"use strict";function t(t,n){l.add(t,n),h||(h=y(l.drain))}function n(t){var n,e=typeof t;return null==t||"object"!=e&&"function"!=e||(n=t.then),"function"==typeof n?n:!1}function e(){for(var t=0;t<this.chain.length;t++)o(this,1===this.state?this.chain[t].success:this.chain[t].failure,this.chain[t]);this.chain.length=0}function o(t,e,o){var r,i;try{e===!1?o.reject(t.msg):(r=e===!0?t.msg:e.call(void 0,t.msg),r===o.promise?o.reject(TypeError("Promise-chain cycle")):(i=n(r))?i.call(r,o.resolve,o.reject):o.resolve(r))}catch(c){o.reject(c)}}function r(o){var c,u,a=this;if(!a.triggered){a.triggered=!0,a.def&&(a=a.def);try{(c=n(o))?(u=new f(a),c.call(o,function(){r.apply(u,arguments)},function(){i.apply(u,arguments)})):(a.msg=o,a.state=1,a.chain.length>0&&t(e,a))}catch(s){i.call(u||new f(a),s)}}}function i(n){var o=this;o.triggered||(o.triggered=!0,o.def&&(o=o.def),o.msg=n,o.state=2,o.chain.length>0&&t(e,o))}function c(t,n,e,o){for(var r=0;r<n.length;r++)!function(r){t.resolve(n[r]).then(function(t){e(r,t)},o)}(r)}function f(t){this.def=t,this.triggered=!1}function u(t){this.promise=t,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function a(n){if("function"!=typeof n)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new u(this);this.then=function(n,r){var i={success:"function"==typeof n?n:!0,failure:"function"==typeof r?r:!1};return i.promise=new this.constructor(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");i.resolve=t,i.reject=n}),o.chain.push(i),0!==o.state&&t(e,o),i.promise},this["catch"]=function(t){return this.then(void 0,t)};try{n.call(void 0,function(t){r.call(o,t)},function(t){i.call(o,t)})}catch(c){i.call(o,c)}}var s,h,l,p=Object.prototype.toString,y="undefined"!=typeof setImmediate?function(t){return setImmediate(t)}:setTimeout;try{Object.defineProperty({},"x",{}),s=function(t,n,e,o){return Object.defineProperty(t,n,{value:e,writable:!0,configurable:o!==!1})}}catch(d){s=function(t,n,e){return t[n]=e,t}}l=function(){function t(t,n){this.fn=t,this.self=n,this.next=void 0}var n,e,o;return{add:function(r,i){o=new t(r,i),e?e.next=o:n=o,e=o,o=void 0},drain:function(){var t=n;for(n=e=h=void 0;t;)t.fn.call(t.self),t=t.next}}}();var g=s({},"constructor",a,!1);return s(a,"prototype",g,!1),s(g,"__NPO__",0,!1),s(a,"resolve",function(t){var n=this;return t&&"object"==typeof t&&1===t.__NPO__?t:new n(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");n(t)})}),s(a,"reject",function(t){return new this(function(n,e){if("function"!=typeof n||"function"!=typeof e)throw TypeError("Not a function");e(t)})}),s(a,"all",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):0===t.length?n.resolve([]):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");var r=t.length,i=Array(r),f=0;c(n,t,function(t,n){i[t]=n,++f===r&&e(i)},o)})}),s(a,"race",function(t){var n=this;return"[object Array]"!=p.call(t)?n.reject(TypeError("Not an array")):new n(function(e,o){if("function"!=typeof e||"function"!=typeof o)throw TypeError("Not a function");c(n,t,function(t,n){e(n)},o)})}),a});

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\ActionMethods.js":[function(require,module,exports){
/**
 * A module of methods that you want to include in all actions.
 * This module is consumed by `createAction`.
 */
module.exports = {
};

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\Keep.js":[function(require,module,exports){
exports.createdStores = [];

exports.createdActions = [];

exports.reset = function() {
    while(exports.createdStores.length) {
        exports.createdStores.pop();
    }
    while(exports.createdActions.length) {
        exports.createdActions.pop();
    }
};

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMethods.js":[function(require,module,exports){
var _ = require('./utils'),
    maker = require('./joins').instanceJoinCreator;

/**
 * Extract child listenables from a parent from their
 * children property and return them in a keyed Object
 *
 * @param {Object} listenable The parent listenable
 */
var mapChildListenables = function(listenable) {
    var i = 0, children = {}, childName;
    for (;i < (listenable.children||[]).length; ++i) {
        childName = listenable.children[i];
        if(listenable[childName]){
            children[childName] = listenable[childName];
        }
    }
    return children;
};

/**
 * Make a flat dictionary of all listenables including their
 * possible children (recursively), concatenating names in camelCase.
 *
 * @param {Object} listenables The top-level listenables
 */
var flattenListenables = function(listenables) {
    var flattened = {};
    for(var key in listenables){
        var listenable = listenables[key];
        var childMap = mapChildListenables(listenable);

        // recursively flatten children
        var children = flattenListenables(childMap);

        // add the primary listenable and chilren
        flattened[key] = listenable;
        for(var childKey in children){
            var childListenable = children[childKey];
            flattened[key + _.capitalize(childKey)] = childListenable;
        }
    }

    return flattened;
};

/**
 * A module of methods related to listening.
 */
module.exports = {

    /**
     * An internal utility function used by `validateListening`
     *
     * @param {Action|Store} listenable The listenable we want to search for
     * @returns {Boolean} The result of a recursive search among `this.subscriptions`
     */
    hasListener: function(listenable) {
        var i = 0, j, listener, listenables;
        for (;i < (this.subscriptions||[]).length; ++i) {
            listenables = [].concat(this.subscriptions[i].listenable);
            for (j = 0; j < listenables.length; j++){
                listener = listenables[j];
                if (listener === listenable || listener.hasListener && listener.hasListener(listenable)) {
                    return true;
                }
            }
        }
        return false;
    },

    /**
     * A convenience method that listens to all listenables in the given object.
     *
     * @param {Object} listenables An object of listenables. Keys will be used as callback method names.
     */
    listenToMany: function(listenables){
        var allListenables = flattenListenables(listenables);
        for(var key in allListenables){
            var cbname = _.callbackName(key),
                localname = this[cbname] ? cbname : this[key] ? key : undefined;
            if (localname){
                this.listenTo(allListenables[key],localname,this[cbname+"Default"]||this[localname+"Default"]||localname);
            }
        }
    },

    /**
     * Checks if the current context can listen to the supplied listenable
     *
     * @param {Action|Store} listenable An Action or Store that should be
     *  listened to.
     * @returns {String|Undefined} An error message, or undefined if there was no problem.
     */
    validateListening: function(listenable){
        if (listenable === this) {
            return "Listener is not able to listen to itself";
        }
        if (!_.isFunction(listenable.listen)) {
            return listenable + " is missing a listen method";
        }
        if (listenable.hasListener && listenable.hasListener(this)) {
            return "Listener cannot listen to this listenable because of circular loop";
        }
    },

    /**
     * Sets up a subscription to the given listenable for the context object
     *
     * @param {Action|Store} listenable An Action or Store that should be
     *  listened to.
     * @param {Function|String} callback The callback to register as event handler
     * @param {Function|String} defaultCallback The callback to register as default handler
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is the object being listened to
     */
    listenTo: function(listenable, callback, defaultCallback) {
        var desub, unsubscriber, subscriptionobj, subs = this.subscriptions = this.subscriptions || [];
        _.throwIf(this.validateListening(listenable));
        this.fetchInitialState(listenable, defaultCallback);
        desub = listenable.listen(this[callback]||callback, this);
        unsubscriber = function() {
            var index = subs.indexOf(subscriptionobj);
            _.throwIf(index === -1,'Tried to remove listen already gone from subscriptions list!');
            subs.splice(index, 1);
            desub();
        };
        subscriptionobj = {
            stop: unsubscriber,
            listenable: listenable
        };
        subs.push(subscriptionobj);
        return subscriptionobj;
    },

    /**
     * Stops listening to a single listenable
     *
     * @param {Action|Store} listenable The action or store we no longer want to listen to
     * @returns {Boolean} True if a subscription was found and removed, otherwise false.
     */
    stopListeningTo: function(listenable){
        var sub, i = 0, subs = this.subscriptions || [];
        for(;i < subs.length; i++){
            sub = subs[i];
            if (sub.listenable === listenable){
                sub.stop();
                _.throwIf(subs.indexOf(sub)!==-1,'Failed to remove listen from subscriptions list!');
                return true;
            }
        }
        return false;
    },

    /**
     * Stops all subscriptions and empties subscriptions array
     */
    stopListeningToAll: function(){
        var remaining, subs = this.subscriptions || [];
        while((remaining=subs.length)){
            subs[0].stop();
            _.throwIf(subs.length!==remaining-1,'Failed to remove listen from subscriptions list!');
        }
    },

    /**
     * Used in `listenTo`. Fetches initial data from a publisher if it has a `getInitialState` method.
     * @param {Action|Store} listenable The publisher we want to get initial state from
     * @param {Function|String} defaultCallback The method to receive the data
     */
    fetchInitialState: function (listenable, defaultCallback) {
        defaultCallback = (defaultCallback && this[defaultCallback]) || defaultCallback;
        var me = this;
        if (_.isFunction(defaultCallback) && _.isFunction(listenable.getInitialState)) {
            var data = listenable.getInitialState();
            if (data && _.isFunction(data.then)) {
                data.then(function() {
                    defaultCallback.apply(me, arguments);
                });
            } else {
                defaultCallback.call(this, data);
            }
        }
    },

    /**
     * The callback will be called once all listenables have triggered at least once.
     * It will be invoked with the last emission from each listenable.
     * @param {...Publishers} publishers Publishers that should be tracked.
     * @param {Function|String} callback The method to call when all publishers have emitted
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
     */
    joinTrailing: maker("last"),

    /**
     * The callback will be called once all listenables have triggered at least once.
     * It will be invoked with the first emission from each listenable.
     * @param {...Publishers} publishers Publishers that should be tracked.
     * @param {Function|String} callback The method to call when all publishers have emitted
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
     */
    joinLeading: maker("first"),

    /**
     * The callback will be called once all listenables have triggered at least once.
     * It will be invoked with all emission from each listenable.
     * @param {...Publishers} publishers Publishers that should be tracked.
     * @param {Function|String} callback The method to call when all publishers have emitted
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
     */
    joinConcat: maker("all"),

    /**
     * The callback will be called once all listenables have triggered.
     * If a callback triggers twice before that happens, an error is thrown.
     * @param {...Publishers} publishers Publishers that should be tracked.
     * @param {Function|String} callback The method to call when all publishers have emitted
     * @returns {Object} A subscription obj where `stop` is an unsub function and `listenable` is an array of listenables
     */
    joinStrict: maker("strict")
};

},{"./joins":"C:\\ksana2015\\node_modules\\reflux\\src\\joins.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMixin.js":[function(require,module,exports){
var _ = require('./utils'),
    ListenerMethods = require('./ListenerMethods');

/**
 * A module meant to be consumed as a mixin by a React component. Supplies the methods from
 * `ListenerMethods` mixin and takes care of teardown of subscriptions.
 * Note that if you're using the `connect` mixin you don't need this mixin, as connect will
 * import everything this mixin contains!
 */
module.exports = _.extend({

    /**
     * Cleans up all listener previously registered.
     */
    componentWillUnmount: ListenerMethods.stopListeningToAll

}, ListenerMethods);

},{"./ListenerMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMethods.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\PublisherMethods.js":[function(require,module,exports){
var _ = require('./utils');

/**
 * A module of methods for object that you want to be able to listen to.
 * This module is consumed by `createStore` and `createAction`
 */
module.exports = {

    /**
     * Hook used by the publisher that is invoked before emitting
     * and before `shouldEmit`. The arguments are the ones that the action
     * is invoked with. If this function returns something other than
     * undefined, that will be passed on as arguments for shouldEmit and
     * emission.
     */
    preEmit: function() {},

    /**
     * Hook used by the publisher after `preEmit` to determine if the
     * event should be emitted with given arguments. This may be overridden
     * in your application, default implementation always returns true.
     *
     * @returns {Boolean} true if event should be emitted
     */
    shouldEmit: function() { return true; },

    /**
     * Subscribes the given callback for action triggered
     *
     * @param {Function} callback The callback to register as event handler
     * @param {Mixed} [optional] bindContext The context to bind the callback with
     * @returns {Function} Callback that unsubscribes the registered event handler
     */
    listen: function(callback, bindContext) {
        bindContext = bindContext || this;
        var eventHandler = function(args) {
            if (aborted){
                return;
            }
            callback.apply(bindContext, args);
        }, me = this, aborted = false;
        this.emitter.addListener(this.eventLabel, eventHandler);
        return function() {
            aborted = true;
            me.emitter.removeListener(me.eventLabel, eventHandler);
        };
    },

    /**
     * Attach handlers to promise that trigger the completed and failed
     * child publishers, if available.
     *
     * @param {Object} The promise to attach to
     */
    promise: function(promise) {
        var me = this;

        var canHandlePromise =
            this.children.indexOf('completed') >= 0 &&
            this.children.indexOf('failed') >= 0;

        if (!canHandlePromise){
            throw new Error('Publisher must have "completed" and "failed" child publishers');
        }

        promise.then(function(response) {
            return me.completed(response);
        }, function(error) {
            return me.failed(error);
        });
    },

    /**
     * Subscribes the given callback for action triggered, which should
     * return a promise that in turn is passed to `this.promise`
     *
     * @param {Function} callback The callback to register as event handler
     */
    listenAndPromise: function(callback, bindContext) {
        var me = this;
        bindContext = bindContext || this;
        this.willCallPromise = (this.willCallPromise || 0) + 1;

        var removeListen = this.listen(function() {

            if (!callback) {
                throw new Error('Expected a function returning a promise but got ' + callback);
            }

            var args = arguments,
                promise = callback.apply(bindContext, args);
            return me.promise.call(me, promise);
        }, bindContext);

        return function () {
          me.willCallPromise--;
          removeListen.call(me);
        };

    },

    /**
     * Publishes an event using `this.emitter` (if `shouldEmit` agrees)
     */
    trigger: function() {
        var args = arguments,
            pre = this.preEmit.apply(this, args);
        args = pre === undefined ? args : _.isArguments(pre) ? pre : [].concat(pre);
        if (this.shouldEmit.apply(this, args)) {
            this.emitter.emit(this.eventLabel, args);
        }
    },

    /**
     * Tries to publish the event on the next tick
     */
    triggerAsync: function(){
        var args = arguments,me = this;
        _.nextTick(function() {
            me.trigger.apply(me, args);
        });
    },

    /**
     * Returns a Promise for the triggered action
     *
     * @return {Promise}
     *   Resolved by completed child action.
     *   Rejected by failed child action.
     *   If listenAndPromise'd, then promise associated to this trigger.
     *   Otherwise, the promise is for next child action completion.
     */
    triggerPromise: function(){
        var me = this;
        var args = arguments;

        var canHandlePromise =
            this.children.indexOf('completed') >= 0 &&
            this.children.indexOf('failed') >= 0;

        var promise = _.createPromise(function(resolve, reject) {
            // If `listenAndPromise` is listening
            // patch `promise` w/ context-loaded resolve/reject
            if (me.willCallPromise) {
                _.nextTick(function() {
                    var old_promise_method = me.promise;
                    me.promise = function (promise) {
                        promise.then(resolve, reject);
                        // Back to your regularly schedule programming.
                        me.promise = old_promise_method;
                        return me.promise.apply(me, arguments);
                    };
                    me.trigger.apply(me, args);
                });
                return;
            }

            if (canHandlePromise) {
                var removeSuccess = me.completed.listen(function(args) {
                    removeSuccess();
                    removeFailed();
                    resolve(args);
                });

                var removeFailed = me.failed.listen(function(args) {
                    removeSuccess();
                    removeFailed();
                    reject(args);
                });
            }

            me.triggerAsync.apply(me, args);

            if (!canHandlePromise) {
                resolve();
            }
        });

        return promise;
    }
};

},{"./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\StoreMethods.js":[function(require,module,exports){
/**
 * A module of methods that you want to include in all stores.
 * This module is consumed by `createStore`.
 */
module.exports = {
};

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\bindMethods.js":[function(require,module,exports){
module.exports = function(store, definition) {
  for (var name in definition) {
    if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(definition, name);

        if (!propertyDescriptor.value || typeof propertyDescriptor.value !== 'function' || !definition.hasOwnProperty(name)) {
            continue;
        }

        store[name] = definition[name].bind(store);
    } else {
        var property = definition[name];

        if (typeof property !== 'function' || !definition.hasOwnProperty(name)) {
            continue;
        }

        store[name] = property.bind(store);
    }
  }

  return store;
};

},{}],"C:\\ksana2015\\node_modules\\reflux\\src\\connect.js":[function(require,module,exports){
var Reflux = require('./index'),
    _ = require('./utils');

module.exports = function(listenable,key){
    return {
        getInitialState: function(){
            if (!_.isFunction(listenable.getInitialState)) {
                return {};
            } else if (key === undefined) {
                return listenable.getInitialState();
            } else {
                return _.object([key],[listenable.getInitialState()]);
            }
        },
        componentDidMount: function(){
            _.extend(this,Reflux.ListenerMethods);
            var me = this, cb = (key === undefined ? this.setState : function(v){me.setState(_.object([key],[v]));});
            this.listenTo(listenable,cb);
        },
        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
    };
};

},{"./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\connectFilter.js":[function(require,module,exports){
var Reflux = require('./index'),
  _ = require('./utils');

module.exports = function(listenable, key, filterFunc) {
    filterFunc = _.isFunction(key) ? key : filterFunc;
    return {
        getInitialState: function() {
            if (!_.isFunction(listenable.getInitialState)) {
                return {};
            } else if (_.isFunction(key)) {
                return filterFunc.call(this, listenable.getInitialState());
            } else {
                // Filter initial payload from store.
                var result = filterFunc.call(this, listenable.getInitialState());
                if (result) {
                  return _.object([key], [result]);
                } else {
                  return {};
                }
            }
        },
        componentDidMount: function() {
            _.extend(this, Reflux.ListenerMethods);
            var me = this;
            var cb = function(value) {
                if (_.isFunction(key)) {
                    me.setState(filterFunc.call(me, value));
                } else {
                    var result = filterFunc.call(me, value);
                    me.setState(_.object([key], [result]));
                }
            };

            this.listenTo(listenable, cb);
        },
        componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
    };
};


},{"./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\createAction.js":[function(require,module,exports){
var _ = require('./utils'),
    Reflux = require('./index'),
    Keep = require('./Keep'),
    allowed = {preEmit:1,shouldEmit:1};

/**
 * Creates an action functor object. It is mixed in with functions
 * from the `PublisherMethods` mixin. `preEmit` and `shouldEmit` may
 * be overridden in the definition object.
 *
 * @param {Object} definition The action object definition
 */
var createAction = function(definition) {

    definition = definition || {};
    if (!_.isObject(definition)){
        definition = {actionName: definition};
    }

    for(var a in Reflux.ActionMethods){
        if (!allowed[a] && Reflux.PublisherMethods[a]) {
            throw new Error("Cannot override API method " + a +
                " in Reflux.ActionMethods. Use another method name or override it on Reflux.PublisherMethods instead."
            );
        }
    }

    for(var d in definition){
        if (!allowed[d] && Reflux.PublisherMethods[d]) {
            throw new Error("Cannot override API method " + d +
                " in action creation. Use another method name or override it on Reflux.PublisherMethods instead."
            );
        }
    }

    definition.children = definition.children || [];
    if (definition.asyncResult){
        definition.children = definition.children.concat(["completed","failed"]);
    }

    var i = 0, childActions = {};
    for (; i < definition.children.length; i++) {
        var name = definition.children[i];
        childActions[name] = createAction(name);
    }

    var context = _.extend({
        eventLabel: "action",
        emitter: new _.EventEmitter(),
        _isAction: true
    }, Reflux.PublisherMethods, Reflux.ActionMethods, definition);

    var functor = function() {
        return functor[functor.sync?"trigger":"triggerPromise"].apply(functor, arguments);
    };

    _.extend(functor,childActions,context);

    Keep.createdActions.push(functor);

    return functor;

};

module.exports = createAction;

},{"./Keep":"C:\\ksana2015\\node_modules\\reflux\\src\\Keep.js","./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\createStore.js":[function(require,module,exports){
var _ = require('./utils'),
    Reflux = require('./index'),
    Keep = require('./Keep'),
    mixer = require('./mixer'),
    allowed = {preEmit:1,shouldEmit:1},
    bindMethods = require('./bindMethods');

/**
 * Creates an event emitting Data Store. It is mixed in with functions
 * from the `ListenerMethods` and `PublisherMethods` mixins. `preEmit`
 * and `shouldEmit` may be overridden in the definition object.
 *
 * @param {Object} definition The data store object definition
 * @returns {Store} A data store instance
 */
module.exports = function(definition) {

    definition = definition || {};

    for(var a in Reflux.StoreMethods){
        if (!allowed[a] && (Reflux.PublisherMethods[a] || Reflux.ListenerMethods[a])){
            throw new Error("Cannot override API method " + a +
                " in Reflux.StoreMethods. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
            );
        }
    }

    for(var d in definition){
        if (!allowed[d] && (Reflux.PublisherMethods[d] || Reflux.ListenerMethods[d])){
            throw new Error("Cannot override API method " + d +
                " in store creation. Use another method name or override it on Reflux.PublisherMethods / Reflux.ListenerMethods instead."
            );
        }
    }

    definition = mixer(definition);

    function Store() {
        var i=0, arr;
        this.subscriptions = [];
        this.emitter = new _.EventEmitter();
        this.eventLabel = "change";
        bindMethods(this, definition);
        if (this.init && _.isFunction(this.init)) {
            this.init();
        }
        if (this.listenables){
            arr = [].concat(this.listenables);
            for(;i < arr.length;i++){
                this.listenToMany(arr[i]);
            }
        }
    }

    _.extend(Store.prototype, Reflux.ListenerMethods, Reflux.PublisherMethods, Reflux.StoreMethods, definition);

    var store = new Store();
    Keep.createdStores.push(store);

    return store;
};

},{"./Keep":"C:\\ksana2015\\node_modules\\reflux\\src\\Keep.js","./bindMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\bindMethods.js","./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js","./mixer":"C:\\ksana2015\\node_modules\\reflux\\src\\mixer.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\index.js":[function(require,module,exports){
exports.ActionMethods = require('./ActionMethods');

exports.ListenerMethods = require('./ListenerMethods');

exports.PublisherMethods = require('./PublisherMethods');

exports.StoreMethods = require('./StoreMethods');

exports.createAction = require('./createAction');

exports.createStore = require('./createStore');

exports.connect = require('./connect');

exports.connectFilter = require('./connectFilter');

exports.ListenerMixin = require('./ListenerMixin');

exports.listenTo = require('./listenTo');

exports.listenToMany = require('./listenToMany');


var maker = require('./joins').staticJoinCreator;

exports.joinTrailing = exports.all = maker("last"); // Reflux.all alias for backward compatibility

exports.joinLeading = maker("first");

exports.joinStrict = maker("strict");

exports.joinConcat = maker("all");

var _ = require('./utils');

exports.EventEmitter = _.EventEmitter;

exports.Promise = _.Promise;

/**
 * Convenience function for creating a set of actions
 *
 * @param definitions the definitions for the actions to be created
 * @returns an object with actions of corresponding action names
 */
exports.createActions = function(definitions) {
    var actions = {};
    for (var k in definitions){
        if (definitions.hasOwnProperty(k)) {
            var val = definitions[k],
                actionName = _.isObject(val) ? k : val;

            actions[actionName] = exports.createAction(val);
        }
    }
    return actions;
};

/**
 * Sets the eventmitter that Reflux uses
 */
exports.setEventEmitter = function(ctx) {
    var _ = require('./utils');
    exports.EventEmitter = _.EventEmitter = ctx;
};


/**
 * Sets the Promise library that Reflux uses
 */
exports.setPromise = function(ctx) {
    var _ = require('./utils');
    exports.Promise = _.Promise = ctx;
};


/**
 * Sets the Promise factory that creates new promises
 * @param {Function} factory has the signature `function(resolver) { return [new Promise]; }`
 */
exports.setPromiseFactory = function(factory) {
    var _ = require('./utils');
    _.createPromise = factory;
};


/**
 * Sets the method used for deferring actions and stores
 */
exports.nextTick = function(nextTick) {
    var _ = require('./utils');
    _.nextTick = nextTick;
};

/**
 * Provides the set of created actions and stores for introspection
 */
exports.__keep = require('./Keep');

/**
 * Warn if Function.prototype.bind not available
 */
if (!Function.prototype.bind) {
  console.error(
    'Function.prototype.bind not available. ' +
    'ES5 shim required. ' +
    'https://github.com/spoike/refluxjs#es5'
  );
}

},{"./ActionMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\ActionMethods.js","./Keep":"C:\\ksana2015\\node_modules\\reflux\\src\\Keep.js","./ListenerMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMethods.js","./ListenerMixin":"C:\\ksana2015\\node_modules\\reflux\\src\\ListenerMixin.js","./PublisherMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\PublisherMethods.js","./StoreMethods":"C:\\ksana2015\\node_modules\\reflux\\src\\StoreMethods.js","./connect":"C:\\ksana2015\\node_modules\\reflux\\src\\connect.js","./connectFilter":"C:\\ksana2015\\node_modules\\reflux\\src\\connectFilter.js","./createAction":"C:\\ksana2015\\node_modules\\reflux\\src\\createAction.js","./createStore":"C:\\ksana2015\\node_modules\\reflux\\src\\createStore.js","./joins":"C:\\ksana2015\\node_modules\\reflux\\src\\joins.js","./listenTo":"C:\\ksana2015\\node_modules\\reflux\\src\\listenTo.js","./listenToMany":"C:\\ksana2015\\node_modules\\reflux\\src\\listenToMany.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\joins.js":[function(require,module,exports){
/**
 * Internal module used to create static and instance join methods
 */

var slice = Array.prototype.slice,
    _ = require("./utils"),
    createStore = require("./createStore"),
    strategyMethodNames = {
        strict: "joinStrict",
        first: "joinLeading",
        last: "joinTrailing",
        all: "joinConcat"
    };

/**
 * Used in `index.js` to create the static join methods
 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
 * @returns {Function} A static function which returns a store with a join listen on the given listenables using the given strategy
 */
exports.staticJoinCreator = function(strategy){
    return function(/* listenables... */) {
        var listenables = slice.call(arguments);
        return createStore({
            init: function(){
                this[strategyMethodNames[strategy]].apply(this,listenables.concat("triggerAsync"));
            }
        });
    };
};

/**
 * Used in `ListenerMethods.js` to create the instance join methods
 * @param {String} strategy Which strategy to use when tracking listenable trigger arguments
 * @returns {Function} An instance method which sets up a join listen on the given listenables using the given strategy
 */
exports.instanceJoinCreator = function(strategy){
    return function(/* listenables..., callback*/){
        _.throwIf(arguments.length < 3,'Cannot create a join with less than 2 listenables!');
        var listenables = slice.call(arguments),
            callback = listenables.pop(),
            numberOfListenables = listenables.length,
            join = {
                numberOfListenables: numberOfListenables,
                callback: this[callback]||callback,
                listener: this,
                strategy: strategy
            }, i, cancels = [], subobj;
        for (i = 0; i < numberOfListenables; i++) {
            _.throwIf(this.validateListening(listenables[i]));
        }
        for (i = 0; i < numberOfListenables; i++) {
            cancels.push(listenables[i].listen(newListener(i,join),this));
        }
        reset(join);
        subobj = {listenable: listenables};
        subobj.stop = makeStopper(subobj,cancels,this);
        this.subscriptions = (this.subscriptions || []).concat(subobj);
        return subobj;
    };
};

// ---- internal join functions ----

function makeStopper(subobj,cancels,context){
    return function() {
        var i, subs = context.subscriptions,
            index = (subs ? subs.indexOf(subobj) : -1);
        _.throwIf(index === -1,'Tried to remove join already gone from subscriptions list!');
        for(i=0;i < cancels.length; i++){
            cancels[i]();
        }
        subs.splice(index, 1);
    };
}

function reset(join) {
    join.listenablesEmitted = new Array(join.numberOfListenables);
    join.args = new Array(join.numberOfListenables);
}

function newListener(i,join) {
    return function() {
        var callargs = slice.call(arguments);
        if (join.listenablesEmitted[i]){
            switch(join.strategy){
                case "strict": throw new Error("Strict join failed because listener triggered twice.");
                case "last": join.args[i] = callargs; break;
                case "all": join.args[i].push(callargs);
            }
        } else {
            join.listenablesEmitted[i] = true;
            join.args[i] = (join.strategy==="all"?[callargs]:callargs);
        }
        emitIfAllListenablesEmitted(join);
    };
}

function emitIfAllListenablesEmitted(join) {
    for (var i = 0; i < join.numberOfListenables; i++) {
        if (!join.listenablesEmitted[i]) {
            return;
        }
    }
    join.callback.apply(join.listener,join.args);
    reset(join);
}

},{"./createStore":"C:\\ksana2015\\node_modules\\reflux\\src\\createStore.js","./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\listenTo.js":[function(require,module,exports){
var Reflux = require('./index');


/**
 * A mixin factory for a React component. Meant as a more convenient way of using the `ListenerMixin`,
 * without having to manually set listeners in the `componentDidMount` method.
 *
 * @param {Action|Store} listenable An Action or Store that should be
 *  listened to.
 * @param {Function|String} callback The callback to register as event handler
 * @param {Function|String} defaultCallback The callback to register as default handler
 * @returns {Object} An object to be used as a mixin, which sets up the listener for the given listenable.
 */
module.exports = function(listenable,callback,initial){
    return {
        /**
         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
         * and then make the call to `listenTo` with the arguments provided to the factory function
         */
        componentDidMount: function() {
            for(var m in Reflux.ListenerMethods){
                if (this[m] !== Reflux.ListenerMethods[m]){
                    if (this[m]){
                        throw "Can't have other property '"+m+"' when using Reflux.listenTo!";
                    }
                    this[m] = Reflux.ListenerMethods[m];
                }
            }
            this.listenTo(listenable,callback,initial);
        },
        /**
         * Cleans up all listener previously registered.
         */
        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
    };
};

},{"./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\listenToMany.js":[function(require,module,exports){
var Reflux = require('./index');

/**
 * A mixin factory for a React component. Meant as a more convenient way of using the `listenerMixin`,
 * without having to manually set listeners in the `componentDidMount` method. This version is used
 * to automatically set up a `listenToMany` call.
 *
 * @param {Object} listenables An object of listenables
 * @returns {Object} An object to be used as a mixin, which sets up the listeners for the given listenables.
 */
module.exports = function(listenables){
    return {
        /**
         * Set up the mixin before the initial rendering occurs. Import methods from `ListenerMethods`
         * and then make the call to `listenTo` with the arguments provided to the factory function
         */
        componentDidMount: function() {
            for(var m in Reflux.ListenerMethods){
                if (this[m] !== Reflux.ListenerMethods[m]){
                    if (this[m]){
                        throw "Can't have other property '"+m+"' when using Reflux.listenToMany!";
                    }
                    this[m] = Reflux.ListenerMethods[m];
                }
            }
            this.listenToMany(listenables);
        },
        /**
         * Cleans up all listener previously registered.
         */
        componentWillUnmount: Reflux.ListenerMethods.stopListeningToAll
    };
};

},{"./index":"C:\\ksana2015\\node_modules\\reflux\\src\\index.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\mixer.js":[function(require,module,exports){
var _ = require('./utils');

module.exports = function mix(def) {
    var composed = {
        init: [],
        preEmit: [],
        shouldEmit: []
    };

    var updated = (function mixDef(mixin) {
        var mixed = {};
        if (mixin.mixins) {
            mixin.mixins.forEach(function (subMixin) {
                _.extend(mixed, mixDef(subMixin));
            });
        }
        _.extend(mixed, mixin);
        Object.keys(composed).forEach(function (composable) {
            if (mixin.hasOwnProperty(composable)) {
                composed[composable].push(mixin[composable]);
            }
        });
        return mixed;
    }(def));

    if (composed.init.length > 1) {
        updated.init = function () {
            var args = arguments;
            composed.init.forEach(function (init) {
                init.apply(this, args);
            }, this);
        };
    }
    if (composed.preEmit.length > 1) {
        updated.preEmit = function () {
            return composed.preEmit.reduce(function (args, preEmit) {
                var newValue = preEmit.apply(this, args);
                return newValue === undefined ? args : [newValue];
            }.bind(this), arguments);
        };
    }
    if (composed.shouldEmit.length > 1) {
        updated.shouldEmit = function () {
            var args = arguments;
            return !composed.shouldEmit.some(function (shouldEmit) {
                return !shouldEmit.apply(this, args);
            }, this);
        };
    }
    Object.keys(composed).forEach(function (composable) {
        if (composed[composable].length === 1) {
            updated[composable] = composed[composable][0];
        }
    });

    return updated;
};

},{"./utils":"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js"}],"C:\\ksana2015\\node_modules\\reflux\\src\\utils.js":[function(require,module,exports){
/*
 * isObject, extend, isFunction, isArguments are taken from undescore/lodash in
 * order to remove the dependency
 */
var isObject = exports.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
};

exports.extend = function(obj) {
    if (!isObject(obj)) {
        return obj;
    }
    var source, prop;
    for (var i = 1, length = arguments.length; i < length; i++) {
        source = arguments[i];
        for (prop in source) {
            if (Object.getOwnPropertyDescriptor && Object.defineProperty) {
                var propertyDescriptor = Object.getOwnPropertyDescriptor(source, prop);
                Object.defineProperty(obj, prop, propertyDescriptor);
            } else {
                obj[prop] = source[prop];
            }
        }
    }
    return obj;
};

exports.isFunction = function(value) {
    return typeof value === 'function';
};

exports.EventEmitter = require('eventemitter3');

exports.nextTick = function(callback) {
    setTimeout(callback, 0);
};

exports.capitalize = function(string){
    return string.charAt(0).toUpperCase()+string.slice(1);
};

exports.callbackName = function(string){
    return "on"+exports.capitalize(string);
};

exports.object = function(keys,vals){
    var o={}, i=0;
    for(;i<keys.length;i++){
        o[keys[i]] = vals[i];
    }
    return o;
};

exports.Promise = require("native-promise-only");

exports.createPromise = function(resolver) {
    return new exports.Promise(resolver);
};

exports.isArguments = function(value) {
    return typeof value === 'object' && ('callee' in value) && typeof value.length === 'number';
};

exports.throwIf = function(val,msg){
    if (val){
        throw Error(msg||val);
    }
};

},{"eventemitter3":"C:\\ksana2015\\node_modules\\reflux\\node_modules\\eventemitter3\\index.js","native-promise-only":"C:\\ksana2015\\node_modules\\reflux\\node_modules\\native-promise-only\\npo.js"}]},{},["C:\\ksana2015\\correspondence\\index.js"])
//# sourceMappingURL=bundle.js.map
