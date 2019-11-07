import React, { useState } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faAngleLeft, faAngleRight, faLock, faStar } from '@fortawesome/free-solid-svg-icons';

const profileStrength = [
  {
    type: "photo",
    image: "/assets/icons/camera.png",
    textHeader: "Add a profile photo to help others recognize you",
    textContent: "Members with a photo get up to 21x more profile views",
  },
  {
    type: "university",
    image: "/assets/icons/university.svg",
    textHeader: "Which university or school did you attend?",
    textContent: "Add your school so that classmates and alumni can easily find you",
  },
  {
    type: "skills",
    image: "/assets/icons/skills.svg",
    textHeader: "Add 5 skills to showcase what you are great at",
    textContent: "Members with more than 5 skills are 27X more likely to be discovered in searches by recruiters",
  },
  {
    type: "expertise",
    image: "/assets/icons/expertise.svg",
    textHeader: "Add a summary about your expertise and interests",
    textContent: "Summary is the #1 thing recruiters look at while viewing profiles",
  },
];

const Strength = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [strengthAccordionActiveKey, setStrengthAccordionActiveKey] = useState(null)

  const handleMeterSliderSelect = (direction) => {
    setCurrentIndex(direction === 'prev' ? currentIndex - 1 : currentIndex + 1);
  }

  const isProfileStrengthOpen = () => {
    setStrengthAccordionActiveKey(!strengthAccordionActiveKey ? '0' : null);
  }

  let currentSlider = undefined;

  if(profileStrength[currentIndex]) {
    currentSlider = profileStrength[currentIndex];
  }

  return (
    <Accordion activeKey={strengthAccordionActiveKey}>
      <Card className="w-100 shadow profile-cards mt-3 p-4">
        <Card.Header className="bg-white border-0 p-0">
          <div className="d-flex justify-content-between mb-3">
            <h3 className="m-0 font-size-20">
              <span className="text-secondary">Profile Strength:</span>&nbsp;<span className="text-body font-weight-bold">Beginner</span>
            </h3>
            <Accordion.Toggle className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" as="div" eventKey="0" onClick={isProfileStrengthOpen}>
              <FontAwesomeIcon className="font-size-24 p-1 rounded-circle profile-header--edit-icon" style={{ zoom: 1.5 }} icon={!strengthAccordionActiveKey ? faAngleDown : faAngleUp} />
            </Accordion.Toggle>
          </div>
          <div className="mb-3 profile-meter d-flex">
            <div className="strength-meter"></div>
            <div className="strength-meter"></div>
            <div className="strength-meter"></div>
            <div className="strength-meter bg-mgrey"></div>
            <div className="strength-meter bg-mgrey position-relative">
              <div className="meter-lock-div position-absolute d-flex justify-content-center align-items-center cursor-pointer">
                <FontAwesomeIcon className="font-size-24 p-1 rounded-circle profile-header--edit-icon" icon={faLock} />
              </div>
            </div>
            <div className="strength-meter bg-mgrey"></div>
            <div className="strength-meter bg-mgrey position-relative">
              <div className="meter-star-div position-absolute d-flex justify-content-center align-items-center cursor-pointer">
                <FontAwesomeIcon className="font-size-24 p-1 rounded-circle profile-header--edit-icon" icon={faStar} />
              </div>
            </div>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="p-0">
            {currentSlider &&
              <React.Fragment>
                <div className="border d-flex align-items-center p-2 cursor-pointer user-select-none">
                  <img src={currentSlider.image} alt=""/>
                  <div className="pl-3">
                    <p className="font-size-16 font-weight-bold mb-2">{currentSlider.textHeader}</p>
                    <p className="font-size-14 mb-0">{currentSlider.textContent}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <div className="d-flex" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                    <button onClick={() => handleMeterSliderSelect('prev')} className="meter-navigation-button d-inline-flex align-items-center" disabled={currentIndex === 0 ? true : false}>
                      <FontAwesomeIcon className="mr-2" icon={faAngleLeft} size="2x" />
                      <span className="font-size-16 font-weight-bold">Previous</span>
                    </button>
                    <button onClick={() => handleMeterSliderSelect('next')} className="meter-navigation-button ml-3 d-inline-flex align-items-center" disabled={currentIndex === (profileStrength.length - 1) ? true : false}>
                      <span className="font-size-16 font-weight-bold">Next</span><FontAwesomeIcon className="ml-2" icon={faAngleRight} size="2x" />
                    </button>
                  </div>
                  {currentSlider.type === 'photo' ?
                    <Button size="lg" className="font-weight-bold font-size-16 rounded-0 p-0 pl-2 pr-2 pt-1 pb-1" type="primary">Add Photo</Button>
                    :
                    currentSlider.type === 'university' ?
                      <Button size="lg" className="font-weight-bold font-size-16 rounded-0 p-0 pl-2 pr-2 pt-1 pb-1" type="primary">Add education</Button>
                      :
                      currentSlider.type === 'skills' ?
                        <Button size="lg" className="font-weight-bold font-size-16 rounded-0 p-0 pl-2 pr-2 pt-1 pb-1" type="primary">Add 5 skills</Button>
                      :
                      currentSlider.type === 'expertise' &&
                        <Button size="lg" className="font-weight-bold font-size-16 rounded-0 p-0 pl-2 pr-2 pt-1 pb-1" type="primary">Add summary</Button>
                  }
                </div>
              </React.Fragment>
            }
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default Strength;
