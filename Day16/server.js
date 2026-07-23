const http = require("http");
const fs = require("fs");
const url = require("url");

function readStudents(callback) {
  fs.readFile("Day16/students.json", "utf8", (err, data) => {
    if (err) return callback(err);

    callback(null, JSON.parse(data));
  });
}

function writeStudents(data, callback) {
  fs.writeFile("Day16/students.json", JSON.stringify(data, null, 2), callback);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  if (req.method === "GET" && path === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Welcome" }));
  }

  if (req.method === "GET" && path === "/students") {
    return readStudents((err, students) => {
      if (err) {
        res.writeHead(500);
        return res.end();
      }

      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      res.end(JSON.stringify(students));
    });
  }

  if (req.method === "GET" && path.startsWith("/students/")) {
    const id = parseInt(path.split("/")[2]);

    return readStudents((err, students) => {
      const student = students.find((s) => s.id == id);

      if (!student) {
        res.writeHead(404);
        return res.end(JSON.stringify({ message: "Student Not Found" }));
      }

      res.writeHead(200, {
        "Content-Type": "application/json",
      });

      res.end(JSON.stringify(student));
    });
  }

  if (req.method === "POST" && path === "/students") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const student = JSON.parse(body);

        readStudents((err, students) => {
          students.push(student);

          writeStudents(students, () => {
            res.writeHead(201, {
              "Content-Type": "application/json",
            });

            res.end(
              JSON.stringify({
                message: "Student Added",
              }),
            );
          });
        });
      } catch {
        res.writeHead(400);
        res.end(
          JSON.stringify({
            message: "Bad Request",
          }),
        );
      }
    });

    return;
  }

  if (req.method === "PUT" && path.startsWith("/students/")) {
    const id = parseInt(path.split("/")[2]);

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const updatedStudent = JSON.parse(body);

        readStudents((err, students) => {
          const student = students.find((s) => s.id == id);

          if (!student) {
            res.writeHead(404);
            return res.end(
              JSON.stringify({
                message: "Student Not Found",
              }),
            );
          }

          student.name = updatedStudent.name;
          student.age = updatedStudent.age;

          writeStudents(students, () => {
            res.writeHead(200, {
              "Content-Type": "application/json",
            });

            res.end(
              JSON.stringify({
                message: "Student Updated",
              }),
            );
          });
        });
      } catch {
        res.writeHead(400);
        res.end(
          JSON.stringify({
            message: "Bad Request",
          }),
        );
      }
    });

    return;
  }

  if (req.method === "DELETE" && path.startsWith("/students/")) {
    const id = parseInt(path.split("/")[2]);

    readStudents((err, students) => {
      const student = students.find((s) => s.id == id);

      if (!student) {
        res.writeHead(404);
        return res.end(
          JSON.stringify({
            message: "Student Not Found",
          }),
        );
      }

      const newStudents = students.filter((s) => s.id != id);

      writeStudents(newStudents, () => {
        res.writeHead(200, {
          "Content-Type": "application/json",
        });

        res.end(
          JSON.stringify({
            message: "Student Deleted",
          }),
        );
      });
    });

    return;
  }

  res.writeHead(404, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      message: "Not Found",
    }),
  );
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
