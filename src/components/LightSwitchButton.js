import React from 'react';

function LightSwitchButton() {
  return (
    <button className="LightSwitchButton">
      {/* if the state is on */} <span className="on"><i>💡</i>I'm on!</span>
      {/* When the state is off */}<span className="off"><i>💡</i> I'm off!</span>
    </button>
  );
}

export default LightSwitchButton;