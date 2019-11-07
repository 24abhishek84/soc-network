/* eslint-disable no-shadow */
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import GroupsListing from '../../components/Groups/GroupsListing';
import { changeNavTitle, changeNavMenu } from '../../actions/common';

const GroupsList = (props) => {
  useEffect(() => {
    const { changeNavTitle, changeNavMenu } = props;
    const menus = [];
    const titleSettings = {
      title: 'Groups',
      icon: '/assets/icons/group.png'
    };

    changeNavTitle(titleSettings);
    changeNavMenu(menus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <GroupsListing />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.common
  };
}

export default connect( mapStateToProps, { changeNavTitle, changeNavMenu })(GroupsList);

