import React from "react";
// import { Card } from "react-bootstrap";
import { Image } from 'react-bootstrap';
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const groupsList = [
  {
    group_id: 1,
    group_title: 'Social Media',
    icon_img: '',
    cover_img: '',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    group_id: 2,
    group_title: 'Application Flow',
    icon_img: '',
    cover_img: '',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    group_id: 3,
    group_title: 'Project Reporting',
    icon_img: '',
    cover_img: '',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    group_id: 4,
    group_title: 'Product Demo',
    icon_img: '',
    cover_img: '',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    group_id: 5,
    group_title: 'Social Media',
    icon_img: '',
    cover_img: '',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    group_id: 6,
    group_title: 'Application Flow',
    icon_img: '',
    cover_img: '',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    group_id: 7,
    group_title: 'Project Reporting',
    icon_img: '',
    cover_img: '',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    group_id: 8,
    group_title: 'Product Demo',
    icon_img: '',
    cover_img: '',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    group_id: 9,
    group_title: 'Product Demo',
    icon_img: '',
    cover_img: '',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  }
];

const Dashboard = () => {
  return (
    // <Card className="w-100 shadow profile-cards mt-3 p-4 profile-dashboard">
    //   <Card.Header className="border-0 p-0">
    //     <h2 className="m-0 font-size-20 text-body">
    //       Your Dashboard
    //     </h2>
    //     <h3 className="m-0 font-size-16 text-secondary font-italic mt-2">
    //       Private to you
    //     </h3>
    //   </Card.Header>
    //   <Card.Body className="p-0">
    //     <div className="dashboard-data bg-white border shadow-sm d-flex mt-3 user-select-none cursor-pointer">
    //       <div className="dashboard-data-card d-flex flex-column">
    //         <span className="text-primary font-size-32">3</span>
    //         <span className="font-size-14 pt-2">Who viewed your profile</span>
    //       </div>
    //       <div className="dashboard-data-card d-flex flex-column border-left">
    //         <span className="text-primary font-size-32">32</span>
    //         <span className="font-size-14 pt-2">Post views</span>
    //       </div>
    //       <div className="dashboard-data-card d-flex flex-column border-left">
    //         <span className="text-primary font-size-32">3</span>
    //         <span className="font-size-14 pt-2">Search appearances</span>
    //       </div>
    //     </div>
    //     <div className="dashboard-data bg-white border shadow-sm d-flex flex-column mt-3 user-select-none cursor-pointer">
    //       <div className="p-3 d-flex border-bottom">
    //         <img src="/assets/icons/briefcase.svg" height="30" width="30" alt="" />
    //         <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
    //           <div className="font-weight-bold">Career interests</div>
    //           <div className="text-body pt-2">Let recruiters know you’re open: <span className="font-weight-bold bg-light">Off</span></div>
    //           <div className="text-muted pt-2">Choose the types of opportunities you’d like to be connected with</div>
    //         </div>
    //       </div>
    //       <div className="p-3 d-flex">
    //         <img src="/assets/icons/currency.svg" height="30" width="30" alt="" />
    //         <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
    //           <div className="font-weight-bold">Salary insights</div>
    //           <div className="text-muted pt-2">See how your salary compares to others in the community</div>
    //         </div>
    //       </div>
    //     </div>
    //   </Card.Body>
    // </Card>
    <div className="d-flex flex-wrap">
      {groupsList.map((group) => {
        return (
          // <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="shadow m-2 mt-3 w-auto bg-white rounded" key={group.group_id} style={{ flex: '1 0 350px' }}>
              <div className="wrapper d-flex">
                {/* <Link to={`/group/${group.group_id}`}> */}
                  <Image
                    src="https://placeimg.com/104/104/people"
                    className="rounded"
                    style={{ overflow: 'hidden', height: 100, width: 100 }}
                  />
                {/* </Link> */}
                <div className="p-3">
                  <div className="header border-bottom-0 p-0">
                    <div className="pt-1 d-block font-size-16" to={`/group/${group.group_id}`}>
                      {group.group_title}
                    </div>
                  </div>
                  <div className="text-black-50 font-size-14 pt-2">
                    <strong>{`Total members ${group.total_members}`}</strong>
                  </div>
                </div>
              </div>
            </div>
          // </div>
        );
      })}
    </div>
  )
}

export default Dashboard
