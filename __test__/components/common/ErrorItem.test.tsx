import ErrorItem from "@/components/common/ErrorItem";
import { render, screen, userEvent } from "@testing-library/react-native";

describe("ErrorItem", () => {
  it("render item and press button", async () => {
    jest.useFakeTimers();
    const mockFn = jest.fn();
    render(<ErrorItem refetch={mockFn} />);
    const user = userEvent.setup({advanceTimers: jest.advanceTimersByTime});
    await user.press(screen.getByText("Try again"));
    expect(mockFn).toHaveBeenCalled();
  });
});
