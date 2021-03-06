import React from 'react';
import Header from './index';
import renderer from 'react-test-renderer';

it('Header renders without changes', () => {
  const tree = renderer.create(
    <Header />
  ).toJSON();
  
  expect(tree).toMatchSnapshot();
});