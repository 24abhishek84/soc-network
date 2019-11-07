import React from 'react'

import { Modal, Button, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCut } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form } from 'formik';
import CreatableSelect from 'react-select/creatable';

const skillsOptions = [
  { value: 'ANIMAL_RIGHTS', label: 'Animal Welfare' },
  { value: 'ARTS_AND_CULTURE', label: 'Arts and Culture' },
  { value: 'CHILDREN', label: 'Children' },
  { value: 'CIVIL_RIGHTS', label: 'Civil Rights and Social Action' },
  { value: 'HUMANITARIAN_RELIEF', label: 'Disaster and Humanitarian Relief' },
  { value: 'ECONOMIC_EMPOWERMENT', label: 'Economic Empowerment' },
  { value: 'EDUCATION', label: 'Education' },
  { value: 'ENVIRONMENT', label: 'Environment' },
  { value: 'HEALTH', label: 'Health' },
  { value: 'HUMAN_RIGHTS', label: 'Human Rights' },
  { value: 'POLITICS', label: 'Politics' },
  { value: 'POVERTY_ALLEVIATION', label: 'Poverty Alleviation' },
  { value: 'SCIENCE_AND_TECHNOLOGY', label: 'Science and Technology' },
  { value: 'SOCIAL_SERVICES', label: 'Social Services' },
];

const SkillsModal = ({ show, onHide, onSubmit }) => {

  const handleFormSubmit = async (values) => {
    onSubmit(values);
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
      style={{ top: 80 }}
      // centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Skills
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        <Formik
          enableReinitialize
          initialValues={{
            skills: [],
          }}
          onSubmit={(values) => handleFormSubmit(values)}
          render={(renderProps) => {
            const { submitForm, setFieldValue, values: allValues } = renderProps;
            bindSubmitForm(submitForm);
            return (
              <Form className="take-part-form" onSubmit={renderProps.handleSubmit}>
                <Row>
                  <Col sm={12}>
                    <div className="form-group">
                      <CreatableSelect
                        closeMenuOnSelect={false}
                        isClearable
                        isMulti
                        value={allValues.skills}
                        onChange={(values) => setFieldValue('skills', values ? values : [])}
                        options={skillsOptions}
                        menuContainerStyle={{ zIndex: 999 }}
                        styles={{
                          menuPortal: (base) => {
                            const { zIndex, ...rest } = base;
                            return { ...rest, zIndex: 9999 };
                          }
                        }}
                        menuPortalTarget={document.body}
                        placeholder="Skill (ex: Data Analysis)"
                        isDisabled={allValues.skills.length >= 50 ? true : false}
                      />
                      <div className="text-secondary font-italic pt-1">You can add {50 - allValues.skills.length} more skills</div>
                    </div>
                    <div>
                      {allValues.skills.map((skill, index) => {
                        return (
                          <Badge
                            key={`${skill.value}-${index}`}
                            pill
                            variant="default"
                            className="font-size-14 m-2 p-2 border border-primary text-primary user-select-none cursor-pointer"
                            onClick={() => setFieldValue('skills', allValues.skills.filter(x => x.label !== skill.label))}
                          >
                            <FontAwesomeIcon icon={faCut} /> {skill.label}
                          </Badge>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </Form>
            )
          }}
        />
      </Modal.Body>
      <Modal.Footer className="p-1">
        <Button onClick={handleSubmitMyForm} className="font-size-16 rounded-0" variant="primary">
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SkillsModal
