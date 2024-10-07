"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCourse = addCourse;
exports.getMostPopularCourseType = getMostPopularCourseType;
const lessonService_1 = require("./lessonService");
let courses = [];
function addCourse(course) {
    courses.push(course);
}
function getMostPopularCourseType() {
    const typeCount = { Lecture: 0, Seminar: 0, Lab: 0, Practice: 0 };
    lessonService_1.schedule.forEach(lesson => {
        const course = courses.find(c => c.id === lesson.courseId);
        if (course)
            typeCount[course.type]++;
    });
    return Object.keys(typeCount).reduce((a, b) => typeCount[a] > typeCount[b] ? a : b);
}
