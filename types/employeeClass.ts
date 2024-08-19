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
  };
};

type Students = {
  data: [
    {
      id: string;
      surname: string;
      forename: string;
    },
  ];
};
export type Lessons = {
  data: [
    {
      id: string;
      start_at: {
        date: string;
        timezone_type: number;
        timezone: string;
      };
      end_at: {
        date: string;
        timezone_type: number;
        timezone: string;
      };
    },
  ];
};

export type EmployeeClasses = { data: EmployeeClass[] };
