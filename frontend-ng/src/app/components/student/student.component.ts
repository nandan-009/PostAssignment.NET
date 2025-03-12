import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentModule } from 'src/app/models/student/student.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 student: StudentModule[] = [];
 college:string | null=null;
 department:string | null=null;
 classname:string | null=null;
   
    constructor(
      private service: DataService,
      private route: ActivatedRoute
    ) {}
   
    ngOnInit(): void {
     
      this.route.paramMap.subscribe(params => {
        this.college = params.get('collegename');
        this.department = params.get('departmentname');
       this.classname= params.get('classname');
        if (this.college && this.department && this.classname) {
          this.service.getStudent(this.college,this.department,this.classname).subscribe(
            (data:StudentModule[]) => {
              this.student = data;
              
            },
            error => {
              console.error('Error fetching department details:', error);
            }
          );
        }
      });
    }
}
