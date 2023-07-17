// src/__tests__/App.test.js

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { getEvents } from "../api";

describe("<App /> component", () => {
  test("renders list of events", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("Search for a city")
    ).toBeInTheDocument();
  });
  test("renders textbox with number of events", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Enter a number")).toBeInTheDocument();
  });
  describe("<App /> integration", () => {});
  test("renders a list of events matching the city selected by the user", async () => {
    const user = userEvent.setup();
    render(<App />);
    //const AppDOM = AppComponent.container.firstChild;
    const citySearchInput = screen.getByPlaceholderText("Search for a city");
    await user.type(citySearchInput, "Berlin");
    const berlinSuggestionItem = screen.getByText("Berlin, Germany");
    await user.click(berlinSuggestionItem);
    const eventList = screen.getByTestId("event-list");
    const allRenderedEventItems = within(eventList).queryAllByRole("listitem");

    // const CitySearchDOM = AppDOM.querySelector("#city-search");
    //     const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

    //     await user.type(CitySearchInput, "Berlin");
    //     const berlinSuggestionItem =
    //       within(CitySearchDOM).queryByText("Berlin, Germany");
    //     await user.click(berlinSuggestionItem);

    //     const EventListDOM = AppDOM.querySelector("#event-list");
    //     const allRenderedEventItems =
    //       within(EventListDOM).queryAllByRole("listitem");

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      (event) => event.location === "Berlin, Germany"
    );

    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
    allRenderedEventItems.forEach((event) => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });
});

// test("render CitySearch", () => {
//   render(<App />);
//   const input = screen.getByPlaceholderText("Search for a city");
//   fireEvent.change(input, { value: "London" });
// });

// describe("<App /> component", () => {
//   test("renders list of events", () => {
//     const AppDOM = render(<App />).container.firstChild;
//     expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
//   });
//   test("render CitySearch", () => {
//     const AppDOM = render().container.firstChild;
//     expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
//   });
// });
