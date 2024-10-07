"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedule = void 0;
exports.addLesson = addLesson;
exports.reassignClassroom = reassignClassroom;
exports.cancelLesson = cancelLesson;
const scheduleConflictService_1 = require("./scheduleConflictService");
exports.schedule = [];
function addLesson(lesson) {
    const conflict = (0, scheduleConflictService_1.validateLesson)(lesson);
    if (!conflict) {
        exports.schedule.push(lesson);
        return true;
    }
    return false;
}
function reassignClassroom(lessonId, newClassroomNumber) {
    const lesson = exports.schedule.find(l => l.courseId === lessonId);
    if (!lesson)
        return false;
    const conflict = (0, scheduleConflictService_1.validateLesson)(Object.assign(Object.assign({}, lesson), { classroomNumber: newClassroomNumber }));
    if (conflict && conflict.lessonDetails.courseId !== lesson.courseId) {
        return false;
    }
    lesson.classroomNumber = newClassroomNumber;
    return true;
}
function cancelLesson(lessonId) {
    exports.schedule = exports.schedule.filter(lesson => lesson.courseId !== lessonId);
}
