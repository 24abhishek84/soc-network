import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { findByTestAtrr, testStore } from './../Utils';
import "./matchMedia.mock";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Provider store={store}><App /></Provider>).childAt(0).dive();
  return wrapper;
};

describe('App Component', () => {
  let wrapper, snapshot;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title 1',
          body: 'Some text'
        },
        {
          title: 'Example title 2',
          body: 'Some text'
        },
        {
          title: 'Example title 3',
          body: 'Some text'
        }
      ]
    };
    const store = testStore({});
    wrapper = setUp(initialState);
    snapshot = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
  });

  // it('Should render without errors', () => {
  //   const component = findByTestAtrr(wrapper, 'appComponent');
  //   expect(component.length).toBe(1);
  // });

  test('it matches the snapshot', () => {
    expect(snapshot).toMatchSnapshot();
  });
});
