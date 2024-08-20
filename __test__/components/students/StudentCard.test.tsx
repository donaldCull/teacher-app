import StudentCard from "@/components/students/StudentCard";
import { render, screen } from "@testing-library/react-native";

describe("Student Card", () => {
  it("renders card", () => {
    render(
      <StudentCard
        student={{
          id: "123",
          surname: "Doe",
          forename: "John",
        }}
      />
    );
    expect(screen.getByText("ID: 123")).toBeOnTheScreen();
    expect(screen.getByText("John Doe")).toBeOnTheScreen();
  });
});
