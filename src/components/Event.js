// src/components/Event.js
import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div className="event">
      <div className="location">{event.location} </div>
      <div className="dateTime">{event.start.dateTime}</div>
      {!showDetails && <div className="summary">{event.summary}</div>}
      <button class="details-btn" onClick={toggleDetails}>
        {showDetails ? "hide details" : "show details"}
      </button>
      {showDetails && <div className="details">details</div>}
    </div>
  );
};

export default Event;
