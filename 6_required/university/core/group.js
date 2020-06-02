'use strict';

/**
* @param {number} number Номер группы
* @param {Array} _students Список студентов
* @returns {Group} Группа
 */

function Group(number) {
    let _students = [];
    this.number = number;

    this.enrollStudent = function (student) {
        _students.push(student);
        return true;
    }

    this.whoIsAbsent = function () {
        return _students.filter(student => student.isIll());
    }

    this.students = function () {
        return _students;
    }
}
