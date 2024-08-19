import EmptyListItem from '@/components/common/EmptyListItem';
import { render, screen } from '@testing-library/react-native';

describe("EmptyListItem", () => {
  it("renders as expected", () => {
    render(<EmptyListItem />)
    expect(screen.getByText("Sorry we don't have any data at this point.")).toBeOnTheScreen();
  })
})
