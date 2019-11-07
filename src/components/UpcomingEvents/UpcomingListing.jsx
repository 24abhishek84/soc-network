import React from 'react';

import { Button, Card, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EventButtons } from '../../components/Group/Group.style';
import { faCalendarAlt, faMapMarkerAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

import PostEditor from '../PostEditor';
import './UpcomingListing.css';

const UpcomingListing = (props) =>  {
  const { eventData: { title, startDate, address, description, file } } = props;

  return (
    <div>
      <Card className="card__box--post shadow-sm">
        <Card.Img className="w-100" src={file} style={{ height: '200px' }} />
        <Card.Body>
          <div className="event-details">
            <Card.Title>{title}</Card.Title>

            <div className="event-content">
              <div className="d-flex">
                <FontAwesomeIcon className="event-icons" icon={faCalendarAlt} />
                <span className="align-self-center">
                  {moment(new Date(startDate)).format('dddd, MMMM do, HH:mma')}
                </span>
              </div>
              <span className="cursor-pointer user-select-none font-size-14">
                More deatils
              </span>
            </div>

            <div className="event-content">
              <div className="d-flex">
                <FontAwesomeIcon className="event-icons" icon={faMapMarkerAlt} />
                <span className="align-self-center">{address}</span>
              </div>
              <span className="cursor-pointer user-select-none font-size-14">
                Show map
              </span>
            </div>

            <div className="event-content">
              <div className="d-flex">
                <FontAwesomeIcon className="event-user-icons" icon={faUsers} />
                <span className="align-self-center">3 Pods, Going and Interested</span>
              </div>
              <span className="cursor-pointer user-select-none font-size-14">
                Show all
              </span>
            </div>

            <div className="event-attend-div">
              <span className="align-self-center">Attending : </span>
              <div className="attending-details">
                <Image
                  src="http://localhost:3000/assets/participate-profile2.jpeg"
                  roundedCircle
                  className="event-attending-profile"
                />
              </div>
              <div className="attending-details">
                <Image
                  src="http://localhost:3000/assets/participate-profile.jpeg"
                  roundedCircle
                  className="event-attending-profile"
                />
              </div>
              <div className="attending-details">
                <Image
                  src="http://localhost:3000/assets/participate-profile2.jpeg"
                  roundedCircle
                  className="event-attending-profile"
                />
              </div>
              <div className="attending-details">
                <Image
                  src="http://localhost:3000/assets/participate-profile.jpeg"
                  roundedCircle
                  className="event-attending-profile"
                />
                <p className="event-last-image">+ 12</p>
              </div>
            </div>
            <div className="event-join-pod">
              <Button className="event-join-pod-link" variant="default">
                <b>Join Pod</b>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>

      <PostEditor isEvent />

      <Card className="card__box--post shadow-sm">
        <Card.Body className="d-flex justify-content-between">
          <div className="font-size-14 font-weight-bold text-primary">
            <span className="cursor-pointer user-select-none text-primary">
              1 Went · 0 Maybe · 0 Invited
            </span>
            <div className="font-size-12 text-secondary pt-1">Invite your coworkers to this event</div>
          </div>
          <EventButtons variant="primary" size="md" className="d-flex align-items-center p-1">
            <span className="material-icons text-muted font-size-16 mr-1">share</span>Share
          </EventButtons>
        </Card.Body>
      </Card>

      <Card className="card__box--post shadow-sm">
        <Card.Header className="font-weight-bold bg-white font-size-16">Details</Card.Header>
        <Card.Body className="font-weight-16">{description}</Card.Body>
      </Card>
    </div>
  );
}

export default UpcomingListing;