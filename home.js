const professorName = localStorage.getItem("professorName");
const professorCourses = JSON.parse(localStorage.getItem("courseCodes"));
const courseName = JSON.parse(localStorage.getItem("courseName"));
console.log(professorCourses);
console.log(professorName);
console.log(courseName);

var courseCodesContainer = document.getElementById("course-codes");
var profUsername = document.getElementById("professor-name");
profUsername.textContent = professorName;

const logoutButton = document.getElementById("logout");

// Add an event listener to the "Go" button
document.getElementById("attendance-button").addEventListener("click", function () {
    // Get the selected value from the drop-down menu
    var selectedValue = document.getElementById("attendance-select").value;
  
    // Check if the selected value is "Entry"
    if (selectedValue === "Entry") {
      // Redirect to dashboard.html
      window.location.href = "attendance.html";
    } else {
      // Add code to handle other attendance options if needed
    }
  });
  

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
