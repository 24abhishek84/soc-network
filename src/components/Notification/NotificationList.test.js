import React from 'react';
import { shallow } from 'enzyme';
import NotificationList from "./NotificationList";
import renderer from 'react-test-renderer';

describe('Notification List Component', () => {
  let wrapper, snapshot;
  wrapper = shallow(<NotificationList />);
  snapshot = renderer.create(<NotificationList />).toJSON();

  // it('Should render without errors', () => {
  //   const component = findByTestAtrr(wrapper, 'appComponent');
  //   expect(component.length).toBe(1);
  // });

  test('it matches the snapshot', () => {
    expect(snapshot).toMatchSnapshot();
  });
});
