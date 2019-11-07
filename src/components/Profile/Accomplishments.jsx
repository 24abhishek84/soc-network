import React from "react";
import { Card, Dropdown, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons';

const Accomplishments = (props) => {
  return (
    <Card className="shadow profile-cards grid-card mt-3">
      <Card.Header className="border-0 p-0 bg-white pl-4 pr-4 pt-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0 font-size-20 text-body">
            Accomplishments
          </h2>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              id="dropdown-custom-components"
            />
            <Dropdown.Menu className="accomplishments-menu">
              <Dropdown.Item eventKey="publication" onClick={() => props.handleModalToggle('publication')}>Publication</Dropdown.Item>
              <Dropdown.Item eventKey="patent" onClick={() => props.handleModalToggle('patents')}>Patent</Dropdown.Item>
              <Dropdown.Item eventKey="course" onClick={() => props.handleModalToggle('courses')}>Course</Dropdown.Item>
              <Dropdown.Item eventKey="project" onClick={() => props.handleModalToggle('projects')}>Project</Dropdown.Item>
              <Dropdown.Item eventKey="award" onClick={() => props.handleModalToggle('awards')}>Honor and Award</Dropdown.Item>
              <Dropdown.Item eventKey="testScore" onClick={() => props.handleModalToggle('tests')}>Test Score</Dropdown.Item>
              <Dropdown.Item eventKey="language" onClick={() => props.handleModalToggle('languages')}>Language</Dropdown.Item>
              <Dropdown.Item eventKey="organization" onClick={() => props.handleModalToggle('organizations')}>Organization</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="d-flex flex-column">
          <Accordion>
            <div className="border-bottom">
              <div className="d-flex justify-content-between align-items-center pt-3 pb-3 pr-4 pl-4">
                <span className="text-primary font-size-32">1</span>
                <div className="ml-4 font-size-14 justify-self-start flex-grow-1 flex-shrink-1">
                  <div className="font-weight-bold">Course</div>
                </div>
                <Accordion.Toggle as="div" eventKey="0" className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon className="font-size-24 p-1 rounded-circle profile-header--edit-icon" style={{ zoom: 1.2 }} icon={faAngleDown} />
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="0">
                <div className="pt-3 pb-3 pr-4 pl-4">
                  <div className="text-body pt-1">Node JS API Development</div>
                </div>
              </Accordion.Collapse>
            </div>
            <div className="border-bottom">
              <div className="d-flex justify-content-between align-items-center pt-3 pb-3 pr-4 pl-4">
                <span className="text-primary font-size-32">1</span>
                <div className="ml-4 font-size-14 justify-self-start flex-grow-1 flex-shrink-1">
                  <div className="font-weight-bold">Language</div>
                </div>
                <Accordion.Toggle as="div" eventKey="1" className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon className="font-size-24 p-1 rounded-circle profile-header--edit-icon" style={{ zoom: 1.2 }} icon={faAngleDown} />
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="1">
                <div className="pt-3 pb-3 pr-4 pl-4">
                  <div className="text-body pt-1">English</div>
                </div>
              </Accordion.Collapse>
            </div>
            <div className="border-bottom">
              <div className="d-flex justify-content-between align-items-center pt-3 pb-3 pr-4 pl-4">
                <span className="text-primary font-size-32">1</span>
                <div className="ml-4 font-size-14 justify-self-start flex-grow-1 flex-shrink-1">
                  <div className="font-weight-bold">Project</div>
                </div>
                <Accordion.Toggle as="div" eventKey="2" className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center">
                  <FontAwesomeIcon className="font-size-24 p-1 rounded-circle profile-header--edit-icon" style={{ zoom: 1.2 }} icon={faAngleDown} />
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="2">
                <div className="pt-3 pb-3 pr-4 pl-4">
                  <div className="text-body pt-1">Social Network</div>
                </div>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Accomplishments

class CustomToggle extends React.Component {
  render() {
    return (
      <div {...this.props} className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center">
        <FontAwesomeIcon className="font-size-24 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
      </div>
    );
  }
}