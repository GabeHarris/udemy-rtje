import React from 'react';
import { shallow, findByTestAttr } from './setupTests';
import Congrats from './Congrats';

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {*} props - props to pass to the child
 * @returns {ShallowWrapper} - enzyme wrapper of the component
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
}

describe('<Congrats />', () => {
  let wrapper, congrats, props;

  it('renders without error', () => {
    wrapper = setup();
    congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats).toHaveLength(1);
  });

  it('renders no text when `success` prop is false', () => {
    props = { success: false };
    wrapper = setup(props);
    congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats.text()).toBe('');
  });

  it('renders a non-empty message when `success` prop is true', () => {
    wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).toBeGreaterThan(0);
  });
});