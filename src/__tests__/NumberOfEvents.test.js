import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  test("checks if element has the role of a text box", () => {
    render(<NumberOfEvents eventNumber={32} />);
    const numberTextBox = screen.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("textbox");
  });
  test("by default, number of events is listed as 32", () => {
    render(<NumberOfEvents />);
    const numberTextBox = screen.getByPlaceholderText("Enter a number");
    expect(numberTextBox).toHaveValue("32");
  });
  test("user can change number of events they wish to see listed", () => {
    const handleEventNumberChange = jest.fn();
    render(
      <NumberOfEvents
        eventNumber={32}
        onEventNumberChange={handleEventNumberChange}
      />
    );
    const numberTextBox = screen.getByPlaceholderText("Enter a number");
    userEvent.type(numberTextBox, "10");
    expect(handleEventNumberChange).toHaveBeenCalledWith("10");
    //expect().toBeInTheDocument();
  });
});
