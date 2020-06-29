'use strict';

/**
* @param {Group} group Группа
* @param {number} date дата
* @returns {Lesson} Занятие
 */

function Lesson(date, group) {
    this.date = date;
    this.group = group;
    let _absentStudents = group.whoIsAbsent();
    this.absentStudents = function () {
        return _absentStudents;
    }
    let _presentStudents = this.group.students().filter(student => !student.isIll());

    this.presentStudents = () => _presentStudents;

    this.presentStudentsCount = _absentStudents.length;
}