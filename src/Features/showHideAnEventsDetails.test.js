import { loadFeature, defineFeature } from "jest-cucumber";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
// import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";
import EventList from "../components/EventList";
import Event from "../components/Event";
import App from "../App";
const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("the user has selected a location to search for events,", () => {
      render(<App />);
      const citySearch = screen.getByTestId("city-search");
      const cityInput = within(citySearch).getByRole("textbox");
      userEvent.type(cityInput, "Berlin");
    });

    when("the list of local events for that location loads", async () => {
     await waitFor(() => screen.findByRole("listitem"));
      //expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
    });

    then("the event elements will collapse.", () => {
      expect(screen.getByText("Show Details")).toBeInTheDocument();
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    given("the list of events is displayed,", () => {});
    render(<EventList events={[]} />);

    when("the user clicks on show details", async () => {
      render(<Event />);
      await waitFor(() => screen.findByText("Show Details"));
      const showDetailsButton = screen.getByText("Show Details");
      fireEvent.click(showDetailsButton);
    });

    then("the event details will be displayed.", () => {
      expect(
        screen.getByText(/Have you wondered how you can ask Google/)
      ).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given(
      "the user has all the information they need about an event,",
      () => {}
    );
    const showDetailsButton = screen.getByText("Show Details");
    when("the user clicks hide details", () => {
      fireEvent.click(showDetailsButton);
    });

    then("the event details will be hidden.", () => {
      expect(
        screen.queryByText(/Have you wondered how you can ask Google/)
      ).not.toBeInTheDocument();
    });
  });
});
