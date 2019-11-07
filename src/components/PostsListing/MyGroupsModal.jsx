/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Image, Modal, InputGroup, FormControl, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';

const GrouptextCss = styled.div`background-color: #90949c;`;

const MyGroupsModal = (props) => {
  const { onSelectGroup, onHide } = props;
  const ImgArr = ['', '', '', '', ''];
  const [currentGroups, setCurrentGroups] = useState(props.groups);

  let newGroups = [];

  useEffect(() => {
    setCurrentGroups(props.groups);
  }, [props.groups]);

  const findMyGroup = (event) => {
    const search = event.target.value.toLowerCase();

    currentGroups.forEach((item, i) => {
      let str = item.group_title.toLowerCase();
      let setobj;
      if (str.includes(search) === true) {
        if (newGroups.length > 0) {
          setobj = newGroups.find((x) => x.group_id === item.group_id);
          if (setobj === undefined) {
            newGroups.push(item);
          }
        } else {
          newGroups.push(item);
        }
      }
    });
    setCurrentGroups(newGroups);
  };

  const getThePostGroup = (group) => {
    onSelectGroup(group);
  };

  const renderListItem = () => {
    return currentGroups.map((group, i) => {
      return (
        <ListGroup.Item
          name={group.group_title}
          key={'title' + group.group_id}
          onClick={() => getThePostGroup(group)}
          action
          className="border-0"
        >
          <div className="d-flex">
            <div>
              <Image src={ImgArr[i]} height={36} className="mr-2" />
            </div>
            <div>
              <div>
                <strong>{group.group_title}</strong>
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

  return (
    <React.Fragment>
      <Modal className="my-groups-modal" show={props.show} onHide={onHide} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header className="p-2" closeButton>
          <Modal.Title id="contained-modal-title-vcenter" style={{ width: '-webkit-fill-available' }}>
            <InputGroup>
              <FormControl
                placeholder="Search for a group to post to"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onKeyUp={findMyGroup}
              />
            </InputGroup>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <GrouptextCss className="p-2 text-white font-size-14">
            <span>GROUPS YOURE IN</span>
          </GrouptextCss>
          {renderListItem()}
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default MyGroupsModal;
