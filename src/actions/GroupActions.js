import {
  CREATE_GROUP_TITLE,
  RESET_GROUP_STATE,
  RECEIVED_GROUP_DATA,
  FETCH_GROUP_POSTS,
  SAVE_GROUP_POST_LIKE_UNLIKE,
  SAVE_GROUP_POST_COMMENT_LIKE_UNLIKE
} from './../types/groupTypes';

export const createGrpTitleAction = (title) => ({
  type: CREATE_GROUP_TITLE,
  title
});

export const createGrpTitle = (title) => (dispatch) => {
  dispatch(createGrpTitleAction(title));
};

export const resetGrpData = () => (dispatch) => {
  dispatch({
    type: RESET_GROUP_STATE,
  });
};

export const receivedGroupData = (data) => (dispatch) => {
  dispatch({
    type: RECEIVED_GROUP_DATA,
    data
  });
};

export const fetchGroupData = (groupId) => (dispatch) => {
  //  return fetch(`https://newsapi.org/v1/articles? 
  //           source=${channel}&apiKey=${MY_API_KEY}`)
  //         .then(
  //           response => response.json(),
  //           error => console.log('An error occurred.', error),
  //         )
  //         .then((json) => {
  //           dispatch(receivedPosts(json));
  //         });
  if(groupId === 1) {
    dispatch(
      receivedGroupData({
        id: groupId,
        name: `Social App - ${groupId}`,
        type: 'closed', 
        bannerImage: 'https://placeholder.com/wp-content/uploads/2019/06/stock-images.png'
      })
    );
  } else {
    dispatch(
      receivedGroupData({
        id: groupId,
        name: `Social App - ${groupId}`,
        type: 'closed',
        bannerImage: 'https://dummyimage.com/1920x1080/000/fff'
      })
    );
  }
};

export const fetchGroupPosts = (groupId) => dispatch => {
  dispatch({
    type: FETCH_GROUP_POSTS,
    data: [
      {
        id: 1,
        user: {
          userId: 1,
          userName: 'Chetan Godhani',
          userProfile: 'http://localhost:3000/minion.jpeg',
        },
        isLiked: true,
        createdAt: 1567661136,
        images: [
          {
            imageId: 1,
            path: '/postimage.jpeg',
          },
          {
            imageId: 2,
            path: '/nature.jpg',
          },
          {
            imageId: 3,
            path: '/postimage.jpeg',
          },
          {
            imageId: 4,
            path: '/nature.jpg',
          },
          {
            imageId: 5,
            path: '/nature1.jpeg',
          },
        ],
        videos: [
          {
            videoId: 1,
            path: '/demo.mp4'
          },
          {
            videoId: 2,
            path: '/demo2.mp4'
          }
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        comments: [
          {
            commentId: 1,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'http://localhost:3000/minion.jpeg',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            createdAt: 1567661136,
            replies: [
              {
                commentId: 2,
                isLiked: false,
                userId: 1,
                userName: 'Chetan Godhani',
                userProfile: 'http://localhost:3000/minion.jpeg',
                comment: 'Test 2',
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
          },
          {
            commentId: 2,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'http://localhost:3000/minion.jpeg',
            comment: 'Test 2',
            createdAt: 1567661136,
            replies: []
          },
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
          },
          {
            commentId: 4,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'http://localhost:3000/minion.jpeg',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            createdAt: 1567661136,
            replies: []
          },
          {
            commentId: 5,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'http://localhost:3000/minion.jpeg',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            createdAt: 1567661136,
            replies: []
          }
        ]
      },
      {
        id: 2,
        user: {
          userId: 1,
          userName: 'Chetan Godhani',
          userProfile: 'http://localhost:3000/minion.jpeg',
        },
        isLiked: true,
        createdAt: 1567661136,
        images: [
          {
            imageId: 1,
            path: 'https://via.placeholder.com/1500',
          }
        ],
        videos: [],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        comments: [
          {
            commentId: 6,
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
        user: {
          userId: 1,
          userName: 'Chetan Godhani',
          userProfile: 'http://localhost:3000/minion.jpeg',
        },
        isLiked: false,
        createdAt: 1567661136,
        images: [],
        videos: [
          {
            videoId: 1,
            path: '/demo.mp4'
          },
          {
            videoId: 2,
            path: '/demo2.mp4'
          }
        ],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        comments: [
          {
            commentId: 7,
            isLiked: false,
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'http://localhost:3000/minion.jpeg',
            comment: 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            createdAt: 1567661136,
            replies: []
          }
        ]
      }
    ]
  })
}

export const saveGroupPostLikeUnlike = (postId) => (dispatch) => {
  dispatch({
    type: SAVE_GROUP_POST_LIKE_UNLIKE,
    postId
  });
};

export const saveGroupPostCommentLikeUnlike = (postId, commentId, isReply, replyCommentId) => (dispatch) => {
  dispatch({
    type: SAVE_GROUP_POST_COMMENT_LIKE_UNLIKE,
    postId,
    commentId,
    isReply,
    replyCommentId
  });
};