import { Component, OnInit } from '@angular/core';
// ___________________________________________________
// CALL *degreesService* From file ../../services/degrees.service
import { DegreesService }  from '../../services/degrees.service';
import { NgForm } from '@angular/forms';
import { Degrees } from 'src/app/models/degrees';

declare var M: any;

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.css'],
  providers: [DegreesService]
})

export class DegreesComponent implements OnInit {

  constructor(private degreesService: DegreesService) { }

  ngOnInit() {
    this.getDegrees();
  }

  // Get All degrees
  getDegrees(){
    this.degreesService.getDegrees()
      .subscribe(res => {
        this.degreesService.degrees = res as Degrees[];
        console.log(res);
      })
  }

  // Post new Degree method
  createDegree(form?: NgForm){
    // Save exist degrees, edit
    if(form.value._id){
      this.degreesService.editDegree(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Actualizado Exitosamente'});
          this.getDegrees();
        });
    }else{
      // Save new degree
      this.degreesService.createDegree(form.value)
      .subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Guardado Exitosamente'});
        this.getDegrees();
      });
    }
    
  }

  // Put degree method
  editDegree(degree: Degrees){
    this.degreesService.selectedDegree = degree;
    console.log("edit method");
    console.log(degree);
  }

  // Delete degree method
  deleteDegree(_id: string, form: NgForm) {
    if(confirm('Are you sure you want to delete it?')) {
      this.degreesService.deleteDegree(_id)
        .subscribe(res => {
          this.getDegrees();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }


  // Clean formulary
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.degreesService.selectedDegree = new Degrees();
    }
  }

}
