import { Students } from "./employeeClass";

export type Lesson = {
  data: {
    id: string;
    room: string;
    period: string;
    class: {
      data: {
        id: string;
        name: string;
        subject: string;
        students: Students
      };
    };
  }
};
