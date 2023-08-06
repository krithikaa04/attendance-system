courses = {id:["20XD51","20XD52","20XD53","20XD54"],
    name:["Design and Analysis of Algorithm","Stochastic Model","Computer Networks","Machine Learning"]}
for (let k = 0; k < courses.id.length; k++) {
    let course = document.createElement('li');
    course.setAttribute("class", "list-element");
    let b1 = document.createElement("button");
    b1.innerText = courses.id[k];
    b1.id = 'id-'+ courses.id[k];
    b1.setAttribute("onclick","getStudentDetails(this.id.slice(3))");
    let b2 = document.createElement("button");
    b2.id = 'name-'+ courses.id[k];
    b2.innerText = courses.name[k];
    b2.setAttribute("onclick","getStudentDetails(this.id.slice(5))");
    b1.setAttribute("class", "course-id");
    b2.setAttribute("class", "course-name");
    course.append(b1, b2);
    document.getElementById("list").appendChild(course);
}
function getStudentDetails(id){
    console.log(id);






    
}
