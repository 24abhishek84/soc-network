import React from 'react';

import { connect } from 'react-redux';
import { changeNavTitle, changeNavMenu } from '../../actions/common';

import { Card, Dropdown, Nav } from 'react-bootstrap';

import WorkExperienceModal from '../../components/Profile/WorkExperienceModal';
import EducationModal from '../../components/Profile/EducationModal';
import CertificationModal from '../../components/Profile/CertificationModal';
import VolunteerExperienceModal from '../../components/Profile/VolunteerExperienceModal';
import SkillsModal from '../../components/Profile/SkillsModal';
import PublicationModal from '../../components/Profile/PublicationModal';
import PatentsModal from '../../components/Profile/PatentsModal';
import CourseModal from '../../components/Profile/CourseModal';
import ProjectsModal from '../../components/Profile/ProjectsModal';
import AwardsModal from '../../components/Profile/AwardsModal';
import TestScoreModal from '../../components/Profile/TestScoreModal';
import LanguageModal from '../../components/Profile/LangaugeModal';
import OrganizationModal from '../../components/Profile/OrganizationModal';
import EditUserProfileModal from '../../components/Profile/EditUserProfileModal';
import ContactInfoModal from '../../components/Profile/ContactInfo';

import Dashboard from '../../components/Profile/Dashboard';
import Experience from '../../components/Profile/Experience';
import Accomplishments from '../../components/Profile/Accomplishments';
import Interests from '../../components/Profile/Interests';
// import Strength from '../../components/Profile/Strength';
import AddProfileSection from '../../components/Profile/AddProfileSection';
import ProfileImageUpload from '../../components/Profile/ProfileImageUpload';

import "./Profile.css";

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalType: undefined,
      selectedTab: 'about'
    };

    this.fileUpload = React.createRef();
  }

  componentDidMount() {
    const { changeNavTitle, changeNavMenu } = this.props;

    const menus = [];

    const titleSettings = {
      title: 'Profile',
    }

    changeNavTitle(titleSettings);
    changeNavMenu(menus);
  }

  uploadFile = (file) => {
    console.log('uploadFile', file);
  }

  handleModalToggle = (modalType) => {
    this.setState({
      showModal: modalType ? true : false,
      modalType
    })
  }

  handleSubmitModal = (values) => {
    const { modalType } = this.state;
    console.log('modalType', modalType);
    console.log('values', values);
  }

  handleNavSelect = selectedTab => {
    this.setState({ selectedTab });
  }

  render() {
    const { showModal, modalType, selectedTab } = this.state;

    return (
      <div className="p-5 mx-auto" style={{ minWidth: 650 }}>
        <Card className="w-100 profile-cards border-0 bg-transparent">
          {/* <Card.Img className="profile-cover-image" variant="top" src="/assets/profile-page/background.svg" height={200} /> */}
          <Card.Body className="p-0">
            <div className="d-flex">
              <ProfileImageUpload
                uploadFile={this.uploadFile}
                mainPage
              />
              <div className="d-flex flex-column profile-name-address w-100 profile-header-buttons pl-3">
                <h2 className="font-weight-normal">Chetan Godhani</h2>
                <h3 className="w-100 font-weight-normal font-size-18 pt-1">Full Stack Developer</h3>
                <h4 className="font-size-16 pt-1 font-weight-normal">
                  <span>Ahmedabad, Gujarat, India</span>
                  <span className="pl-1 font-weight-bold">&middot;</span>
                  <span className="pl-1 text-primary font-weight-bold user-select-none cursor-pointer">33 connections</span>
                  <span className="pl-1 font-weight-bold">&middot;</span>
                  <span className="pl-1 text-primary font-weight-bold user-select-none cursor-pointer" onClick={() => this.handleModalToggle('contactinfo')}>Contact info</span>
                </h4>
                <div className="d-flex align-items-center profile-organization-info">
                  <img height={50} src="/assets/logo/devstree.png" alt="organization-logo" />
                  <span className="pl-2 font-weight-bold font-size-14">Devstree IT Services Private Limited</span>
                </div>
              </div>
            </div>
            <div className="d-flex pt-3">
              <AddProfileSection
                handleModalToggle={this.handleModalToggle}
              />
              <Dropdown className="ml-2 profile-header--more-dropdown">
                <Dropdown.Toggle className="font-size-16 profile-header--more" variant="default" id="dropdown-basic">
                  More...
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Save to PDF</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="cursor-pointer user-select-none profile-header--edit ml-2 rounded-circle d-flex align-items-center justify-content-center" onClick={() => this.handleModalToggle('editintro')}>
                <img height={24} src="/assets/icons/edit-icon.svg" alt="edit-icon" className="rounded-circle profile-header--edit-icon" />
              </div>
            </div>
          </Card.Body>
        </Card>

        <Nav className="mt-3" fill variant="tabs" defaultActiveKey="about" onSelect={this.handleNavSelect}>
          <Nav.Item>
            <Nav.Link className="d-flex justify-content-center align-items-center betterme-link font-size-16 border-top-0 border-left-0 border-right-0 rounded-0" eventKey="about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="d-flex justify-content-center align-items-center betterme-link font-size-16 border-top-0 border-left-0 border-right-0 rounded-0" eventKey="dashboard">Dashboard</Nav.Link>
          </Nav.Item>
        </Nav>

        {/* <Strength /> */}

        {selectedTab === 'about' ?
          <React.Fragment>
            <Experience
              handleModalToggle={this.handleModalToggle}
            />

            <Accomplishments
              handleModalToggle={this.handleModalToggle}
            />

            <Interests />
          </React.Fragment>
          :
          selectedTab === 'dashboard' && <Dashboard />
        }


        {modalType &&
          modalType === 'workExperience' ?
            <WorkExperienceModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'education' ?
            <EducationModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'certification' ?
            <CertificationModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'volunteer' ?
            <VolunteerExperienceModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'skill' ?
            <SkillsModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'publication' ?
            <PublicationModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'patents' ?
            <PatentsModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'courses' ?
            <CourseModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'projects' ?
            <ProjectsModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'awards' ?
            <AwardsModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'tests' ?
            <TestScoreModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'languages' ?
            <LanguageModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'organizations' ?
            <OrganizationModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'editintro' ?
            <EditUserProfileModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'contactinfo' ?
            <ContactInfoModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
          :
          modalType === 'editcontactinfo' &&
            <ContactInfoModal
              show={showModal}
              onHide={() => this.handleModalToggle(undefined)}
              onSubmit={this.handleSubmitModal}
            />
        }
      </div>
    )
  }
}

export default connect(null, { changeNavTitle, changeNavMenu })(Profile);