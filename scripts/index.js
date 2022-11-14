// const studentNames = await fetch(
//   "https://devpipeline-mock-api.herokuapp.com/api/auth/login",
//   {

//     body: JSON.stringify({
//       message: "Logged In",
//       user: { _id: "", first_name: "", last_name: "", cohort: 3 },
//     }),
//   }
// );

// studentNames.then((res) => res.json()).then(console.log);
const users = [
  {
    _id: 1,
    first_name: "tallon",
    last_name: "",
  },
  {
    _id: 2,
    first_name: "brett",
    last_name: "",
  },
  {
    _id: 3,
    first_name: "jackson",
    last_name: "",
  },
  {
    _id: 4,
    first_name: "aiden",
    last_name: "",
  },
  {
    _id: 5,
    first_name: "lisa",
    last_name: "",
  },
  {
    _id: 6,
    first_name: "royeal",
    last_name: "",
  },
];

let startingArray = [];

const students = document.getElementsByClassName("students");
const listOfStudentsDiv = students.item(0);
const nameHeader = document.getElementsByClassName("name-header");
const nameHeaderDiv = nameHeader.item(0);
const buttonWrapper = document.getElementsByClassName("button-wrapper");
const buttonWrapperDiv = buttonWrapper.item(0);

users.forEach((user) => {
  const fn = user.first_name;
  const id = user._id;
  startingArray.push(user.first_name);

  const studentWrapper = document.createElement("div");
  studentWrapper.classList.add("student-wrapper");
  studentWrapper.setAttribute("id", user.first_name);
  const fName = document.createTextNode(user.first_name);
  const weight = document.createElement("span");
  weight.classList.add("weight");
  weight.setAttribute("id", `weight-${user._id}`);
  weight.innerText = 1;

  const newLine = document.createElement("br");
  const plusWeight = document.createElement("button");
  plusWeight.classList.add("plus-btn");
  plusWeight.innerText = "+";
  let minusWeight = document.createElement("button");
  minusWeight.classList.add("minus-btn");
  minusWeight.innerText = "-";

  studentWrapper.appendChild(fName);
  studentWrapper.appendChild(weight);
  studentWrapper.appendChild(newLine);
  studentWrapper.appendChild(plusWeight);
  studentWrapper.appendChild(minusWeight);

  plusWeight.addEventListener("click", (e) => handleAddWeight(plusWeight, 1));
  minusWeight.addEventListener("click", (e) =>
    handleAddWeight(minusWeight, -1)
  );

  plusWeight.addEventListener("click", (e) => addStudent(fn));
  minusWeight.addEventListener("click", (e) => minusStudent(fn));
  console.log(studentWrapper);
  listOfStudentsDiv.appendChild(studentWrapper);
});

function handleAddWeight(plusWeight, crement) {
  const parentDiv = plusWeight.parentElement;
  const weight = parentDiv.children[0];
  const currentWeight = Number(weight.textContent);
  if (currentWeight > 0 || crement == 1) {
    console.log(currentWeight + crement);
    weight.innerHTML = currentWeight + crement;
  }
}

function addStudent(fn) {
  startingArray.push(fn);
  console.log(startingArray);
}

function minusStudent(fn) {
  const fnIndex = (element) => element === fn;
  const q = startingArray.findIndex(fnIndex);
  if (startingArray.includes(fn)) {
    startingArray.splice(q, 1);
  }
  console.log(fn);
  console.log(startingArray);
}

function luckyDay() {
  const h1 = document.createElement("h1");
  h1.setAttribute("id", "lucky-header");
  h1.innerText = "It's your lucky day!";
  nameHeaderDiv.appendChild(h1);
}
luckyDay();

function createStudentPicker() {
  const randomStudentBtn = document.createElement("button");
  randomStudentBtn.classList.add("random-student-btn");
  randomStudentBtn.innerText = "Whose it gonna be?";
  buttonWrapperDiv.appendChild(randomStudentBtn);
  randomStudentBtn.addEventListener("click", (e) => pickerButton());
}

const currentWeight = document.getElementsByClassName("weight");
function pickerButton() {
  let user = users;
  if (startingArray.length == 0) {
    for (user of users) {
      const id = user._id;
      const first_name = user.first_name;
      let currentWeight = document.getElementById(`weight-${id}`);
      console.log(currentWeight);
      let i = Number(currentWeight.innerText);
      for (i > 0; i--; ) {
        startingArray.push(first_name);
      }
    }
  }

  min = 0;
  max = startingArray.length - 1;
  const y = Math.floor(Math.random() * (max - min + 1) + min);
  const luckyDog = startingArray.splice(y, 1);
  console.log(startingArray);
  const h1 = document.getElementById("lucky-header");
  h1.innerText = luckyDog;
  nameHeaderDiv.appendChild(h1);
}

createStudentPicker();
