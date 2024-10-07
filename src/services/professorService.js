"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProfessor = addProfessor;
exports.getProfessors = getProfessors;
let professors = [];
function addProfessor(professor) {
    professors.push(professor);
}
function getProfessors() {
    return professors;
}
