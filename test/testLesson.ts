// testLesson.ts
import { addLesson, cancelLesson, reassignClassroom, schedule } from '../src/services/lessonService';
import { Lesson } from '../src/model/lesson';

describe('Lesson Service', () => {
    beforeEach(() => {
        // Очищуємо розклад перед кожним тестом
        schedule.length = 0;
    });

    test('should add a lesson if no conflicts exist', () => {
        const lesson: Lesson = {
            courseId: 1,
            professorId: 1,
            classroomNumber: '101',
            dayOfWeek: 'Monday',
            timeSlot: '8:30-10:00',
        };

        const result = addLesson(lesson);

        expect(result).toBe(true);
        expect(schedule.length).toBe(1);
        expect(schedule[0]).toEqual(lesson);
    });

    test('should not add a lesson if a conflict exists', () => {
        const lesson1: Lesson = {
            courseId: 1,
            professorId: 1,
            classroomNumber: '101',
            dayOfWeek: 'Monday',
            timeSlot: '8:30-10:00',
        };

        const lesson2: Lesson = {
            courseId: 2,
            professorId: 1,
            classroomNumber: '102',
            dayOfWeek: 'Monday',
            timeSlot: '8:30-10:00',
        };

        addLesson(lesson1);
        const result = addLesson(lesson2);

        expect(result).toBe(false);
        expect(schedule.length).toBe(1);  // Лише один урок додано
    });

    test('should reassign a classroom if no conflict exists', () => {
        const lesson: Lesson = {
            courseId: 1,
            professorId: 1,
            classroomNumber: '101',
            dayOfWeek: 'Monday',
            timeSlot: '8:30-10:00',
        };

        addLesson(lesson);
        const result = reassignClassroom(1, '202');

        expect(result).toBe(true);
        expect(schedule[0].classroomNumber).toBe('202');
    });

    test('should not reassign a classroom if a conflict exists', () => {
        const lesson1: Lesson = {
            courseId: 1,
            professorId: 1,
            classroomNumber: '101',
            dayOfWeek: 'Monday',
            timeSlot: '8:30-10:00',
        };

        const lesson2: Lesson = {
            courseId: 2,
            professorId: 2,
            classroomNumber: '202',
            dayOfWeek: 'Monday',
            timeSlot: '8:30-10:00',
        };

        addLesson(lesson1);
        addLesson(lesson2);
        const result = reassignClassroom(1, '202'); // Тут виникне конфлікт

        expect(result).toBe(false);
        expect(schedule[0].classroomNumber).toBe('101');
    });

    test('should cancel a lesson', () => {
        const lesson: Lesson = {
            courseId: 1,
            professorId: 1,
            classroomNumber: '101',
            dayOfWeek: 'Monday',
            timeSlot: '8:30-10:00',
        };

        addLesson(lesson);
        cancelLesson(1);

        expect(schedule.length).toBe(0);
    });
});
