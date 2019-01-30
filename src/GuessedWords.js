import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = (props) => {
  let contents = (
    <div data-test="guessed-words-instructions">
      Try to guess the secret word!
    </div>
  );
  if (props.guessedWords.length > 0) {
    const guessedWordRows = props.guessedWords.map((word, index) => {
      return (
        <tr key={index} data-test="guessed-word">
          <td>
            {word.guessedWord}
          </td>
          <td>
            {word.letterMatchCount}
          </td>
        </tr>
      );
    });
    contents = (
      <div data-test="guessed-words-section">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>
                Guessed Word
            </th>
              <th>
                Matching Letter Count
            </th>
            </tr>
          </thead>
          <tbody>
            {guessedWordRows}
          </tbody>
        </table>
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