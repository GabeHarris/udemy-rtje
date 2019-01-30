import React from 'react';
import {
  shallow,
  findByTestAttr,
  checkProps
} from './setupTests';
import GuessedWords from './GuessedWords';

const defaultProps = {
  guessedWords: [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    }
  ]
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {object} props - props to pass to the child
 * @returns {ShallowWrapper} - enzyme wrapper of the component
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

it('does not throw an error with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('<GuessedWords /> with NO words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component).toHaveLength(1);
  });

  it('renders instructions to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guessed-words-instructions');
    expect(instructions.text().length).toBeGreaterThan(0);
  });
});

describe('<GuessedWords /> with words guessed', () => {
  let wrapper;
  const guessedWords = [
    {
      guessedWord: 'train',
      letterMatchCount: 3,
    },
    {
      guessedWord: 'agile',
      letterMatchCount: 1,
    },
    {
      guessedWord: 'party',
      letterMatchCount: 5,
    },
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  it('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words');
    expect(component).toHaveLength(1);
  });

  it('renders guessed words section', () => {
    const wordsSection = findByTestAttr(wrapper, 'guessed-words-section');
    expect(wordsSection).toHaveLength(1);
  });

  it('displays the correct number of guessed words', () => {
    const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
    expect(guessedWordsNodes.length).toEqual(guessedWords.length);
  });
});