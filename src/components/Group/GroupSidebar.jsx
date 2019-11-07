import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../../actions/GroupActions";
import "./GroupSidebar.css";
import { FormControl, Image, Form, Button } from "react-bootstrap";
import EImage from "./../../images/users/E.png";
import SImage from "./../../images/users/S.png";
import User1Image from "./../../images/users/user1.jpg";
import {
  StyledH2,
  StyledH3,
  MembersInputDiv,
  StyledLabel,
  MembersListDiv,
  MemberDiv,
  InviteSpan,
  SuggestedMember,
  MemberImage,
  MemberName,
  MemberButtonDiv,
  MemberButton,
  CommonBlock,
  MediaPostDiv,
  MediaShadow,
  MainDiv,
} from "./Group.style";

class GroupSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editDescription: false
    };

    this.shareFile = React.createRef();
  }

  editDescription = () => {
    this.setState({
      editDescription: true
    });
  };

  render() {
    const { editDescription } = this.state;

    return (
      <MainDiv className="position-sticky">
        <CommonBlock className="about-sidebar">
          <StyledH2 className="mb-3">About</StyledH2>
          <div className="mb-3">
            <div className="mb-2 d-flex justify-content-between">
              <StyledH3>Description</StyledH3>
              {!editDescription && (
                <div
                  className="d-none about-display"
                  style={{ cursor: 'pointer' }}
                  onClick={this.editDescription}
                >
                  Edit
                </div>
              )}
            </div>
            {!editDescription ? (
              <div>Plan, share files and work together on Social App.</div>
            ) : (
              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    rows="3"
                    defaultValue="Plan, share files and work together on Social App."
                  />
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    variant="primary"
                    onClick={() => this.setState({ editDescription: false })}
                  >
                    Confirm
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => this.setState({ editDescription: false })}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            )}
          </div>
          <div className="mb-3">
            <div className="mb-2">
              <div className="mb-2 d-flex justify-content-between">
                <StyledH3>Members</StyledH3>
                <div className="d-none about-display" style={{ cursor: 'pointer' }}>
                  <span>Import</span>
                </div>
              </div>
              <MembersInputDiv className="mb-2">
                <i className="icon plus-icon" alt="" />
                <span className="span-position">
                  <StyledLabel htmlFor="members">
                    <FormControl
                      className="members-input members-padding"
                      type="text"
                      id="members"
                      placeholder="Find and add members"
                    />
                  </StyledLabel>
                </span>
              </MembersInputDiv>
              <MembersListDiv>
                <MemberDiv>
                  <Image src={EImage} width={32} height={32} alt="Banner2" />
                </MemberDiv>
                <MemberDiv>
                  <Image src={SImage} width={32} height={32} alt="Banner2" />
                </MemberDiv>
                <MemberDiv>
                  <Image
                    src={User1Image}
                    width={32}
                    height={32}
                    alt="Banner2"
                  />
                </MemberDiv>
              </MembersListDiv>
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2 d-flex justify-content-between">
              <StyledH3>Share An Invitation Link</StyledH3>
              <div className="d-none" style={{ cursor: 'pointer' }}>
                <span>See All</span>
              </div>
            </div>
            <div>
              <InviteSpan>
                <div className="members-input copy-padding">
                  https://fb.me/g/3QTZ0c7dv/PncEMrqX
                  <i className="icon copy-icon" alt="" />
                </div>
              </InviteSpan>
            </div>
          </div>
          <div className="mb-3">
            <div className="mb-2">
              <StyledH3>Suggested Members</StyledH3>
            </div>
            <div>
              <div>
                <SuggestedMember>
                  <MemberImage>
                    <Image src={EImage} width={32} height={32} alt="Banner2" />
                  </MemberImage>
                  <MemberName>John Doe</MemberName>
                  <MemberButtonDiv>
                    <MemberButton>Add</MemberButton>
                  </MemberButtonDiv>
                </SuggestedMember>
                <SuggestedMember>
                  <MemberImage>
                    <Image src={EImage} width={32} height={32} alt="Banner2" />
                  </MemberImage>
                  <MemberName>John Doe</MemberName>
                  <MemberButtonDiv>
                    <MemberButton>Add</MemberButton>
                  </MemberButtonDiv>
                </SuggestedMember>
                <SuggestedMember>
                  <MemberImage>
                    <Image src={EImage} width={32} height={32} alt="Banner2" />
                  </MemberImage>
                  <MemberName>John Doe</MemberName>
                  <MemberButtonDiv>
                    <MemberButton>Add</MemberButton>
                  </MemberButtonDiv>
                </SuggestedMember>
              </div>
            </div>
          </div>
        </CommonBlock>
        <CommonBlock className="shared-sidebar">
          <StyledH2 className="mb-3">Shared</StyledH2>
          <div className="mb-3">
            <div className="mb-2 d-flex justify-content-between">
              <StyledH3>Files in Posts</StyledH3>
              <div className="d-none shared-display" style={{ cursor: 'pointer' }}>
                <span>See All</span>
              </div>
            </div>
            <div className="mb-2">
              Share a file in this group to get feedback on your work and keep
              team files organised in one place.
            </div>
            <div
              className="upload-button"
              onClick={() => this.shareFile.current.click()}
            >
              <i alt="" />Upload A File
            </div>
            <input
              type="file"
              name="share_file"
              id="share_file"
              className="d-none"
              ref={this.shareFile}
            />
          </div>
          <div className="mb-3">
            <div className="mb-2 d-flex justify-content-between">
              <StyledH3>Media in Posts</StyledH3>
              <div className="d-none shared-display" style={{ cursor: 'pointer' }}>
                <span>See All</span>
              </div>
            </div>
            <div>
              <div>
                <MediaPostDiv>
                  <div>
                    <MediaShadow className="media-desc">
                      <Image
                        src={EImage}
                        width={85}
                        height={85}
                        alt="Banner2"
                      />
                    </MediaShadow>
                    <div className="media-hover">
                      <span className=" _2iep _2ier">June 22, 2019</span>
                    </div>
                  </div>
                </MediaPostDiv>
                <MediaPostDiv>
                  <div>
                    <MediaShadow className="media-desc">
                      <Image
                        src={EImage}
                        width={85}
                        height={85}
                        alt="Banner2"
                      />
                    </MediaShadow>
                    <div className="media-hover">
                      <span className=" _2iep _2ier">June 22, 2019</span>
                    </div>
                  </div>
                </MediaPostDiv>
                <MediaPostDiv>
                  <div>
                    <MediaShadow className="media-desc">
                      <Image
                        src={EImage}
                        width={85}
                        height={85}
                        alt="Banner2"
                      />
                    </MediaShadow>
                    <div className="media-hover">
                      <span className=" _2iep _2ier">June 22, 2019</span>
                    </div>
                  </div>
                </MediaPostDiv>
                <MediaPostDiv>
                  <div>
                    <MediaShadow className="media-desc">
                      <Image
                        src={EImage}
                        width={85}
                        height={85}
                        alt="Banner2"
                      />
                    </MediaShadow>
                    <div className="media-hover">
                      <span className=" _2iep _2ier">June 22, 2019</span>
                    </div>
                  </div>
                </MediaPostDiv>
                <MediaPostDiv>
                  <div>
                    <MediaShadow className="media-desc">
                      <Image
                        src={EImage}
                        width={85}
                        height={85}
                        alt="Banner2"
                      />
                    </MediaShadow>
                    <div className="media-hover">
                      <span className=" _2iep _2ier">June 22, 2019</span>
                    </div>
                  </div>
                </MediaPostDiv>
                <MediaPostDiv>
                  <div>
                    <MediaShadow className="media-desc">
                      <Image
                        src={EImage}
                        width={85}
                        height={85}
                        alt="Banner2"
                      />
                    </MediaShadow>
                    <div className="media-hover">
                      <span className=" _2iep _2ier">June 22, 2019</span>
                    </div>
                  </div>
                </MediaPostDiv>
                <MediaPostDiv>
                  <div>
                    <MediaShadow className="media-desc">
                      <Image
                        src={EImage}
                        width={85}
                        height={85}
                        alt="Banner2"
                      />
                    </MediaShadow>
                    <div className="media-hover">
                      <span className=" _2iep _2ier">June 22, 2019</span>
                    </div>
                  </div>
                </MediaPostDiv>
              </div>
            </div>
          </div>
        </CommonBlock>
      </MainDiv>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupSidebar);
