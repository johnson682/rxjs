import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.css']
})
export class FromOperatorComponent implements OnInit {

  studentList =['Antony' , 'Clintan', 'Marc']
  list:string
  students:Observable<string> = from(this.studentList)

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.students.subscribe(data =>{
      console.log(data);
      this.list=data
    })
  }
  onCancel(){
    this.router.navigate(['/'])
  }

}
