import React, { useState, useRef } from 'react';
import { Image, ListGroup, Form } from 'react-bootstrap';

const groupsList = [
  {
    id: 1,
    name: 'Social Media',
    image: 'http://localhost:3000/assets/imgs/group_1.jpg',
    cover_img: 'http://localhost:3000/assets/imgs/group_1.jpg',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    id: 2,
    name: 'Application Flow',
    image: 'http://localhost:3000/assets/imgs/group_2.jpg',
    cover_img: 'http://localhost:3000/assets/imgs/group_2.jpg',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    id: 3,
    name: 'Project Reporting',
    image: 'http://localhost:3000/assets/imgs/group_3.jpg',
    cover_img: 'http://localhost:3000/assets/imgs/group_3.jpg',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  },
  {
    id: 4,
    name: 'Product Demo',
    image: 'http://localhost:3000/assets/imgs/group_4.jpg',
    cover_img: 'http://localhost:3000/assets/imgs/group_4.jpg',
    total_members: 99,
    group_type: {
      id: 1,
      name: 'Team	& Projects'
    }
  }
];

const employeesList = [
  {
    id: 1,
    name: 'Abhishek Leuva',
    image: 'http://localhost:3000/assets/participate-profile.jpeg',
    designation: 'Full stack developer'
  },
  {
    id: 2,
    name: 'Nirav Joshi',
    image: 'http://localhost:3000/assets/participate-profile2.jpeg',
    designation: 'Owner'
  },
  {
    id: 3,
    name: 'Jayesh',
    image: 'http://localhost:3000/assets/participate-profile.jpeg',
    designation: 'HR'
  },
  {
    id: 4,
    name: 'Darshit',
    image: 'http://localhost:3000/assets/participate-profile2.jpeg',
    designation: 'IOS developer'
  }
];

const GroupsModal = (props) => {
  const [ groupList, setgroupsList ] = useState(groupsList);
  const [ employeeList, setemployeeList ] = useState(employeesList);
  const [ grpinviteestyle, setgrpinviteestyle ] = useState(false);
  const [ empinviteestyle, setempinviteestyle ] = useState(false);
  const inviteeref = useRef(null);

  const AddGrops = async (group, i, type) => {
    if (type === 'group') {
      console.log('isGroup');
      groupsList.forEach((grpvalue, index) => {
        if (group.id === grpvalue.id) {
          groupsList.splice(index, 1);
        }
      });
      setgroupsList(groupsList);
    } else if (type === 'employee') {
      console.log('isEmployee');
      employeesList.forEach((grpvalue, index) => {
        if (group.id === grpvalue.id) {
          employeesList.splice(index, 1);
        }
      });
      setemployeeList(employeesList);
    }

    console.log('group', group);
    props.setFieldValue(group);
    // setgrpinviteestyle(false);
    // setempinviteestyle(false);
    // props.GroupModalonHide();
  };

  const renderempListItem = () => {
    return employeeList.map((emp, i) => {
      return (
        <ListGroup.Item
          name={emp.name}
          key={'title' + emp.id}
          action
          className="invitee-list"
          onClick={(e) => AddGrops(emp, i, 'employee')}
        >
          <div className="d-flex">
            <Image src={emp.image} height={36} className="mr-2" roundedCircle />
            <div>
              <div>
                <strong>{emp.name}</strong>
              </div>
              <div>
                <span>{emp.designation}</span>
              </div>
            </div>
          </div>
        </ListGroup.Item>
      );
    });
  };

  const renderListItem = () => {
    return groupList.map((group, i) => {
      return (
        <ListGroup.Item
          name={group.name}
          key={'title' + group.id}
          action
          className="invitee-list"
          onClick={(e) => AddGrops(group, i, 'group')}
        >
          <div className="d-flex">
            <Image src={group.image} height={36} className="mr-2" roundedCircle />
            <div>
              <div>
                <strong>{group.name}</strong>
              </div>
              <div>
                <span>{group.group_type.name},</span>
                <span>{group.total_members} Members</span>
              </div>
            </div>
          </div>
        </ListGroup.Item>
      );
    });
  };

  const searchInvitee = (e) => {

    let tmpvalue = inviteeref.current.value.toLowerCase();

    if (tmpvalue !== '') {
      let grpresult = groupList.filter(function(x) {
        return x.name.toLowerCase().search(tmpvalue) !== -1;
      });

      let empresult = employeeList.filter(function(x) {
        return x.name.toLowerCase().search(tmpvalue) !== -1;
      });

      if (grpresult.length > 0) {
        setgrpinviteestyle(true);
        setgroupsList(grpresult);
      } else {
        setgrpinviteestyle(false);
      }
      if (empresult.length > 0) {
        setempinviteestyle(true);
        setemployeeList(empresult);
      } else {
        setempinviteestyle(false);
      }
    } else {
      setgrpinviteestyle(false);
      setempinviteestyle(false);
    }
  };
  return (
    <React.Fragment>
      <Form.Group controlId="inviteeID">
        <Form.Control
          type="text"
          placeholder="Search invitees"
          ref={inviteeref}
          onChange={(e) => searchInvitee(e)}
        />
      </Form.Group>

      {groupList.length > 0 &&
        <div className={`group-invitee-div ${grpinviteestyle ? "d-block" : "d-none"}`}>
          <h5>Group List</h5>
          {renderListItem()}
        </div>
      }
      {employeeList.length > 0 &&
        <div className={empinviteestyle ? "d-block" : "d-none"}>
          <h5>Employee List</h5>
          {renderempListItem()}
        </div>
      }
    </React.Fragment>
  );
};

export default GroupsModal;
