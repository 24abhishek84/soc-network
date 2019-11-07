/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import styled from 'styled-components';
import { changeNavTitle, changeNavMenu, onPressEventCreate } from '../../actions/common';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);
const Calendar = (props) => {
  useEffect(() => {
    const { changeNavTitle: changeNavBarTitle, changeNavMenu: changeNavBarMenu, onPressEventCreate } = props;

    const titleSettings = {
        title: 'Events',
        icon: '/assets/icons/event.svg'
    }

    changeNavBarTitle(titleSettings);
    const menus = [{ 'name': 'Upcoming', 'link': '/events' }, { 'name': 'Calendar', 'link': '/calendar' }, { 'name': 'Celebrations', 'link': '/events/celebrations' }];
    changeNavBarMenu(menus);
  }, []);

  const dummyEvents = [
    {
      allDay: false,
      end: new Date('June 12, 2019 11:00:00'),
      start: new Date('June 10, 2019 12:00:00'),
      title: 'hi',
    },
    // {
    //   allDay: true,
    //   end: new Date('June 15, 2019 18:00:00'),
    //   start: new Date('June 13, 2019 10:00:00'),
    //   title: 'All Day Event',
    // },
  ];

  const [myEventsList, setmyEventsList] = useState(dummyEvents);
  const BigCalendarCss = styled.div`
    display:flex;
    height: 100%;
    
  `;

  return (
    <BigCalendarCss>
      <BigCalendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date()}
      />
    </BigCalendarCss>
  );
};

function mapStateToProps(state) {

  return {
    commonData: state.common
  };
}

export default connect(mapStateToProps, { changeNavTitle, changeNavMenu, onPressEventCreate })(Calendar);