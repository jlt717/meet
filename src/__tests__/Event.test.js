import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  //applied to all async functions
  beforeAll(async () => {
    allEvents = await getEvents();
  });

  //const allEvents = await getEvents();
  beforeEach(() => {
    EventComponent = render(<Event event={allEvents[0]} />);
  });
  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });
  test("renders event name", () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });
  test("renders event date", () => {
    expect(
      EventComponent.queryByText(allEvents[0].start.dateTime)
    ).toBeInTheDocument();
  });
  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryBySelector("details-btn")).toBeInTheDocument();
  });
  test("by default, event's details section should be hidden", () => {
    const eventDetails = EventComponent.queryByText("description");
    expect(eventDetails).not.toBeInTheDocument();
  });
  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const showDetailsButton = EventComponent.queryByText("show details");
    userEvent.click(showDetailsButton);
    const showDetails = await EventComponent.queryByText("description");
    expect(showDetails).toBeInTheDocument();
    expect(showDetails).toHaveClass("details");
  });
  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const showDetailsButton = EventComponent.queryByText("show details");
    userEvent.click(showDetailsButton);
    const hideDetailsButton = EventComponent.queryByText("hide details");
    userEvent.click(hideDetailsButton);
    const showDetails = await EventComponent.queryByText("show details");
    expect(showDetails).not.toBeInTheDocument();
  });
});
