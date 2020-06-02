const student = new Student('Иванов Иван Иванович');
const student2 = new Student('Петров Петр Петрович');

console.log(student);
console.log(student.fullName());
console.log(student.lastNameAndInitials());
student.setIll(true);
console.log(student.isIll());
group = new Group(1);
console.log(group);
group.enrollStudent(student);
group.enrollStudent(student2);
console.log(group.students());
console.log(group.whoIsAbsent());