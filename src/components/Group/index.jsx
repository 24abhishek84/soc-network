/* eslint-disable consistent-return */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Fragment, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import * as Actions from '../../actions/GroupActions';
import GroupHeader from '../Header/GroupHeader';
// import GroupSidebar from './GroupSidebar';
import Events from './Events';
import About from './About';
import Photos from './Photos';
import Members from './Members';
import Posts from './Posts';
import { changeNavTitle } from '../../actions/common';

class Group extends Component {

  constructor(props) {
    super(props);
    this.state = {
      groupId: props.match.params.id
    };
  }

  componentDidMount() {
    const { fetchGroupData, match, changeNavTitle, groupData } = this.props;
    fetchGroupData(match.params.id);
    changeNavTitle({ title: groupData.name });
  }

  componentDidUpdate() {
    const { fetchGroupData, match, changeNavTitle, groupData } = this.props;
    fetchGroupData(match.params.id);
    changeNavTitle({ title: groupData.name });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if((nextProps.match.params.id !== this.props.match.params.id) || (this.props.groupData && (nextProps.groupData.id !== this.props.groupData.id)) || this.state !== nextState) {
      return true;
    }
    return false;
  }

  getParams = pathname => {
    let matchProfile = '404';
    if(matchPath(pathname, { path: '/group/:id', exact: true, strict: false })) {
      matchProfile = 'index';
    } else if(matchPath(pathname, { path: '/group/:id/events', exact: true, strict: false })) {
      matchProfile = 'events';
    } else if(matchPath(pathname, { path: '/group/:id/about', exact: true, strict: false })) {
      matchProfile = 'about';
    } else if(matchPath(pathname, { path: '/group/:id/members', exact: true, strict: false })) {
      matchProfile = 'members';
    } else if(matchPath(pathname, { path: '/group/:id/photos', exact: true, strict: false })) {
      matchProfile = 'photos';
    } else if(matchPath(pathname, { path: '/group/:id/integrations', exact: true, strict: false })) {
      matchProfile = 'integrations';
    }
    return matchProfile;
  };

  renderGroupPaths = (routeName) => {
    if(routeName === 'index') {
      return (
        <Posts {...this.props}/>
      );
    } else if(routeName === 'events') {
      return (
        <Events {...this.props}/>
      );
    } else if(routeName === 'about') {
      return (
        <About {...this.props}/>
      );
    } else if(routeName === 'members') {
      return (
        <Members {...this.props}/>
      );
    } else if(routeName === 'photos') {
      return (
        <Photos {...this.props}/>
      );
    } else if(routeName === 'integrations') {
      return (
        <div></div>
      );
    } else if(routeName === '404') {
      return (
        <div></div>
      );
    }
  }

  // renderSidebar = (routeName) => {
  //   if(routeName === 'index' || routeName === 'about' || routeName === 'members' || routeName === 'integrations') {
  //     return (
  //       <GroupSidebar />
  //     );
  //   }
  // }

  render() {
    const { groupData } = this.props;

    const isRoute = this.getParams(this.props.location.pathname);

    return (
      <Fragment>
        <GroupHeader groupData={groupData} />
        <div className="d-flex w-100">
          { this.renderGroupPaths(isRoute) }
          {/* { this.renderSidebar(isRoute) } */}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groupData: state.group.groupData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions, changeNavTitle }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Group);
