import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './components/college/college.component';
import { DepartmentComponent } from './components/department/department.component';
import { ClassesComponent } from './components/classes/classes.component';
import { StudentComponent } from './components/student/student.component';
import { AuthorizeGuard } from './guards/authorize.guard';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {
    path:"upload-file",
    component:FileUploadComponent,
    canActivate:[AuthorizeGuard]
    
    
  },
  {
    path:"college",
    component: CollegeComponent
  },
  
  {
    path:"department/:collegename",
    component: DepartmentComponent
  },
  {
    path:"classes/:collegename/:departmentname",
    component: ClassesComponent
  },
  {
    path:"student/:collegename/:departmentname/:classname",
    component: StudentComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: '',
    redirectTo: '/college',
    pathMatch :'full'
  }

  
]

@NgModule({
  declarations: [
    AppComponent,
    FileUploadComponent,
    HeaderComponent,
    BodyComponent,
    CollegeComponent,
    DepartmentComponent,
    ClassesComponent,
    StudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
