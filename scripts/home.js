const ham = document.querySelector("#menu");
const nav = document.querySelector("nav");
const courseNav = document.querySelector("#nav");
const courses = document.querySelector("#courses");
const cred = document.querySelector("#cred");

// Instatiate date object
const date = new Date();

// dynamically inject date into doc
document.querySelector("#currentyear").innerHTML = date.getFullYear();
document.querySelector(
  "#lastmodified"
).innerHTML = `Last modified: ${document.lastModified}`;

// responsive ham and nav
ham.addEventListener("click", () => {
  ham.classList.toggle("show");
  nav.classList.toggle("show");
});

// filters and stuff
courseNav.addEventListener("click", (event) => {
  getCourses(event.target.textContent);
});

// Course data
const courseList = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

// Dynamically create card and inject course data
function createCard(course) {
  const card = document.createElement("div");

  const courseName = document.createElement("h2");
 
  if (course.completed) {
    card.style.backgroundColor = `orange`;
  }
  courseName.innerHTML = `${course.subject} ${course.number}`;
  courseName.style.cssText = `font-size: large; padding: 25px 0;`;
 
  card.appendChild(courseName);
  courses.appendChild(card);
}

// Append cards to div
function getCourses(type) {
  courses.innerHTML = ``;
  let filteredCourses = [];
  if (type == "All") {
    filteredCourses = courseList;
  } else if (type != "All") {
    filteredCourses = courseList.filter((course) => course.subject == type);
  }

  filteredCourses.forEach((course) => {
    createCard(course);
  });
}

getCourses("All");

// Get credit count
let creds = 0;
creds = courseList.reduce((acc, course) => acc + course.credits, 0)

// Get credits left
let credsLeft = 0;
const incompleteCourses = courseList.filter((course) => !course.completed);
credsLeft = incompleteCourses.reduce((acc, course) => acc + course.credits, 0);

cred.innerHTML = cred.innerHTML = `There are ${creds} credits in this certificate. ${credsLeft} credits left until fruition`;