import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import Event from "./components/Event";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <CitySearch allLocations={[]} />
      <EventList events={[]}/>
      <Event />
    </div>
  );
};

export default App;
