/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class Navigation extends React.Component {

  constructor(props) {
    super(props);

    // This binding is necessary to make `this` work in the callback
    this.handleLogout = this.handleLogout.bind(this);
  }


  handleLogout() {
    const { keycloak } = this.props;

    keycloak && keycloak.logout();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Prenigma Workplace</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <a  href="/">Home <span className="sr-only">(current)</span></a> */}
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">Link</a> */}
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">Link</a> */}
              <Link className="nav-link" to="/feed">Posts</Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/">Link</a> */}
              <Link className="nav-link" to="/connections">Connections</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" >Groups</a>
            </li>

            {/* <li className="nav-item dropdown"> */}
            {/* <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" */}
            {/* data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
            {/* Dropdown */}
            {/* </a> */}
            {/* <div className="dropdown-menu" aria-labelledby="navbarDropdown"> */}
            {/* <a className="dropdown-item" href="/">Action</a> */}
            {/* <a className="dropdown-item" href="/">Another action</a> */}
            {/* <div className="dropdown-divider"></div> */}
            {/* <a className="dropdown-item" href="/">Something else here</a> */}
            {/* </div> */}
            {/* </li> */}
            {/* <li className="nav-item"> */}
            {/* <a className="nav-link disabled" href="/">Disabled</a> */}
            {/* </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0"> */}
          {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
          {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          {/* </form> */}
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit" onClick={this.handleLogout}>Logout</button>
        </div>
      </nav>
    );
  }
}

export default Navigation;

Navigation.propTypes = {
  keycloak: PropTypes.object.isRequired
};
