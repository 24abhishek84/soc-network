import React from "react";
import { Modal, Button, Row, Col, Card } from "react-bootstrap";
import './../TakePart/TakePart.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Select, { components } from 'react-select';
import { StyledMenuImage } from "../../components/SubSidebar/Sidebar.style";

const options = [
  { value: 'IT Department', label: 'IT Department', imgUrl: 'subMenuListItem.png', bgPosition: '-33px -679px' },
  { value: 'Designing', label: 'Designing', imgUrl: 'subMenuListItem.png', bgPosition: '-45px -535px' },
  { value: 'Marketing', label: 'Marketing', imgUrl: 'subMenuListItem.png', bgPosition: '-35px -780px' },
  { value: 'Management', label: 'Management', imgUrl: 'subMenuListItem.png', bgPosition: '-33px -580px' },
  { value: 'Admin', label: 'Admin', imgUrl: 'subMenuListItem.png', bgPosition: '-45px -535px' },
  { value: 'Mobile Department', label: 'Mobile Department', imgUrl: 'subMenuListItem.png', bgPosition: '0 -712px' },
  { value: 'Falana Department', label: 'Falana Department', imgUrl: 'subMenuListItem.png', bgPosition: '0 -712px' },
  { value: 'Dhikana Department', label: 'Dhikana Department', imgUrl: 'subMenuListItem.png', bgPosition: '0 -712px' },
];

const CardSchema = Yup.object().shape({
  who: Yup.array().min(1, "Select atleast 1 colleague").required("Required"),
  comment: Yup.string().min(2, "Too Short!").max(160, "Too Long!").required("Required"),
});

const SendStarModal = ({ show, onHide, starType, handleSubmitSendStar }) => {

  const handleFormSubmit = async (values) => {
    console.log('values', values);
    const formValues = {
      ...values,
      who: values.who.value
    }
    let data = new FormData();
    for (let keyInObj in formValues) {
      data.append(keyInObj, formValues[keyInObj]);
    }

    for (let key of data.entries()) {
      console.log(key);
    }
    console.log('data', data);
    await onHide();
    handleSubmitSendStar(formValues, data);
  }

  const singleOption = (props) => (
    <components.Option {...props} className="d-flex align-items-center">
      <StyledMenuImage bgPosition={props.data.bgPosition} imgUrl={props.data.imgUrl} />
      <div className="pl-2">
        {props.data.label}
      </div>
    </components.Option>
  )


  const singleValue = (props) => (
    <components.SingleValue {...props} className="d-flex align-items-center">
      <StyledMenuImage bgPosition={props.data.bgPosition} imgUrl={props.data.imgUrl} />
      <div className="pl-2">
        {props.data.label}
      </div>
    </components.SingleValue>
  )

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`quiz-modal create-take-part`}
    >
      {starType &&
        <React.Fragment>
          <Modal.Header className={`p-3 d-flex justify-content-center styled-button text-body`} style={{ overflow: 'hidden' }} closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {starType.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ height: '55vh' }}>
            <Formik
              enableReinitialize
              initialValues={{
                who: [],
                comment: '',
                type: starType.key
              }}
              validationSchema={CardSchema}
              onSubmit={(values) => handleFormSubmit(values)}
              render={(renderProps) => {
                let whoLength = renderProps.values.who.length;
                return (
                  <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                    <Row className="steps">
                      <Col sm={{ span: 10, offset: 1 }}>
                        <Card>
                          <Card.Header className="p-1 bg-white">
                            <div className="d-flex">
                              <div className="pl-2 text-left">
                                <h3 className="text-uppercase text-lightgray" style={{ fontSize: 14 }}>
                                  Let's Find Your Colleague
                                </h3>
                              </div>
                            </div>
                          </Card.Header>
                          <Card.Body className="p-2">
                            <Select
                              isMulti={true}
                              closeMenuOnSelect={false}
                              value={renderProps.values.who}
                              onChange={(selectedOption) => {
                                renderProps.setFieldValue('who', selectedOption ? selectedOption : []);
                              }}
                              options={options}
                              menuContainerStyle={{ 'zIndex': 999 }}
                              isClearable
                              styles={{
                                menuPortal: base => {
                                  const { zIndex, ...rest } = base;
                                  return { ...rest, zIndex: 9999 };
                                }
                              }}
                              menuPortalTarget={document.body}
                              isSearchable={true}
                              name="who"
                              components={{
                                Option: singleOption,
                                SingleValue: singleValue
                              }}
                            />
                            <ErrorMessage className="help-block text-danger" name="who" component="div" />
                            <Row className="p-1 text-center">
                              {renderProps.values.who.map((selectedPerson, index) => {
                                return (
                                  whoLength > 6 && index > 4 ?
                                    index === 5 ?
                                      <Col key={`person-${index}`} className="m-1 shadow align-self-center">
                                        <Card.Body className="pt-3 pb-3 pl-0 pr-0 d-flex justify-content-center align-items-center">
                                          + { whoLength - 6 } More
                                        </Card.Body>
                                      </Col>
                                      :
                                      <></>
                                    :
                                    <Col key={`person-${index}`} className="m-1 shadow align-self-center">
                                      <Card.Body className="pt-3 pb-3 pl-0 pr-0 d-flex justify-content-center align-items-center">
                                        <StyledMenuImage bgPosition={selectedPerson.bgPosition} imgUrl={selectedPerson.imgUrl} />
                                        <div className="pl-2">
                                          {selectedPerson.label}
                                        </div>
                                      </Card.Body>
                                    </Col>
                                )
                              })}
                            </Row>
                          </Card.Body>
                        </Card>
                        <hr />
                        <Card>
                          <Card.Header className="p-1 bg-white">
                            <div className="d-flex">
                              <div className="pl-2 text-left">
                                <h3 className="text-uppercase text-lightgray" style={{ fontSize: 14 }}>
                                  Leave A Comment
                                </h3>
                              </div>
                            </div>
                          </Card.Header>
                          <Card.Body className="p-2">
                            <Row className="mb-4">
                              <Col sm={12}>
                                <Field type="text" className="form-control shadow-none" name="comment" placeholder="Please tell us the reason you are recognizing your colleague." component="textarea" rows="4" />
                                <ErrorMessage className="help-block text-danger" name="comment" component="div" />
                              </Col>
                            </Row>
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <Button
                          className="font-weight-bold"
                          type="submit"
                          variant="primary"
                          size="lg"
                          block
                        >
                          Send Star
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                )
              }}
            />
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={handleSubmitMyForm} variant="success" className="pt-0 pb-0">
              <span className="btn-label"><FontAwesomeIcon icon={faStar} /></span>Send A Star
            </Button>
          </Modal.Footer> */}
        </React.Fragment>
      }
    </Modal>
  )
};

export default SendStarModal;