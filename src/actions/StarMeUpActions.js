import {
  LOAD_RECENT_RECEIVED_SENT_STARS,
  ADD_LIKE,
  SAVE_COMMENT_LIKE_UNLIKE,
} from '../types/starMeUp';

export const loadAllStarsAction = () => dispatch => {
  dispatch({
    type: LOAD_RECENT_RECEIVED_SENT_STARS,
    data: {
      recentStars: [
        {
          id: 1,
          sentTo: {
            userId: 1,
            name: 'Falana Dhikana',
            image: 'https://placeimg.com/104/104/people',
          },
          comment: 'An influential economist and former monetary policy make An influential economist and former monetary policy make',
          createdAt: 1567661136,
          type: 'kudos',
          totalLikes: 14,
          totalComments: 17,
          isMyLiked: true,
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
          comments: [
            {
              commentId: 3,
              isLiked: false,
              userId: 1,
              userName: 'Chetan Godhani',
              userProfile: 'http://localhost:3000/minion.jpeg',
              comment: 'Test 3',
              createdAt: 1567661136,
              replies: [
                {
                  commentId: 2,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
                {
                  commentId: 3,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
              ]
            }
          ]
        },
        {
          id: 2,
          sentTo: {
            userId: 1,
            name: 'Falana Dhikana',
            image: 'https://placeimg.com/104/104/people',
          },
          comment: 'An influential economist and former monetary policy make An influential economist and former monetary policy make',
          createdAt: 1567661136,
          type: 'act_ethically',
          totalLikes: 98,
          totalComments: 45,
          isMyLiked: false,
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
          comments: [
            {
              commentId: 3,
              isLiked: false,
              userId: 1,
              userName: 'Chetan Godhani',
              userProfile: 'http://localhost:3000/minion.jpeg',
              comment: 'Test 3',
              createdAt: 1567661136,
              replies: [
                {
                  commentId: 2,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
                {
                  commentId: 3,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
              ]
            }
          ]
        },
        {
          id: 3,
          sentTo: {
            userId: 1,
            name: 'Falana Dhikana',
            image: 'https://placeimg.com/104/104/people',
          },
          comment: 'An influential economist and former monetary policy make An influential economist and former monetary policy make',
          createdAt: 1567661136,
          type: 'team_player',
          totalLikes: 23,
          totalComments: 45,
          isMyLiked: true,
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
          comments: [
            {
              commentId: 3,
              isLiked: false,
              userId: 1,
              userName: 'Chetan Godhani',
              userProfile: 'http://localhost:3000/minion.jpeg',
              comment: 'Test 3',
              createdAt: 1567661136,
              replies: [
                {
                  commentId: 2,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
                {
                  commentId: 3,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
              ]
            }
          ]
        },
        {
          id: 4,
          sentTo: {
            userId: 1,
            name: 'Falana Dhikana',
            image: 'https://placeimg.com/104/104/people',
          },
          comment: 'An influential economist and former monetary policy make An influential economist and former monetary policy make',
          createdAt: 1567661136,
          type: 'constantly_innovate',
          totalLikes: 21,
          totalComments: 67,
          isMyLiked: false,
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
          comments: [
            {
              commentId: 3,
              isLiked: false,
              userId: 1,
              userName: 'Chetan Godhani',
              userProfile: 'http://localhost:3000/minion.jpeg',
              comment: 'Test 3',
              createdAt: 1567661136,
              replies: [
                {
                  commentId: 2,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
                {
                  commentId: 3,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
              ]
            }
          ]
        },
        {
          id: 5,
          sentTo: {
            userId: 1,
            name: 'Falana Dhikana',
            image: 'https://placeimg.com/104/104/people',
          },
          comment: 'An influential economist and former monetary policy make An influential economist and former monetary policy make',
          createdAt: 1567661136,
          type: 'excellence_in_your_work',
          totalLikes: 67,
          totalComments: 23,
          isMyLiked: true,
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
          comments: [
            {
              commentId: 3,
              isLiked: false,
              userId: 1,
              userName: 'Chetan Godhani',
              userProfile: 'http://localhost:3000/minion.jpeg',
              comment: 'Test 3',
              createdAt: 1567661136,
              replies: [
                {
                  commentId: 2,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
                {
                  commentId: 3,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
              ]
            }
          ]
        },
        {
          id: 6,
          sentTo: {
            userId: 1,
            name: 'Falana Dhikana',
            image: 'https://placeimg.com/104/104/people',
          },
          comment: 'An influential economist and former monetary policy make An influential economist and former monetary policy make',
          createdAt: 1567661136,
          type: 'think_big',
          totalLikes: 72,
          totalComments: 71,
          isMyLiked: false,
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
          comments: [
            {
              commentId: 3,
              isLiked: false,
              userId: 1,
              userName: 'Chetan Godhani',
              userProfile: 'http://localhost:3000/minion.jpeg',
              comment: 'Test 3',
              createdAt: 1567661136,
              replies: [
                {
                  commentId: 2,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
                {
                  commentId: 3,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
              ]
            }
          ]
        },
        {
          id: 7,
          sentTo: {
            userId: 1,
            name: 'Falana Dhikana',
            image: 'https://placeimg.com/104/104/people',
          },
          comment: 'An influential economist and former monetary policy make An influential economist and former monetary policy make',
          createdAt: 1567661136,
          type: 'have_fun',
          totalLikes: 48,
          totalComments: 98,
          isMyLiked: true,
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
          comments: [
            {
              commentId: 3,
              isLiked: false,
              userId: 1,
              userName: 'Chetan Godhani',
              userProfile: 'http://localhost:3000/minion.jpeg',
              comment: 'Test 3',
              createdAt: 1567661136,
              replies: [
                {
                  commentId: 2,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
                {
                  commentId: 3,
                  isLiked: false,
                  userId: 1,
                  userName: 'Chetan Godhani',
                  userProfile: 'http://localhost:3000/minion.jpeg',
                  comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                  createdAt: 1567661136,
                },
              ]
            }
          ]
        },
      ],
      receivedStars: [],
      sentStars: []
    }
  });
}

export const addStarLikeAction = (id, type) => dispatch => {
  dispatch({
    type: ADD_LIKE,
    data: {
      id,
      type
    }
  });
}

export const saveCommentLikeUnlike = (starPostId, commentId, isReply, replyCommentId) => (dispatch) => {
  dispatch({
    type: SAVE_COMMENT_LIKE_UNLIKE,
    starPostId,
    commentId,
    isReply,
    replyCommentId
  });
};

export const createTakePartCardAction = () => dispatch => {
  dispatch({
    type: 'SHOW_NOTIFICATION_TOAST',
    data: {
      type: 'success',
      totalLikes: 50,
      totalComments: 150,
      isMyLiked: true,
      message: 'Card created successfully!'
    }
  })
}