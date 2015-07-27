var React=require("react/addons");
var Reflux=require("reflux");
var E=React.createElement;
var store=require("../stores/user");
var action=require("../actions/user");
var loginbuttonstyle={verticalAlign: "middle",cursor:"pointer"};

var LoginBox=React.createClass({
  mixins:[React.addons.PureRender,Reflux.ListenerMixin]
  ,getInitialState: function () {
    var auth=store.getAuth();
    this.fetchAvatar(auth);
    return {auth:auth,photourl:""};
  }
  ,componentDidMount:function(){
     this.listenTo(store, this.onUserChange);
  }
  ,signOut:function() {
    action.logout();
  }
  ,googleSignIn:function() {
    action.login();
  }
  ,onUserChange:function(auth) {
    this.fetchAvatar(auth);
    this.setState({auth:auth});
  }
  ,fetchAvatar:function(auth) {
    if (!auth || !auth.uid) return;
    var that=this;
    var googleuid=auth.uid.substr(7);
    var apiurl="https://picasaweb.google.com/data/entry/api/user/"+googleuid+"?alt=json";
    fetch(apiurl).then(function(res){
      if ( res.status==200)  {
        var reader=res.body.getReader();
        reader.read().then(function(data){
          var json=JSON.parse(String.fromCharCode.apply(null,data.value));
          that.setState({photourl:json.entry.gphoto$thumbnail.$t});
        });
      }
    });
  }
  ,renderSignin:function() {
    return ( <p style={{textAlign: "center"}}><img style={loginbuttonstyle}src="img/google-sign-in.png" onClick={this.googleSignIn}></img></p> );
  }
  ,renderUser:function() {
    return (<div style={{textAlign:"center"}}>
        <span style={{fontSize:"60%"}}>{this.state.auth.google.displayName}</span>
        <img style={{borderRadius:"50%"}} src={this.state.photourl}/>
        <button onClick={this.signOut}>Sign Out</button>
      </div>
      );
  }
  ,render:function() {
     return (this.state.auth && this.state.auth.google)?this.renderUser():this.renderSignin();
  }
})

module.exports=LoginBox;