import React from 'react';
import { connect } from 'react-redux';
import { changeNavTitle, changeNavMenu } from '../../actions/common';

const PeopleYouFollow = () => {
  return <p>This is news feed page</p>;
};

function mapStateToProps(state) {
  return {
    ...state.common
  };
}

export default connect(mapStateToProps, { changeNavTitle, changeNavMenu })(PeopleYouFollow);
