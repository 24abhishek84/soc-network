/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeNavTitle, changeNavMenu, updateMygroupsList } from '../../actions/common';

import PostsListing from '../../components/PostsListing/PostsListing';
import PeopleYouFollow from '../../components/PeopleYouFollow/PeopleYouFollow';

const NewsFeedPage = props => {
  const { match } = props;

  useEffect(() => {
    const { changeNavTitle, changeNavMenu, updateMygroupsList } = props;
    const menus = [];
    const titleSettings = {
      title: 'News Feed',
      icon: '/assets/icons/news-feed.svg'
    }

    changeNavTitle(titleSettings);
    changeNavMenu(menus);
    updateMygroupsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderNewsFeedPaths = (routeName) => {
    if(routeName === '/') {
      return <PostsListing {...props} />;
    } else if(routeName === '/peopleyoufollow') {
      return <PeopleYouFollow {...props} />;
    }
  }

  return (
    renderNewsFeedPaths(match.path)
  );
};

function mapStateToProps(state) {
  return {
    ...state.common
  };
}

export default connect(
  mapStateToProps,
  { changeNavTitle, changeNavMenu, updateMygroupsList }
)(NewsFeedPage);
