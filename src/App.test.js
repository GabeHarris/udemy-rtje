import React from 'react';
import App from './App';
import { shallow } from './setupTests';

describe('<App />', () => {
  it('renders without an error', () => {
    expect(shallow(<App />)).toBeTruthy();
  });
});
