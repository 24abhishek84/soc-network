import React,{ useState} from 'react';
import { connect } from 'react-redux';
import './UpcomingEventList.css';
import { Card } from "react-bootstrap";
import Calendar from "react-big-calendar";
import moment from "moment";
const UpcomingEventList = (props) => {

const localizer = Calendar.momentLocalizer(moment);

 return (
     <div className="upcoming-main-div">
     <Card>
        <Card.Header className="upcoming-header">
            UPCOMING EVENTS
        </Card.Header>
        <Card.Body>
        <Calendar
            localizer={localizer}
            events={props.events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={new Date()}
            // views={{ week: true, day: true }}
            ViewsProps={{ week: false, day: false }}
            />
        </Card.Body>
     </Card>
         
     </div>
 )
}
export default UpcomingEventList;