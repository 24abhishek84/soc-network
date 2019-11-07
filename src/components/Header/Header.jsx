/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, matchPath } from 'react-router-dom';
import { ButtonGroup } from 'react-bootstrap';

import Notification from './../Notification';
import { changeNavTitle, changeNavMenu, onPressEventCreate } from '../../actions/common';

import './Header.css';

function Header(props) {
  const { menu, location } = props;

  const MenuItems = menu || [];
  const listing = MenuItems.map((menu) => {
    return (
      <NavLink
        className="btn btn-link d-flex align-items-center justify-content-center border-0 pt-3 pb-3 font-size-14 text-body text-decoration-none betterme-link rounded-0"
        to={menu.link}
        key={menu.name}
        exact
      >
        {menu.name}
      </NavLink>
    );
  });

  const getParams = (pathname) => {
    const matchProfile = matchPath(pathname, {
      path: [ '/group/:id', '/profile/:userId' ]
    });
    return !!matchProfile;
  };

  const checkIsGroup = getParams(location.pathname);

  return (
    <React.Fragment>
      <Notification />
      {!checkIsGroup && MenuItems.length > 0 &&
        <div className="shadow-sm border-bottom position-sticky" style={{ top: 60, zIndex: 11, backgroundColor: '#f7f6f5' }}>
          <ButtonGroup className="bg-transparent flex-row w-100">{listing}</ButtonGroup>
        </div>
      }
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    ...state.common
  };
}

export default connect(mapStateToProps, { changeNavTitle, changeNavMenu, onPressEventCreate })(Header);
