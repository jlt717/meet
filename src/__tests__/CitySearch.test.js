// src/__tests__/CitySearch.test.js

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CitySearch from "../components/CitySearch";
import { extractLocations } from "../api";
//import { extractLocations, getEvents } from "./api";
const eventsList = [  {
  kind: "calendar#event",
  etag: '"3181159875584000"',
  id: "3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",
  status: "confirmed",
  htmlLink:
    "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  created: "2020-05-19T19:14:30.000Z",
  updated: "2020-05-27T11:45:37.792Z",
  summary: "React is Fun",
  description:
    "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
  location: "Berlin, Germany",
  creator: {
    email: "fullstackwebdev@careerfoundry.com",
    self: true,
  },
  organizer: {
    email: "fullstackwebdev@careerfoundry.com",
    self: true,
  },
  start: {
    dateTime: "2020-05-20T14:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  end: {
    dateTime: "2020-05-20T15:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  recurringEventId: "3qtd6uscq4tsi6gc7nmmtpqlct",
  originalStartTime: {
    dateTime: "2020-05-20T14:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  iCalUID: "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
  sequence: 0,
  reminders: {
    useDefault: true,
  },
  eventType: "default",
},
{
  kind: "calendar#event",
  etag: '"3181161784712000"',
  id: "4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",
  status: "confirmed",
  htmlLink:
    "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
  created: "2020-05-19T19:17:46.000Z",
  updated: "2020-05-27T12:01:32.356Z",
  summary: "Learn JavaScript",
  description:
    "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
  location: "London, UK",
  creator: {
    email: "fullstackwebdev@careerfoundry.com",
    self: true,
  },
  organizer: {
    email: "fullstackwebdev@careerfoundry.com",
    self: true,
  },
  start: {
    dateTime: "2020-05-21T16:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  end: {
    dateTime: "2020-05-21T17:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  recurringEventId: "4eahs9ghkhrvkld72hogu9ph3e",
  originalStartTime: {
    dateTime: "2020-05-21T16:00:00+02:00",
    timeZone: "Europe/Berlin",
  },
  iCalUID: "4eahs9ghkhrvkld72hogu9ph3e@google.com",
  sequence: 0,
  reminders: {
    useDefault: true,
  },
  eventType: "default",
}]
const allLocations = extractLocations(eventsList)
describe("<CitySearch /> component", () => {
  test("renders text input", () => {
    render(<CitySearch allLocations={allLocations} />);
    const cityTextBox = screen.queryByRole("textbox");
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass("city");
  });

  test("suggestions list is hidden by default", () => {
    render(<CitySearch allLocations={allLocations} />);
    const suggestionList = screen.queryByRole("list");
    expect(suggestionList).not.toBeInTheDocument();
  });

  test("renders a list of suggestions when user types into city textbox", async () => {
    render(<CitySearch allLocations={allLocations} />);
    const cityTextBox = screen.getByPlaceholderText("Search for a city");
    await userEvent.type(cityTextBox, "a");
    const suggestionItem = screen.queryAllByRole("listitem");
    expect(suggestionItem.length).toBe(2);
    const suggestionList = screen.queryByTestId("suggestions");
    expect(suggestionList).toHaveClass("suggestions");
  });
});
  test("updates list of suggestions correctly when user types in city textbox", async () => {
    render(<CitySearch allLocations={allLocations} />);
    const user = userEvent.setup();

    // user types "Berlin" in city textbox
    const cityTextBox = screen.queryByRole("textbox");
    await user.type(cityTextBox, "Berlin");

    // filter allLocations to locations matching "Berlin"
    const suggestions = allLocations
      ? allLocations.filter((location) => {
          return (
            location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1
          );
        })
      : [];

     // get all <li> elements inside the suggestion list
    const suggestionListItems = screen.queryAllByRole("listitem");
    expect(suggestionListItems).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
    }
  });
//   test("renders the suggestion text in the textbox upon clicking on the suggestion", async () => {
//     const user = userEvent.setup();
//     const allEvents = await getEvents();
//     const allLocations = extractLocations(allEvents);
//     screen.rerender(<CitySearch allLocations={allLocations} />);

//     const cityTextBox = screen.queryByRole("textbox");
//     await user.type(cityTextBox, "Berlin");

//     // the suggestion's textContent look like this: "Berlin, Germany"
//     const BerlinGermanySuggestion = screen.queryAllByRole("listitem")[0];

//     await user.click(BerlinGermanySuggestion);

//     expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
//   });
// });
