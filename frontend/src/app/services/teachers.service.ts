// *************************   Connection to Server with frontend   *************************
import { Injectable } from '@angular/core';
// Module to connect angular with server
import { HttpClient } from '@angular/common/http';
// ___________________________________________________
// CALL *TeachersModel* From file '../models/teachers'
import { Teachers } from '../models/teachers';


@Injectable({
  providedIn: 'root'
})


export class TeachersService {

  selectedTeacher: Teachers;
  // Empty array to save our data
  teachers: Teachers[];
  
  
  constructor(private http:HttpClient) { 
    this.selectedTeacher = new Teachers();
  }


  // // CALL Get One teacher method
  // getTeachers(){
  //   // return this.http (* Is the way to call a petition to our server *)
  //   return this.http.get('http://localhost:3000/api/teachers');
  // }

  // CALL Get All teachers method
  getTeachers(){
  // return this.http (* Is the way to call a petition to our server *)
    return this.http.get('http://localhost:3000/api/teachers');
  };

  // CALL Post teacher method
  createTeacher(teacher: Teachers){
    // return this.http (* Is the way to call a petition to our server *)
    console.log("testing 2");
    console.log(teacher);
    return this.http.post('http://localhost:3000/api/teachers', teacher);
  }

  // CALL Put teacher method
  editTeacher(teacher: Teachers){
    // return this.http (* Is the way to call a petition to our server *)
    return this.http.put('http://localhost:3000/api/teachers' + `/${teacher._id}`, teacher);
  }
  
  // CALL Delete teacher method
  deleteTeacher(_id: string){
    // return this.http (* Is the way to call a petition to our server *)
    return this.http.delete('http://localhost:3000/api/teachers' + `/${_id}`);
  }
}
