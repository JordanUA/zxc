import { Professor } from "../model/professor";

let professors: Professor[] = [];

export function addProfessor(professor: Professor): void {
    professors.push(professor);
}

export function getProfessors(): Professor[] {
    return professors;
}