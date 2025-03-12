import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassModule } from 'src/app/models/class/class.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
   classArray: ClassModule[] = [];
   college:string | null=null;
   department:string | null=null;
   
    constructor(
      private service: DataService,
      private route: ActivatedRoute
    ) {}
   
    ngOnInit(): void {
     
      this.route.paramMap.subscribe(params => {
        this.college = params.get('collegename');
        this.department = params.get('departmentname');
        if (this.college && this.department) {
          this.service.getClass(this.college,this.department).subscribe(
            (data:ClassModule[]) => {
              this.classArray = data;
              
            },
            error => {
              console.error('Error fetching department details:', error);
            }
          );
        }
      });
    }
}
