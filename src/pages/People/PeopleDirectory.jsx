import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { changeNavTitle, changeNavMenu } from '../../actions/common';

import { Table, Image } from 'react-bootstrap';

const dummyData = [
  {
    id: 1,
    image: `/assets/imgs/people_1.png`,
    name: 'Elena Kalimera',
    jobtitle_dept: 'Unknown',
    lacation_phone: 'Unknown',
    skills: ''
  },
  {
    id: 2,
    image: `/assets/imgs/people_2.png`,
    name: 'Fouad Omri',
    jobtitle_dept: 'Unknown',
    lacation_phone: 'Unknown',
    skills: ''
  },
  {
    id: 3,
    image: `/assets/imgs/people_4.jpg`,
    name: 'Safa Omri',
    jobtitle_dept: 'Director',
    lacation_phone: '+49 176 25105753',
    skills: ''
  }
];

const PeopleDirectory = (props) => {
  const [ currentData, setCurrentGroups ] = useState(dummyData);

  useEffect(() => {
    const { changeNavTitle, changeNavMenu } = props;

    const menus = [];

    const titleSettings = {
      title: 'People Directory',
      icon: '/assets/icons/people-directory.svg'
    }

    changeNavTitle(titleSettings);
    changeNavMenu(menus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyUp = (e) => {
    const search_key = e.target.value.toLowerCase();
    let data = [];
    dummyData.forEach((item) => {
      const str = item.name.toLowerCase();
      let setobj;
      if (str.includes(search_key) === true) {
        if (data.length > 0) {
          setobj = data.find((x) => x.id === item.id);
          if (setobj === undefined) {
            data.push(item);
          }
        } else {
          data.push(item);
        }
      }
    });

    setCurrentGroups(data);
  };

  return (
    <div className="w-75 mx-auto mt-4 border">
      <input
        placeholder="Search"
        type="text"
        id="search"
        name="search"
        className="form-control border-0"
        onKeyUp={(e) => handleKeyUp(e)}
      />
      <div className="p-0 text-body font-size-12">
        <Table className="m-0" striped hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Job Title & Department</th>
              <th>Location & Phone</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((tmpdata) => {
              return (
                <tr key={tmpdata.id}>
                  <td className="align-middle">
                    <Image
                      src={tmpdata.image}
                      className="overflow-hidden rounded-circle"
                      height={36}
                    />
                    <span className="pl-2">{tmpdata.name}</span>
                  </td>
                  <td className="align-middle">{tmpdata.jobtitle_dept}</td>
                  <td className="align-middle">{tmpdata.lacation_phone}</td>
                  <td className="align-middle">{tmpdata.skills}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.common
  };
}

export default connect(
  mapStateToProps,
  { changeNavTitle, changeNavMenu }
)(PeopleDirectory);
