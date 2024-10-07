import { Lesson } from "../model/lesson";
import { validateLesson } from "./scheduleConflictService";

export let schedule: Lesson[] = [];


export function addLesson(lesson: Lesson): boolean {
    const conflict = validateLesson(lesson);
    if (!conflict) {
        schedule.push(lesson);
        return true;
    }
    return false;
}


export function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
    const lesson = schedule.find(l => l.courseId === lessonId);
    if (!lesson) return false;


    const conflict = validateLesson({ ...lesson, classroomNumber: newClassroomNumber });
    if (conflict && conflict.lessonDetails.courseId !== lesson.courseId) {
        return false;
    }

    lesson.classroomNumber = newClassroomNumber;
    return true;
}


export function cancelLesson(lessonId: number): void {
    schedule = schedule.filter(lesson => lesson.courseId !== lessonId);
}
