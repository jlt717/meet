import React, { useEffect, useState } from "react";
import CitySearch from "./components/CitySearch";
import EventList from "./components/EventList";
import { extractLocations, getEvents } from "./api";
import NumberOfEvents from "./components/NumberOfEvents";
import "./App.css";

const App = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);
  const [eventNumber, setEventNumber] = useState(32);
  //const handleCitySelected = (city) => {
   // setCurrentCity(city);
  //};
  useEffect(() => {
    const getAllEvents = async () => {
      //     const eventList = await getEvents();
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

      // const handleEventNumberChange = (value) => {
      //   setEventNumber(value);
      // };
    //   const eventList = await getEvents();
    //   const filteredEvents =
    //     selectedCity === "See all cities"
    //       ? eventList
    //       : eventList.filter((event) => event.location === selectedCity);
    //   setEvents(filteredEvents.slice(0, eventNumber));
    //   setLocations(extractLocations(eventList));
    // };
    const eventList = await getEvents();
//   const filteredEvents = eventList.slice(0, eventNumber);

//   setEvents(filteredEvents);
//   setLocations(extractLocations(eventList));
// }
const filteredEvents =
        selectedCity === "See all cities"
          ? eventList
          : eventList.filter((event) => event.location === selectedCity);
      setEvents(filteredEvents.slice(0, eventNumber));
      setLocations(extractLocations(eventList));
    };
    getAllEvents();
  }, [selectedCity, eventNumber]);
  const handleEventNumberChange = (value) => {
    setEventNumber(value);
  };
  return (
    <div className="App">
      <CitySearch
        allLocations={locations}
        setCurrentCity={setSelectedCity}
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
