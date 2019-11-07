import { GET_EVENT_DATA, CREATE_NEW_EVENT, EDIT_NEW_EVENT, GET_DATE_EVENTS } from '../types';

const initialState = {
	events: [],
	eventslist: [
		{
			id: '1',
			eventName: 'Fun Event',
			locationName: 'Ahmedabad, India',
			latLong: '23.02579, 72.58727',
			image: 'http://localhost:3000/minion.jpeg',
			allDay: false,
			address: '123 Street, Amd, Gujarat 380001',
			end: 'October 30, 2019 11:00:00',
			startDate: 'October 20, 2019 12:00:00',
			title: 'hello !!',
			description: 'test description for Test Event',
			file: '/nature.jpg',
			guestCanInvite: 'on',
			showGuestList: 'on',
			participates:[
					'http://localhost:3000/assets/participate-profile2.jpeg',
					'http://localhost:3000/assets/participate-profile.jpeg',	
					'http://localhost:3000/assets/participate-profile2.jpeg',			
			],
		},
		{
			id: '2',
			eventName: 'Brainstorming Event',
			locationName: 'Ahmedabad Test, India',
			latLong: '23.02579, 72.58727',
			image: 'http://localhost:3000/assets/imgs/group_1.jpg',
			allDay: false,
			address: '123 Street, Baroda, Gujarat 390001',
			end: 'October 21, 2019 12:00:00',
			startDate: 'October 18, 2019 12:00:00',
			title: 'All Day Event',
			description: 'test  description for Test Event 2',
			file: '/nature2.jpeg',
			guestCanInvite: 'off',
			showGuestList: 'on',
			participates:[
				'http://localhost:3000/assets/participate-profile2.jpeg',
				'http://localhost:3000/assets/participate-profile.jpeg',	
				'http://localhost:3000/assets/participate-profile2.jpeg',		
			],
		},
		{
			id: '3',
			eventName: 'Innovation Event',
			locationName: 'Ahmedabad, India',
			latLong: '23.02579, 72.58727',
			image: 'http://localhost:3000/minion.jpeg',
			allDay: false,
			address: '123 Street, Amd, Gujarat 380001',
			end: 'October 30, 2019 11:00:00',
			startDate: 'October 20, 2019 12:00:00',
			title: 'hello !!',
			description: 'test description for Test Event',
			file: '/nature.jpg',
			guestCanInvite: 'on',
			showGuestList: 'on',
			participates:[
					'http://localhost:3000/assets/participate-profile2.jpeg',
					'http://localhost:3000/assets/participate-profile.jpeg',	
					'http://localhost:3000/assets/participate-profile2.jpeg',			
			],
		},
		{
			id: '4',
			eventName: 'Yoga Event',
			locationName: 'Ahmedabad, India',
			latLong: '23.02579, 72.58727',
			image: 'http://localhost:3000/minion.jpeg',
			allDay: false,
			address: '123 Street, Amd, Gujarat 380001',
			end: 'October 30, 2019 11:00:00',
			startDate: 'October 20, 2019 12:00:00',
			title: 'hello !!',
			description: 'test description for Test Event',
			file: '/nature.jpg',
			guestCanInvite: 'on',
			showGuestList: 'on',
			participates:[
					'http://localhost:3000/assets/participate-profile2.jpeg',
					'http://localhost:3000/assets/participate-profile.jpeg',	
					'http://localhost:3000/assets/participate-profile2.jpeg',			
			],
		},
		{
			id: '5',
			eventName: 'Workshop Event',
			locationName: 'Ahmedabad, India',
			latLong: '23.02579, 72.58727',
			image: 'http://localhost:3000/minion.jpeg',
			allDay: false,
			address: '123 Street, Amd, Gujarat 380001',
			end: 'October 30, 2019 11:00:00',
			startDate: 'October 20, 2019 12:00:00',
			title: 'hello !!',
			description: 'test description for Test Event',
			file: '/nature.jpg',
			guestCanInvite: 'on',
			showGuestList: 'on',
			participates:[
					'http://localhost:3000/assets/participate-profile2.jpeg',
					'http://localhost:3000/assets/participate-profile.jpeg',	
					'http://localhost:3000/assets/participate-profile2.jpeg',			
			],
		},
		
	],
	todayeventlist: [],
	todaytotalevents: 0,
	page: 1,
	selecteddate: ''
};

export default (state = initialState, action = {}) => {
	const { eventslist} = state;
	switch (action.type) {
		case GET_EVENT_DATA:
			return { ...state, events: action.data };
		case CREATE_NEW_EVENT:
			const lastID = state.events.length + 1;
			action.data.id = lastID;
			return { state, events: [ ...state.events, action.data ] };
		case EDIT_NEW_EVENT:
			let currentdata = state.data;
			for (let i = 0; i < currentdata.length; i++) {
				if (currentdata[i].id === action.data.id) {
					currentdata.splice(i, 1);
				}
			}
			currentdata.push(Object.assign({}, action.data));
			return { ...state, events: currentdata };
		case GET_DATE_EVENTS:
			let total = 0;
			const totaldateEvents = eventslist.filter( x => x.startDate.indexOf(action.currentdate) !== -1);		
			if(totaldateEvents !== undefined){
				total = totaldateEvents.length;	
			}
			const totalevents = 3*action.page;
			const dateEvents = totaldateEvents.splice(0,totalevents);
			return { ...state, todayeventlist: dateEvents, todaytotalevents: total, selecteddate: action.currentdate, page: action.page + 1 };
			default:
			return state;
	}
}
