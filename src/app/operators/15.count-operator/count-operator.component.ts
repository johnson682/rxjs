import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { count, from, Observable } from 'rxjs';

@Component({
  selector: 'app-count-operator',
  templateUrl: './count-operator.component.html',
  styleUrls: ['./count-operator.component.css']
})
export class CountOperatorComponent implements OnInit {
  name=['Antony','Clintan','Marc','Tony'];
  name$:Observable<string>=from(this.name)

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.name$.pipe(
      count()
    ).subscribe(data=>{
      console.log(data)
    })
  }
}
