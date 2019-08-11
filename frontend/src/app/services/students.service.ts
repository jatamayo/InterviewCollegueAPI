// *************************   Connection to Server with frontend   *************************
import { Injectable } from '@angular/core';
// Module to connect angular with server
import { HttpClient } from '@angular/common/http';
// ___________________________________________________
// CALL *StudentsModel* From file '../models/students'
import { Students } from '../models/students';


@Injectable({
  providedIn: 'root'
})


export class StudentsService {

  selectedStudent: Students;
  // Empty array to save our data
  students: Students[];
  
  
  constructor(private http:HttpClient) { 
    this.selectedStudent = new Students();
  }


  // // CALL Get One student method
  // getStudendt(){
  //   // return this.http (* Is the way to call a petition to our server *)
  //   return this.http.get('http://localhost:3000/api/students');
  // }

  // CALL Get All students method
  getStudendts(){
  // return this.http (* Is the way to call a petition to our server *)
    return this.http.get('http://localhost:3000/api/students');
  };

  // CALL Post student method
  createStudendt(student: Students){
    // return this.http (* Is the way to call a petition to our server *)
    console.log("testing 2");
    console.log(student);
    return this.http.post('http://localhost:3000/api/students', student);
  }

  // CALL Put student method
  editStudent(student: Students){
    // return this.http (* Is the way to call a petition to our server *)
    return this.http.put('http://localhost:3000/api/students' + `/${student._id}`, student);
  }
  
  // CALL Delete student method
  deleteStudent(_id: string){
    // return this.http (* Is the way to call a petition to our server *)
    return this.http.delete('http://localhost:3000/api/students' + `/${_id}`);
  }
}
