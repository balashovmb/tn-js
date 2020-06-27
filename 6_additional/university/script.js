const student = new Student('Иванов Иван Иванович');
const student2 = new Student('Петров Петр Петрович');
student.setIll(true);
group = new Group(1);
group.enrollStudent(student);
group.enrollStudent(student2);

date = new Date

lesson = new Lesson(date, group);
console.log(lesson);
console.log(lesson.absentStudents());
console.log(lesson.presentStudents());