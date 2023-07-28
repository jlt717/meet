// src/components/EventList.js
import Event from "./Event";

const EventList = ({ events }) => {
  // const filteredEvents = selectedCity
  //   ? events.filter((event) => event.location === selectedCity)
  //   : events;

  return (
    <ul id="event-list" data-testid="event-list">
      {events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
};
export default EventList;
