import ScheduleItem from "@/components/employeeSchedule/ScheduleItem";
import { ClassLessons } from "@/types/employeeClass";
import { render, screen } from "@testing-library/react-native";

describe("ScheduleItem", () => {
  const lessonItem: ClassLessons = {
    classId: "1243",
    classTitle: "class231",
    room: "room1",
    subject: "subject",
    lessonId: "l134",
    start_at: new Date("2024-07-08 08:15:00"),
    end_at: new Date("2024-07-08 09:15:00"),
    timezone_type: 3,
    timezone: "UTC",
    students: {
      data: [
        {
          id: "stu1",
          surname: "Doe",
          forename: "Student",
        },
      ],
    },
  };
  it("render schedule item", () => {
    render(
      <ScheduleItem
        lesson={lessonItem}
      />
    );
    expect(screen.getByText("Class: class231")).toBeOnTheScreen();
    expect(screen.getByText("8:15 AM - 9:15 AM")).toBeOnTheScreen();
    expect(screen.getByText("1")).toBeOnTheScreen();
    expect(screen.getByText("room1")).toBeOnTheScreen();
    expect(screen.getByRole("link").props["href"]).toEqual("lesson/l134")
  });
});
