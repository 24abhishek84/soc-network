import React from "react";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import './TakePart.css';
import AnsVotes from "./AnsVotes";
import CommentBox from "../../components/CommentBox";

const QuestionModal = ({ show, onHide, quizData, addVote, faCheck }) => {

  const commentLikeUnlikeHandle = (postId, commentId, isReply, replyCommentId) => {
    console.log(postId, commentId, isReply, replyCommentId);
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`quiz-modal`}
    >
      {quizData &&
        <React.Fragment>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {quizData.type}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0">
            <div className="position-sticky bg-white" style={{ top: 0, zIndex: 1 }}>
              <div className="p-3 banner-que">
                <h2>{quizData.quiz}</h2>
              </div>
              <div className="p-0 pl-3 pr-3 dates">
                <div className="start">
                  <strong>{moment(new Date(quizData.createdAt * 1000)).fromNow()}</strong>
                </div>
              </div>
              <div className="p-3 banner-que">
                <p>{quizData.why}</p>
              </div>
              <div className="p-0 pl-3 pb-3 pr-3 d-flex align-items-center justify-content-between">
                {quizData.myAns !== '' ?
                  <AnsVotes question={quizData[quizData.myAns].question} votes={quizData[quizData.myAns].votes} questionData={quizData} ans={quizData.myAns} isAnswered={true} faCheck={faCheck} addVote={addVote} qModel />
                  :
                  <React.Fragment>
                    <AnsVotes question={quizData.ansA.question} votes={quizData.ansA.votes} questionData={quizData} ans={`ansA`} isAnswered={false} addVote={addVote} qModel />
                    <AnsVotes question={quizData.ansB.question} votes={quizData.ansB.votes} questionData={quizData} ans={`ansB`} isAnswered={false} addVote={addVote} qModel />
                  </React.Fragment>
                }
              </div>
            </div>
            <div className="detailBox">
              <div className="p-0">
                <ul className="commentList">
                  <CommentBox comments={quizData.comments} user={quizData.postedBy} postId={quizData.id} commentLikeUnlikeHandle={commentLikeUnlikeHandle} />
                </ul>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="font-weight-bold border-0 rounded-0"
              type="submit"
              variant="primary"
              size="lg"
              onClick={onHide}
            >
              Follow
            </Button>
          </Modal.Footer>
        </React.Fragment>
      }
    </Modal>
  )
};

export default QuestionModal;