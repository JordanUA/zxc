import { DayOfWeek } from "../types/dayOfWeek";
import { TimeSlot } from "../types/timeSlot";

export type Lesson = {
    courseId: number;
    professorId: number;
    classroomNumber: string;
    dayOfWeek: DayOfWeek;
    timeSlot: TimeSlot;
};