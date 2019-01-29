import React from 'react';
import { shallow } from './setupTests';
import { Counter } from './Counter';

/** 
 * Factory function to create ShallowWrapper for the component.
 * @function setup
 * @param {object} props - The component props.
 * @param {object} state - Initial state for setup.
 * @returns {ShallowWrapper}
*/
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Counter {...props} />);
  if (state) { wrapper.setState(state); }
  return wrapper;
}

/** 
 * Get the ShallowWrapper node(s)
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper - The parent wrapper.
 * @param {string} val - The data-test value to search.
 * @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

/**
 * Set counter value and error value
 * @function changeCount
 * @param {string} dir - inc for increment or dec for decrement
 * @param {object} currentState - the current counter value and error value
 * @returns {object} - returns the new object for the state containing the new counter value and the boolean for error
 */

const changeCount = (dir = 'inc', currentState = { counter: 0, error: false }) => {
  let newState = currentState;
  if (dir.toLowerCase() === 'inc') {
    // increment the counter, set error to false
    newState = {
      counter: currentState.counter + 1,
      error: false,
    };
  } else {
    // decrement if it will be 0 or above, set error to true if it would be below zero
    newState = {
      counter: currentState.counter === 0 ? 0 : currentState.counter - 1,
      error: currentState.counter === 0
    }
  }

  return newState;
}

describe('<Counter />', () => {
  it('renders without an error', () => {
    const wrapper = setup();
    const counterComponent = findByTestAttr(wrapper, 'component-counter');
    expect(counterComponent).toHaveLength(1);
  });

  it('renders counter display', () => {
    const wrapper = setup();
    const counterValue = findByTestAttr(wrapper, 'counter-value');
    expect(counterValue).toHaveLength(1);
  });

  it('renders increment button', () => {
    const wrapper = setup();
    const incrementButton = findByTestAttr(wrapper, 'button-increment');
    expect(incrementButton).toHaveLength(1);
  });

  it('starts the counter at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');
    expect(initialCounterState).toBe(0);
  });

  it('increments the display by 1 when you click the button', () => {
    // set up the test
    const counter = 7;
    const wrapper = setup(null, { counter });

    // get the button and click it 
    const button = findByTestAttr(wrapper, 'button-increment');
    button.simulate('click');
    wrapper.update();

    // find display and check value
    const counterValue = findByTestAttr(wrapper, 'counter-value');
    expect(counterValue.text()).toContain(counter + 1);
  });
  it('decrements the display by 1 when you click the button', () => {
    const counter = 5;
    const wrapper = setup(null, { counter });

    const button = wrapper.find('[data-test="button-decrement"]');
    button.simulate('click');
    wrapper.update();

    const counterValue = wrapper.find('[data-test="counter-value"]');
    expect(counterValue.text()).toContain(counter - 1);
  });
  it('will not decrement below zero', () => {
    const counter = 0;
    const wrapper = setup(null, { counter });

    const button = wrapper.find('[data-test="button-decrement"]');
    button.simulate('click');
    wrapper.update();

    const counterValue = wrapper.find('[data-test="counter-value"]');
    expect(parseInt(counterValue.text(), 10)).toBeGreaterThanOrEqual(0);
  });
  it('will display an error if trying to go below zero', () => {
    const error = false,
      counter = 0;
    const wrapper = setup(null, { counter, error });

    const button = wrapper.find('[data-test="button-decrement"]');
    button.simulate('click');
    wrapper.update();

    const errorMessage = wrapper.find('[data-test="error-message"]');
    expect(errorMessage.hasClass('visible')).toEqual(counter < 1);
  });
  it('will clear the error if incrementing', () => {
    const error = true,
      counter = 0;
    const wrapper = setup(null, { counter, error });

    const button = wrapper.find('[data-test="button-increment"]');
    button.simulate('click');
    wrapper.update();

    const errorMessage = wrapper.find('[data-test="error-message"]');
    expect(errorMessage.hasClass('visible')).toEqual(false);
  });
});