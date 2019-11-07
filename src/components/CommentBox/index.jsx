import React, { useRef, useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";

const CommentBoxDiv = styled.div`
  min-height: 35px;

  .comment-box-editable {
    min-height: 35px;
    border-radius: 25px;
    background-color: #F4F4F6;
    outline: none;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .comment-box-editable:empty::before {
    content: attr(placeholder);
    display: block;
    color: rgb(151, 159, 180);
    padding-top: 2px;
  }

  img {
    top: 0;
  }
`;

const CommentBox = ({ comments, user, commentLikeUnlikeHandle, postId }) => {
  const sendCommentRef = useRef(null);
  let scrollToCommentRef = useRef();
  const [replyingId, setReplyingId] = useState([]);
  const [newAddedId, setNewAddedId] = useState(undefined);

  useEffect(() => {
    if (newAddedId || newAddedId === 0) {
      if (scrollToCommentRef.current) {
        window.scrollTo({
          behavior: "smooth",
          top: scrollToCommentRef.current.offsetParent.offsetTop + scrollToCommentRef.current.offsetTop - 100
        });
        scrollToCommentRef.current.childNodes[1].focus()
      }
    }
  }, [newAddedId, scrollToCommentRef]);

  const readMessage = (event, isReply = false, commentId, replyId) => {
    if (event.keyCode === 13 && !event.shiftKey) {
      event.preventDefault();
      const comment = sendCommentRef.current.innerText;
      if(comment !== '') {
        console.log('comment', comment, isReply, commentId, replyId);
        sendCommentRef.current.innerText = '';
      }
    }
  }

  const addRemoveReplyingId = (commentId, replyId, replyingName = '') => {
    // {
    //   isReply: false,
    //   commentId: undefined
    //   replyId: undefined
    // }
    const isReply = commentId && replyId ? true : false;
    let findReplyIndex = replyingId.findIndex(x => x.commentId === commentId);
    if(findReplyIndex !== -1) {
      if(replyingId[findReplyIndex].replyId === replyId) {
        setReplyingId(replyingId.filter((x, index) => index !== findReplyIndex));
        setNewAddedId(undefined);
      } else {
        setReplyingId(replyingId.map((x, index) => {
          if(index === findReplyIndex) {
            setNewAddedId(commentId);
            return {
              ...x,
              replyId,
              isReply,
              replyingName: replyingName !== '' ? `@${replyingName} ` : ''
            }
          } else {
            return x;
          }
        }));
      }
    } else {
      setNewAddedId(commentId);
      setReplyingId([...replyingId, { isReply, commentId, replyId, replyingName: replyingName !== '' ? `@${replyingName} ` : '' }]);
    }
  }

  return (
    <React.Fragment>
      <div className="take-part-footer d-flex align-items-center justify-content-between border-top p-0 pl-3 pr-3 pt-2 pb-2">
        <CommentBoxDiv className="position-relative w-100">
          <div id="comment-content-editable" className="comment-box-editable ml-5 pl-3 pr-3 pt-2 pb-2 d-flex font-size-14 flex-column" contentEditable={true} placeholder="Write a comment..." onKeyDown={readMessage} ref={sendCommentRef} />
          <Image className="rounded-circle position-absolute" src={user.userProfile} />
        </CommentBoxDiv>
      </div>
      <div className="border-top p-0 pl-3 pr-3 pb-3">
        <div className="take-part-footer p-0 border-0 font-size-13" style={{ lineHeight: 1.3 }}>
          {comments.map((comment, index) => {
            let foundIndex = replyingId.findIndex(x => x.commentId === comment.commentId);
            return (
              <div className="d-flex pt-3" key={`comment-${comment.commentId}`}>
                <Image className="rounded-circle commentIcon shadow-sm" src={comment.userProfile} />
                <div className="w-100">
                  <div>
                    <span className="text-dark font-weight-bold cursor-pointer user-select-none">{comment.userName}</span>
                    <span className="text-body pl-2">{comment.comment}</span>
                  </div>
                  <div className="font-weight-bold pt-1">
                    <span className={`cursor-pointer user-select-none ${comment.isLiked ? 'text-primary' : 'text-dark'}`} onClick={() => commentLikeUnlikeHandle(postId, comment.commentId, false, undefined)}>{comment.isLiked ? 'Unlike' : 'Like'}</span> · <span className="cursor-pointer user-select-none text-dark" onClick={() => addRemoveReplyingId(comment.commentId)}>Reply</span>
                  </div>
                  {comment.replies.map((reply, repliedIndex) => {
                    return (
                      <div className="d-flex pt-3" key={`reply-${repliedIndex}-${reply.commentId}`}>
                        <Image className="rounded-circle commentIcon shadow-sm replyIcon" src={reply.userProfile} />
                        <div>
                          <div>
                            <span className="text-dark font-weight-bold cursor-pointer user-select-none">{reply.userName}</span>
                            <span className="text-body pl-2">{reply.comment}</span>
                          </div>
                          <div className="font-weight-bold pt-1">
                            <span className={`cursor-pointer user-select-none ${reply.isLiked ? 'text-primary' : 'text-dark'}`} onClick={() => commentLikeUnlikeHandle(postId, comment.commentId, true, reply.commentId)}>{reply.isLiked ? 'Unlike' : 'Like'}</span> · <span className="cursor-pointer user-select-none text-dark" onClick={() => addRemoveReplyingId(comment.commentId, reply.commentId, reply.userName)}>Reply</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {foundIndex !== -1 &&
                    <CommentBoxDiv
                      className="d-flex pt-3"
                      id={'scrollToCommentRef'}
                      // ref={el => {
                      //   if(newAddedId && index === newAddedId) {
                      //     scrollToCommentRef = el;
                      //   }
                      //   return;
                      // }}
                      ref={scrollToCommentRef}
                    >
                      <Image className="rounded-circle commentIcon shadow-sm replyIcon" src={comment.userProfile} />
                      <div id="comment-content-editable" className="comment-box-editable w-100 pl-3 pr-3 pt-2 pb-2 d-flex font-size-14 flex-column" contentEditable={true} placeholder="Write a comment..." onKeyDown={(event) => readMessage(event, true, comment.commentId, replyingId[foundIndex].replyId)} ref={sendCommentRef} suppressContentEditableWarning={true}>{replyingId[foundIndex].replyingName}</div>
                    </CommentBoxDiv>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default CommentBox
