import { Course } from "../model/course";
import {schedule} from "./lessonService";

let courses: Course[] = [];

export function addCourse(course: Course): void {
    courses.push(course);
}

export function getMostPopularCourseType(): string {
    const typeCount: Record<string, number> = { Lecture: 0, Seminar: 0, Lab: 0, Practice: 0 };

    schedule.forEach(lesson => {
        const course = courses.find(c => c.id === lesson.courseId);
        if (course) typeCount[course.type]++;
    });

    return Object.keys(typeCount).reduce((a, b) => typeCount[a as keyof typeof typeCount] > typeCount[b as keyof typeof typeCount] ? a : b);
}
