import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import { extractLocations, getEvents } from "./api";
import "./App.css";

const App = () => {
  const events = getEvents();
  const locations = extractLocations(events);
  return (
    <div className="App">
      <CitySearch allLocations={locations} />
      <EventList events={events} />
    </div>
  );
};

export default App;
