import { fireEvent, render, screen } from "@testing-library/react";
import EventList from "../components/EventList";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("checks if element has the role of a text box", () => {
    render(<NumberOfEvents />);
    const numberTextBox = screen.getByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("number-box");
  });
//   test("by default, number of events is listed as 32", () => {
//     render(<NumberOfEvents />);
//   });
  test("user can change number of events they wish to see listed", () => {
    render(<NumberOfEvents />);
    const user = userEvent.setup();
    const numberTextBox = screen.getByRole("textbox");
    //const eventNumber = screen.queryByText("number");
    user.type(numberTextBox, 10);
    //expect(eventNumber).toBeInTheDocument();
  });
});
