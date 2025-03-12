import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollegeModule } from '../models/college/college.module';
import { Observable } from 'rxjs';
import { DepartmentModule } from '../models/department/department.module';
import { ClassModule } from '../models/class/class.module';
import { StudentModule } from '../models/student/student.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl:string = "http://localhost:5001/api/Home/";

  constructor(private http:HttpClient) { }

  uploadJson(formdata:FormData):Observable<any>{
    return this.http.post(this.baseUrl+'upload-json',formdata);
  }

  getCollege():Observable<CollegeModule[]>{
    return this.http.get<CollegeModule[]>(this.baseUrl+'GetAllCollege');
  }

  getDepartment(college:string):Observable<DepartmentModule[]>{
    return this.http.get<DepartmentModule[]>(this.baseUrl+'GetDepartment/'+college);
  }

  getClass(college:string,department:string):Observable<ClassModule[]>{
    return this.http.get<ClassModule[]>(this.baseUrl+'GetClasses/'+college+'/'+department);
  }

  getStudent(college:string,department:string,classname:string):Observable<StudentModule[]>{
    return this.http.get<StudentModule[]>(this.baseUrl+'GetStudent/'+college+'/'+department+'/'+classname);
  }


  login(username: string, password:string){
    return this.http.post<any>('http://localhost:5001/api/Account/login',{ username:username,password:password})
  }

}
