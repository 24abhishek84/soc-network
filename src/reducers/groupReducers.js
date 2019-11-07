import {
  CREATE_GROUP_TITLE,
  RESET_GROUP_STATE,
  RECEIVED_GROUP_DATA,
  FETCH_GROUP_POSTS,
  SAVE_GROUP_POST_LIKE_UNLIKE,
  SAVE_GROUP_POST_COMMENT_LIKE_UNLIKE,
} from './../types/groupTypes';

const initialState = {
  groupData: {},
  groupPosts: []
};

export default function common(state = initialState, action = {}) {
  let groupPosts = [];
  switch (action.type) {
    case CREATE_GROUP_TITLE:
      return { ...state, title: action.title };
    case RESET_GROUP_STATE:
      return {};
    case RECEIVED_GROUP_DATA:
      return {
        ...state,
        groupData: action.data
      };
    case FETCH_GROUP_POSTS:
      return {
        ...state,
        groupPosts: action.data
      };
    case SAVE_GROUP_POST_LIKE_UNLIKE:
      groupPosts = state.groupPosts.map((post) => {
        if(post.id === action.postId) {
          return {
            ...post,
            isLiked: !post.isLiked
          }
        } else {
          return post;
        }
      });
      return { ...state, groupPosts };
    case SAVE_GROUP_POST_COMMENT_LIKE_UNLIKE:
      groupPosts = state.groupPosts.map((post) => {
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
      return { ...state, groupPosts };
    default: return state;
  }
}