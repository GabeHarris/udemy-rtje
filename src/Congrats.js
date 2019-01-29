import React from 'react';

/**
 * Functional react component for congrats message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or 'null').
 */
const Congrats = (props) => {
  const message = <span data-test="congrats-message">Hooray for you!</span>;
  let congrats = <div data-test="component-congrats" />;
  if (props.success) {
    congrats = (
      <div data-test="component-congrats">
        {message}
      </div>
    );
  }
  return congrats;
};

export default Congrats;