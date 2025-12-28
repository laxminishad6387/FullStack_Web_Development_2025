class Person{
      #name;
      constructor(name){
          this.#name = name;
      }
      getName(){
            return this.#name;
      }
}

class Student extends Person{
      marks;
      course;
      status;
      constructor(name, marks , course)
      {
            super(name);
            this.marks = marks;
            this.course = course;
      }
      getStatus(){
             this.status=this.marks>=40? "passed":"failed";
      }
      getDetails(){
            this.getStatus();
            return {
                  name: this.getName(),
                  course: this.course,
                  marks: this.marks,
                  status: this.status,
            }
      }
}


class StudentManager{
      constructor(){
            this.Students=[];
      }
      addStudent(newStudent){
            this.Students.push(newStudent);
      }
      removeStudent(index){
            this.Students.splice(index,1);
      }
      getAllStudents(){
           return this.Students;
     }
}

const studentManager = new StudentManager();

function addStudent(){
      const name=document.getElementById("name").value;
      const marks=document.getElementById('marks').value;
      const course=document.getElementById('course').value;

       if(!name || !marks){
            alert("Please fill all the fields");
            return;
       }

     const newStudent=new Student(name, marks, course);
    studentManager.addStudent(newStudent);

    reRenderStudentList();

    cleanTable();
}


function reRenderStudentList(){
      const table=document.getElementById("studentTable");
      table.innerHTML="";
      let allstudent=studentManager.getAllStudents();
      allstudent.forEach((student, index)=>{
            let details=student.getDetails();
            let row=`
            <tr>
                  <td>${details.name}</td>
                  <td>${details.course}</td>
                  <td>${details.marks}</td>
                  <td ><span class="badge ${details.status === 'passed' ? 'pass' : 'fail'}">${details.status} </span></td>
                  <td><button  class="delete-btn" onclick="removeStudent(${index})">Delete</button></td>
            </tr>
            `;
            table.innerHTML+=row;
            
      })
   
      

}

function removeStudent(index){
      studentManager.removeStudent(index);
      reRenderStudentList();
}


function cleanTable(){
      document.getElementById("name").value="";
      document.getElementById("marks").value="";
      
}
