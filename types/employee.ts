import { EmployeeClass, EmployeeClasses } from "./employeeClass";

export type Employee = {
  id: string;
  title: string;
  surname: string;
  forename: string;
  employment_details: EmploymentDetails;
  classes: EmployeeClasses;
};

type EmploymentDetails = {
  data: {
    current: boolean;
  };
};
type Classes = {
  data: [
    {
      id: string;
    }
  ];
};

export type Employees = { data: Array<Employee> };
