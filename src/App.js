import React from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import { extractLocations, getEvents } from "./api";
import "./App.css";
import NumberOfEvents from "./components/NumberOfEvents";

const App = () => {
  const [events, setEvent] = React.useState([]);
  const [locations, setLocations] = React.useState([]);
  const [eventNumber, setEventNumber] = React.useState(32);

  React.useEffect(() => {
    getAllEvents();
  }, []);

  async function getAllEvents() {
    const eventList = await getEvents();
    setEvent(eventList);
    setLocations(extractLocations(eventList));
    setEventNumber(eventList.length);
  }
  return (
    <div className="App">
      <CitySearch allLocations={locations} />
      <EventList events={events} />
      <NumberOfEvents eventNumber={eventNumber}/>
    </div>
  );
};

export default App;
