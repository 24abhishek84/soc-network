/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Col } from 'react-bootstrap';
import moment from 'moment';
import { changeNavTitle, changeNavMenu, onPressEventCreate } from '../../actions/common';

const Calendar = (props) => {
  const day_number = [1, 2, 3, 4, 5, 6, 7];
  const d = new Date();
  let newDate = '';
  let theDate = new Date();

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const { changeNavTitle: changeNavBarTitle, changeNavMenu: changeNavBarMenu, onPressEventCreate } = props;

    const titleSettings = {
        title: 'Events',
        icon: '/assets/icons/event.svg'
    }

    changeNavBarTitle(titleSettings);
    const menus = [{ 'name': 'Upcoming', 'link': '/events' }, { 'name': 'Calendar', 'link': '/calendar' }, { 'name': 'Celebrations', 'link': '/events/celebrations' }];
    changeNavBarMenu(menus);
  }, []);

  const EventListing = day_number.map((day, index) => {
    newDate = d.setDate(d.getDate() + (day_number[index] - d.getDay()) % day_number[index] + 1);
    theDate = moment().add(day_number[index - 1], 'days').calendar();
    return (
      <ListGroup.Item key={index}>
        <div>{theDate}</div>
        <div>Event {day_number[index]}</div>
      </ListGroup.Item>
    );
  });

  return (
    <div>
      <Col sm={6}>
        <ListGroup>{EventListing}</ListGroup>
      </Col>
    </div>
  );
};

function mapStateToProps(state) {

  return {
    commonData: state.common,
    show: state.common.show
  };
}

export default connect(mapStateToProps, { changeNavTitle, changeNavMenu, onPressEventCreate })(Calendar);
