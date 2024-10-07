"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLesson = validateLesson;
const lessonService_1 = require("./lessonService");
function validateLesson(lesson) {
    const professorConflict = lessonService_1.schedule.find(l => l.professorId === lesson.professorId && l.dayOfWeek === lesson.dayOfWeek && l.timeSlot === lesson.timeSlot);
    if (professorConflict) {
        return { type: "ProfessorConflict", lessonDetails: professorConflict };
    }
    const classroomConflict = lessonService_1.schedule.find(l => l.classroomNumber === lesson.classroomNumber && l.dayOfWeek === lesson.dayOfWeek && l.timeSlot === lesson.timeSlot);
    if (classroomConflict) {
        return { type: "ClassroomConflict", lessonDetails: classroomConflict };
    }
    return null;
}
