let students = [
    {
        rollNo: "21pd01",
        name: "Abinaya",
    },
    {
        rollNo: "21pd02",
        name: "Ashere Jeswin",
    },
    {
        rollNo: "21pd03",
        name: "Benny",
    },
    {
        rollNo: "21pd04",
        name: "Bharathi Shankar J",
    },
    {
        rollNo: "21pd05",
        name: "Dhisha C S",
    },
    {
        rollNo: "21pd06",
        name: "Dhivya Dharshini",
    },
    {
        rollNo: "21pd08",
        name: "Prethika G S",
    },
    {
        rollNo: "21pd09",
        name: "Harini K R",
    },
    {
        rollNo: "21pd10",
        name: "Harini K V",
    }]
let count = 1
for (let key in students) {
    let table = document.getElementById("tbody");
    let row = table.insertRow(-1);
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    c1.innerText = count
    c1.setAttribute("width",'10%')
    c2.innerText = students[key].rollNo
    c2.setAttribute("width",'20%')
    c3.innerText = students[key].name
    c3.setAttribute("width",'30%')
    const btn1 = document.createElement("button");
    /*
    btn1.innerHTML = "P";
    btn1.addEventListener("click", function () {
        c4.innerHTML = "<button >Present</button>";
    });*/
    const btn2 = document.createElement("input");
    btn2.setAttribute("type","checkbox");
    /*
        < input
    type = "checkbox"
    id = "switch"
    className = "checkbox" / >*/
    /*
    <label class="switch">
      <input type="checkbox">  //btn2
      <span class="slider"></span>
    </label>
     */
    /*
    <label class="container">10th
      <input type="checkbox" checked="check">
      <span class="mark"></span>
    </label>
     */
    let span_ = document.createElement("span");
    span_.setAttribute("class","mark");
    let label_ = document.createElement("label");
    label_.setAttribute("class","container");

    btn2.setAttribute('id','btn-'+count);
    count++;
    /*
    const btn2 = document.createElement("button");
    btn2.innerHTML = "Present";
    //btn2.setAttribute('id','btn-'+students[key].rollNo)
    btn2.setAttribute('id','btn-'+count);
    count++;

    btn2.setAttribute('onclick','noteAbsentees(this.id)')
    btn2.addEventListener("click", function () {
        c4.innerHTML = "<button id='absent'>Absent</button>";
    });
    */

    //c4.append(btn1, btn2);
    label_.append(btn2,span_);
    c4.append(label_);
}
let boolAbsentees = []
function confirmFunction() {
    let txt;
    if (confirm("Do You want to Submit ?")) {
        ok();
        console.log('YES')
        noteAttendance();
        console.log(boolAbsentees);
        sessionStorage.absentees = boolAbsentees;
        console.log(sessionStorage.absentees);
        storeInput();
    } else {
        console.log('NO')
    }

}
/*
function noteAbsentees(id){
    absentees.push(parseInt(id.slice(4)));
}*/
function noteAttendance(){
    for (let k=1;k<=students.length;k++){
        if (document.getElementById("btn-"+k).checked){
            boolAbsentees.push(0);
        }
        else{
            boolAbsentees.push(1);
        }
    }
}
function storeInput() {
    //date
    let field1 = document.querySelector('#date');
    let date = new Date(field1.value);
    sessionStorage.date = date;
    console.log(sessionStorage.date);

    let from = document.getElementById('from_').value;
    let to = document.getElementById('to_').value;
    sessionStorage.from = from;
    sessionStorage.to = to;
    console.log(sessionStorage.from);
    console.log(sessionStorage.to);
}



var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function ok() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        location.reload();
    }
}