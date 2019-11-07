import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, CommonImageDiv, StyledListItemLabel, StyledUl } from './Sidebar.style';

const members = [
  {
    id: 1,
    path: '/profile/1',
    key: 'safaomri',
    label: 'Safa Omri',
    imgUrl: '/assets/icons/user-female.png',
    height: '32px',
    width: '32px'
  },
  {
    id: 2,
    path: '/profile/2',
    key: 'elenakalimera',
    label: 'Elena Kalimera',
    imgUrl: '/assets/icons/user-female.png',
    height: '32px',
    width: '32px'
  }
];

const PeopleList = () => {
  return members.map(({ path, key, label, imgUrl, height, width }) => {
    return (
      <li key={key}>
        <Link to={path} style={{ display: 'block', padding: '8px 0 8px 0', textDecoration: 'none' }}>
          <div className="d-flex flex-row justify-content-start">
            <CommonImageDiv>
              <img src={imgUrl} height={height} width={width} alt="" />
            </CommonImageDiv>
            <div className="d-flex flex-row align-self-center overflow-hidden text-nowrap">
              <StyledListItemLabel className="text-nowrap overflow-hidden font-weight-bold w-100">
                {label}
              </StyledListItemLabel>
            </div>
          </div>
        </Link>
      </li>
    );
  });
};

const PeopleMenu = () => {
  return (
    <Fragment>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <StyledHeader className="font-weight-bold mt-2">People</StyledHeader>
      </div>
      <StyledUl>{PeopleList()}</StyledUl>
    </Fragment>
  );
};

export default PeopleMenu;
