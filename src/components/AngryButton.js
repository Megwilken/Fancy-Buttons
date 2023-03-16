import React from 'react';

function AngryButton() {
  return (
  <button className="AngryButton">
    {/* if you have not reached the max */} <span>Don't click me too much!</span>
    {/* if you have reached the max */} <span>Rawr!</span>
  </button>
  );
}

export default AngryButton;