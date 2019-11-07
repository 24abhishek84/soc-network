import {
  LOAD_TAKE_PART_QUIZ,
  ADD_VOTE,
} from '../types/takePart';

export const loadAllQuizesAction = () => dispatch => {
  dispatch({
    type: LOAD_TAKE_PART_QUIZ,
    data: {
      availableCards: [
        {
          id: 1,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: 'ansA',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
        {
          id: 2,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: '',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
        {
          id: 3,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: '',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
        {
          id: 4,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: 'ansA',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
        {
          id: 5,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: '',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
        {
          id: 6,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: 'ansA',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
        {
          id: 7,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: 'ansA',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
        {
          id: 8,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: '',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
        {
          id: 9,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: 'ansA',
          comments: [],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        }
      ],
      myCards: [
        {
          id: 1,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: 'ansA',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
        {
          id: 2,
          quiz: 'When do you prefer to do the Business Workshop?',
          why: 'Being able to generate and identify more ideas helps companies grow more quickly, stay relevant, and drive new trends.',
          images: [],
          ansA: {
            question: 'Monday 12',
            votes: 150,
          },
          ansB: {
            question: 'Friday 16',
            votes: 50,
          },
          myAns: '',
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
          ],
          createdAt: 1567661136,
          type: 'Foo Proposal',
          postedBy: {
            userId: 1,
            userName: 'Chetan Godhani',
            userProfile: 'https://www.gravatar.com/avatar/72D1A6CDBDFBE17B98B6510E908683C9.jpg',
          },
        },
      ]
    }
  });
}

export const addVoteAction = (id, ans) => dispatch => {
  dispatch({
    type: ADD_VOTE,
    data: {
      id,
      ans
    }
  });
}

export const createTakePartCardAction = () => dispatch => {
  dispatch({
    type: 'SHOW_NOTIFICATION_TOAST',
    data: {
      type: 'success',
      message: 'Card created successfully!'
    }
  })
}