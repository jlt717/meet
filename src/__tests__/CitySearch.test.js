// src/__tests__/CitySearch.test.js

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CitySearch from "../components/CitySearch";
//import { extractLocations, getEvents } from "./api";

describe("<CitySearch /> component", () => {
  test("renders text input", () => {
    render(<CitySearch />);
    const cityTextBox = screen.queryByRole("textbox");
    expect(cityTextBox).toBeInTheDocument();
    expect(cityTextBox).toHaveClass("city");
  });

  test("suggestions list is hidden by default", () => {
    render(<CitySearch />);
    const suggestionList = screen.queryByRole("list");
    expect(suggestionList).not.toBeInTheDocument();
  });

  test("renders a list of suggestions when user types into city textbox", async () => {
    render(<CitySearch />);
    const cityTextBox = screen.getByPlaceholderText("Search for a city");
    await userEvent.type(cityTextBox, "a");
    const suggestionItem = screen.queryByRole("listitem");
    expect(suggestionItem).toBeInTheDocument();
    const suggestionList = screen.queryByTestId("suggestions");
    expect(suggestionList).toHaveClass("suggestions");
  });
});
//   test("updates list of suggestions correctly when user types in city textbox", async () => {
//     const user = userEvent.setup();
//     const allEvents = await getEvents();
//     const allLocations = extractLocations(allEvents);
//     screen.rerender(<CitySearch allLocations={allLocations} />);

//     // user types "Berlin" in city textbox
//     const cityTextBox = screen.queryByRole("textbox");
//     await user.type(cityTextBox, "Berlin");

//     // filter allLocations to locations matching "Berlin"
//     const suggestions = allLocations
//       ? allLocations.filter((location) => {
//           return (
//             location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1
//           );
//         })
//       : [];

//     // get all <li> elements inside the suggestion list
//     const suggestionListItems = screen.queryAllByRole("listitem");
//     expect(suggestionListItems).toHaveLength(suggestions.length + 1);
//     for (let i = 0; i < suggestions.length; i += 1) {
//       expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
//     }
//   });
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
