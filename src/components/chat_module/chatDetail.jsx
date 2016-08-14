"use strict";
var React = require('react');

var ChatInput = require('./chatInput.jsx');
var ChatDetail = React.createClass({
	componentDidUpdate: function() {
		//console.log("lala");
		var node = document.getElementById('panelBody');
		node.scrollTop = node.scrollHeight;
	},
	propTypes: {
		// Checks if prop is passed by the Parent component
		selectedGroup: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		message: React.PropTypes.object.isRequired,
		participant: React.PropTypes.object.isRequired,
		onSend: React.PropTypes.func.isRequired,
	},
	render: function() {
		var getText = function(mesg) {
			if(mesg.media) {
				if(mesg.mediaParams.type === 'img'){
					return (
						<p>
							<img className="img-thumbnail" alt="Cinque Terre"
								max-width="304" height="236"
								src={mesg.mediaParams.path} 
							/>
							<br />
							{mesg.text}		
						</p>
					);
				}
			}
			return (
				<p>{mesg.text}</p>
			);
		}
		var createChatLi = function(mesg) {
			//console.log(mesg)
			var a = new Date(mesg.timestamp * 1000);
			var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
			var year = a.getFullYear();
			var month = months[a.getMonth()];
			var date = a.getDate();
			var hour = a.getHours();
			var min = a.getMinutes();
			var sec = a.getSeconds();
			var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
			//console.log(a,time);
			// Generating a unique key for iteration
			var key = mesg.participant.id + mesg.timestamp + (Math.random() * (1000 - 1) + 1);
			if(mesg.participant.id===this.props.participant.id){
				return (
					<li key={key} className="right clearfix">
						<span className="chat-img pull-right">
							<img src="http://placehold.it/50/55C1E7/fff&text=ME" alt="User Avatar" className="img-circle" />
						</span>
						<div className="chat-body clearfix">
							<div className="header">
								<small className="text-muted">
									<span className="glyphicon glyphicon-time"></span>
									{time}
								</small>
								<strong className="pull-right primary-font">
									{mesg.participant.name}
								</strong>
							</div>
							{getText(mesg)}
						</div>
					</li>
				);
			}
			return (
				<li key={key} className="left clearfix">
					<span className="chat-img pull-left">
						<img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
					</span>
					<div className="chat-body clearfix">
						<div className="header">
							<strong className="primary-font">
								{mesg.participant.name}
							</strong>
							<small className="pull-right text-muted">
								<span className="glyphicon glyphicon-time"></span>
								{time}
							</small>
						</div>
						{getText(mesg)}
					</div>
				</li>
			);
		};
		if(this.props.selectedGroup.groupId==''){
			return (<div></div>);
		}
		return (
			<div className="panel panel-info">
                <div className="panel-heading">
                    <span className="glyphicon glyphicon-comment"></span> 
                    {' '+ this.props.selectedGroup.groupName}
                </div>
                <div id="panelBody" className="panel-body">
                    <ul className="chat">
						{this.props.chats[this.props.selectedGroup.groupId].map(createChatLi,this)}
                    </ul>
                </div>
                <div className="panel-footer">
                	<ChatInput 
                		onChange={this.props.onChange}
						message={this.props.message}
						onSend={this.props.onSend}
                	/>
                	{/*<form>
	                    <div className="input-group">
	                        <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..."
								name='message'
								ref='message'
								onChange={this.props.onChange}
								value={this.props.message.text}
	                        />
	                        <span className="input-group-btn">
	                            <input 
	                            	type="submit"
	                            	value="Send"
									onClick={this.props.onSend}
									className="btn btn-warning btn-sm" id="btn-chat"
	                            />
	                        </span>
	                    </div>
	                </form>*/}
                </div>
            </div>
			
		);
	}
});

module.exports = ChatDetail;