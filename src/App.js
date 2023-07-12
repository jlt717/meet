import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import { extractLocations, getEvents } from "./api";
import "./App.css";
import NumberOfEvents from "./components/NumberOfEvents";

const App = () => {
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [eventNumber, setEventNumber] = useState(32);

  useEffect(() => {
    getAllEvents();
  }, []);

  async function getAllEvents() {
    const eventList = await getEvents();
    setEvents(eventList);
    setLocations(extractLocations(eventList));
  }
  const handleEventNumberChange = (value) => {
    setEventNumber(value);
  };
  return (
    <div className="App">
      <CitySearch allLocations={locations} />
      <NumberOfEvents
        eventNumber={eventNumber}
        onEventNumberChange={handleEventNumberChange}
      />
      <EventList events={events.slice(0, eventNumber)} />
    </div>
  );
};

export default App;
