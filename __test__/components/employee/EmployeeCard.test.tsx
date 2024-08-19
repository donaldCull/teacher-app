import EmployeeCard from "@/components/employee/EmployeeCard"
import { Employee } from "@/types/employee"
import { render, screen } from "@testing-library/react-native"

describe("EmployeeCard", () => {
  const mockEmployee: Employee = {
    id: "1234",
    title: "MR",
    surname: "Doe",
    forename: "John",
    employment_details: {
      data: {
        current: true
      }
    },
    classes: {
      data: [{
        id: "4321",
        name: "className",
        description: "description",
        subject: "A4321"
      }]
    }
  }
  it("renders employee card with current status", () => {
    render(<EmployeeCard employee={mockEmployee} />)
    expect(screen.getByText("ID: 1234")).toBeOnTheScreen();
    expect(screen.getByText("MR John Doe")).toBeOnTheScreen();
    expect(screen.getByText("Status: Current")).toBeOnTheScreen();
  })

  it("renders employee card without current status", () => {
    mockEmployee.employment_details.data.current = false;
    render(<EmployeeCard employee={mockEmployee} />)
    expect(screen.getByText("ID: 1234")).toBeOnTheScreen();
    expect(screen.getByText("MR John Doe")).toBeOnTheScreen();
    expect(screen.getByText("Status: Not current")).toBeOnTheScreen();
  })
})
