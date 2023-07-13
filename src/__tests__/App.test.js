// src/__tests__/App.test.js

import { render, screen } from "@testing-library/react";
import App from "../App";

describe("<App /> component", () => {
  test("renders list of events", () => {
    render(<App />);
    expect(
      screen.getByPlaceholderText("Search for a city")
    ).toBeInTheDocument();
  });
  test("renders textbox with number of events", () => {
    render (<App />);
    expect(screen.getByPlaceholderText("Enter a number")).toBeInTheDocument();
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
