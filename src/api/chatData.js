var participants = require('./participantData').participants;
module.exports = {
	chats: {
		grp1: [ 
			{
				media:false,
				text: 'Hey!! whatsup :-D',
				timestamp:1470206521,
				participant: participants.me
			},
			{
				media:false,
				text: 'Once you have made it to the box office and gotten your tickets, you are confronted with the problems of the theater itself. If you are in one of the run-down older theaters, you must adjust to the musty smell of seldom-cleaned carpets. Escaped springs lurk in the faded plush or cracked leather seats, and half the seats you sit in seem loose or tilted so that you sit at a strange angle. The newer twin and quad theaters offer their own problems. Sitting in an area only one-quarter the size of a regular theater, moviegoers often have to put up with the sound of the movie next door. This is especially jarring when the other movie involves racing cars or a karate war and you are trying to enjoy a quiet love story. And whether the theater is old or new, it will have floors that seem to be coated with rubber cement. By the end of a movie, shoes almost have to be pried off the floor because they have become sealed to a deadly compound of spilled soda, hardening bubble gum, and crushed Ju-Jubes.',
				timestamp:1455221006,
				participant: participants.john
			},
			{
				media:true,
				text: 'Hello, check this Lion',
				timestamp:1464411428,
				participant: participants.jack,
				mediaParams: {
					type: 'img',
					path: 'images/chatData/lion.jpg'
				}
			},
			{
				media:false,
				text: 'Kiitos ;-)',
				timestamp:1457098523,
				participant: participants.simon
			},
			{
				media:true,
				text: 'I am Batman',
				timestamp:1465755826,
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
				text: 'Howdy Taha :o',
				timestamp:1455221006,
				participant: participants.john
			},
			{
				media:true,
				text: 'Dont you worry about Jack :-P',
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
				text: 'Hakuna Matata :)',
				timestamp:1460779400,
				participant: participants.dan,
				mediaParams: {
					type: 'img',
					path: 'images/chatData/batman.jpg'
				}
			}
		]
	}
};
