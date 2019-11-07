import React, { Fragment, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledUl, CommonImageDiv, StyledMenuImage, StyledListItemLabel } from './Sidebar.style';

const menuItems = [
  { path: '/', key: 'news_feed', label: 'News Feed', imgUrl: '/assets/icons/news-feed.svg', isImage: true },
  { path: '/events', key: 'events', label: 'Events', imgUrl: '/assets/icons/event.svg', isImage: true },
  { path: '/groups', key: 'groups', label: 'Groups', imgUrl: '/assets/icons/group.png', isImage: true },
  { path: '/star-me-up', key: 'StarMeUp', label: 'StarMeUp (3)', imgUrl: '/assets/icons/appreciation.svg', isImage: true },
  { path: '/take-part', key: 'takePart', label: 'Take Part (3)', imgUrl: '/assets/icons/take-part.png', isImage: true },
  { path: '/betterme', key: 'betterme', label: 'BetterMe', imgUrl: '/assets/icons/improvement.png', isImage: true },
  { path: '/people-directory', key: 'people_directory', label: 'People Directory', imgUrl: '/assets/icons/people-directory.svg', isImage: true },
  // { path: '/', key: 'saved', label: 'Saved', imgUrl: 'subMenuListItem.png', bgPosition: '-45px -535px', isImage: false },
  // { path: '/', key: 'notes', label: 'Notes', imgUrl: 'subMenuListItem.png', bgPosition: '0 -712px', isImage: false },
  { path: '/follow-coworkers', key: 'follow_coworkers', label: 'Follow Coworkers', imgUrl: '/assets/icons/follow-coworkers.png', isImage: true },
  // { path: '/', key: 'org_chart', label: 'Org Chart', imgUrl: 'subMenuListItem.png', bgPosition: '-33px -712px', isImage: false },
  // { path: '/', key: 'interations', label: 'Interations', imgUrl: 'helperIcons.png', bgPosition: '0 -292px', isImage: false },
];

const ExploreMenu = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <StyledHeader className="font-weight-bold mt-3">Explore</StyledHeader>
      </div>
      <StyledUl>
        {menuItems.map(({ path, key, bgPosition, label, imgUrl, isImage }, index) => {
          // if (index <= (showMore ? 10 : 3)) {
            return (
              <li key={key}>
                <Link to={path} style={{ display: 'block', padding: '8px 0 8px 0', textDecoration: 'none' }}>
                  <div className="d-flex flex-row justify-content-start">
                    {isImage ?
                      <CommonImageDiv>
                        <img src={imgUrl} width="32" height="32" alt="" />
                      </CommonImageDiv>
                      :
                      <StyledMenuImage bgPosition={bgPosition} imgUrl={imgUrl}></StyledMenuImage>
                    }
                    <div className="d-flex flex-row align-self-center overflow-hidden text-nowrap">
                      <StyledListItemLabel className="text-nowrap overflow-hidden d-block font-weight-bold w-100">
                        {label}
                      </StyledListItemLabel>
                    </div>
                  </div>
                </Link>
              </li>
            );
          // }

          // return null;
        })}
        {/* <Button style={{ padding: 0, margin: 5 }} variant="link" onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Show More'}</Button> */}
      </StyledUl>
    </Fragment>
  );
};

export default ExploreMenu;