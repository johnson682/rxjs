import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, skip } from 'rxjs';

@Component({
  selector: 'app-skip-operator',
  templateUrl: './skip-operator.component.html',
  styleUrls: ['./skip-operator.component.css']
})
export class SkipOperatorComponent implements OnInit {
  name=['Antony','Clintan','Marc','Tony'];
  name$:Observable<string>=from(this.name)

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.name$.pipe(
      skip(2)
    ).subscribe(data=>{
      console.log(data)
    })
  }
}
