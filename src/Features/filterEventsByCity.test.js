import { loadFeature, defineFeature } from "jest-cucumber";
import { render, screen, within } from "@testing-library/react";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/filterEventsByCity.feature");

defineFeature(feature, (test) => {
  test("When user hasn't searched for a city, show upcoming events from all cities", ({
    given,
    when,
    then,
  }) => {
    given("user hasn’t searched for any city,", () => {});
    when("the user opens the app", () => {
      render(<App />);
    });

    then("the user should see a list of all upcoming events.", async () => {
      const eventList = screen.queryByTestId("event-list");
      expect(eventList).toBeInTheDocument();
    });
  });

  test("User should see a list of suggestions when they search for a city", ({
    given,
    when,
    then,
  }) => {
    given("the main page is open,", () => {
      render(<App />);
    });
    let cityTextBox;
    when("the user starts typing in the city textbox", async () => {
      cityTextBox = await screen.findByPlaceholderText("Search for a city");
      expect(cityTextBox).toBeInTheDocument();
      await userEvent.type(cityTextBox, "Berlin");
    });

    then(
      "the user should see a list of cities (suggestions) that match what they’ve typed.",
      async () => {
        const suggestionList = await screen.findByTestId("suggestions");
        const suggestionListItems = await within(suggestionList).findAllByRole(
          "listitem"
        );
        expect(suggestionListItems).toHaveLength(2);
      }
    );
  });

  test("User can select a city from the suggested list", ({
    given,
    and,
    when,
    then,
  }) => {
    let suggestionListItems;
    let selectedCity;
    given("the user was typing “Berlin” in the city textbox", async () => {
      render(<App />);
      let cityTextBox;
      cityTextBox = await screen.findByPlaceholderText("Search for a city");
      expect(cityTextBox).toBeInTheDocument();
      await userEvent.type(cityTextBox, "Berlin");
    });
    and("the list of suggested cities is showing,", async () => {
    });

    when(
      "the user selects a city (e.g., “Berlin, Germany”) from the list",
      async () => {
        const suggestionList = await screen.findByTestId("suggestions");
        suggestionListItems = await within(suggestionList).findAllByRole(
          "listitem"
        );
        await userEvent.click(suggestionListItems[0]);
        selectedCity = suggestionListItems[0].textContent;
      }
    );

    then(
      "their city should be changed to that city (i.e., “Berlin, Germany”)",
      () => {
        expect(selectedCity).toBe("Berlin, Germany");
      }
    );

    and(
      "the user should receive a list of upcoming events in that city.",
      async () => {
        const eventList = screen.queryByTestId("event-list");
        const eventListItems = within(eventList).queryAllByRole("listitem");
        const allEvents = await getEvents();
        const berlinEvents = allEvents.filter(
          (event) => event.location === selectedCity
        );
        expect(eventListItems).toHaveLength(berlinEvents.length);
      }
    );
  });
});
