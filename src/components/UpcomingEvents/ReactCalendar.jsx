import React, { useRef, useState, useEffect, Fragment } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/event-actions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import './ReactCalendar.css';
import Calendar from 'react-calendar';
import moment from 'moment';

const ReactCalendar = (props) => {
  const { eventslist, todayeventlist, page, todaytotalevents, selecteddate } = props;
  const [ todaydate, settodaydate ] = useState(new Date());
  const currentdate = moment(new Date()).format('LL');
  const eventCalendar = useRef();

  useEffect(
    () => {
      if (todaydate === new Date()) {
        props.getdateevents(currentdate);
      }
    },
    [ todaydate, currentdate, props ]
  );

  const onChange = (date) => {
    const thisday = moment(date).format('LL');
    console.log('thisday',thisday);
    if(thisday === selecteddate){
      props.getdateevents(thisday, page);
    } else {
      props.getdateevents(thisday, 1);
    }
    settodaydate(date);
  };

  const onClickDay = (date) => {
    console.log('eventCalendar',eventCalendar);
  }

  const tileClassName = (date) => {
    const nowdate = new Date(todaydate);
    const newdate = date.date;
    const alldatesdate = newdate.getDate();
    const alldatesmonth = newdate.getMonth();
    const alldatesyear = newdate.getFullYear();

    let eventDates = [];
    eventslist.map(async(event) => {
      let eventdate = new Date(event.startDate).getDate();
      let eventmonth = new Date(event.startDate).getMonth();
      let eventyear = new Date(event.startDate).getFullYear();
      if( eventyear === newdate.getFullYear() && eventmonth === newdate.getMonth() && eventdate === newdate.getDate()){
        eventDates.push(eventdate);
      }
    });
    if(eventDates.length > 0){
      if(eventDates.includes(newdate.getDate()) && newdate.getDate() === nowdate.getDate() ){
        return 'events-selected-date';
      } else if(eventDates.includes(newdate.getDate())) {
        return 'events-date';
      } else {
        return '';
      }
    }
    if( alldatesyear === new Date().getFullYear() && alldatesmonth === new Date().getMonth() && alldatesdate === new Date().getDate()){
      return 'today-active';
    }
  };

  return (
    <div className={`event-calendar bg-white ${props.className}`} style={{ height: 'fit-content', ...props.style }}>
      <Calendar
        onChange={onChange}
        value={todaydate}
        tileClassName={tileClassName}
        className={ todayeventlist.length > 0 ? 'border-bottom' : ''}
        onClickDay={ () => onClickDay() }
        ref={eventCalendar}
      />
      <div style={{ maxHeight:'400px', overflowY: 'auto' }}>
        {todayeventlist.map((event, index) => {
          return (
            <Fragment key={`event-${event.id}`}>
              <div className={`d-flex pl-2 pr-2 pt-3 pb-3 justify-content-between ${todayeventlist.length - 1 !== index && 'border-bottom'} text-primary`}>
                <span className="d-flex" style={{ width: '40%' }}>
                  <span className="pr-2">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="align-self-center font-size-12 text-primary"
                    />
                  </span>
                  <span className="pr-2">{event.eventName}</span>
                </span>
                <span className="pr-2 text-center" style={{ width: '20%' }}>{moment(event.startDate).format('LT')}</span>
                <span className="text-right" style={{ width: '40%' }}>{event.locationName}</span>
              </div>
              { todaytotalevents > 3 && index === todayeventlist.length - 1 && todayeventlist.length !== todaytotalevents &&
                <div className='d-flex pl-2 pr-2 pt-3 pb-3 justify-content-between border-bottom text-primary'>
                  <span className="d-flex justify-content-center w-100 cursor-pointer" onClick={() => onChange(selecteddate)}>Show More</span>
                </div>
              }
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ReactCalendar);
