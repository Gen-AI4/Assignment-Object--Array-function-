/*Student List:
 An array named students stores information about several students using the
Student template. Think of this array as your class list!*/
let students = [
    {
        name: "Hamza",
        seniorStatus: true,
        completeAssignment: true,
    },
    {
        name: "Hassan",
        seniorStatus: false,
        completeAssignment: true,
    },
    {
        name: "Khizar",
        seniorStatus: true,
        completeAssignment: false,
    },
];
/*Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have
a function that removes students who haven't completed their assignments
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)?*/
let removeIncompleteAssignments = (students) => {
    return students.filter((student) => !(student.seniorStatus && !student.completeAssignment));
};
students = removeIncompleteAssignments(students);
console.log(students);
export {};
