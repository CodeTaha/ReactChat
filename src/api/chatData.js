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
				media:true,
				text: 'Hello, check this Lion',
				timestamp:1455221006,
				participant: participants.jack,
				mediaParams: {
					type: 'img',
					path: 'images/chatData/lion.jpg'
				}
			},
			{
				media:false,
				text: 'Kiitos',
				timestamp:1457098523,
				participant: participants.simon
			},
			{
				media:true,
				text: 'I am Batman',
				timestamp:1464411428,
				participant: participants.me,
				mediaParams: {
					type: 'img',
					path: 'images/chatData/batman.jpg'
				}
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
				media:true,
				text: 'Dont you worry about Jack',
				timestamp:1470206521,
				participant: participants.me,
				mediaParams: {
					type: 'img',
					path: 'images/chatData/tigers.jpg'
				}
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
				media:true,
				text: 'Halleluyah',
				timestamp:1460779400,
				participant: participants.dan,
				mediaParams: {
					type: 'img',
					path: 'file:///home/taha/Downloads/IMG_20160709_211447.jpg'
				}
			}
		]
	}
};