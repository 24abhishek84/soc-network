import React, { useRef, useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/event-actions';

import styled from 'styled-components';
import { Button, Modal, Col , Image, FormLabel } from 'react-bootstrap';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import GroupsModal from "./GroupsModal";
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import 'react-widgets/lib/scss/react-widgets.scss';
import './CreateEventModel.css';
import { Separator } from '../Layout/SubmenuSidebar';

const EventFormSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').max(64, 'Too Long!').required('Required'),
  address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  description: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  startDate: Yup.string().required('Required'),
  endDate: Yup.string().required('Required'),
  groupImage:Yup.mixed()
      .test('fileType', 'Unsupported File Format', (value) => {
    if (value) {
      return [ 'image/jpg', 'image/jpeg', 'image/png' ].includes(value.type);
    } else {
      return true;
    }
  }),
  file: Yup.mixed()
    .test('fileType', 'Unsupported File Format', (value) => {
      if (value) {
        return [ 'image/jpg', 'image/jpeg', 'image/png' ].includes(value.type);
      } else {
        return true;
      }
    })
    .test('fileSize', 'File Size is too large', (value) => {
      if (value) {
        return value.size <= 1024000;
      } else {
        return true;
      }
    })
});

const StyledModal = styled(Modal)`
  #create-event-modal {
    max-width: 562px;
  }

  .modal-body {
    min-height: 65vh;
  }
`;

const Participant = styled.div`
  border: 2px dashed #dddfe2;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 48px;
  margin-right: 5px;
  min-width: 48px;
  position: relative;
  width: auto;
  background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/G68ofLqPucT.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 20px;
  cursor: pointer;
`;

const EventImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => props.bgImage ? `url(${props.bgImage})` : 'none'};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .btn.btn-outline-secondary {
    color: #fff;
    border-color: #adaeaf;
    background-color: #adaeaf;
  }

  .btn.btn-outline-secondary:hover {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
  }
`;

const SpanTitleCount = styled.span`
  color: rgb(144, 148, 156);
  font-size: 11px;
  position: absolute;
  right: 20px;
  top: 10px;
`;

const CreateEventModal = (props) => {
  const { showCreateEventModal, onCreateEventModalClose } = props;

  const [ uploadedFile, setUploadedFile ] = useState(undefined);
  const fileUpload = useRef();

  const handleFileUploadClick = () => {
    fileUpload.current.click();
  }

  const onSubmit = async (data) => {
    console.log('data', data);
    props.createNewEvent(data);
    await onCreateEventModalClose();
  };

  return (
    <StyledModal
      id="create-event-modal"
      show={showCreateEventModal}
      onHide={onCreateEventModalClose}
      dialogClassName="mw-100"
      className="work-experience-modal create-event-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="text-center" closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="w-100 font-size-20 modal-title font-weight-bold"
        >
          Create Event
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="overflow-auto" style={{ maxHeight: '72vh', padding: '1rem 1rem 0 1rem' }}>
        <Formik
          enableReinitialize
          initialValues={{
            title: '',
            address: '',
            description: '',
            startDate: new Date(),
            endDate: new Date(),
            eventMedia: undefined,
            guestCanInvite: '',
            showGuestList: '',
            groupLst: [],
            endDateOption:'',
            showGroupModal: false
          }}
          validationSchema={EventFormSchema}
          onSubmit={(value) => onSubmit(value)}
          render={(renderProps) => {
            const { setFieldValue, values: formValues } = renderProps;
            return (
              <Form>
                <div className="row mb-3">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">
                      Event Photo or Video
                    </FormLabel>
                    <div className="d-flex justify-content-center align-items-center" style={{ width: 386, height: 202, backgroundColor: '#44494f' }}>
                      {!uploadedFile || (uploadedFile && uploadedFile.type === 'image') ?
                        <EventImage bgImage={uploadedFile ? uploadedFile.type !== '' ? uploadedFile.value : 'none' : 'none'} />
                        :
                        uploadedFile && uploadedFile.type === 'video' &&
                          <video width="386" height="202" controls>
                            <source src={uploadedFile.value} type={uploadedFile.extension} />
                            Your browser does not support the video tag.
                          </video>
                      }
                      <Button variant="outline-secondary" className="d-flex align-items-center position-absolute" onClick={handleFileUploadClick}>
                        <span className="material-icons">camera_alt</span>
                        <span className="pl-2">Upload Photo/Video</span>
                      </Button>
                      <input
                        type="file"
                        className="d-none"
                        name="eventMedia" style={{ height: 36 }}
                        ref={fileUpload}
                        onChange={(e) => {
                          if (e.target.files.length === 0) {
                            setUploadedFile(null);
                            renderProps.setFieldValue('eventMedia', undefined)
                            return;
                          } else {
                            const reader = new FileReader();
                            const file = e.target.files[0];
                            const filetype = file.type;
                            reader.readAsDataURL(file);
                            reader.onload = (event) => {
                              let payload = {
                                type: '',
                                value: event.target.result,
                                extension: '',
                              }

                              if (filetype === 'image/jpeg' || filetype === 'image/gif' || filetype === 'image/jpg' || filetype === 'image/png') {
                                payload.type = 'image';
                              } else if (filetype === 'video/mp4' || filetype === 'video/3gp' || filetype === 'video/avi') {
                                payload.type = 'video';
                                payload.extension = filetype;
                              }

                              setUploadedFile(payload);
                            };
                            renderProps.setFieldValue('eventMedia', e.target.files[0])
                          }
                        }}
                      />
                    </div>
                  </Col>
                </div>
                <div className="row mb-3">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">
                      Event Name
                    </FormLabel>
                    <Field
                      className="form-control rounded-0"
                      name="title"
                      type="text"
                      placeholder="Add a short, clear name"
                      maxLength="64"
                    />
                    <SpanTitleCount>{formValues.title.length}/64</SpanTitleCount>
                    <ErrorMessage className="help-block text-danger" name="title" component="div" />
                  </Col>
                </div>
                <div className="row mb-3">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">
                      Location
                    </FormLabel>
                    <Field
                      className="form-control rounded-0"
                      name="address"
                      placeholder="Include a place or address"
                    />
                    <ErrorMessage
                      className="help-block text-danger"
                      name="address"
                      component="div"
                    />
                  </Col>
                </div>
                <div className="row mb-3">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">
                      Description
                    </FormLabel>
                    <Field
                      className="form-control rounded-0"
                      as="textarea"
                      rows="3"
                      placeholder="Tell people what your event is about"
                      name="description"
                    />
                    <ErrorMessage
                      className="help-block text-danger"
                      name="description"
                      component="div"
                    />
                  </Col>
                </div>
                <div className="row mb-3">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">
                      Start
                    </FormLabel>
                    <DateTimePicker
                      onChange={(date) => setFieldValue('startDate', date)}
                      name="startDate"
                      value={formValues.startDate}
                    />
                    <ErrorMessage
                      className="help-block text-danger"
                      name="startDate"
                      component="div"
                    />
                  </Col>
                </div>
                <div className="row">
                  <Col sm={12}>
                    <div className="form-group">
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          name="endDateOption"
                          id="endDateOptionID"
                          className="form-check-input mt-0"
                          onChange={(e) => setFieldValue('endDateOption', e.target.checked)}
                        />
                        <label htmlFor="endDateOption" className="form-check-label">
                          End date
                        </label>
                      </div>
                    </div>
                  </Col>
                </div>
                {formValues.endDateOption && formValues.endDateOption !== '' &&
                  <div className="row mb-3">
                    <Col sm={12}>
                      <FormLabel className="font-size-15 font-weight-bold">
                        End
                      </FormLabel>
                      <DateTimePicker
                        onChange={(date) => setFieldValue('endDate', date)}
                        name="endDate"
                        value={formValues.endDate}
                        min={formValues.startDate}
                      />
                      <ErrorMessage
                        className="help-block text-danger"
                        name="endDate"
                        component="div"
                      />
                    </Col>
                  </div>
                }
                <div className="row">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">
                      Invitee
                    </FormLabel>
                    <div className="d-flex add-participant">
                      <div className="">
                        <Participant onClick={() => setFieldValue('showGroupModal', !formValues.showGroupModal)}/>
                        <p className="participate-names">Add New</p>
                      </div>
                      <div className="groupList-maindiv">
                        {formValues.groupLst.map((grp, index) => {
                          if(index < 3) {
                            return(
                              <div className="participate-div" key={`grp${index}`}>
                                {index !== 2 ? 
                                  <React.Fragment>
                                    <Image
                                      src={grp.image}
                                      roundedCircle
                                      className="participate-profile"
                                      name="groupImage"
                                    />
                                    <p className="participate-names">{grp.name}</p>
                                  </React.Fragment>
                                  :
                                  <React.Fragment>
                                    <div className="show-more-invitee">+{formValues.groupLst.length - 2}</div>
                                    <div className="participate-names">Others</div>
                                  </React.Fragment>
                                }
                              </div>
                            )
                          }
                          return null;
                        })}
                        </div>
                      </div>
                    </Col>
                </div>
                {formValues.showGroupModal &&
                  <div className="row">
                    <div className="col-sm-3" />
                    <Col sm={12}>
                      <GroupsModal
                        GroupModalshow={formValues.showGroupModal}
                        EventsValues={formValues}
                        GroupModalonHide={() => setFieldValue('showGroupModal', !formValues.showGroupModal)}
                        setFieldValue={(value) => {
                          return setFieldValue('groupLst', [...formValues.groupLst, value]);
                        }}
                      />
                    </Col>
                  </div>
                }
                <div className="row">
                  <Col sm={12}>
                    <Separator />
                  </Col>
                </div>
                <div className="row">
                  <Col sm={12}>
                    <div className="form-group">
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          name="guestCanInvite"
                          id="guestCanInvite"
                          className="form-check-input mt-0"
                        />
                        <label htmlFor="guestCanInvite" className="form-check-label">
                          Guests can invite coworkers
                        </label>
                      </div>
                    </div>
                  </Col>
                </div>
                <div className="row">
                  <Col sm={12}>
                    <div className="form-group">
                      <div className="form-check">
                        <Field
                          type="checkbox"
                          name="showGuestList"
                          id="showGuestList"
                          className="form-check-input mt-0"
                        />
                        <label htmlFor="showGuestList" className="form-check-label">
                          Show guest list
                        </label>
                      </div>
                    </div>
                  </Col>
                </div>
                <div className="row position-sticky bg-white pt-2 pb-2" style={{ bottom: 0 }}>
                  <Col sm={12}>
                    <Button
                      className="font-weight-bold"
                      type="submit"
                      variant="primary"
                      size="lg"
                      block
                    >
                      Save
                    </Button>
                  </Col>
                </div>
              </Form>
            );
          }}
        />
      </Modal.Body>
      {/* <Modal.Footer className="p-1">
        <Button onClick={handleSubmitMyForm} className="font-size-16 rounded-0" variant="primary">
          Save
        </Button>
      </Modal.Footer> */}
    </StyledModal>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.group
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModal);
