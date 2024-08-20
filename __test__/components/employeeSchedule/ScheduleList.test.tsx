import ScheduleList from "@/components/employeeSchedule/ScheduleList"
import { ClassLessons } from "@/types/employeeClass"
import { fireEvent, render, screen, waitFor } from "@testing-library/react-native"

describe('ScheduleList', () => {
  const mockSchedule: ClassLessons[] = [{
    classId: "1",
    classTitle: "classTitle1",
    room: "room1",
    subject: "subject1",
    lessonId: "lesson1",
    start_at: new Date("2024-07-08 08:15:00"),
    end_at: new Date("2024-07-08 09:15:00"),
    timezone_type: 3,
    timezone: "UTC",
    students: {
      data: [{
        id: "",
        surname: "",
        forename: ""
      }, {
        id: "",
        surname: "",
        forename: ""
      }, {
        id: "",
        surname: "",
        forename: ""
      }]
    }
  },
  {
    classId: "2",
    classTitle: "classTitle2",
    room: "room2",
    subject: "subject2",
    lessonId: "lesson2",
    start_at: new Date("2024-07-09 07:15:00"),
    end_at: new Date("2024-07-09 08:15:00"),
    timezone_type: 3,
    timezone: "UTC",
    students: {
      data: [{
        id: "",
        surname: "",
        forename: ""
      }]
    }
  },
]
  it("renders first item and next after changing date", async () => {
    const Wrapper = <ScheduleList schedule={mockSchedule} />;
    render(Wrapper)
    expect(screen.queryByTestId("dateTimePicker")).not.toBeOnTheScreen();    

    expect(screen.getAllByRole("link").length).toEqual(1)
    expect(screen.getByText("Mon Jul 08 2024")).toBeOnTheScreen();
    expect(screen.getByText("Class: classTitle1")).toBeOnTheScreen();
    expect(screen.getByText("8:15 AM - 9:15 AM")).toBeOnTheScreen();
    const incrementButton = screen.getByTestId("incrementButton");
    await waitFor(() => {
      fireEvent(incrementButton, "press")
    })
    screen.update(Wrapper);
    expect(screen.getAllByRole("link").length).toEqual(1)
    expect(screen.getByText("Tue Jul 09 2024")).toBeOnTheScreen();
    expect(screen.getByText("Class: classTitle2")).toBeOnTheScreen();
    expect(screen.getByText("7:15 AM - 8:15 AM")).toBeOnTheScreen();
    const showCalendarButton = screen.getByTestId("showCalendarButton");
    await waitFor(() => {
      fireEvent(showCalendarButton, "press");
    });
    screen.update(Wrapper);
    expect(screen.getByTestId("dateTimePicker")).toBeOnTheScreen();    
  })
})
