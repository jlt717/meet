// src/components/EventList.js

import Event from "./Event";

const EventList = ({ events }) => {
  return (
    <ul id="event-list" test-id="event-list">
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
};
export default EventList;
