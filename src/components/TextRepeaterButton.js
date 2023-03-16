import React, { useState } from 'react';

function TextRepeaterButton() {
  const [repetitions, setRepititions] = useState(1);
  const textArray = [];
  for (let i = 0; i < repetitions; i++) {
    textArray.push(<span key={i}>I like this text</span>);
  }
  return (
    <button className="TextRepeaterButton">
      <span>I like this text</span>
    </button>
  );
}

export default TextRepeaterButton;