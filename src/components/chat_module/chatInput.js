"use strict";
var React = require('react');

var ChatInput = React.createClass({
	propTypes: {
		// Checks if prop is passed by the Parent component
		onChange: React.PropTypes.func.isRequired,
		message: React.PropTypes.object.isRequired,
		onSend: React.PropTypes.func.isRequired,
	},
	render: function() {
		//console.log(JSON.stringify(this.props.message))
		var attached="";
		if(this.props.message.media){
			attached = "File Attached: "+this.props.message.mediaParams.file.name;

		}
		return (
			<form>
				<div className="input-group">
					<input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..."
						name='text'
						ref='message'
						onChange={this.props.onChange}
						value={this.props.message.text}
					/>
					<span className="input-group-btn">
						<span className="btn btn-default btn-sm btn-file">
							<span className="glyphicon glyphicon-paperclip" aria-hidden="true">
							</span>
							<input type="file" 
								className="form-control"
								type='file'
								accept=".png,.gif,.jpg,.jpeg"
								name='mediaPath'
								onChange={this.props.onChange}
							/>
						</span>
						<input 
							type="submit"
							value="Send"
							onClick={this.props.onSend}
							className="btn btn-success btn-sm" id="btn-chat"
						/>
					</span>
				</div>
				<label>
					{attached}
				</label>
			</form>
		);
	}
});
module.exports = ChatInput;
