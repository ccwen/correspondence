var React=require("react");
var Reflux=require("reflux");
var E=React.createElement;
var bs=require("react-bootstrap");
var action_link=require("./actions/link");
var SegNav=require("ksana2015-segnav");
var action_sourcetext=require("./actions/sourcetext");
var action_selection=require("./actions/selection");
var store_sourcetext=require("./stores/sourcetext");
var LoginBox=require("./views/loginbox");
var segs=store_sourcetext.segments();
var store_selection=require("./stores/selection");
var styles={
	controls:{fontSize:"150%"}
}
var Controls=React.createClass({
	startSeg:"10-5"
	,mixins:[Reflux.listenTo(store_selection,"onSelectionData")]
	,onSelectionData:function(sels,markupkey) {
		if (markupkey) this.setState({editing:markupkey});
		else this.forceUpdate();
	}
	,getInitialState:function() {
		return {seg:"10-5",editing:null}
	}
  ,addLink:function() {
		action_link.set(this.state.seg);
		action_selection.clear();		
	}
	,changeLink:function() {
		if (!this.state.editing) return;
		action_link.set(this.state.seg,this.state.editing);
		this.cancelEdit();
	}
	,deleteLink:function(){
		if (!this.state.editing) return;
		action_link.remove(this.state.seg,this.state.editing);
		this.cancelEdit();
	}
	,cancelEdit:function() {
		action_link.cancelEdit();
		action_selection.clear();
		this.setState({editing:null});
	}
	,onGoSegment:function(segnow) {
		this.setState({seg:segnow});
		action_sourcetext.fetch(segnow);
	}
	,componentDidMount:function() {
		action_sourcetext.fetch(this.state.seg);
	}
	,renderAction:function() {
		if (this.state.editing) {
			return [
				E(bs.Button,{bsStyle:"warning",onClick:this.changeLink},"Change")
				, E(bs.Button,{bsStyle:"danger",onClick:this.deleteLink},"Delete")
				, E(bs.Button,{onClick:this.cancelEdit},"Cancel")
			]
		} else {
			if (!store_selection.isEmpty()) {
				return E(bs.Button,{bsStyle:"primary",onClick:this.addLink},"Add Link");	
			}			
		}
	}
	,render:function() {
		return E("div",{style:styles.controls}
				,E(SegNav,{segs:segs,segpat:".([0-9]+-[0-9]+)",value:this.state.seg,onGoSegment:this.onGoSegment})
				,E("span")
      	, this.renderAction()
      	,E("span",{className:"pull-right"},E(LoginBox))
     );
	}
});

module.exports=Controls;