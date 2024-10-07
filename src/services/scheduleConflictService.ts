import { Lesson } from "../model/lesson";
import { ScheduleConflict } from "../types/scheduleConflict";
import { schedule } from "./lessonService";

export function validateLesson(lesson: Lesson): ScheduleConflict | null {
    const professorConflict = schedule.find(
        l => l.professorId === lesson.professorId && l.dayOfWeek === lesson.dayOfWeek && l.timeSlot === lesson.timeSlot
    );
    if (professorConflict) {
        return { type: "ProfessorConflict", lessonDetails: professorConflict };
    }

    const classroomConflict = schedule.find(
        l => l.classroomNumber === lesson.classroomNumber && l.dayOfWeek === lesson.dayOfWeek && l.timeSlot === lesson.timeSlot
    );
    if (classroomConflict) {
        return { type: "ClassroomConflict", lessonDetails: classroomConflict };
    }

    return null;
}
