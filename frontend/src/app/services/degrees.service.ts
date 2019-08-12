// *************************   Connection to Server with frontend   *************************
import { Injectable } from '@angular/core';
// Module to connect angular with server
import { HttpClient } from '@angular/common/http';
// ___________________________________________________
// CALL *DegreesModel* From file '../models/degrees'
import { Degrees } from '../models/degrees';


@Injectable({
  providedIn: 'root'
})


export class DegreesService {

  selectedDegree: Degrees;
  // Empty array to save our data
  degrees: Degrees[];
  
  
  constructor(private http:HttpClient) { 
    this.selectedDegree = new Degrees();
  }


  // // CALL Get One degree method
  // getSDegree(){
  //   // return this.http (* Is the way to call a petition to our server *)
  //   return this.http.get('http://localhost:3000/api/degrees');
  // }

  // CALL Get All degrees method
  getDegrees(){
  // return this.http (* Is the way to call a petition to our server *)
    return this.http.get('http://localhost:3000/api/degrees');
  };

  // CALL Post degree method
  createDegree(degree: Degrees){
    // return this.http (* Is the way to call a petition to our server *)
    console.log("testing 2");
    console.log(degree);
    return this.http.post('http://localhost:3000/api/degrees', degree);
  }

  // CALL Put degree method
  editDegree(degree: Degrees){
    // return this.http (* Is the way to call a petition to our server *)
    return this.http.put('http://localhost:3000/api/degrees' + `/${degree._id}`, degree);
  }
  
  // CALL Delete degree method
  deleteDegree(_id: string){
    // return this.http (* Is the way to call a petition to our server *)
    return this.http.delete('http://localhost:3000/api/degrees' + `/${_id}`);
  }
}
