/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import styled from 'styled-components';
import { changeNavTitle, changeNavMenu, onPressEventCreate } from '../../actions/common';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);
const CalendarEvents = (props) => {
  const [myEventsList, setmyEventsList] = useState([]);
  useEffect(() => {
    const { changeNavTitle: changeNavBarTitle } = props;

    const titleSettings = {
      title: 'Events',
      icon: '/assets/icons/event.svg'
    }

    changeNavBarTitle(titleSettings);
    if (props.events.events !== undefined) {
      setmyEventsList(props.events.events);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const BigCalendarCss = styled.div`
    display:flex;
    height: 80%;
    padding: 10px;

    .rbc-calendar {
      width: 100% !important;
    }
    
    .rbc-month-view {
      height: 500px !important;
    }
  `;
  return (
    <BigCalendarCss>
      <BigCalendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
        defaultView='month'
        views={['month', 'week', 'day']}
        showMultiDayTimes
        style={{ width: '100%' }}

      />
    </BigCalendarCss>
  );
};

function mapStateToProps(state) {
  return {
    commonData: state.common,
    events: state.events
  };
}

export default connect(mapStateToProps, { changeNavTitle, changeNavMenu, onPressEventCreate })(CalendarEvents);