import React from "react";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import {
  faHeart as faHeartSolid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
} from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Image } from "react-bootstrap";
import {
  PostProfileImageDiv,
} from "./../../components/Group/Posts";
import CommentBox from "../../components/CommentBox";

const StarViewModal = ({ show, onHide, starData, starTypeData, handleStarPostLike, starName, handleSaveCommentLikeUnlike }) => {

  const commentLikeUnlikeHandle = (starPostId, commentId, isReply, replyCommentId) => {
    handleSaveCommentLikeUnlike(starPostId, commentId, isReply, replyCommentId);
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`quiz-modal create-take-part`}
    >
      {starData &&
        <React.Fragment>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {starData.sentTo.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <Card className="mx-auto card border-0">
              <Card.Body className="p-0">
                <div className="position-sticky bg-white" style={{ top: 0, zIndex: 1 }}>
                  <div className="p-3 bg-white border-bottom d-flex">
                    <PostProfileImageDiv style={{ height: 104, width: 104 }}>
                      <Image
                        src={starData.sentTo.image}
                        className="shadow rounded"
                        style={{ overflow: "hidden" }}
                      />
                    </PostProfileImageDiv>
                    <div className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center">
                        <h4><b>{starData.sentTo.name}</b></h4>
                        <div className="text-muted">
                          {moment(new Date(starData.createdAt * 1000)).fromNow()}
                        </div>
                      </div>
                      <div className={`${starTypeData.colorClassName} order-card mr-1 mb-2 rounded`}>
                        <div className="text-center d-flex align-items-center p-2">
                          <FontAwesomeIcon icon={starTypeData.icon} style={{ fontSize: 35, width: 35 }} />
                          <h3 style={{ fontSize: 18 }} className="font-weight-bold text-uppercase text-left pl-1">{starTypeData.name}</h3>
                        </div>
                      </div>
                      <div>
                        {starData.comment}
                      </div>
                    </div>
                  </div>
                  <div className="take-part-footer border-top-0 d-flex align-items-center justify-content-between p-0 pl-3 pr-3 pt-2 pb-2">
                    <div>
                      <img src={starData.postedBy.userProfile} alt={starData.postedBy.userName} /><span>Sent By <b>{starData.postedBy.userName}</b></span>
                    </div>
                    <div className="d-flex user-select-none">
                      <span className="mr-2 d-flex align-items-center font-size-20 cursor-pointer">
                        <FontAwesomeIcon icon={faCommentRegular} style={{ color: '#848484' }} />&nbsp;
                        <span style={{ fontSize: 14 }}>{starData.totalComments}</span>
                      </span>
                      <span className="d-flex align-items-center font-size-20 cursor-pointer" onClick={() => handleStarPostLike(starData.id, starName)}>
                        <FontAwesomeIcon icon={starData.isMyLiked ? faHeartSolid : faHeartRegular} color={starData.isMyLiked ? '#b30505ab' : '#848484'} />&nbsp;
                        <span style={{ fontSize: 14 }}>{starData.totalLikes}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <CommentBox comments={starData.comments} user={starData.postedBy} postId={starData.id} commentLikeUnlikeHandle={commentLikeUnlikeHandle} />
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="default" className="text-danger" onClick={onHide}>Close</Button>
          </Modal.Footer>
        </React.Fragment>
      }
    </Modal>
  )
};

export default StarViewModal;