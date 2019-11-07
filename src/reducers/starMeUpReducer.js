/* eslint-disable no-case-declarations */
import {
  LOAD_RECENT_RECEIVED_SENT_STARS,
  ADD_LIKE,
  SAVE_COMMENT_LIKE_UNLIKE,
} from '../types/starMeUp';

const initialState = {
  recentStars: [],
  receivedStars: [],
  sentStars: [],
};

export default function common(state = initialState, action = {}) {
  const { recentStars } = state;
  let updatedRecentStars  = [];
  switch (action.type) {
    case LOAD_RECENT_RECEIVED_SENT_STARS:
      return {
        ...state,
        ...action.data
      }
    case ADD_LIKE:
      const newData = state[action.data.type].map((starData) => {
        if(starData.id === action.data.id) {
          return {
            ...starData,
            isMyLiked: !starData.isMyLiked,
            totalLikes: !starData.isMyLiked ? starData.totalLikes + 1 : starData.totalLikes - 1
          }
        } else {
          return starData
        }
      })
      return {
        ...state,
        [action.data.type]: newData
      }
    case SAVE_COMMENT_LIKE_UNLIKE:
      updatedRecentStars = recentStars.map((starPost) => {
        if(starPost.id === action.starPostId) {
          const comments = starPost.comments.map(comment => {
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
            ...starPost,
            comments
          }
        } else {
          return starPost;
        }
      });
      return { ...state, recentStars: updatedRecentStars };
    default: return state;
  }
}