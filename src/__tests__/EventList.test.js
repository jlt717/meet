// src/__tests__/EventList.test.js

import { render, screen } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";
const allEvents = getEvents();
describe("<EventList /> component", () => {
  test('has an element with "list" role', () => {
    render(<EventList events={[]} />);
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    render(<EventList events={allEvents} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(allEvents.length);
  });
});
