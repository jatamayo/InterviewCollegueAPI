import { Component, OnInit } from '@angular/core';
// ___________________________________________________
// CALL *TeachersService* From file ../../services/teachers.service
import { TeachersService }  from '../../services/teachers.service';
import { NgForm } from '@angular/forms';
import { Teachers } from 'src/app/models/teachers';

declare var M: any;

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
  providers: [TeachersService]
})

export class TeachersComponent implements OnInit {

  constructor(private teachersService: TeachersService) { }

  ngOnInit() {
    this.getTeachers();
  }

  // Get All teachers
  getTeachers(){
    this.teachersService.getTeachers()
      .subscribe(res => {
        this.teachersService.teachers = res as Teachers[];
        console.log(res);
      })
  }

  // Post new teacher method
  createTeacher(form?: NgForm){
    // Save exist teacher, edit
    if(form.value._id){
      this.teachersService.editTeacher(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado Exitosamente'});
          this.getTeachers();
        });
    }else{
      // Save new teacher
      this.teachersService.createTeacher(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Guardado Exitosamente'});
        this.getTeachers();
      });
    }
    
  }

  // Put teacher method
  editTeacher(teacher: Teachers){
    this.teachersService.selectedTeacher = teacher;
    console.log("edit method");
    console.log(teacher);
  }

  // Delete teacher method
  deleteTeacher(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.teachersService.deleteTeacher(_id)
        .subscribe(res => {
          this.getTeachers();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }


  // Clean formulary
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.teachersService.selectedTeacher = new Teachers();
    }
  }

}
