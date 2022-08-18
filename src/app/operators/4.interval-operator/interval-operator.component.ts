import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-interval-operator',
  templateUrl: './interval-operator.component.html',
  styleUrls: ['./interval-operator.component.css']
})
export class IntervalOperatorComponent implements OnInit {

  name=['Antony','Clintan','Marc']

  list$:Observable<string> = from(this.name)

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.list$.subscribe(data=>{
      const num=interval(2000)

      num.subscribe(seq =>{

        if(seq < 5){
          console.log(seq);
          console.log(data);
        }
      })
    })
  }
  onCancel(){
    this.router.navigate(['/'])
  }

}
