import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentModule } from 'src/app/models/department/department.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
  department: DepartmentModule[] = [];
  college:string | null=null;
  
 
  constructor(
    private service: DataService,
    private route: ActivatedRoute
  ) {}
 
  ngOnInit(): void {
   
    this.route.paramMap.subscribe(params => {
      this.college = params.get('collegename');
      
      if (this.college) {
        this.service.getDepartment(this.college).subscribe(
          (data:DepartmentModule[]) => {
            this.department = data;
            
          },
          error => {
            console.error('Error fetching department details:', error);
          }
        );
      }
    });
  }
}
