import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/PostActions';
import SinglePost from './SinglePost';

const AllPosts = (props) => {
  useEffect(() => {
    const { getmyPostsList } = props;
    getmyPostsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const postLikeUnlikeHandle = (postId) => {
    props.savePostLikeUnlike(postId);
  }

  const commentLikeUnlikeHandle = (postId, commentId, isReply, replyCommentId) => {
    props.saveCommentLikeUnlike(postId, commentId, isReply, replyCommentId);
  }

  const { postsList } = props;

  return postsList.map(post => {
    return (
      <SinglePost key={`post-${post.id}`} data={post} postLikeUnlikeHandle={postLikeUnlikeHandle} commentLikeUnlikeHandle={commentLikeUnlikeHandle} />
    );
  });
};

const mapStateToProps = (state) => {
  return {
    ...state.posts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts);
