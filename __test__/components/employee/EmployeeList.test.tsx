import EmployeeList from "@/components/employee/EmployeeList"
import { useData } from "@/hooks/useData"
import { Employees } from "@/types/employee";
import { render, screen, waitFor } from "@testing-library/react-native"
jest.mock("@/hooks/useData");
describe("EmployeeList", () => {
  it("renders employee items", async () => {
    const mockEmployees: Employees = { data: [{
      id: "1",
      title: "MR",
      surname: "Person",
      forename: "First",
      employment_details: {
        data: {
          current: true
        }
      },
      classes: {
        data: [{
          id: "C1",
          name: "class 1",
          description: "class description",
          subject: "subject of class 1"
        }]
      }
    }, {
      id: "2",
      title: "MRS",
      surname: "Doe",
      forename: "Jane",
      employment_details: {
        data: {
          current: false
        }
      },
      classes: {
        data: [{
          id: "3",
          name: "class 3",
          description: "description",
          subject: "subject class 3"
        }]
      }
    }]}
    const mockedUseData = jest.mocked(useData);
    mockedUseData.mockReturnValue({ data: mockEmployees, isLoading: false, error: null})
    await waitFor(() => {
      render(<EmployeeList />)
    })
    expect(screen.getAllByRole("link").length).toEqual(2)
  })
})
