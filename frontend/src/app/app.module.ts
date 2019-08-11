import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Component to read forms HTML
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// ____________________________________________________________________________
// CALL *StudentsComponent* From file './components/students/students.component'
import { StudentsComponent } from './components/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
