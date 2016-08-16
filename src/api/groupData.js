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
			],
			profile_pic:'images/profile/halloween.jpg'
		},	
		{
			id: 'grp2', 
			groupName: 'John', 
			participants: [
				participants.me,
				participants.john
			],
			profile_pic:'images/profile/cartman.jpg'
		},	
		{
			id: 'dan', 
			groupName: 'Dan', 
			participants: [
				participants.me,
				participants.dan
			],
			profile_pic:'images/profile/randy.jpg'
		}
	]
};