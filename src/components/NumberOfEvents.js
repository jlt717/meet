// src/components/NumberOfEvents.js

import { useState } from "react";
import EventList from "./EventList";

const NumberOfEvents = ({}) => {
  const [query, setQuery] = useState(32);
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div id="number-of-events">
      <input
        type="number"
        className="number-box"
        value={query}
        onChange={handleInputChanged}
      />
    </div>
  );
};
export default NumberOfEvents;
