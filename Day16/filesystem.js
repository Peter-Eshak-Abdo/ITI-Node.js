const fs = require("fs");

function readStudentsSync() {
  try {
    const data = fs.readFileSync("Day16/students.json", "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

function readStudentsAsync() {
  fs.readFile("Day16/students.json", "utf8", (err, data) => {
    if (err) return console.log(err);
    console.log(JSON.parse(data));
  });
}

function writeStudentsSync(data) {
  try {
    fs.writeFileSync("Day16/students.json", JSON.stringify(data, true, 2));
    console.log("Data Written Successfully");
  } catch (err) {
    console.log(err);
  }
}

function writeStudentsAsync(data) {
  fs.writeFile("Day16/students.json", JSON.stringify(data, false, "2"), (err) => {
    if (err) return console.log(err);
    console.log("Data Written Successfully");
  });
}

function addStudent(student) {
  const students = readStudentsSync();
  students.push(student);
  writeStudentsSync(students);
}

function updateStudent(id, newAge) {
  const students = readStudentsSync();
  const student = students.find((s) => s.id == id);

  if (student) {
    student.age = newAge;
    writeStudentsSync(students);
  }
}

function deleteStudent(id) {
  const students = readStudentsSync();
  const newStudents = students.filter((s) => s.id != id);
  writeStudentsSync(newStudents);
}

// readStudentsAsync();

// console.log(readStudentsSync());

addStudent({
  id: 4,
  name: "Ali Abdalla",
  age: 72,
});

// updateStudent(2, 40);

// deleteStudent(3);
