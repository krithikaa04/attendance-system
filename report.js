// Dummy data for students and their attendance status
const students = [
    { name: "Abinaya", rollno:"21pd01",attendance: true },
    { name: "Jeswin", rollno:"21pd02",attendance: false },
    { name: "Benny", rollno:"21pd03",attendance: true },
    { name: "Bharathi", rollno:"21pd04",attendance: false },
    { name: "Dhisha", rollno:"21pd05",attendance: true },
  ];
  
  // Function to generate the attendance report table
  function generateAttendanceTable() {
    const attendanceTable = document.getElementById("attendanceTable").getElementsByTagName('tbody')[0];
  
    students.forEach(student => {
        //insert name of student
      const row = attendanceTable.insertRow();
      const rollNoCell = row.insertCell();
      rollNoCell.textContent = student.rollno;
    const nameCell = row.insertCell();
      nameCell.textContent = student.name;
      
      const statusCell = row.insertCell();
      statusCell.textContent = student.attendance ? "Present" : "Absent";
      statusCell.className = student.attendance ? "present" : "absent";
    });
  }
  
  // Call the function to generate the attendance table
  generateAttendanceTable();
  