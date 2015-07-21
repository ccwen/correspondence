var React=require("react");
var data=require("./mockdata");
var Translations=require("./views/translations");
var Controls=require("./controls");
var Maincomponent = React.createClass({
  render: function() {
    return <div>
    	<Controls/>
      <Translations data={data} uti="10.5"/>
    </div>;
  }
});
module.exports=Maincomponent;