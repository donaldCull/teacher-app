export type ClassLessons = {
  classId: string;
  classTitle: string;
  room: string;
  subject: string;
  lessonId: string;
  start_at: Date;
  end_at: Date;
  timezone_type: number;
  timezone: string;
  students: Students;
}

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

export type Student = {
  id: string;
  surname: string;
  forename: string;
}

export type Students = {
  data: Student[];
};
export type Lessons = {
  data: [
    {
      id: string;
      room: string;
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
