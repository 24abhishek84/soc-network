/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './GroupsListing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FloatingButton } from '../Group/Group.style';
import CreateGroupModal from '../GroupModal/CreateGroupModal';

const GroupsListing = () => {

  const [ showCreateGroupModal, setShowCreateGroupModal ] = useState(false);

  const groupsList = [
    {
      group_id: 1,
      group_title: 'Social Media',
      icon_img: '',
      cover_img: '',
      total_members: 99,
      group_type: {
        id: 1,
        name: 'Team	& Projects'
      }
    },
    {
      group_id: 2,
      group_title: 'Application Flow',
      icon_img: '',
      cover_img: '',
      total_members: 99,
      group_type: {
        id: 1,
        name: 'Team	& Projects'
      }
    },
    {
      group_id: 3,
      group_title: 'Project Reporting',
      icon_img: '',
      cover_img: '',
      total_members: 99,
      group_type: {
        id: 1,
        name: 'Team	& Projects'
      }
    },
    {
      group_id: 4,
      group_title: 'Product Demo',
      icon_img: '',
      cover_img: '',
      total_members: 99,
      group_type: {
        id: 1,
        name: 'Team	& Projects'
      }
    }
  ];

  const createGroupSubmit = (values) => {
    console.log('values', values);
    // props.createGroup();
  }

  return (
    <div className="m-4 d-flex flex-wrap">
      {groupsList.map((group) => {
        return (
          // <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="tile shadow m-2 mt-3 w-auto" key={group.group_id} style={{ flex: '1 0 300px' }}>
              <div className="wrapper d-flex p-2">
                <Link to={`/group/${group.group_id}`}>
                  <Image
                    src="/assets/imgs/group.png"
                    className="rounded"
                    style={{ overflow: 'hidden', height: 100, width: 100 }}
                  />
                </Link>
                <div className="pl-3">
                  <div className="header border-bottom-0 p-0">
                    <Link className="pt-1 d-block font-size-16" to={`/group/${group.group_id}`}>
                      {group.group_title}
                    </Link>
                  </div>
                  <div className="dates pt-2">
                    <strong>{`total members ${group.total_members}`}</strong>
                  </div>
                  <div className="pt-2 pr-0" style={{ lineHeight: 1.4 }}>
                    <FontAwesomeIcon icon={faInfoCircle} style={{ color: '#59687f' }} />
                    <span className="pl-2">
                      This Group is created for Sales Team for communication purpose with the
                      supply chain department and Sales managers.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          // </div>
        );
      })}
      <OverlayTrigger
        placement={"top"}
        overlay={
          <Tooltip className="font-size-14">
            Create Group
          </Tooltip>
        }
      >
        <FloatingButton className="btn-primary" bottom={40} onClick={() => setShowCreateGroupModal(true)}>
          <FontAwesomeIcon icon={faPlus} />
        </FloatingButton>
      </OverlayTrigger>
      <CreateGroupModal
        show={showCreateGroupModal}
        onHide={() => setShowCreateGroupModal(false)}
        handleSubmit={createGroupSubmit}
      />
    </div>
  );
};

export default GroupsListing;
