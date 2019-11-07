/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import window from "./../../matchMedia.mock";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

import { Dropdown } from "react-bootstrap";

import SubmenuSidebar from './SubmenuSidebar';
import Logout from './Logout';
import NotificationList from '../Notification/NotificationList';

const SubmenuSidebarWrapper = withRouter(props => <SubmenuSidebar {...props} />);

class Layout extends Component {
  constructor(props) {
    super(props);
    this.mql = window.matchMedia('(min-width: 1300px)');
    this.state = {
      showMenuText: this.mql.matches,
      logoutModal: false,
      sidebarDrawerOpen: false
    };
  }

  componentWillMount() {
    this.mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => {
    this.setState({ showMenuText: this.mql.matches });
  };

  logoutModalCloseHandler = () => {
    this.setState({ logoutModal: false });
  };

  logoutModalOpenHandler = () => {
    this.setState({ logoutModal: true });
  };

  handleLogout = () => {
    const { keycloak } = this.props;
    keycloak && keycloak.logout();
  };

  handleSelectChats = () => {
    window.location.assign('https://messenger.prenigma.com');
  };

  toggleDrawer = () => {
    this.setState(prevState => ({
      sidebarDrawerOpen: !prevState.sidebarDrawerOpen
    }))
  }

  getSidebarContent = () => {
    const { showMenuText } = this.state;
    const { titleSetting } = this.props;
    const sidebarIconItemClass = showMenuText ? 'sidebar-icon-item' : 'sidebar-icon-item sidebar-icon-padding';

    return (
      <React.Fragment>
        <div className="sidenav-wrapper shadow-sm position-sticky" style={{ minWidth: 520, top: 0 }}>
          <div className="menuToogle">
            <li className="d-flex align-items-center" style={{ listStyle: 'none' }}>
              <h1 className="m-0 ml-3 mr-3 text-white font-size-16">{titleSetting.title}</h1>
            </li>
          </div>
          <ul className="bottomMenu">
            <li>
              <div className={`${sidebarIconItemClass}`} onClick={this.toggleDrawer}>
                <i className="material-icons user-select-none font-size-25">apps</i>
                {showMenuText && <span>Apps</span>}
              </div>
            </li>
            <li>
              <Dropdown className={`sidebar-icon-item`}>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                />
                <Dropdown.Menu className="p-0 notification-dropdown">
                  <NotificationList />
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <div className={`${sidebarIconItemClass}`} onClick={this.handleSelectChats}>
                <img src="/assets/icons/chats.png" alt="chats" />
                {showMenuText && <span>Chats</span>}
              </div>
            </li>
            <li>
              <div className="sidebar-icon-item helperIconsCommon" onClick={this.logoutModalOpenHandler}>
                <img src="/assets/icons/dashboard.png" alt="dashboard" height={25} />
                {showMenuText && <span>Dashboard</span>}
              </div>
            </li>
            <li>
              <Link className="link-topbar sidebar-icon-item helperIconsCommon" to="/profile/1">
                <img src="/minion.jpeg" className="rounded-circle" alt="dashboard" height={40} />
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { children } = this.props;
    const { logoutModal, sidebarDrawerOpen } = this.state;
    return (
      <Fragment>
        <SubmenuSidebarWrapper>
          {this.getSidebarContent()}
          {children}
        </SubmenuSidebarWrapper>
        {logoutModal && (
          <Logout
            logoutModal={logoutModal}
            handleLogout={this.handleLogout}
            logoutModalCloseHandler={this.logoutModalCloseHandler}
          />
        )}
        <div id="mySidenav" className="sidenav shadow-lg" style={{ width: sidebarDrawerOpen ? 300 : 0 }}>
          <div className="closebtn cursor-pointer" onClick={this.toggleDrawer}>&times;</div>
        </div>
      </Fragment>
    );
  }
}

class CustomToggle extends React.Component {
  constructor(props) {
    super(props);
    this.mql = window.matchMedia('(min-width: 1300px)');
    this.state = {
      showMenuText: this.mql.matches,
    };
  }

  componentWillMount() {
    this.mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    this.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged = () => {
    this.setState({ showMenuText: this.mql.matches });
  };

  render() {
    const { showMenuText } = this.state;
    return (
      <div {...this.props} className={`d-flex flex-column align-items-center h-100 w-100`} style={{ padding: showMenuText ? 10 : 16 }}>
        <img src="/assets/icons/notifications.png" alt="notification" />
        {showMenuText && <span>Notifications</span>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.common
  };
}

export default connect(mapStateToProps, null)(Layout);
