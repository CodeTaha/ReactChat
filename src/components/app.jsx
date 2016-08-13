/*eslint-disable strict */ //Disabling check because we cant run strict mode. Need global vars


var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');
var toastr = require('toastr');
var _ = require('lodash');
var ChatApi = require('../api/chatApi');
//var ChatActions = require('../flux/actions/chatActions');
//var ChatStore = require('../flux/store/chatStore');

var Header = require('./common/header.jsx');
var ChatList = require('./chat_module/chatList.jsx');
var ChatDetail = require('./chat_module/chatDetail.jsx');

var _message = function(){
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
			groups: ChatApi.getAllGroups(),
			chats: {},
			selectedGroup:{
				groupName: '',
				groupId: '',
				//chats:[]
			},
			message: _message(),
			participant: ChatApi.getActiveParticipant()
		};
	},

	// When a group is selected from ChatList
	selectGroup: function(id,event){
		event.preventDefault();
		//console.log("selectGroup",id);
		if(this.state.message.text.length>0){
			// Notifies for for unsent message
			if(!confirm('You have an unsent message which will be lost?')){
				return;
			} else {
				this.state.message.text='';
				this.setState({message:this.state.message})
			}
		}
		if(this.state.chats[id] === undefined){
			// to reduce server calls
			var chats = this.state.chats;
			chats[id] = ChatApi.getChatsById(id);
			this.setState({chats: chats});
			//console.log("data received",this.state.chats,this.state.selectedGroup)
		}
		var selectedGroup = this.state.selectedGroup;
		var group = ChatApi.getGroupById(id);
		selectedGroup.groupName = group.groupName;
		selectedGroup.groupId = group.id;
		//selectedGroup.chats = this.state.chats[id];
		this.setState({
			selectedGroup: selectedGroup
		});
		//console.log("Cached")
	
		//console.log(this.state.selectedGroup)
		
		//debugger;
		//AuthorActions.deleteAuthor(id);
		//toastr.success('Author Deleted');
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
			self.setState({message:_message()});
			toastr.success('Message Sent');
		});
		console.log(this.state.message)
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