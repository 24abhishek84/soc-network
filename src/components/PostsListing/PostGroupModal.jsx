import React from 'react';
import { Modal } from 'react-bootstrap';
import './PostGroupModal.css';
import PostEditor from '../PostEditor';

const PostGroupModal = (props) => {
  const { group } = props;

  const handlePostSubmit = (value) => {
    props.handlePostSubmit(value);
  }

  return (
    <div>
      <Modal className="post-modal" onHide={props.onHide} show={props.show} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{ width: '-webkit-fill-available' }}>
            <div className="text-secondary font-size-12">Posting to</div>
            <div className="text-dark font-size-14">
              {group.group_title} - {group.total_members} members
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <PostEditor onSubmit={handlePostSubmit} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PostGroupModal;
