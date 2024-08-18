export type EmployeeClass = {
    id: string;
    name: string;
    description: string;
    subject: string;
};

export type ClassData = {
  data: {
    id: string;
    name: string;
    description: string;
    subject: string;
    students: Students;
    lessons: Lessons;
  }
}

type Students = {
  data: [
    {
      id: string;
      surname: string;
      forename: string;
    }
  ];
};
type Lessons = {
  data: [
    {
      id: string;
    }
  ];
};

export type EmployeeClasses = { data: Array<EmployeeClass>};
