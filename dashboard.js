const professorName = localStorage.getItem("professorName");
const professorCourses = JSON.parse(localStorage.getItem("courseCodes"));
console.log(professorCourses);
console.log(professorName);

var courseCodesContainer = document.getElementById("course-codes");
var profUsername = document.getElementById("professor-name");
profUsername.textContent = professorName;

professorCourses.forEach(function(item){
  var li = document.createElement("li");
  var button1 = document.createElement("button");
  button1.textContent = "Report";
  button1.setAttribute("class", "Reportbtn");

  var textWrapper = document.createElement("span");
  textWrapper.setAttribute("class", "codes"); // Set the class name on the <span>

  var textNode = document.createTextNode(item);
  textWrapper.appendChild(textNode); // Append the text node to the <span>
  var button2 = document.createElement("button");
  button2.textContent = "Attendance";
  button2.setAttribute("class", "Attendancebtn");
  li.appendChild(button1);  //report
  li.appendChild(textWrapper); //courseCode
  li.appendChild(button2);  //Attendance

  var myList = document.getElementById("course-list");
  myList.appendChild(li);
});



function checkYear(){
  const yearInput = document.getElementById("year");
  const reportBtn = document.getElementsByClassName("Reportbtn");
  const attendanceBtn = document.getElementsByClassName("Attendancebtn");
  const submitBtn = document.getElementById("submitBtn");
  console.log(typeof yearInput);
  console.log(typeof reportBtn);
  console.log(typeof attendanceBtn);
  console.log(typeof submitBtn);
  const year = parseInt(yearInput.value, 10);

  // Check if the year is 2023
  if (year === 2023) {
    console.log("hi");
    // Show both the report button and attendance button
    reportBtn.setAttribute("display","block");
    attendanceBtn.setAttribute("display","block");
  } else {
    console.log("bye");
    // Show only the report button and hide the attendance button
    reportBtn.setAttribute("display","block");
    attendanceBtn.setAttribute("display","none");
  }
}


// Get the year input and buttons
// const yearInput = document.getElementById("year");
// const buttons = document.querySelectorAll(".button");

// // Add an event listener to the submit button
// const submitBtn = document.getElementById("submitBtn");
// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault(); // Prevent the default form submission

//   // Get the entered year value
//   const year = parseInt(yearInput.value, 10);

//   // Loop through the buttons and check their data-type attribute
//   buttons.forEach((button) => {
//     const buttonType = button.getAttribute("data-type");
    
//     // Check if the year is 2023
//     if (year === 2023) {
//       // Show both the report and attendance buttons
//       button.style.display = "block";
//     } else if (buttonType === "report") {
//       // Show only the report button for other years
//       button.style.display = "block";
//     } else {
//       // Hide the attendance button for other years
//       button.style.display = "none";
//     }
//   });
// });
