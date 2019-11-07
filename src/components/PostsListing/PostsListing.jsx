import React, { Fragment } from 'react';

import { connect } from 'react-redux';
// import styled from 'styled-components';
// import { Form } from 'react-bootstrap';
import { changeNavTitle, changeNavMenu, onPressEventCreate } from '../../actions/common';

// import MyGroupsModal from './MyGroupsModal';
// import PostGroupModal from './PostGroupModal';
import PostEditor from '../PostEditor';
import AllPosts from './AllPosts';
import ReactCalendar from '../UpcomingEvents/ReactCalendar';

const PostsListing = (props) => {
  // const [ showMyGroupModal, setshowMyGroupModal ] = useState(false);
  // const [ showPostEditorModal, setShowPostEditorModal ] = useState(false);
  // const [ selectedGroup, setSelectedGroup ] = useState({});

  // const showYourGroupModels = () => {
  //   setshowMyGroupModal(true);
  // };

  // const TextareaCss = styled(Form.Control)`
  //   height:30px;
  // `;

  const handlePostSubmit = (value) => {
    const postContent = value;
    // const groupToPost = selectedGroup
    console.log('postContent', postContent);
    // console.log('groupToPost', groupToPost);
    // setShowPostEditorModal(false);
    // setSelectedGroup({});
  }

  // const myGroupsModalToggle = () => {
  //   setshowMyGroupModal(!setshowMyGroupModal);
  // }

  // const postEditorModalToggle = () => {
  //   if(showPostEditorModal) {
  //     setSelectedGroup({});
  //   }
  //   setShowPostEditorModal(!showPostEditorModal);
  // };

  // const onSelectGroupHandler = (group) => {
  //   setSelectedGroup(group);
  //   setShowPostEditorModal(true);
  //   setshowMyGroupModal(false);
  // }

  return (
    <Fragment>
      {/* <Card className="card__box--post shadow">
        <Card.Body className="p-2">
          <div className="d-flex align-items-center">
            <Image src="minion.jpeg" className="m-2" height={30} />
              <TextareaCss
                as="textarea"
                rows="4"
                className="w-100 border-0 p-2"
                 onClick={showYourGroupModels}
                placeholder="Click to Create New Post..."
              />
          </div>
        </Card.Body>
      </Card> */}
      <div className="posts-listing-newsfeed">
        <div style={{ marginLeft: 10 }}>
          <PostEditor onSubmit={handlePostSubmit} />
          <AllPosts />
        </div>
        <ReactCalendar className="card__box--post" style={{ top: 70 }} />
      </div>
      {/* <MyGroupsModal
        show={showMyGroupModal}
        onHide={myGroupsModalToggle}
        groups={props.mygroups || []}
        onSelectGroup={onSelectGroupHandler}
      /> */}
      {/* <PostGroupModal
        show={showPostEditorModal}
        group={selectedGroup}
        onHide={postEditorModalToggle}
        handlePostSubmit={handlePostSubmit}
      /> */}
    </Fragment>
  );
};

function mapStateToProps(state) {
  return {
    ...state.common
  };
}

export default connect(mapStateToProps, { changeNavTitle, changeNavMenu, onPressEventCreate })(PostsListing);
