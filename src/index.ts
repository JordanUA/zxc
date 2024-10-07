import { addProfessor } from "./services/professorService";
import { addClassroom } from "./services/classroomService";
import { addCourse } from "./services/courseService";
import { addLesson } from "./services/lessonService";
import { Lesson } from "./model/lesson";


addProfessor({ id: 1, name: "Prof. John", department: "Mathematics" });
addProfessor({ id: 2, name: "Prof. Jane", department: "Physics" });

addClassroom({ number: "101", capacity: 30, hasProjector: true });
addClassroom({ number: "102", capacity: 25, hasProjector: false });

addCourse({ id: 1, name: "Algebra", type: "Lecture" });
addCourse({ id: 2, name: "Quantum Physics", type: "Seminar" });

const newLesson: Lesson = {
    courseId: 1,
    professorId: 1,
    classroomNumber: "101",
    dayOfWeek: "Monday",
    timeSlot: "8:30-10:00"
};

addLesson(newLesson);
