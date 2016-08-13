var participants = require('./participantData').participants;
module.exports = {
	chats: {
		grp1: [ 
			{
				media:false,
				text: 'Hey!! whatsup',
				timestamp:1470206521,
				participant: participants.me
			},
			{
				media:false,
				text: 'Fine',
				timestamp:1465755826,
				participant: participants.john
			},
			{
				media:false,
				text: 'Hello',
				timestamp:1455221006,
				participant: participants.jack
			},
			{
				media:false,
				text: 'Kiitos',
				timestamp:1457098523,
				participant: participants.simon
			},
			{
				media:false,
				text: 'I am Batman',
				timestamp:1464411428,
				participant: participants.me
			},
			{
				media:false,
				text: 'Oh God!!',
				timestamp:1465755826,
				participant: participants.jack
			},
		],
		grp2: [ 
			{
				media:false,
				text: 'Hey!! Jack',
				timestamp:1465755826,
				participant: participants.me
			},
			{
				media:false,
				text: 'Howdy Taha',
				timestamp:1455221006,
				participant: participants.john
			},
			{
				media:false,
				text: 'Dont you worry about Jack',
				timestamp:1470206521,
				participant: participants.me
			}
		],
		dan: [ 
			{
				media:false,
				text: 'whatsup Dan',
				timestamp:1465755826,
				participant: participants.me
			},
			{
				media:false,
				text: 'Got work to do',
				timestamp:1470206521,
				participant: participants.dan
			},
			{
				media:false,
				text: 'Halleluyah',
				timestamp:1460779400,
				participant: participants.dan
			}
		]
	}
};