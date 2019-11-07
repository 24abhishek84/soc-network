import React from "react";
import { Dropdown, Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons';

const AddProfileSection = ({ handleModalToggle }) => {
  return (
    <Dropdown className="profile-header--add-profile-dropdown">
      <Dropdown.Toggle className="font-size-16 profile-header--add-profile" variant="primary" id="dropdown-basic">
        Add profile section
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Accordion defaultActiveKey="0">
          <Card className="border-top border-left-0 border-right-0 border-bottom-0 rounded-0">
            <Accordion.Toggle className="font-weight-bold cursor-pointer bg-white user-select-none font-size-14 card-header d-flex justify-content-between align-items-center" as="div" eventKey="1">
              <span>About</span>
              <FontAwesomeIcon className="font-size-20" icon={faAngleDown} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className="p-2">
                <div className="d-flex pb-3">
                  <img src="/assets/icons/briefcase.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Contact Info</div>
                    <div className="text-body pt-1">Your contact information. It will be visible to your other connection.</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('editcontactinfo')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="border-top border-left-0 border-right-0 border-bottom-0 rounded-0">
            <Accordion.Toggle className="font-weight-bold cursor-pointer bg-white user-select-none font-size-14 card-header d-flex justify-content-between align-items-center" as="div" eventKey="2">
              <span>Background</span>
              <FontAwesomeIcon className="font-size-20" icon={faAngleDown} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className="p-2">
                <div className="d-flex pb-3">
                  <img src="/assets/icons/briefcase.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Work Experience</div>
                    <div className="text-body pt-1">1 position on your profile</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('workExperience')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/university.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Education</div>
                    <div className="text-body pt-1">Get 11x more profile views by adding your school</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('education')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/certification.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">License & Certifications</div>
                    <div className="text-body pt-1">Showcase your expertise with your credentials</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('certification')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/volunteer.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Volunteer Experience</div>
                    <div className="text-body pt-1">Highlight your passions and how you like to give back</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('volunteer')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="border-top border-left-0 border-right-0 border-bottom-0 rounded-0">
            <Accordion.Toggle className="font-weight-bold cursor-pointer bg-white user-select-none font-size-14 card-header d-flex justify-content-between align-items-center" as="div" eventKey="3">
              <span>Skills</span>
              <FontAwesomeIcon className="font-size-20" icon={faAngleDown} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body className="p-2">
                <div className="d-flex pb-3">
                  <img src="/assets/icons/skills.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Skills</div>
                    <div className="text-body pt-1">Showcase your strengths as a professional</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('skill')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="border-top border-left-0 border-right-0 border-bottom-0 rounded-0">
            <Accordion.Toggle className="font-weight-bold cursor-pointer bg-white user-select-none font-size-14 card-header d-flex justify-content-between align-items-center" as="div" eventKey="4">
              <span>Accomplishments</span>
              <FontAwesomeIcon className="font-size-20" icon={faAngleDown} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body className="p-2" style={{ maxHeight: 400, overflowY: 'auto' }}>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/publication.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Publications</div>
                    <div className="text-body pt-1">List your published work and be found 7x more</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('publication')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/patent.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Patents</div>
                    <div className="text-body pt-1">Showcase your innovation and expertise</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('patents')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/courses.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Courses</div>
                    <div className="text-body pt-1">List coursework from your prior or continuing education</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('courses')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/project.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Projects</div>
                    <div className="text-body pt-1">Add compelling projects to demonstrate your experience</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('projects')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/star.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Honors & Awards</div>
                    <div className="text-body pt-1">Feature the recognition you’ve earned</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('awards')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/test.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Test Scores</div>
                    <div className="text-body pt-1">If you excelled in an exam, you can list your score here</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('tests')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/language.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Languages</div>
                    <div className="text-body pt-1">Show how you can be a fit for a job or overseas opportunity</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('languages')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <img src="/assets/icons/organization.svg" height="30" width="30" alt="" />
                  <div className="ml-2 font-size-14 flex-grow-1 flex-shrink-1">
                    <div className="font-weight-bold">Organizations</div>
                    <div className="text-body pt-1">Show your involvement with communities that are important to you</div>
                  </div>
                  <div className="profile-section-faPlus cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => handleModalToggle('organizations')}>
                    <FontAwesomeIcon className="font-size-22 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default AddProfileSection;
