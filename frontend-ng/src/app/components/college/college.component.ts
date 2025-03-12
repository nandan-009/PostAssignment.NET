import { Component } from '@angular/core';
import { CollegeModule } from 'src/app/models/college/college.module';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent {
  college: CollegeModule[] = [];
 
  constructor(private service: DataService) {}
 
  ngOnInit(): void {
    this.service.getCollege().subscribe((data: CollegeModule[]) => {
      this.college = data;
    }, error => {
      console.error('Error fetching college details:', error);
    });
  }
}
