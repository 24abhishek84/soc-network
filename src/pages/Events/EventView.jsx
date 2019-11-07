import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/event-actions';
import UpcomingListing from '../../components/UpcomingEvents/UpcomingListing';
import EventInvitees from '../../components/EventInvitees/EventInvitees';

const eventData = {
	id: '1',
	eventName: 'Test Event',
	locationName: 'Ahmedabad, India',
	groupId: 10,
	groupName: 'Test Group 1',
	latLong: '23.02579, 72.58727',
	image: '/minion.jpeg',
	allDay: false,
	address: '123 Street, Amd, Gujarat 380001',
	end: 'June 30, 2019 11:00:00',
	startDate: 'June 28, 2019 12:00:00',
	title: 'hello !!',
	description: 'test 1',
	file: '/nature.jpg',
	guestCanInvite: 'on',
	showGuestList: 'on'
};

class EventView extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showInviteeModal: false
		};
	}

	toggleInviteeModal = () => {
		this.setState((prevState) => ({
			showInviteeModal: !prevState.showInviteeModal
		}));
	};

	render() {
		return (
			<React.Fragment>
				<UpcomingListing eventData={eventData} />
				<EventInvitees
					show={this.state.showInviteeModal}
					onHide={this.toggleInviteeModal}
					eventData={eventData}
				/>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state.events
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({ ...Actions }, dispatch)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EventView);
