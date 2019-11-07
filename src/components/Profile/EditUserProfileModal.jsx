import React, { useState, useRef } from 'react'

import { Modal, Button, Row, Col, Card, OverlayTrigger, Popover } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import industryOptions from './industry';
import ProfileImageUpload from './ProfileImageUpload';

const EditUserProfileSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
  lastName: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
  headline: Yup.string().min(2, "Too Short!").max(260, "Too Long!").required("Required"),
  country: Yup.string().min(2, "Too Short!").max(60, "Too Long!").required("Required"),
  industry: Yup.object().shape({
              value: Yup.string(),
              label: Yup.string()
            }).required("Required"),
});

const EditUserProfileModal = ({ show, onHide, onSubmit }) => {

  const [uploadedProfileImgObj, setUploadedProfileImgObj] = useState(undefined);
  const [uploadedBannerImgObj, setUploadedBannerImgObj] = useState(undefined);
  const [uploadedBannerImg, setUploadedBannerImg] = useState(undefined);
  const fileUploadBanner = useRef(null);

  const handleFormSubmit = async (values) => {
    onSubmit({
      ...values,
      bannerImg: uploadedBannerImgObj,
      profileImg: uploadedProfileImgObj
    });
    await onHide();
  }

  let submitMyForm = null;

  const handleSubmitMyForm = (e) => {
    if (submitMyForm) {
      submitMyForm(e);
    }
  };

  const bindSubmitForm = (submitForm) => {
    submitMyForm = submitForm;
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="mw-100"
      className="work-experience-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit intro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0" style={{ maxHeight: '75vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            firstName: '',
            lastName: '',
            headline: '--',
            country: '',
            state: '',
            city: '',
            industry: undefined,
          }}
          validationSchema={EditUserProfileSchema}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm, values: allValues } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form onSubmit={renderProps.handleSubmit}>
                <Card className="border-0">
                  <div className="position-relative">
                    <Card.Img className="rounded-0 profile-cover-image" variant="top" src={uploadedBannerImg ? uploadedBannerImg.value : "/assets/profile-page/background.svg"} height={200} />
                    <OverlayTrigger
                      trigger="hover"
                      key="left"
                      placement="left"
                      overlay={
                        <Popover id={`popover-positioned-left-banner`}>
                          <Popover.Title as="h3">1,584 x 396px recommended</Popover.Title>
                        </Popover>
                      }
                    >
                      <div className="edit-profile-banner position-absolute cursor-pointer user-select-none profile-header--edit rounded-circle d-flex align-items-center justify-content-center" onClick={() => fileUploadBanner.current.click()}>
                        <img height={24} src="/assets/icons/edit-icon.svg" alt="edit-icon" className="rounded-circle profile-header--edit-icon" />
                      </div>
                    </OverlayTrigger>
                    <input
                      type="file"
                      className="d-none"
                      ref={fileUploadBanner}
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files.length === 0) {
                          setUploadedBannerImg(undefined);
                          setUploadedBannerImgObj(undefined);
                          return;
                        } else {
                          const reader = new FileReader();
                          const file = e.target.files[0];
                          const filetype = file.type;
                          reader.readAsDataURL(file);
                          reader.onload = (event) => {
                            let payload = undefined;

                            if (filetype.includes('image/')) {
                              payload = {
                                type: 'image',
                                value: event.target.result,
                              }
                            }

                            setUploadedBannerImg(payload);
                          };

                          setUploadedBannerImgObj(e.target.files[0]);
                        }
                      }}
                    />
                    <div className="d-flex p-2 position-absolute" style={{ left: 0, top: 15, width: 176 }}>
                      <ProfileImageUpload
                        uploadFile={(file) => setUploadedProfileImgObj(file)}
                      />
                    </div>
                  </div>
                  <Card.Body className="p-3">
                    <Row>
                      <Col sm={6}>
                        <div className="form-group">
                          <label className="font-size-14" htmlFor="firstName" required>First Name</label>
                          <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="firstName" id="firstName" placeholder="Ex: Boston University" />
                          <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="firstName" component="div" />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="form-group">
                          <label className="font-size-14" htmlFor="lastName" required>Last Name</label>
                          <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="lastName" id="lastName" placeholder="Ex: Boston University" />
                          <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="lastName" component="div" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="form-group">
                          <label className="font-size-14" htmlFor="headline">Headline</label>
                          <Field component="textarea" rows="3" className="form-control input-field shadow-none font-size-14 text-body" name="headline" id="headline" />
                          <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="headline" component="div" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <div className="form-group">
                          <label className="font-size-14" htmlFor="country" required>Country/Region</label>
                          <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="country" id="country" placeholder="Ex: Boston University" />
                          <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="country" component="div" />
                        </div>
                      </Col>
                      <Col sm={6}>
                        <div className="form-group">
                          <label className="font-size-14" htmlFor="state" required>Province/State</label>
                          <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="state" id="state" placeholder="Ex: Boston University" />
                          <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="state" component="div" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="form-group">
                          <label className="font-size-14" htmlFor="city" required>City/District</label>
                          <Field type="text" className="form-control input-field shadow-none font-size-14 text-body" name="city" id="city" placeholder="Ex: Boston University" />
                          <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="city" component="div" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12}>
                        <div className="form-group">
                          <label className="font-size-14" htmlFor="industry">Industry</label>
                          <Select
                            closeMenuOnSelect={true}
                            components={makeAnimated}
                            defaultValue={allValues.industry}
                            options={industryOptions}
                            menuContainerStyle={{ zIndex: 999 }}
                            menuPlacement = "top"
                            styles={{
                              menuPortal: (base) => {
                                const { zIndex, ...rest } = base;
                                return { ...rest, zIndex: 9999 };
                              }
                            }}
                            menuPortalTarget={document.body}
                            onChange={(selectedOption) => renderProps.setFieldValue('industry', selectedOption ? selectedOption : undefined)}
                            placeholder="Select related industry..."
                          />
                          <ErrorMessage className="help-block text-danger font-weight-bold font-size-14" name="industry" component="div" />
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Form>
            )
          }}
        />
      </Modal.Body>
      <Modal.Footer className="p-1">
        <Button onClick={handleSubmitMyForm} className="font-size-16 rounded-0" variant="primary">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default EditUserProfileModal;