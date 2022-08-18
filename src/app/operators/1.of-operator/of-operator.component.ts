import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
  styleUrls: ['./of-operator.component.css']
})
export class OfOperatorComponent implements OnInit {

  // students:Observable<string[]> = of(['Antony','Clintan','Marc'])

  studentList = ['Antony','Clintan','Marc']; //input as array but the output is observable of helps to convert it
  students:Observable<string[]> = of(this.studentList)

  list:string[]=[]
  object:any


  studentObj={
    id:10,
    name:'Antony'
  }
  // studentObservableObj:Observable<any> = of(this.studentObj)

  student$:Observable<any> = of(this.studentObj) //$ is always point Observable


  constructor(private router:Router) { }

  ngOnInit(): void {
    this.students.subscribe(data=>{
      console.log(data);
      this.list=data
    })
    this.student$.subscribe(data=>{
      console.log(data)
      this.object=data
    })
  }

  onCancel(){
    this.router.navigate(['/'])
  }
}
