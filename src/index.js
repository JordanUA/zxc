"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const professorService_1 = require("./services/professorService");
const classroomService_1 = require("./services/classroomService");
const courseService_1 = require("./services/courseService");
const lessonService_1 = require("./services/lessonService");
(0, professorService_1.addProfessor)({ id: 1, name: "Prof. John", department: "Mathematics" });
(0, professorService_1.addProfessor)({ id: 2, name: "Prof. Jane", department: "Physics" });
(0, classroomService_1.addClassroom)({ number: "101", capacity: 30, hasProjector: true });
(0, classroomService_1.addClassroom)({ number: "102", capacity: 25, hasProjector: false });
(0, courseService_1.addCourse)({ id: 1, name: "Algebra", type: "Lecture" });
(0, courseService_1.addCourse)({ id: 2, name: "Quantum Physics", type: "Seminar" });
const newLesson = {
    courseId: 1,
    professorId: 1,
    classroomNumber: "101",
    dayOfWeek: "Monday",
    timeSlot: "8:30-10:00"
};
(0, lessonService_1.addLesson)(newLesson);
