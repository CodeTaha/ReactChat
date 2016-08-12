var participants = require('./participantData').participants;
module.exports = {
	chats: {
		grp1: [ 
			{
				media:false,
				test: 'Hey!! whatsup',
				timestamp:'2016-01-15T17:24:07.041Z',
				participant: participants.me
			},
			{
				media:false,
				test: 'Fine',
				timestamp:'2016-07-07T03:49:46.334Z',
				participant: participants.john
			},
			{
				media:false,
				test: 'Hello',
				timestamp:'2016-06-23T03:38:04.724Z',
				participant: participants.jack
			},
			{
				media:false,
				test: 'Kiitos',
				timestamp:'2016-05-29T07:17:13.650Z',
				participant: participants.simon
			},
			{
				media:false,
				test: 'I am Batman',
				timestamp:'2016-03-11T09:23:58.353Z',
				participant: participants.me
			},
			{
				media:false,
				test: 'Oh God!!',
				timestamp:'2016-05-23T12:57:44.971Z',
				participant: participants.jack
			},
		],
		grp2: [ 
			{
				media:false,
				test: 'Hey!! Jack',
				timestamp:'2016-01-15T17:24:07.041Z',
				participant: participants.me
			},
			{
				media:false,
				test: 'Howdy Taha',
				timestamp:'2016-07-07T03:49:46.334Z',
				participant: participants.john
			},
			{
				media:false,
				test: 'Dont you worry about Jack',
				timestamp:'2016-06-23T03:38:04.724Z',
				participant: participants.me
			}
		],
		dan: [ 
			{
				media:false,
				test: 'whatsup Dan',
				timestamp:'2016-01-15T17:24:07.041Z',
				participant: participants.me
			},
			{
				media:false,
				test: 'Got work to do',
				timestamp:'2016-07-07T03:49:46.334Z',
				participant: participants.dan
			},
			{
				media:false,
				test: 'Halleluyah',
				timestamp:'2016-06-23T03:38:04.724Z',
				participant: participants.dan
			}
		]
	}
};