import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/missions/Missions';

it('matches snapshot', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
