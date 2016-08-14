/*eslint-disable strict */ //Disabling check because we cant run strict mode. Need global vars


var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');
var toastr = require('toastr');
var _ = require('lodash');

// Flux
var ChatActions = require('../flux/actions/chatActions');
var ChatStore = require('../flux/store/chatStore');

// JSX files
var Header = require('./common/header.jsx');
var ChatList = require('./chat_module/chatList.jsx');
var ChatDetail = require('./chat_module/chatDetail.jsx');

var _clearMessage = function(){
	var message = {
				media: false,
				mediaParams: {
					type:'',
					path:'',
					file:{
						name:''
					}
				},
				text:'',
				timestamp:null
			};
	return message;
};

var App = React.createClass({
	getInitialState: function() {
		return {
			groups: ChatStore.getAllGroups(),
			chats: {},
			selectedGroup: ChatStore.getSelectedGroup(),
			message: _clearMessage(),
			participant: ChatStore.getActiveParticipant()
		};
	},

	componentWillMount: function() {
		return ChatStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
		return ChatStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		//debugger;
		/*this.setState({ chats: ChatStore.getChats()});
		this.setState({ selectedGroup: ChatStore.getSelectedGroup()});
		this.setState({message:_clearMessage()});*/
		return this.setState({
			chats: ChatStore.getChats(),
			selectedGroup: ChatStore.getSelectedGroup(),
			message:_clearMessage()
		});
	},

	// When a group is selected from ChatList
	selectGroup: function(id,event){
		event.preventDefault();
		//console.log("selectGroup",id);
		if(this.state.message.text.length>0 || this.state.message.media===true){
			// Notifies if there is an unsent message or attached image
			if(!confirm('You have an unsent message which will be lost?')){
				return;
			}
		}
		
		if(this.state.chats[id] === undefined){
			// to reduce server calls
			// full data is requested only when needed
			// else cached
			return ChatActions.selectGroup(id, true);
		} else {
			return ChatActions.selectGroup(id, false);
		}
	},

	// When message is typed
	setMessageState: function(event) {
		var field = event.target.name;
		if(field==='mediaPath'){
			console.log(event.target.files)
			let reader = new FileReader();
		    let file = event.target.files[0];

		    reader.onloadend = () => {
		    	//console.log(file,reader.result)
		    	this.state.message.mediaParams.path = reader.result;
		    	this.state.message.mediaParams.file = file;
		    	this.state.message.media = true;
		    	this.state.message.mediaParams.type = 'img';
		    	//console.log(this.state.message)
		    	toastr.success(this.state.message.mediaParams.file.name+" attached successfully");
		    	return this.setState({message:this.state.message});
		    }
		    reader.readAsDataURL(file)
		} else {
			var value = event.target.value;
			this.state.message[field] = value;
			return this.setState({message:this.state.message});
		}
		
	},

	// When user sends a message
	sendMessage: function(event){
		event.preventDefault();
		if(this.state.message.text.length===0 && this.state.message.media===false){
			return;
		}
		if(!this.state.message.media){
			delete this.state.message.mediaParams;
		}
		this.state.message.timestamp = Math.floor(Date.now() / 1000);
		this.state.message.participant = this.state.participant;
		ChatActions.sendMessage(this.state.message, this.state.selectedGroup.groupId, function(success){
			if(success){
				toastr.success("Message Sent Successfully!!")
			} else {
				toastr.error("Sorry!! Sending Message failed");
			}
			return null;
		});
	},

	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-4">
							<ChatList 
								groups={this.state.groups}
								onClick={this.selectGroup}
								selectedGroupId={this.state.selectedGroup.groupId}
							/>
						</div>
						<div className="col-md-8">
							<ChatDetail 
								selectedGroup={this.state.selectedGroup}
								chats={this.state.chats}
								message={this.state.message}
								participant={this.state.participant}
								onChange={this.setMessageState}
								onSend={this.sendMessage}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

/* To generate random dates*/
var randomDate=function (start, end) {var temp = (new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))).getTime();temp = parseInt(temp/1000);return temp;}
//randomDate(new Date(2016, 0, 1), new Date())


module.exports = App;
