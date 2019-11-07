/* eslint-disable indent */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
import { CREATE_EVENT_WITH_INVITEES, GET_EVENT_DATA, CREATE_NEW_EVENT, EDIT_NEW_EVENT, GET_DATE_EVENTS } from '../types';

export const createNewEvent = (event) => (dispatch) => {
	dispatch({
		type: CREATE_NEW_EVENT,
		data: event
	});
};

export const editEventData = (event) => (dispatch) => {
	dispatch({
		type: EDIT_NEW_EVENT,
		data: event
	});
};

export const saveNewEvent = (event) => (dispatch) => {
	dispatch({
		type: CREATE_EVENT_WITH_INVITEES,
		data: event
	});
};

export const getmyEventsList = () => (dispatch) => {
	dispatch({
		type: GET_EVENT_DATA,
		data: [
			{
				id: '1',
				eventName: 'Test Event',
				locationName: 'Ahmedabad, India',
				latLong: '23.02579, 72.58727',
				image: 'http://localhost:3000/minion.jpeg',
				allDay: false,
				address: '123 Street, Amd, Gujarat 380001',
				end: 1572422888,
				startDate: 1571558888,
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
				eventName: 'Test Event 2',
				locationName: 'Ahmedabad Test, India',
				latLong: '23.02579, 72.58727',
				image: 'http://localhost:3000/assets/imgs/group_1.jpg',
				allDay: false,
				address: '123 Street, Baroda, Gujarat 390001',
				end: 1562746088,
				startDate: 1562314088,
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
			}
		]
	});
};

export const getdateevents = (currentdate, page) => (dispatch) => {
	dispatch({
		type: GET_DATE_EVENTS,
		currentdate,
		page
	});
}