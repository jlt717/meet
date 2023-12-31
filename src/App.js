import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import { extractLocations, getEvents } from "./api";
import NumberOfEvents from "./components/NumberOfEvents";
import CityEventsChart from "./components/CityEventsChart";
import EventGenresChart from "./components/EventGenresChart";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";
import "./App.css";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("See all cities");
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [eventNumber, setEventNumber] = useState(32);
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventList = await getEvents();
        setEvents(eventList);
        setAllLocations(extractLocations(eventList));
      } catch (error) {
        console.log(error);
      }
    };
    if (navigator.onLine) {
      setWarningAlert("");
    } else {
      setWarningAlert("It looks like you're offline.");
    }
    fetchData();
  }, []);

  const handleCitySelected = (city, numberOfEvents) => {
    setSelectedCity(city);
    const filteredEvents = events.filter((event) => event.location === city);
    let sliced = [];
    if (city === "See all cities") {
      sliced = events.slice(0, numberOfEvents);
    } else {
      //use eventNumber if present to limit number
      sliced = filteredEvents.slice(0, numberOfEvents);
    }
    setFilteredEvents(sliced);
  };

  function onEventNumberChange(number) {
    console.log("onEventNumberChange:", number);
    setEventNumber(number);
    handleCitySelected(selectedCity, number);
  }

  return (
    <div className="App" style={{ backgroundColor: "#f5f0e1" }}>
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>

      <img
        src={process.env.PUBLIC_URL + "/meet-app-144.png"}
        alt="Meet App"
        style={{ paddingTop: "0px", marginBottom: "0px" }}
      />
      <h1 style={{ textAlign: "center", marginTop: "0px", color: "#1e3d59" }}>
        Meet
      </h1>
      <CitySearch
        allLocations={allLocations}
        setSelectedCity={handleCitySelected}
        setInfoAlert={setInfoAlert}
      />
      <NumberOfEvents
        eventNumber={eventNumber}
        onEventNumberChange={onEventNumberChange}
        setErrorAlert={setErrorAlert}
      />
      <div className="charts-container" style={{ display: "flex" }}>
        <EventGenresChart events={events} />
        <CityEventsChart allLocations={allLocations} events={events} />
      </div>
      <EventList events={filteredEvents.length > 0 ? filteredEvents : events} />
    </div>
  );
};

export default App;
