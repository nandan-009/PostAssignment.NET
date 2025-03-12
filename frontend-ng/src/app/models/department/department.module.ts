
export class DepartmentModule {
  departmentid:number=0;
  departmentname:string='';
  hod:string='';
  collegeid:number=0;

  constructor(departmentid:number,departmentname:string,hod:string,collegeid:number){
    this.departmentid=departmentid;
    this.departmentname=departmentname;
    this.hod=hod;
    this.collegeid=collegeid;
  }
 }
