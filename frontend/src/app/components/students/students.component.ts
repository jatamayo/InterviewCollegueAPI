import { Component, OnInit } from '@angular/core';
// ___________________________________________________
// CALL *StudentsService* From file ../../services/students.service
import { StudentsService }  from '../../services/students.service';
import { NgForm } from '@angular/forms';
import { Students } from 'src/app/models/students';

declare var M: any;

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentsService]
})

export class StudentsComponent implements OnInit {

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

  // Get All students
  getStudents(){
    this.studentsService.getStudendts()
      .subscribe(res => {
        this.studentsService.students = res as Students[];
        console.log(res);
      })
  }

  // Post new Student method
  createStudent(form?: NgForm){
    // Save exist student, edit
    if(form.value._id){
      this.studentsService.editStudent(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado Exitosamente'});
          this.getStudents();
        });
    }else{
      // Save new student
      this.studentsService.createStudendt(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Guardado Exitosamente'});
        this.getStudents();
      });
    }
    
  }

  // Put student method
  editStudent(student: Students){
    this.studentsService.selectedStudent = student;
    console.log("edit method");
    console.log(student);
  }

  // Delete student method
  deleteStudent(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.studentsService.deleteStudent(_id)
        .subscribe(res => {
          this.getStudents();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }


  // Clean formulary
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.studentsService.selectedStudent = new Students();
    }
  }

}
