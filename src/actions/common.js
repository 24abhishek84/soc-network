import { UPDATE_NAV_TITLE, UPDATE_NAV_MENU, UPDATE_SHOW, UPDATE_MY_GROUP } from '../types';

export const changeNavTitle = (title) => (dispatch) => {
  dispatch({
    type: UPDATE_NAV_TITLE,
    title
  });
};

// Update Nav Menu
export const updateNavMenu = (menu) => ({
  type: UPDATE_NAV_MENU,
  menu
});

export const changeNavMenu = (menu) => (dispatch) => {
  dispatch(updateNavMenu(menu));
};

export const onPressEventCreate = (show) => ({
  type: UPDATE_SHOW,
  show
});

export const updateMygroupsList = () => (dispatch) => {
  const groupsList = [
    {
      group_id: 1,
      group_title: 'Social Media',
      icon_img: '',
      cover_img: '',
      total_members: 99,
      group_type: {
        id: 1,
        name: 'Team	& Projects'
      }
    },
    {
      group_id: 2,
      group_title: 'Application Flow',
      icon_img: '',
      cover_img: '',
      total_members: 99,
      group_type: {
        id: 1,
        name: 'Team	& Projects'
      }
    },
    {
      group_id: 3,
      group_title: 'Project Reporting',
      icon_img: '',
      cover_img: '',
      total_members: 99,
      group_type: {
        id: 1,
        name: 'Team	& Projects'
      }
    },
    {
      group_id: 4,
      group_title: 'Product Demo',
      icon_img: '',
      cover_img: '',
      total_members: 99,
      group_type: {
        id: 1,
        name: 'Team	& Projects'
      }
    }
  ];

  dispatch({
    type: UPDATE_MY_GROUP,
    groupsList
  });
};
