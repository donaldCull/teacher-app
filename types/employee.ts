export type Employee = {
  id: string;
  title: string;
  surname: string;
  forename: string;
  employment_details: EmploymentDetails;
};

type EmploymentDetails = {
  data: {
    current: boolean;
  };
};

export type Employees = { data: Array<Employee> };
