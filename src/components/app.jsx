/*eslint-disable strict */ //Disabling check because we cant run strict mode. Need global vars


var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');
var toastr = require('toastr');
var _ = require('lodash');
var ChatApi = require('../api/chatApi');

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
					path:''
				},
				text:'',
				timestamp:null
			};
	return message;
};

var App = React.createClass({
	getInitialState: function() {
		//console.log(ChatApi.getActiveParticipant())
		return {
			//groups: ChatApi.getAllGroups(),
			groups: ChatStore.getAllGroups(),
			chats: {},
			selectedGroup: ChatStore.getSelectedGroup(),
			message: _clearMessage(),
			participant: ChatStore.getActiveParticipant()
		};
	},

	componentWillMount: function() {
	      ChatStore.addChangeListener(this._onChange);
	},

	componentWillUnmount: function() {
	      ChatStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		//debugger;
		this.setState({ chats: ChatStore.getChats()});
		this.setState({ selectedGroup: ChatStore.getSelectedGroup()});
	},

	// When a group is selected from ChatList
	selectGroup: function(id,event){
		event.preventDefault();
		//console.log("selectGroup",id);
		if(this.state.message.text.length>0){
			// Notifies if there is an unsent message
			if(!confirm('You have an unsent message which will be lost?')){
				return;
			} else {
				// clear message
				this.setState({message:_clearMessage()})
			}
		}
		//ChatStore.selectGroup(id);
		
		if(this.state.chats[id] === undefined){
			// to reduce server calls
			// data is requested only when needed
			// and cached
			/*var chats = this.state.chats;
			chats[id] = ChatApi.getChatsById(id);
			this.setState({chats: chats});*/
			ChatActions.selectGroup(id, true);
		} else {
			ChatActions.selectGroup(id, false);
		}
		/*var selectedGroup = this.state.selectedGroup;
		var group = ChatApi.getGroupById(id);
		selectedGroup.groupName = group.groupName;
		selectedGroup.groupId = group.id;
		//selectedGroup.chats = this.state.chats[id];
		this.setState({
			selectedGroup: selectedGroup
		});*/
	},

	// When message is typed
	setMessageState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.message.text = value;
		//console.log(this.state.author)
		return this.setState({message:this.state.message});
	},

	// When user sends a message
	sendMessage: function(event){
		event.preventDefault();
		if(this.state.message.text.length===0){
			return;
		}
		if(!this.state.message.media){
			delete this.state.message.mediaParams;
		}
		this.state.message.timestamp = Math.floor(Date.now() / 1000);
		this.state.message.participant = this.state.participant;
		this.state.message.groupId = this.state.selectedGroup.groupId;
		this.setState({message:this.state.message});
		var self = this;
		ChatApi.sendMessage(this.state.message, function(){
			self.state.chats[self.state.message.groupId] = ChatApi.getChatsById(self.state.message.groupId);
			self.setState({chats:self.state.chats});
			self.setState({message:_clearMessage()});
			toastr.success('Message Sent');
		});
		//console.log(this.state.message)
	},

	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					{/*<RouteHandler />*/}
					<div className="row">
						<div className="col-md-4">
							<ChatList 
								groups={this.state.groups}
								onClick={this.selectGroup}
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