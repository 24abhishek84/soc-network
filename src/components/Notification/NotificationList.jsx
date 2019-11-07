import React from 'react';

import { ListGroup, Button, Tabs, Tab } from "react-bootstrap";
import moment from "moment";
import './Notification.scss';

const notificationList = [
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    message: "You received 14 new weekly newspapers",
    timestamp: 1545368400
  },
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    message: "You received 14 new weekly newspapers",
    timestamp: 1545368400
  },
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    message: "You received 14 new weekly newspapers",
    timestamp: 1545368400
  },
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",
    message: "You received 14 new weekly newspapers",
    timestamp: 1545368400
  },
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",
    message: "You received 14 new weekly newspapers",
    timestamp: 1545368400
  },
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    message: "You received 14 new weekly newspapers",
    timestamp: 1545368400
  },
];

const eventList = [
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    message: "All Events Posted",
    timestamp: 1545368400
  },
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    message: "React Event Posted",
    timestamp: 1545368400
  },
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    message: "A new meetup at falana complex",
    timestamp: 1545368400
  },
];

const messageList = [
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    message: "You have received new message from Falana Dhikana",
    timestamp: 1545368400
  },
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    message: "You have received new message from Someone",
    timestamp: 1545368400
  },
  {
    image: "https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",
    message: "Someone wants to connect with you",
    timestamp: 1545368400
  },
];

const ListGroupItems = ({ list, type }) => {
  return (
    <React.Fragment>
      <ListGroup className="list-items shadow">
        {list.map((notification, index) => {
          return (
            <ListGroup.Item key={`${type}-${index}`} className={`border-left-0 border-right-0 rounded-0 list-item pro-components-notice-icon-notice-list-item ${index === 0 ? 'border-top-0' : ''}`}>
              <div className="list-item-meta pro-components-notice-icon-notice-list-meta">
                <div className="list-item-meta-avatar">
                  <span className="avatar pro-components-notice-icon-notice-list-avatar avatar-circle avatar-image">
                    <img src={notification.image} alt="" />
                  </span>
                </div>
                <div className="list-item-meta-content">
                  <h4 className="list-item-meta-title">
                    <div className="pro-components-notice-icon-notice-list-title">
                      {notification.message}
                    </div>
                  </h4>
                  <div className="list-item-meta-description">
                    <div>
                      <div className="pro-components-notice-icon-notice-list-description"></div>
                      <div className="pro-components-notice-icon-notice-list-datetime">{moment(new Date(notification.timestamp * 1000)).fromNow()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {notificationList.length > 0 &&
        <Button variant="primary" className="border-0 rounded-0 clear-all-button pt-2 pb-2 shadow font-size-14 font-weight-bold" block>Clear All</Button>
      }
    </React.Fragment>
  )
}

const NotificationList = () => {
  return (
    <React.Fragment>
      <Tabs defaultActiveKey="notifications" id="uncontrolled-tab-example">
        <Tab tabClassName="notification-tab-item" eventKey="notifications" title={`Notifications (${notificationList.length})`}>
          <ListGroupItems list={notificationList} type="notifications" />
        </Tab>
        <Tab tabClassName="notification-tab-item" eventKey="events" title={`Events (${eventList.length})`}>
          <ListGroupItems list={eventList} type="events" />
        </Tab>
        <Tab tabClassName="notification-tab-item" eventKey="messages" title={`Messages (${messageList.length})`}>
          <ListGroupItems list={messageList} type="messages" />
        </Tab>
      </Tabs>
    </React.Fragment>
  )
}

export default NotificationList
