import StudentList from "@/components/students/StudentList"
import { Student } from "@/types/employeeClass"
import { render, screen } from "@testing-library/react-native"

describe('StudentList', () => {
  const student: Student[] = [{
    id: "stu1",
    surname: "person1",
    forename: "first"
  }, {
    id: "stu2",
    surname: "person2",
    forename: "second"
  }]
  it("renders student cards", () => {
    render(<StudentList students={student} />)
    expect(screen.getByText("ID: stu1")).toBeOnTheScreen();
    expect(screen.getByText("ID: stu2")).toBeOnTheScreen();
  })
})
