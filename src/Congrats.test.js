import React from 'react';
import {
  shallow,
  findByTestAttr,
  checkProps
} from './setupTests';
import Congrats from './Congrats';

const defaultProps = {
  success: false,
};

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - props to pass to the child
 * @returns {ShallowWrapper} - enzyme wrapper of the component
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
}

describe('<Congrats />', () => {
  let wrapper, congrats;

  it('renders without error', () => {
    wrapper = setup();
    congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats).toHaveLength(1);
  });

  it('renders no text when `success` prop is false', () => {
    wrapper = setup({ success: false });
    congrats = findByTestAttr(wrapper, 'component-congrats');
    expect(congrats.text()).toBe('');
  });

  it('renders a non-empty message when `success` prop is true', () => {
    wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).toBeGreaterThan(0);
  });

  it('does not throw an error with expected prop types', () => {
    const expectedProps = { success: true };
    checkProps(Congrats, expectedProps);
  });
});