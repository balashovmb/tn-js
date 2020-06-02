'use strict';

/**
* @param {string} fullName ФИО студента
* @param {string} firstName имя студента
* @param {string} lastName фамилия студента
* @param {string} patronymic отчество студента
* @returns {Student} Студент
 */

function Student(fullName) {
    setName(this, fullName);

    this.fullName = function () {
        const fullName = ( 
            this.lastName + ' ' + 
            this.firstName + ' ' +
            this.patronymic
        );
        return fullName;
    }

    this.lastNameAndInitials = function () {
        const lastNameInitials = ( 
            this.lastName + ' ' + 
            this.firstName[0] + '.' +
            this.patronymic[0] + '.' 
        );
        return lastNameInitials;
    }

    this.isIll = function () {
        return this._ill;
    }

    this.setIll = function (reason) {
        if (reason) {
            this._ill = true;
        }
    }

}
function setName(student, fullName) {
    const fullNameSplited = fullName.split(' ');
    if (fullNameSplited.length < 3) {
        throw Error('Last name, first name and patronymic must be entered');
    }
    student.lastName = fullNameSplited[0];
    student.firstName = fullNameSplited[1];
    student.patronymic = fullNameSplited[2];
}