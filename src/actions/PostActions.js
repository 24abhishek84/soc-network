import { GET_ALL_POSTS, SAVE_POST_LIKE_UNLIKE, SAVE_COMMENT_LIKE_UNLIKE } from '../types';

export const getmyPostsList = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_POSTS,
    postsList: [
      {
        id: 1,
        user: {
          userId: 1,
          userName: 'Chetan Godhani',
          userProfile: 'http://localhost:3000/minion.jpeg',
        },
        isLiked: true,
        createdAt: 1567661136,
        group: {
          groupId: 1,
          groupName: 'Social Group',
        },
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
        group: {
          groupId: 1,
          groupName: 'Social Group',
        },
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
        group: {
          groupId: 1,
          groupName: 'Social Group',
        },
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
  });
};

export const savePostLikeUnlike = (postId) => (dispatch) => {
  dispatch({
    type: SAVE_POST_LIKE_UNLIKE,
    postId
  });
};

export const saveCommentLikeUnlike = (postId, commentId, isReply, replyCommentId) => (dispatch) => {
  dispatch({
    type: SAVE_COMMENT_LIKE_UNLIKE,
    postId,
    commentId,
    isReply,
    replyCommentId
  });
};