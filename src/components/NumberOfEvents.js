// src/components/NumberOfEvents.js

import React, { useState } from "react";

const NumberOfEvents = ({ eventNumber, onEventNumberChange }) => {
  const [query, setQuery] = useState(eventNumber);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setQuery(value);
    onEventNumberChange(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="text"
        className="textbox"
        placeholder="Enter a number"
        value={query}
        onChange={handleInputChanged}
      />
    </div>
  );
};
export default NumberOfEvents;
