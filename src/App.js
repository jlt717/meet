import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import { extractLocations, getEvents } from "./api";
import NumberOfEvents from "./components/NumberOfEvents";
import "./App.css";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [eventNumber, setEventNumber] = useState(32);

  useEffect(() => {
    const fetchData = async () => {
      const eventList = await getEvents();
      setEvents(eventList.slice(0, eventNumber));
      setAllLocations(extractLocations(eventList));
    };
    fetchData();
  }, [eventNumber]);
  // useEffect(() => {
  //   const getAllEvents = async () => {
  //     const eventList = await getEvents();
  //     setEvents(eventList.slice(0, eventNumber));
  //     setAllLocations(extractLocations(eventList));
  //   };

  //   getAllEvents();
  // }, [eventNumber]);

  const handleCitySelected = (city) => {
    setSelectedCity(city);

    if (city === "See all cities") {
      const allEvents = events.slice(0, eventNumber);
      setEvents(allEvents);
    } else {
      const filteredEvents = events.filter((event) => event.location === city);
      setEvents(filteredEvents);
    }
  };

  //   if (city === "See all cities") {
  //     setEvents(events.slice(0, eventNumber));
  //   } else {
  //     const filteredEvents = events.filter((event) => event.location === city);
  //     setEvents(filteredEvents);
  //   }
  // };

  const handleEventNumberChange = (value) => {
    setEventNumber(value);
  };

  // useEffect(() => {
  //   const getAllEvents = async () => {
  //        const eventList = await getEvents();
  //     let filteredEvents = eventList;
  //     if (selectedCity !== "See all cities") {
  //       filteredEvents = eventList.filter(
  //         (event) => event.location === selectedCity
  //       );
  //     }
  //     setEvents(filteredEvents);
  //     setLocations(extractLocations(eventList));
  //   };

  //   getAllEvents();
  // }, [selectedCity]);
  // }
  //     const filteredEvents =
  //       selectedCity === "See all cities"
  //         ? eventList
  //         : eventList.filter((event) => event.location === selectedCity);
  //     setEvents(filteredEvents.slice(0, eventNumber));
  //     setLocations(extractLocations(eventList));
  //   };
  //   getAllEvents();
  // }, [selectedCity, eventNumber]);
  // const handleEventNumberChange = (value) => {
  //   setEventNumber(value);
  // };
  return (
    <div className="App" style={{ backgroundColor: "#f04908" }}>
      <CitySearch
        allLocations={allLocations}
        setSelectedCity={handleCitySelected}
      />
      <NumberOfEvents
        eventNumber={eventNumber}
        onEventNumberChange={handleEventNumberChange}
      />
      <EventList
        events={events}
        //events={events.slice(0, eventNumber)}
        selectedCity={selectedCity}
      />
    </div>
  );
};

export default App;
