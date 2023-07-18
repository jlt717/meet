// src/components/NumberOfEvents.js

import React from "react";

const NumberOfEvents = ({ eventNumber, onEventNumberChange }) => {
  const handleInputChanged = (value) => {
    onEventNumberChange(value);
  };
  //console.log(eventNumber);

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="textbox"
        placeholder="Enter a number"
        value={eventNumber}
        onChange={(e) => handleInputChanged(e.target.value)}
      />
    </div>
  );
};
export default NumberOfEvents;
