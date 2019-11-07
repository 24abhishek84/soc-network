import React from 'react';
import { connect } from 'react-redux';

import { Modal, Button, Col, FormLabel, Image, Row } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select, { components } from 'react-select';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faLockOpen,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import { createGrpTitle } from '../../actions/GroupActions';
import './CreateGroupModal.css';

const groupTypes = [
  {
    value: 'team-projects',
    label: 'Teams & Projects',
    description: 'A space for smaller teams to work, with up to 250 members plus its own chat',
    imageUrl: '/assets/group-types/teams-projects.png'
  },
  {
    value: 'discussions',
    label: 'Discussions',
    description: 'Start a conversation and get feedback from coworkers across your company',
    imageUrl: '/assets/group-types/discussions.png'
  },
  {
    value: 'announcements',
    label: 'Announcements',
    description: 'A place to broadcast your company news, updates and announcements',
    imageUrl: '/assets/group-types/announcements.png'
  },
  {
    value: 'social',
    label: 'Social & More',
    description: 'Plan lunch dates, sports and team outings',
    imageUrl: '/assets/group-types/social.png'
  },
  {
    value: 'multi-company',
    label: 'Multi-Company',
    description: 'Work with people from other companies',
    imageUrl: '/assets/group-types/multi-company.png'
  }
];

const CreateGroupSchema = Yup.object().shape({
  groupName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  // privacy: Yup.object().required('Required'),
  // groupType: Yup.object().required('Required'),
  // members: Yup.array().min(1, 'Select atleast 1 group').required('Required')
});

const options = [
  {
    value: 'open',
    label: 'Open',
    description: 'Anyone in Devstree IT Services LTD can see the group, its members and their posts.',
    faIcon: faSuitcase,
  },
  {
    value: 'closed',
    label: 'Closed',
    description: 'Anyone in Devstree IT Services LTD can find the group and see who\'s in it. Only members can see posts.',
    faIcon: faLockOpen,
  },
  {
    value: 'secret',
    label: 'Secret',
    description: 'Only members can find the group, and see who\'s in it and what they post.',
    faIcon: faLock,
  },
];

const groupMembers = [
  {
    id: 1,
    name: 'Bradd Pitt',
    value: '1',
    label: 'Bradd Pitt',
    profilePicture: '/assets/imgs/bradpitt.jpeg',
  },
  {
    id: 2,
    name: 'Leonardo Dicaprio',
    value: 2,
    label: 'Leonardo Dicaprio',
    profilePicture: '/assets/imgs/leo.jpeg',
  }
];

class CreateGroupModal extends React.Component {
  handleFormSubmit = (values) => {
    this.props.handleSubmit(values);
    this.props.onHide();
  };

  singleOptionPrivacy = (props) => (
    <components.Option {...props} className="d-flex">
      <FontAwesomeIcon icon={props.data.faIcon} className="font-size-14" />
      <div className="pl-3 font-size-14">
        <div className="font-weight-bold pb-2">{props.data.label}</div>
        <div>{props.data.description}</div>
      </div>
    </components.Option>
  );

  singleValuePrivacy = (singleValuePrivacyProps) => (
    <components.SingleValue {...singleValuePrivacyProps} className="d-flex align-items-center">
      <FontAwesomeIcon className="font-size-14" icon={singleValuePrivacyProps.data.faIcon} />
      <div className="pl-3 font-weight-bold font-size-14">{singleValuePrivacyProps.data.label}</div>
    </components.SingleValue>
  );

  singleOptionType = (props) => (
    <components.Option {...props} className="d-flex">
      <Image src={props.data.imageUrl} height={35} />
      <div className="pl-3 font-size-14">
        <div className="font-weight-bold pb-2">{props.data.label}</div>
        <div>{props.data.description}</div>
      </div>
    </components.Option>
  );

  singleValueType = (singleValueTypeProps) => (
    <components.SingleValue {...singleValueTypeProps} className="d-flex align-items-center">
      <Image src={singleValueTypeProps.data.imageUrl} height={20} />
      <div className="pl-3 font-weight-bold font-size-14">{singleValueTypeProps.data.label}</div>
    </components.SingleValue>
  );

  singleOptionMembers = (props) => (
    <components.Option {...props} className="d-flex align-items-center">
      <Image className="rounded-circle" src={props.data.profilePicture} height={20} />
      <div className="pl-3 font-size-14 font-weight-bold pb-2">{props.data.label}</div>
    </components.Option>
  );

  singleValueMembers = (singleValueTypeProps) => (
    <components.SingleValue {...singleValueTypeProps} className="d-flex align-items-center">
      <Image className="rounded-circle" src={singleValueTypeProps.data.profilePicture} height={20} />
      <div className="pl-3 font-weight-bold font-size-14">{singleValueTypeProps.data.label}</div>
    </components.SingleValue>
  );

  render() {
    const { show, onHide } = this.props;
    return (
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className={`quiz-modal create-group-modal`}
      >
        <Modal.Header className="text-center" closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-100 font-size-20 modal-title font-weight-bold"
          >
            Create Group
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-4 pb-4 pl-3 pr-3" style={{ maxHeight: '85vh' }}>
          <Formik
            enableReinitialize
            initialValues={{
              groupName: '',
              groupType: groupTypes[0],
              privacy: options[0],
              members: []
            }}
            validationSchema={CreateGroupSchema}
            onSubmit={(values) => this.handleFormSubmit(values)}
            render={(renderProps) => {
              return (
                <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                  <Row className="mb-4">
                    <Col sm={12}>
                      <FormLabel className="font-size-15 font-weight-bold">Name</FormLabel>
                      <Field
                        type="text"
                        className="form-control input-field shadow-none"
                        name="groupName"
                        placeholder="Choose a name for your group"
                      />
                      <ErrorMessage
                        className="help-block text-danger"
                        name="groupName"
                        component="div"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col sm={12}>
                      <FormLabel className="font-size-15 font-weight-bold">Select type</FormLabel>
                      <Select
                        isMulti={false}
                        closeMenuOnSelect={true}
                        value={renderProps.values.groupType}
                        onChange={(selectedOption) => {
                          renderProps.setFieldValue('groupType', selectedOption);
                        }}
                        options={groupTypes}
                        menuContainerStyle={{ zIndex: 999 }}
                        styles={{
                          menuPortal: (base) => {
                            const { zIndex, ...rest } = base;
                            return { ...rest, zIndex: 9999 };
                          }
                        }}
                        menuPortalTarget={document.body}
                        isSearchable={false}
                        name="groupType"
                        components={{
                          Option: this.singleOptionType,
                          SingleValue: this.singleValueType
                        }}
                      />
                      <ErrorMessage
                        className="help-block text-danger"
                        name="groupType"
                        component="div"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col sm={12}>
                      <FormLabel className="font-size-15 font-weight-bold">Select privacy</FormLabel>
                      <Select
                        isMulti={false}
                        closeMenuOnSelect={true}
                        value={renderProps.values.privacy}
                        onChange={(selectedOption) => {
                          renderProps.setFieldValue('privacy', selectedOption);
                        }}
                        options={options}
                        menuContainerStyle={{ zIndex: 999 }}
                        styles={{
                          menuPortal: (base) => {
                            const { zIndex, ...rest } = base;
                            return { ...rest, zIndex: 9999 };
                          }
                        }}
                        menuPortalTarget={document.body}
                        isSearchable={false}
                        name="privacy"
                        components={{
                          Option: this.singleOptionPrivacy,
                          SingleValue: this.singleValuePrivacy
                        }}
                      />
                      <ErrorMessage
                        className="help-block text-danger"
                        name="privacy"
                        component="div"
                      />
                    </Col>
                  </Row>
                  <Row className="mb-4">
                    <Col sm={12}>
                      <FormLabel className="font-size-15 font-weight-bold d-flex justify-content-between">
                        <div>Members</div>
                        <div className="text-muted font-size-12 font-weight-normal">Optional</div>
                      </FormLabel>
                      <Select
                        isMulti={true}
                        closeMenuOnSelect={false}
                        value={renderProps.values.members}
                        onChange={(selectedOption) => {
                          renderProps.setFieldValue('members', selectedOption ? selectedOption : []);
                        }}
                        options={groupMembers}
                        menuContainerStyle={{ zIndex: 999 }}
                        styles={{
                          menuPortal: (base) => {
                            const { zIndex, ...rest } = base;
                            return { ...rest, zIndex: 9999 };
                          }
                        }}
                        menuPortalTarget={document.body}
                        isSearchable={true}
                        name="members"
                        components={{
                          Option: this.singleOptionMembers,
                          SingleValue: this.singleValueMembers
                        }}
                      />
                      <ErrorMessage
                        className="help-block text-danger"
                        name="members"
                        component="div"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <Button
                        className="font-weight-bold"
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={renderProps.values.groupName === ''}
                        block
                      >
                        Create Group
                      </Button>
                    </Col>
                  </Row>
                </Form>
              );
            }}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.group
  };
};

export default connect(mapStateToProps, { createGrpTitle })(CreateGroupModal);
