import {
  LOAD_COWORKERS
} from '../types/followCoworkers';

export const loadCoworkersAction = () => dispatch => {
  dispatch({
    type: LOAD_COWORKERS,
    data: [
      {
        id: 1,
        name: 'Chetan Godhani',
        followedBy: [],
        isFollowed: false,
        profileImage: 'http://localhost:3000/FollowCoworkers.png',
      },
      {
        id: 2,
        name: 'Abhishek Leuva',
        followedBy: [],
        isFollowed: true,
        profileImage: 'http://localhost:3000/FollowCoworkers.png',
      },
      {
        id: 3,
        name: 'Test 1',
        followedBy: [],
        isFollowed: false,
        profileImage: 'http://localhost:3000/FollowCoworkers.png',
      },
      {
        id: 4,
        name: 'Test 2',
        followedBy: [],
        isFollowed: false,
        profileImage: 'http://localhost:3000/FollowCoworkers.png',
      },
      {
        id: 5,
        name: 'Test 3',
        followedBy: [],
        isFollowed: false,
        profileImage: 'http://localhost:3000/FollowCoworkers.png',
      },
      {
        id: 6,
        name: 'Test 4',
        followedBy: [],
        isFollowed: true,
        profileImage: 'http://localhost:3000/FollowCoworkers.png',
      }
    ]
  })
}