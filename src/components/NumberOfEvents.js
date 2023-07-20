// src/components/NumberOfEvents.js

import React from "react";

const NumberOfEvents = ({ eventNumber, onEventNumberChange }) => {
  const handleInputChanged = (value) => {
    const numberValue = parseInt(value, 32); // Convert the input value to a number
    if (!isNaN(numberValue)) {
      onEventNumberChange(numberValue);
    } else {
      onEventNumberChange(0);
    }
  };

  return (
    <div data-testid="number-of-events">
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
