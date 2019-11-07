import styled from "styled-components";
import { Button, Dropdown, Modal, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
const { Header, Body } = Modal;

export const EventHeaderOuter = styled.div`
  border-top: 1px solid #e5e5e5;
  background-color: #f5f6f7;
`;

export const EventButtons = styled(Button)`
  margin: 0px 5px;
  color: #474645 !important;
  background-color: #f7f6f5 !important;
  border-color: #dfdddb !important;
  padding: 5px 10px !important;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-left: 0;
  }

  &:hover {
    background-color: #ece9e7 !important;
    border-color: #d3d1cf !important;
  }
`;

export const SelectAllWrapper = styled.a`
  color: rgb(66, 103, 178);
  cursor: pointer;
  float: right;
  font-size: 12px;
  margin: 0px;
  text-transform: none;
`;

export const EventWrapper = styled(Link)`
  color: #0d54af !important;
`;

export const SelectWrapper = styled.a`
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/KkPboBWRPO_.png);
  background-repeat: no-repeat;
  background-size: auto;
  height: 20px;
  width: 20px;
  cursor: pointer;
`;

export const NonSelectorWrapper = styled(SelectWrapper)`
  background-position: 0 -231px;
  cursor: pointer;
`;

export const SelectorWrapper = styled(SelectWrapper)`
  background-position: 0 -168px;
`;

export const SettingsButton = styled(Dropdown.Toggle)`
  &:hover {
    background-color: #ece9e7 !important;
    border-color: #d3d1cf !important;
  }
`;

export const BigCalendarCss = styled.div`
  .rbc-calendar {
    width: 100% !important;
  }

  .rbc-month-view {
    height: 500px !important;
  }

  .rbc-day-bg:hover {
    background-color: #f5f6f7;
    border-top: 1px solid #3b5998;
  }

  .rbc-date-cell a {
    color: #0d54af !important;
  }
`;


export const StyledH2 = styled.h2`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: normal;
  overflow-wrap: normal;
  text-align: left;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: #474645;
`;

export const StyledH3 = styled.h3`
  color: #8d8b8a;
  font-size: 14px;
  font-weight: lighter;
  line-height: 20px;
  margin: 0;
  padding: 0;
`;

export const MembersInputDiv = styled.div`
  margin-bottom: 12px;
  padding-right: 12px;
  position: relative;
  width: 100%;
  font-size: 12px;
`;

export const StyledLabel = styled.label`
  background: none;
  border: 0;
  height: auto;
  margin: 0;
  padding: 0;
  width: 100%;
  vertical-align: middle;
  outline: 0;
`;

export const MembersListDiv = styled.div`
  border-width: 2px;
  display: flex;
  position: relative;
`;

export const MemberDiv = styled.div`
  z-index: 0;
  border-color: rgb(247, 246, 245);
  height: 32px;
  width: 32px;
  background-color: #ebedf0;
  border: 2px solid #fff;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
`;

export const InviteSpan = styled.span`
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const SuggestedMember = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0;
`;

export const MemberImage = styled.div`
  flex: 0 0 32px;
  height: 32px;
  margin-right: 10px;
  width: 32px;
  border-radius: 50%;
`;

export const MemberName = styled.div`
  flex: 1 1 0px;
  min-width: 0;
`;

export const MemberButtonDiv = styled.div`
  margin-left: 4px;
`;

export const MemberButton = styled.button`
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  line-height: 26px;
  padding: 0 10px;
  border: 1px solid;
  background-color: #f7f6f5;
  border-color: #dfdddb;
  color: #474645;
  border-radius: 17px;
  box-sizing: content-box;
  font-size: 12px;
  font-weight: bold;
  justify-content: center;
  outline: none;
`;

export const CommonBlock = styled.div`
  border-bottom: 1px solid #dfdddb;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 16px;
  width: 100%;
`;

export const MediaPostDiv = styled.div`
  width: 95px;
  margin: 2px;
  display: inline-block;
`;

export const MediaShadow = styled.div`
  box-shadow: 4px 4px #dfdddb;
  transform: scale(0.9);
  border-radius: 8px;
  width: 85px;
`;

export const MainDiv = styled.div`
  width: 270px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: -1.25px 1px 5.025px 2px rgba(0, 0, 0, 0.075);
  height: calc(100vh - 200px);
  top: 140px;
  overflow-y: scroll;
  background-color: rgb(247, 246, 245);

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export const CardHeaderDiv = styled.span`
  font-weight: 600;
  line-height: 18px;
  color: #4b4f56;
  vertical-align: middle;
`;

export const CardHeaderCount = styled.span`
  font-size: 14px;
  font-weight: bold;
  line-height: 24px;
  margin-left: 4px;
  vertical-align: middle;
  color: #90949c;
`;

export const CardItem = styled.span`
  font-weight: ${props => props.fontWeight || "inherit"};
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.fontColor || "#000"};

  &:last-child {
    margin-left: 4px;
  }
`;

export const StyledButton = styled(Button)`
  &:hover {
    background-color: #ece9e7 !important;
    border-color: #d3d1cf !important;
  }
`;

export const HRWrapper = styled.hr`
  margin-top: 0.5rem;
  margin-bottom: 0px !important;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const HeaderWrapper = styled(Header)`
  background-color: #f5f6f7;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 3px 3px 0 0;
  color: #1d2129;
  line-height: 19px;
  padding: 10px 12px !important;
`;

export const BodyWrapper = styled(Body)`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #aaa;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;

export const BlockWrapper = styled.div`
  font-size: 14px;
  line-height: 18px;
`;

export const GroupBlocks = styled.div`
  border-bottom: #dddfe2 1px solid;
`;

export const GroupTitle = styled.div`
  font-weight: 600;
  color: #1d2129;
  cursor: pointer;
  word-break: break-all;
  font-size: 14px;
  line-height: 18px;
`;

export const GroupType = styled.div`
  color: #90949c;
  font-size: 12px;
  line-height: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const RecommendButton = styled(Button)`
  height: 30px !important;
  background-color: #f7f6f5 !important;
  border-color: #dfdddb !important;
  color: #474645 !important;

  &:hover {
    background-color: #ece9e7 !important;
    border-color: #d3d1cf !important;
  }
`;

export const ImageWrapper = styled(Image)`
  height: 60px !important;
  margin-right: 12px !important;
  min-width: 60px !important;
  width: 60px !important;
  border-radius: 10px;
`;

export const ProfileImage = styled.div`
  background: transparent ${props => props.bgimage ? `${`url(${props.bgimage})`}` : 'url("/assets/icons/camera.png")' } 50% no-repeat;
  background-size: ${props => props.bgimage ? 'cover' : 'auto'};
  background-color: rgba(243,246,248,.94);
  margin-top: ${props => !props.mainPage ? '-130px' : 'auto'};
  max-width: 160px;
  max-height: 160px;
  border-radius: 50%;
  width: 100%;
  height: 160px;
  position: relative;
`;

export const FloatingButton = styled.button`
  position:fixed;
  width: 60px;
  height: 60px;
  bottom: ${props => props.bottom ? `${props.bottom}px` : '40px'};
  right: ${props => props.right ? `${props.right}px` : '40px'};
  background-color: #009394;
  color: #FFF;
  border-radius: 50px;
  text-align: center;
  box-shadow: none;
  border: none;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  transition: 0.1s;

  &:active, &:hover {
    background-color: #006270;
  }

  &:focus {
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19) !important;
  }
`;