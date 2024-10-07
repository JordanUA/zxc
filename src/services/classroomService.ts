import { Classroom } from "../model/classroom";
import { schedule } from "./lessonService";
import { TimeSlot } from "../types/timeSlot";
import { DayOfWeek } from "../types/dayOfWeek";

let classrooms: Classroom[] = [];

export function addClassroom(classroom: Classroom): void {
    classrooms.push(classroom);
}

export function findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[] {
    const occupiedClassrooms = schedule
        .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
        .map(lesson => lesson.classroomNumber);
    return classrooms
        .filter(classroom => !occupiedClassrooms.includes(classroom.number))
        .map(classroom => classroom.number);
}

export function getClassroomUtilization(classroomNumber: string): number {
    const totalSlots = 5 * 5;
    const occupiedSlots = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
    return (occupiedSlots / totalSlots) * 100;
}
