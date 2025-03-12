import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  loginForm?:FormGroup;
  username?:string;
  password?:string;


  ngOnInit(): void{
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }


  constructor(private authService:DataService, private router:Router){}


  login(value:{username:string, password:string}){
    this.authService.login(value.username,value.password).subscribe((data) => {
      localStorage.setItem('token',data.token);
      alert('successfully logged in')
      this.router.navigate(['/upload-file'])
      
    });
   
  }
}
