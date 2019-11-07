import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/GroupActions';

import CreateGroupModal from '../GroupModal/CreateGroupModal';
import { StyledHeader, StyledMenuImage } from './Sidebar.style';

const menuItems = [
  {
    id: 1,
    key: 'allemeines',
    label: 'Allemeines',
    imgUrl: 'group_1.jpg',
    bgPosition: '50% 50%',
    height: '32px',
    width: '32px'
  },
  {
    id: 2,
    key: 'social_app',
    label: 'Social App',
    imgUrl: 'group_2.jpg',
    bgPosition: '50% 50%',
    height: '32px',
    width: '32px'
  },
  {
    id: 3,
    key: 'application_flow',
    label: 'Application Flow',
    imgUrl: 'group_3.jpg',
    bgPosition: '50% 50%',
    height: '32px',
    width: '32px'
  },
  {
    id: 4,
    key: 'progress_reporting',
    label: 'Progress Reporting',
    imgUrl: 'group_4.jpg',
    bgPosition: '50% 50%',
    height: '32px',
    width: '32px'
  },
  {
    id: 5,
    key: 'create_group',
    label: 'Create Group',
    imgUrl: 'subMenuListItem.png',
    bgPosition: '-58px -865px',
    height: '20px',
    width: '20px'
  }
];

const GroupList = (props) => {
  const [ showCreateGroupModal, setShowCreateGroupModal ] = useState(false);

  const showCreateGroupDialog = (key, event) => {
    if (key === 'create_group') {
      event.preventDefault();
      setShowCreateGroupModal(true);
    }
  };

  const createGroupSubmit = (values) => {
    console.log('values', values);
    // props.createGroup();
  }

  const getGroupList = () => {
    return menuItems.map(({ id, key, bgPosition, label, imgUrl, height, width }) => {
      return (
        <li key={key}>
          <Link
            to={`/group/${id}`}
            onClick={(e) => showCreateGroupDialog(key, e)}
            style={{ display: 'block', padding: '8px 0 8px 0', textDecoration: 'none' }}
          >
            <div className="d-flex justify-content-start">
              <StyledMenuImage bgPosition={bgPosition} imgUrl={imgUrl} height={height} width={width} />
              <div className="overflow-hidden d-flex align-self-center text-nowrap">
                <div className="text-truncate font-size-14 w-100 text-body">
                  {label}
                </div>
              </div>
            </div>
          </Link>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <StyledHeader className="font-weight-bold mt-3">Groups</StyledHeader>
      </div>
      <ul className="position-relative mt-2 p-0 mb-0" style={{ listStyleType: 'none' }}>
        {getGroupList()}
      </ul>
      <CreateGroupModal
        show={showCreateGroupModal}
        onHide={() => setShowCreateGroupModal(false)}
        handleSubmit={createGroupSubmit}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.group
  };
}

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
