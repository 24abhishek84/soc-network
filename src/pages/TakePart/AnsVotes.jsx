import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const AnsVotes = ({question, votes, questionData, ans, isAnswered, addVote, faCheck, qModel}) => {
  return (
    <div className={`card w-100 ${ans === 'ansB' && 'ml-2'}`}>
        <div className={`card-body w-100 p-0 d-flex align-items-center justify-content-between ${isAnswered ? `border border-success` : ``}`}>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip id={`tooltip-top`} style={{ fontSize: 14 }}>
                {question}
              </Tooltip>
            }
          >
            <div className="d-flex align-items-center w-100 h-100 pl-2 overflow-hidden">
              {question}
            </div>
          </OverlayTrigger>
          {isAnswered ?
            <div className="text-white bg-success p-2 votes d-flex align-items-center h-100">
              <FontAwesomeIcon icon={faCheck} />
              <p className="p-0 m-0 pl-1">{votes}</p>
            </div>
            :
            <div className="d-flex align-items-center text-white bg-success p-2 votes h-100" onClick={() => addVote(questionData, ans)}>
              {votes}
            </div>
          }
        </div>
      </div>
  )
}

export default AnsVotes
