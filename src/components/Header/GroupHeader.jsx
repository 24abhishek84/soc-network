import React, { Component, Fragment } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "./GroupHeader.css";

export const StickyNav = styled(Nav)`
  background-color: rgb(247, 246, 245);
  top: 60px;
  z-index: 1;
`;

const HeaderBackground = styled.div`
  height: ${(props) => props.bgImage && props.bgImage !== '' ? `300px` : '0' };
  background-image: ${(props) => props.bgImage ? `url(${props.bgImage})` : '' };
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

class GroupHeader extends Component {
  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  render() {
    const { groupData } = this.props;

    return (
      <Fragment>
        <HeaderBackground bgImage={groupData.bannerImage} />
        <StickyNav className="position-sticky shadow-sm border-right-0 border-left-0" fill variant="tabs" defaultActiveKey="about">
          <Nav.Item>
            <NavLink to={`/group/${groupData.id}/about`} exact className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventkey="about">About</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to={`/group/${groupData.id}`} exact className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventkey="post">Post</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to={`/group/${groupData.id}/members`} exact className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventkey="members">Members</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to={`/group/${groupData.id}/events`} exact className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventkey="events">Events</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to={`/group/${groupData.id}/photos`} exact className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventkey="photos">Photos</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to={`/group/${groupData.id}/integrations`} exact className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventkey="integrations">Integrations</NavLink>
          </Nav.Item>
        </StickyNav>
      </Fragment>
    );
  }
}

export default GroupHeader;
