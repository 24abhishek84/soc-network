import React from "react";
import ItemsCarousel from 'react-items-carousel';

import { Card, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid, faShare } from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as faHeartRegular,
  faComment as faCommentRegular,
} from "@fortawesome/fontawesome-free-regular";

// import styled from "styled-components";
import moment from "moment";

import CommentBox from "./../CommentBox";
import PostTag from "./../PostTag";

// const VideoImageHead = styled.div`
//   padding: 0.5vw;
//   font-size: 0;
//   flex-flow: row wrap;
//   display: flex;
// `;

// const VideoImageDiv = styled.div`
//   flex: auto;
//   width: 200px;
//   margin: 0.5vw;
// `;

class SinglePost extends React.Component {

  state = {
    activeItemIndex: 0
  }

  render() {
    const { data, postLikeUnlikeHandle, commentLikeUnlikeHandle } = this.props;
    const { activeItemIndex } = this.state;
    return (
      <Card className="card__box--post shadow border-0">
        <Card.Body>
          <div className="d-flex align-items-center">
            <Image className="rounded-circle" src={data.user.userProfile} height={40} />
            <div className="pl-3">
              <h3 className="font-size-16 m-0 font-weight-bold">{data.user.userName}</h3>
              <h6 className="m-0 font-weight-bold text-black-50 pt-2">{moment(new Date(data.createdAt * 1000)).format("MM.DD.YYYY")} | <span style={{ color: '#dc3545b0' }}>{moment(new Date(data.createdAt * 1000)).format("HH:MM")}</span></h6>
            </div>
          </div>
          <p className="m-0 mt-3 font-size-14" style={{ lineHeight: 1.7 }}>
            {data.description}
          </p>
        </Card.Body>
        {(data.images.length > 0 || data.videos.length > 0) &&
          <div className="pl-5 pr-5 pb-2">
            <ItemsCarousel
              requestToChangeActive={(activeItemIndex) => this.setState({ activeItemIndex })}
              activeItemIndex={activeItemIndex}
              numberOfCards={2}
              gutter={12}
              leftChevron={<button className="btn bg-white border shadow-sm font-size-16">{'<'}</button>}
              rightChevron={<button className="btn bg-white border shadow-sm font-size-16">{'>'}</button>}
              outsideChevron
              chevronWidth={40}
            >
              {data.images.map((image, index) => {
                return (
                  <div className="d-flex align-items-center ml-1 mr-1 justify-content-center" key={`image-${data.id}-${index}`} style={{ height: 250 }}>
                    <Image className="w-100 h-100" src={image.path} />
                  </div>
                )
              })}
              {data.videos.map((video, index) => {
                return (
                  <div className="d-flex align-items-center ml-1 mr-1 justify-content-center" key={`video-${data.id}-${index}`} style={{ height: 250 }}>
                    <video style={{ width: '-webkit-fill-available', height:'-webkit-fill-available' }} controls>
                      <source src={video.path} />
                    </video>
                  </div>
                )
              })}
            </ItemsCarousel>
          </div>
        }
        {/* {data.images.length === 1 ?
          <Image src={data.images[0].path} width="100%" style={{ maxWidth: '100%' }} />
          :
          <VideoImageHead>
            {data.images.map((image, index) => {
              return (
                <VideoImageDiv key={`image-${data.id}-${index}`} image>
                  <Image src={image.path} width="100%" height="auto" />
                </VideoImageDiv>
              );
            })}
          </VideoImageHead>
        }
        {data.videos.length > 0 &&
          <VideoImageHead>
            {data.videos.map((video, index) => {
              return (
                <VideoImageDiv key={`video-${data.id}-${index}`}>
                  <video controls height="200px" width='100%'>
                    <source src={video.path} />
                  </video>
                </VideoImageDiv>
              );
            })}
          </VideoImageHead>
        } */}
        <PostTag />
        <div className="take-part-footer d-flex align-items-center justify-content-between border-top p-0 pl-3 pr-3 pt-2 pb-2">
          <div className="d-flex user-select-none">
            <span className="mr-2 d-flex align-items-center font-size-20 cursor-pointer" onClick={() => postLikeUnlikeHandle(data.id)}>
              <FontAwesomeIcon icon={data.isLiked ? faHeartSolid : faHeartRegular} color={data.isLiked ? '#b30505ab' : '#848484'} />&nbsp;
              <span className="font-size-14 text-secondary">Like 5 Users</span>
            </span>
          </div>
          <div>
            <Button size="sm" variant="default" className="d-inline-flex align-items-center text-secondary">
              <FontAwesomeIcon size="2x" className="mr-2" icon={faCommentRegular} /> Add a comment
            </Button>
            <Button size="sm" variant="default" className="d-inline-flex align-items-center ml-2 text-secondary">
              <FontAwesomeIcon size="2x" className="mr-2" icon={faShare} /> Share
            </Button>
          </div>
        </div>
        <CommentBox comments={data.comments} user={data.user} postId={data.id} commentLikeUnlikeHandle={commentLikeUnlikeHandle} />
      </Card>
    )
  }
}

export default SinglePost;