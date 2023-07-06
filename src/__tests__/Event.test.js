import { render } from "@testing-library/react";
import Event from "../components/Event";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
    let EventComponent;
    const event = {}
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
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });
  test("by default, event's details section should be hidden", () => {
    const eventDetails = EventComponent.queryByText("details");
    expect(eventDetails).not.toBeInTheDocument();
  });
  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const showDetailsButton = EventComponent.queryByRole("button");
    await user.click(showDetailsButton);
    const eventDetails = EventComponent.description("details");
    expect(eventDetails).toBeInTheDocument();
    expect(eventDetails).toHaveClass("details");
  });
  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const user = userEvent.setup();
    const hideDetailsButton = EventComponent.queryByRole("button");
    await user.click(hideDetailsButton);
    const eventDetails = EventComponent.description("details");
    expect(eventDetails).not.toBeInTheDocument();
  });
});
