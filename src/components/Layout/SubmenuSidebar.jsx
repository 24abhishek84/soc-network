/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React from 'react';
import styled from 'styled-components';
// import { Button } from 'react-bootstrap';

// import SearchBox from '../SubSidebar/SearchBox';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export const Separator = styled.div`
  clear: both;
  position: relative;
  margin: .8rem 0;
  background-color: #ddd;
  height: 1px;
`;

const navWidthCollapsed = 69;
const navWidthExpanded = 240;

const Main = styled.main`
  position: absolute;
  /* width: 100%; */
  top: 0;
  right: 0;
  bottom: 0;
  left: ${props => props.expanded ? navWidthExpanded : navWidthCollapsed}px;
  overflow-y: auto;
  transition: all 0.15s;
  padding: 0;
`;

const menuItems = [
  { path: '/', key: 'news_feed', label: 'News Feed', imgUrl: '/assets/icons/news-feed.svg', isImage: true, notification: true },
  { path: '/events', key: 'events', label: 'Events', imgUrl: '/assets/icons/event.svg', isImage: true, notification: true },
  { path: '/groups', key: 'groups', label: 'Groups', imgUrl: '/assets/icons/group.png', isImage: true, notification: false },
  { path: '/star-me-up', key: 'StarMeUp', label: 'StarMeUp (3)', imgUrl: '/assets/icons/starmeup.png', isImage: true, notification: true },
  { path: '/take-part', key: 'takePart', label: 'Take Part (3)', imgUrl: '/assets/icons/take-part.png', isImage: true, notification: true },
  { path: '/betterme', key: 'betterme', label: 'BetterMe', imgUrl: '/assets/icons/improvement.png', isImage: true, notification: true },
  { path: '/people-directory', key: 'people_directory', label: 'People Directory', imgUrl: '/assets/icons/people-directory.svg', isImage: true, notification: false },
  // { path: '/follow-coworkers', key: 'follow_coworkers', label: 'Follow Coworkers', imgUrl: '/assets/icons/follow-coworkers.png', isImage: true, notification: false },
  // { path: '/', key: 'saved', label: 'Saved', imgUrl: 'subMenuListItem.png', bgPosition: '-45px -535px', isImage: false },
  // { path: '/', key: 'notes', label: 'Notes', imgUrl: 'subMenuListItem.png', bgPosition: '0 -712px', isImage: false },
  // { path: '/', key: 'org_chart', label: 'Org Chart', imgUrl: 'subMenuListItem.png', bgPosition: '-33px -712px', isImage: false },
  // { path: '/', key: 'interations', label: 'Interations', imgUrl: 'helperIcons.png', bgPosition: '0 -292px', isImage: false },
];

// const members = [
//   {
//     id: 1,
//     path: '/profile/1',
//     key: 'safaomri',
//     label: 'Safa Omri',
//     imgUrl: '/assets/icons/user-female.png',
//     height: '32px',
//     width: '32px'
//   },
//   {
//     id: 2,
//     path: '/profile/2',
//     key: 'elenakalimera',
//     label: 'Elena Kalimera',
//     imgUrl: '/assets/icons/user-female.png',
//     height: '32px',
//     width: '32px'
//   }
// ];

class SubmenuSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  onSelect = (selected) => {
    this.setState({ selected: selected });
  };

  onToggle = (expanded) => {
    this.setState({ expanded: expanded });
  };


  render() {
    const { children, location } = this.props;
    const { expanded } = this.state;

    return (
      <React.Fragment>
        <div className="d-flex">
          <SideNav
            onSelect={(selected) => {
              if (selected !== 'invite_coworkers' && selected !== 'search' && location.pathname !== selected) {
                this.props.history.push(selected);
              }
            }}
            onToggle={this.onToggle}
            className="sidebar-icon-collpase border-right shadow"
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="/" style={{ height: 'calc(100% - 64px)' }}>
              {/* {expanded ?
                <div className="p-0 ml-2 mr-2" style={{ height: 50 }}>
                  <SearchBox />
                </div>
                :
                <NavItem eventKey="search">
                  <NavIcon>
                    <FontAwesomeIcon icon={faSearch} color="#000" />
                  </NavIcon>
                </NavItem>
              }
              <Separator /> */}
              {menuItems.map(({ path, key, label, imgUrl, notification }) => {
                return (
                  <NavItem eventKey={path} key={key}>
                    <NavIcon>
                      <div className={notification ? "notification-badge position-relative" : ""} data-notification-count="10">
                        <img src={imgUrl} width="32" height="32" alt="" />
                      </div>
                    </NavIcon>
                    <NavText>
                      {label}
                    </NavText>
                  </NavItem>
                );
              })}
              {/* <Separator />
              {members.map(({ path, key, label, imgUrl, height, width }) => {
                return (
                  <NavItem eventKey={path} key={key}>
                    <NavIcon>
                      <img src={imgUrl} width="32" height="32" alt="" />
                    </NavIcon>
                    <NavText>
                      {label}
                    </NavText>
                  </NavItem>
                );
              })} */}
              {/* <Separator />
              <NavItem eventKey="invite_coworkers">
                <NavIcon>
                  <FontAwesomeIcon icon={faUser} color="#000" />
                </NavIcon>
                <NavText>
                  <Button className="shadow border rounded border-0 text-white" size="lg" block>
                    Invite Coworkers
                  </Button>
                </NavText>
              </NavItem> */}
            </SideNav.Nav>
          </SideNav>
          <Main expanded={expanded}>
            {children}
          </Main>
        </div>
      </React.Fragment>
    );
  }
}

export default SubmenuSidebar;
