document.getElementById("submit-btn").addEventListener("click",()=>{
    let name = document.getElementById("name").value;
let contact = document.getElementById("contact").value;
let remarks = document.getElementById("remarks").value;
let gender = document.querySelector("input[name = 'gender']:checked").value;
let location = document.getElementById("location").value;
let courses = document.querySelectorAll(".choose:checked");


const selectionCourse = [];
for (const course of courses) {
    selectionCourse.push(course.value);
}

    let show = window.open("", "", "width=500, height=400");
    show.document.write("Name: " + name + "<br>");
    show.document.write("Contact: " + contact + "<br>");
    show.document.write("Remarks: " + remarks + "<br>");
    show.document.write("Gender: " + gender + "<br>");
    show.document.write("Courses: " + selectionCourse + "<br>");
    show.document.write("Location: " + location + "<br>");
})
