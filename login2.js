const form = document.querySelector("form")

const professors=[
    {
        username:"123",
        password:"hello",
        name:"V.SENTHILKUMAR",
        courses:["20XD31","20XD32","20XD33","20XD34"],
        courseName:["Data structures","Data Compression","Networks"]
    },
    {
        username:"456",
        password:"bye",
        name:"R.M.PERIAKARUPPAN",
        courses:["20XD51","20XD52","20XD53","20XD54","20XD55","20XD56","20XD57"],
        courseName:["Operating systems","Data Compression","Networks","DAA","Stochastic"]
    }
];
let loggedInProfessor = null;
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var authenticated=Boolean(false);
    const username = form.username.value
    const password = form.password.value
    const courses = professors.map((prof, index)=>{
        if(prof.username===username && prof.password===password){
            authenticated=true
            localStorage.setItem("professorName", prof.name);
            localStorage.setItem("professorUsername", prof.username);
            const courseCodes = prof.courses;
            const courseName = prof.courseName;
            localStorage.setItem("courseCodes",JSON.stringify(courseCodes));
            localStorage.setItem("courseName",JSON.stringify(courseName));
            console.log(courseCodes);
            console.log(courseName);
            console.log(prof.username);
            // console.log(prof.courses);
            return prof.courses;
        }
    // const courseName   = professors.map((prof,index)=>{
    //     localStorage.setItem("courseName",JSON.stringify(courseName));
    //     console.log(courseName);
    //     return prof.courseName;
    // }) 
    });
    if(authenticated){
        //alert("Correct username or password.")
        window.location.href = "home.html";

    }else{
        alert("Incorrect username or password.");
    }
})

