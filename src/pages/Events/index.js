/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/event-actions';
import { changeNavTitle, changeNavMenu } from '../../actions/common';

import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';
import CalendarEvents from '../../components/CalendarEvents/CalendarEvents';
import CalebrationEvents from '../../components/CalebrationEvents/CalebrationEvents';
import EventView from './EventView';

class EventsPage extends React.Component {

  componentDidMount() {
    const { getmyEventsList, changeNavTitle, changeNavMenu } = this.props;
    // const menus = [
    //   { name: 'Upcoming', link: '/events' },
    //   { name: 'Calendar', link: '/events/calendar' },
    //   { name: 'Celebrations', link: '/events/celebrations' }
    // ];

    getmyEventsList();

    const titleSettings = {
        title: 'Events',
        icon: '/assets/icons/event.svg'
    }

    changeNavTitle(titleSettings);
    changeNavMenu([]);
  }

  renderEventPaths = (routeName) => {
    if(routeName === '/events') {
      return <UpcomingEvents />;
    } else if(routeName === '/events/calendar') {
      return <CalendarEvents {...this.props}/>;
    } else if(routeName === '/events/celebrations') {
      return <CalebrationEvents {...this.props}/>;
    } else if(routeName === '/event/:eventId') {
      return <EventView {...this.props}/>;
    }
  }

  render() {
    const { match } = this.props;
    return (
      this.renderEventPaths(match.path)
    );
  }
};

function mapStateToProps(state) {
  return {
    ...state.events
  };
}
const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions, changeNavTitle, changeNavMenu }, dispatch)
  };
};
export default connect(mapStateToProps,
  mapDispatchToProps
)(EventsPage);
