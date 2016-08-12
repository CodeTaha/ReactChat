var participants = require('./participantData').participants;
module.exports = {
	groups: [
		{
			id: 'grp1', 
			groupName: 'Halloween', 
			participants: [
				participants.me,
				participants.john,
				participants.simon,
				participants.jack
			]
		},	
		{
			id: 'grp2', 
			groupName: 'John', 
			participants: [
				participants.me,
				participants.john
			]
		},	
		{
			id: 'dan', 
			groupName: 'Dan', 
			participants: [
				participants.me,
				participants.dan
			]
		}
	]
};