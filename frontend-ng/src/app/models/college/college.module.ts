
export class CollegeModule {
  collegeid:number=0;
  collegename:string='';
  collegeaddress:string='';

  constructor(collegeid:number,collegename:string,collegeaddress:string){
    this.collegeid=collegeid;
    this.collegename=collegename;
    this.collegeaddress=collegeaddress;
  }
 }
