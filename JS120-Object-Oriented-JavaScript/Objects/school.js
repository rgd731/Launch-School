function createStudent(name,year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`)
    },

    listCourses() {
      console.log(this.courses);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      let course = null;
      for (let i = 0;i < this.courses.length;i++) {
        course = this.courses[i];
        if (course.code === courseCode) break;
      }
      if (!course.notes) {
        course.notes = [];
      } 
      course.notes.push(note);
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.notes) {
          console.log(`${course.name}: ${course.notes.join("; ")}`)
        }
      });
    },

    updateNote(courseCode, note) {
      let course = null;
      for (let i = 0;i < this.courses.length;i++) {
        course = this.courses[i];
        if (course.code === courseCode) break;
      }
        course.notes = [note];
    }
  }
}


// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}

let school = {
  students: [foo,bar,qux],
 
  addStudent(name,year) {
    if (!['1st','2nd','3rd','4th','5th'].includes(year)) {
      console.log("Invalid Year");
      return;
    }

    let newStudent = createStudent(name,year);
    this.students.push(newStudent);
  },

  enrollStudent(student,courseCode,courseName) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade(student,courseName,grade) {
    let course = null;
    for (let i = 0;i < student.courses.length;i++) {
      course = student.courses[i];
      if (course.name === courseName) break;
    }
    
    course.grade = grade;
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      console.log(`${course.name}: ${course.grade ?? 'In progress'}`)
    });
  },

  courseReport(courseName) {
    // declare gradesArr and set to []
    // log `=${courseName} Grades=`
    // iterate through school obj 'students' arr
      // iterate though student obj 'courses' arr
        // look for course with name property === 'courseName'
           // if found, log student name followed by course grade and add grade to gradesArr
    // log `---`
    // add all grades and divide by length of grades Arr and store as average
    // log course average

    let gradesArr = [];
    console.log(`=${courseName} Grades=`);

    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName && course.hasOwnProperty('grade')) {
          gradesArr.push(course.grade);
          console.log(`${student.name}: ${course.grade}`);
        }
      })
    });
    console.log(`---`);

    let average = (gradesArr.reduce((acc,grade) => acc + grade,0)) / gradesArr.length;
    console.log(`Course Average: ${average}`)
  }
}

school.courseReport('Math');

school.courseReport('Advanced Math');

school.courseReport('Physics');