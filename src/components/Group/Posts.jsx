import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/GroupActions';
import styled from 'styled-components';
import PostEditor from '../PostEditor';
import SinglePost from "./../PostsListing/SinglePost";

export const CardHeaderDiv = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #4b4f56;
`;

export const CardTextDiv = styled.div`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const PostsDiv = styled.div`
  background: #fff;
  border-bottom: solid 1px #ebedf0;
  font-size: 14px;
  padding: 12px;
  position: relative;

  &:last-child {
    border: none;
  }
`;

export const PostProfileImageAnchor = styled.div`
  float: left;
  display: block;
  height: 40px;
  margin-right: 12px;
  width: 40px;
`;

export const PostProfileImageDiv = styled.div`
  float: left;
  display: block;
  height: 40px;
  margin-right: 12px;
  width: 40px;
`;

export const PostContentDiv = styled.div`
  line-height: 19px;
  word-wrap: break-word;
  padding-top: 8px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #1d2129;

  &:after {
    clear: both;
    content: ".";
    display: block;
    font-size: 0;
    height: 0;
    line-height: 0;
    visibility: hidden;
  }
`;

export const PostContentWithImageDiv = styled.div`
  float: ${(props) => props.float || 'left'};
  color: #1d2129;
  line-height: 1.34;
  font-size: 14px;
`;

export const PostContentH2 = styled.h2`
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
  margin-top: 0;
  padding: 12px 0 6px 0;
  white-space: pre-wrap;
`;

export const PostContentExcerpt = styled.div`
  line-height: 19px;
  color: #4b4f56;
  margin: 0;
  padding: 6px 0 0 0;
  white-space: pre-wrap;
`;

export const PostContentLinkDiv = styled.div`
  word-wrap: break-word;
  color: #1d2129;
  font-size: 14px;
  font-weight: bold;
  line-height: 19px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const PostContentLinkDomain = styled.div`
  word-wrap: break-word;
  color: #90949c;
  font-size: 12px;
  line-height: 14px;
  margin-top: 2px;
`;

class Posts extends Component {

  componentDidMount() {
    const { fetchGroupPosts, groupData } = this.props;
    fetchGroupPosts(groupData.id);
  }

  handlePostSubmit = (value) => {
    console.log('value', value);
  }

  postLikeUnlikeHandle = (postId) => {
    const { saveGroupPostLikeUnlike } = this.props;
    saveGroupPostLikeUnlike(postId);
  }

  commentLikeUnlikeHandle = (postId, commentId, isReply, replyCommentId) => {
    const { saveGroupPostCommentLikeUnlike } = this.props;
    saveGroupPostCommentLikeUnlike(postId, commentId, isReply, replyCommentId);
  }

  render() {
    const { groupPosts } = this.props;

    return (
      <div className="w-auto m-2" style={{ flex: 1 }}>
        <PostEditor onSubmit={this.handlePostSubmit} isGroup />
        {groupPosts.map(post => {
          return (
            <SinglePost key={`post-${post.id}`} data={post} postLikeUnlikeHandle={this.postLikeUnlikeHandle} commentLikeUnlikeHandle={this.commentLikeUnlikeHandle} />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.group;
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
