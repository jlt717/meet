import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { render, screen, within, waitFor } from "@testing-library/react";
// import { getEvents } from "../api";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
//import NumberOfEvents from "../components/NumberOfEvents";
import App from "../App";
const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given(
      "the user has not specified a number of events to be listed at a time,",
      () => {
        render(<App />);
      }
    );

    when("the user views the event list", async () => {
      await waitFor(() => {
        const eventList = screen.queryByTestId("event-list");
        const EventListItems = within(eventList).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    then(/^it will display (\d+) events at a time.$/, (arg0) => {
      const numberTextBox = screen.getByPlaceholderText("Enter a number");
      expect(numberTextBox).toHaveValue("32");
      //expect(parseInt(numberTextBox.value)).toBe(32);
    });

    test("User can change the number of events they want to see", ({
      given,
      when,
      then,
    }) => {
      given(
        "the user wants to change the number of events shown at a time,",
        () => {
          render(<App />);
        }
      );

      when("they enter a new number in the input field", async () => {
        const numberTextBox = screen.getByPlaceholderText("Enter a number");
        await userEvent.type(numberTextBox, "10");
      });

      then(
        "the event list will update to display the specified number of events.",
        async () => {
          //const numberTextbox = screen.getByPlaceholderText("Enter a number");
          //const updatedEventNumber = parseInt(numberTextbox.value);

          await waitFor(() => {
            const eventListItems = screen.queryAllByRole("listitem");
            expect(eventListItems.length).toBe(10);
          });
        }
      );
    });
  });
});
