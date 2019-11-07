import React from 'react';
import { Modal, Button, Col, Card, Row, FormLabel } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage, FieldArray, getIn } from 'formik';
import * as Yup from "yup";
import Select from 'react-select';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions/TakePartActions';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CardSchema = Yup.object().shape({
  what: Yup.string().required("Required"),
  why: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  answers: Yup.array().min(1, "Required").required("Required"),
  whyDescription: Yup.string().min(2, "Too Short!").max(140, "Too Long!").required("Required"),
  whyImage: Yup.mixed()
    .test('fileType', "Unsupported File Format", value => {
      if (value) {
        return ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type);
      } else {
        return true;
      }
    })
    .test('fileSize', "File Size is too large", value => {
      if (value) {
        return value.size <= 1024000;
      } else {
        return true;
      }
    }),
  who: Yup.array().min(1, "Select atleast 1 group").required("Required"),
});

const ErrorMessageArray = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      console.log('form', form);
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ?
        <div className="help-block text-danger pt-1">{error}</div>
        :
        null
    }}
  />
);

const options = [
  { value: 'IT Department', label: 'IT Department' },
  { value: 'Designing', label: 'Designing' },
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Management', label: 'Management' },
  { value: 'Admin', label: 'Admin' },
  { value: 'Mobile Department', label: 'Mobile Department' },
];

const proposalTypeOptions = [
  { value: 'Foo', label: 'Foo Proposal' },
  { value: 'StarMeUp', label: 'StarMeUp Proposal' },
  { value: 'BetterMe', label: 'BetterMe Proposal' },
  { value: 'BeThere', label: 'BeThere Proposal' },
  { value: 'TakePart', label: 'TakePart Proposal' },
];

const CreateTakePartModal = ({ show, onHide, createTakePartCardAction }) => {
  const handleFormSubmit = async (values) => {
    console.log('values', values);
    let data = new FormData();
    for (var key in values) {
      data.append(key, values[key]);
    }
    console.log('data', data);
    await onHide();
    createTakePartCardAction();
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={`quiz-modal create-take-part`}
    >
      <Modal.Header className="text-center" closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="w-100 font-size-20 modal-title font-weight-bold"
          >
            Create Card
          </Modal.Title>
        </Modal.Header>
      <Modal.Body style={{ height: 'unset', maxHeight: '75vh', padding: '1rem 1rem 0 1rem' }}>
        <Formik
          enableReinitialize
          initialValues={{
            what: '',
            why: '',
            answers: [''],
            whyDescription: '',
            whyImage: '',
            who: []
          }}
          validationSchema={CardSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            console.log('renderProps', renderProps);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                {/* <div className="funkyradio d-flex flex-column justify-content-between">
                  <div className="funkyradio-info">
                    <Field type="radio" name="what" id="radio1" value="Foo" />
                    <label htmlFor="radio1">Foo Proposal</label>
                  </div>
                  <div className="funkyradio-primary">
                    <Field type="radio" name="what" id="radio2" value="StarMeUp" />
                    <label htmlFor="radio2">StarMeUp Proposal</label>
                  </div>
                  <div className="funkyradio-warning">
                    <Field type="radio" name="what" id="radio3" value="BetterMe" />
                    <label htmlFor="radio3">BetterMe Proposal</label>
                  </div>
                  <div className="funkyradio-danger">
                    <Field type="radio" name="what" id="radio4" value="BeThere" />
                    <label htmlFor="radio4">BeThere Proposal</label>
                  </div>
                  <div className="funkyradio-success">
                    <Field type="radio" name="what" id="radio5" value="TakePart" />
                    <label htmlFor="radio5">TakePart Proposal</label>
                  </div>
                </div> */}
                <FormLabel className="font-size-15 font-weight-bold d-flex justify-content-between">
                  <div>Card Type</div>
                </FormLabel>
                <Select
                  closeMenuOnSelect={true}
                  value={renderProps.values.what}
                  onChange={(selectedOption) => {
                    renderProps.setFieldValue('what', selectedOption);
                  }}
                  options={proposalTypeOptions}
                  menuContainerStyle={{ 'zIndex': 999 }}
                  isClearable
                  styles={{
                    menuPortal: base => {
                      const { zIndex, ...rest } = base;
                      return { ...rest, zIndex: 9999 };
                    }
                  }}
                  menuPortalTarget={document.body}
                  isSearchable
                  name="what"
                  id="what"
                  placeholder="Select card type..."
                />
                <ErrorMessage className="help-block text-danger pt-1" name="what" component="div" />
                <Row className="mb-4 pt-4">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">Why?</FormLabel>
                    <Field type="text" className="form-control shadow-none" name="why" placeholder="Why are you creating this card?" />
                    <ErrorMessage className="help-block text-danger pt-1" name="why" component="div" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">Answers</FormLabel>
                    <FieldArray
                      validateOnChange={true}
                      name="answers"
                      render={arrayHelpers => (
                        renderProps.values.answers && renderProps.values.answers.length > 0 ? (
                          <React.Fragment>
                            {renderProps.values.answers.map((answer, index) => (
                              <React.Fragment key={index}>
                                <div className={`d-flex ${index > 0 ? 'pt-1' : ''}`}>
                                  <Field name={`answers[${index}]`} className="form-control shadow-none" style={{ width: '80%' }} required />
                                  {index !== 0 &&
                                    <React.Fragment>
                                      {/* remove answer from the list */}
                                      <Button variant="outline-danger" className="ml-1 rounded-circle border" onClick={() => arrayHelpers.remove(index)}>
                                        <FontAwesomeIcon icon={faMinus} />
                                      </Button>
                                    </React.Fragment>
                                  }
                                </div>
                                <ErrorMessageArray name={`answers[${index}]`} />
                              </React.Fragment>
                            ))}
                            <Button block variant="outline-light" className="mt-2 text-body" style={{ width: '80%', border: '1px dashed' }} onClick={() => arrayHelpers.push('')}>
                              <FontAwesomeIcon icon={faPlus} />
                            </Button>
                          </React.Fragment>
                        ) : (
                          <button type="button" onClick={() => arrayHelpers.push('')}>
                            {/* show this when user has removed all answers from the list */}
                            Add a friend
                          </button>
                        )
                      )}
                    />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">Description</FormLabel>
                    <Field type="text" className="form-control shadow-none" name="whyDescription" placeholder="Give more detail to this card." component="textarea" rows="4" />
                    <ErrorMessage className="help-block text-danger pt-1" name="whyDescription" component="div" />
                  </Col>
                </Row>
                <Row className="mb-4">
                  <Col sm={12}>
                    <FormLabel className="font-size-15 font-weight-bold">Image</FormLabel>
                    <input
                      type="file"
                      className="form-control shadow-none"
                      name="whyImage" style={{ height: 36 }}
                      onChange={(e) => {
                        if (!e.target.files) {
                          return;
                        }
                        renderProps.setFieldValue('whyImage', e.target.files[0])
                      }}
                    />
                    <ErrorMessage className="help-block text-danger pt-1" name="whyImage" component="div" />
                  </Col>
                </Row>
                <FormLabel className="font-size-15 font-weight-bold">Person or Department</FormLabel>
                <Select
                  closeMenuOnSelect={false}
                  value={renderProps.values.who}
                  onChange={(selectedOption) => {
                    renderProps.setFieldValue('who', selectedOption);
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
                  isSearchable
                  isMulti
                  name="who"
                  placeholder="Select person or department..."
                  menuPlacement="top"
                />
                <ErrorMessage className="help-block text-danger pt-1" name="who" component="div" />
                {renderProps.values.who.length > 0 &&
                  <Row className="p-1 text-center">
                    {renderProps.values.who.map((group) => {
                      return (
                        <Col key={group.value} className="m-1 shadow align-self-center">
                          <Card.Body className="pt-3 pb-3 pl-0 pr-0">
                            <b>{group.label}</b>
                          </Card.Body>
                        </Col>
                      );
                    })}
                  </Row>
                }
                <div className="row position-sticky bg-white pt-3 pb-3" style={{ bottom: 0 }}>
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
            )
          }}
        />
      </Modal.Body>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  ...state.takePart
})

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators({ ...Actions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTakePartModal);