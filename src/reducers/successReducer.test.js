import { actionTypes } from '../actions';
import successReducer from './successReducer';

describe('successReducer', () => {
  it('returns default inital state of `false` when no action is supplied', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  it('returns state of `true` upon receiving action type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
  });
});