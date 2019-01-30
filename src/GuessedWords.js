import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let contents = (
    <div data-test="guessed-words-instructions">
      Try to guess the secret word!
    </div>
  );
  if (props.guessedWords.length > 0) {
    contents = (
      <div data-test="guessed-words-table">
        Something goes here
      </div>
    );
  }
  return (
    <div data-test="component-guessed-words">
      {contents}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;