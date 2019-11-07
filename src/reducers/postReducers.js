/* eslint-disable no-case-declarations */
import {
  SAVE_POST_LIKE_UNLIKE,
  SAVE_COMMENT_LIKE_UNLIKE,
  GET_ALL_POSTS
} from '../types';

const initialState = {
  postsList: []
};

export default function common(state = initialState, action = {}) {
  let postsList = state.postsList;
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, postsList: action.postsList };
    case SAVE_POST_LIKE_UNLIKE:
      postsList = state.postsList.map((post) => {
        if(post.id === action.postId) {
          return {
            ...post,
            isLiked: !post.isLiked
          }
        } else {
          return post;
        }
      });
      return { ...state, postsList };
    case SAVE_COMMENT_LIKE_UNLIKE:
      postsList = state.postsList.map((post) => {
        if(post.id === action.postId) {
          const comments = post.comments.map(comment => {
            if(comment.commentId === action.commentId) {
              if(!action.isReply) {
                return {
                  ...comment,
                  isLiked: !comment.isLiked
                }
              } else {
                return {
                  ...comment,
                  replies: comment.replies.map(reply => {
                    if(reply.commentId === action.replyCommentId) {
                      return {
                        ...reply,
                        isLiked: !reply.isLiked
                      }
                    } else {
                      return reply;
                    }
                  })
                }
              }
            } else {
              return comment;
            }
          });
          return {
            ...post,
            comments
          }
        } else {
          return post;
        }
      });
      return { ...state, postsList };
    default:
      return state;
  }
}