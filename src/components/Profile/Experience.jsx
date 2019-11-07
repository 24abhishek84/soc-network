import React from 'react';
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Experience = (props) => {
  return (
    <Card className="shadow profile-cards grid-card mt-3 p-4">
      <Card.Header className="border-0 p-0 bg-white">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="m-0 font-size-20 text-body">
            Experience
          </h2>
          <div className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => props.handleModalToggle('workExperience')}>
            <FontAwesomeIcon className="font-size-24 p-1 rounded-circle profile-header--edit-icon" icon={faPlus} />
          </div>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between border-bottom pt-3 pb-3">
            <img height={56} src="/assets/logo/devstree.png" alt="organization-logo" />
            <div className="ml-4 font-size-14 justify-self-start flex-grow-1 flex-shrink-1">
              <div className="font-weight-bold">PHP Developer</div>
              <div className="text-body pt-1">Devstree IT Services Private Limited</div>
              <div className="text-muted pt-1">
                <span>Jul 2017 – Present</span>
                <span className="pl-1">&middot;</span>
                <span className="pl-1">2 yrs 3 mos</span>
              </div>
              <div className="text-muted pt-1">Ahmedabad Area, India</div>
            </div>
            <div className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center">
              <img height={24} src="/assets/icons/edit-icon.svg" alt="edit-icon" className="rounded-circle profile-header--edit-icon" />
            </div>
          </div>
          <div className="d-flex justify-content-between border-bottom pt-3 pb-3">
            <img height={56} src="/assets/logo/devstree.png" alt="organization-logo" />
            <div className="ml-4 font-size-14 justify-self-start flex-grow-1 flex-shrink-1">
              <div className="font-weight-bold">PHP Developer</div>
              <div className="text-body pt-1">Devstree IT Services Private Limited</div>
              <div className="text-muted pt-1">
                <span>Jul 2017 – Present</span>
                <span className="pl-1">&middot;</span>
                <span className="pl-1">2 yrs 3 mos</span>
              </div>
              <div className="text-muted pt-1">Ahmedabad Area, India</div>
            </div>
            <div className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center">
              <img height={24} src="/assets/icons/edit-icon.svg" alt="edit-icon" className="rounded-circle profile-header--edit-icon" />
            </div>
          </div>
          <div className="d-flex justify-content-between border-bottom pt-3 pb-3">
            <img height={56} src="/assets/logo/devstree.png" alt="organization-logo" />
            <div className="ml-4 font-size-14 justify-self-start flex-grow-1 flex-shrink-1">
              <div className="font-weight-bold">PHP Developer</div>
              <div className="text-body pt-1">Devstree IT Services Private Limited</div>
              <div className="text-muted pt-1">
                <span>Jul 2017 – Present</span>
                <span className="pl-1">&middot;</span>
                <span className="pl-1">2 yrs 3 mos</span>
              </div>
              <div className="text-muted pt-1">Ahmedabad Area, India</div>
            </div>
            <div className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center">
              <img height={24} src="/assets/icons/edit-icon.svg" alt="edit-icon" className="rounded-circle profile-header--edit-icon" />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Experience
