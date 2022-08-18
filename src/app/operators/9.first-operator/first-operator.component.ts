import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first, from, Observable } from 'rxjs';

@Component({
  selector: 'app-first-operator',
  templateUrl: './first-operator.component.html',
  styleUrls: ['./first-operator.component.css']
})
export class FirstOperatorComponent implements OnInit {

  name=['Antony','Clintan','Marc'];
  name$:Observable<string>=from(this.name)



  ngOnInit(): void {
    this.name$.pipe(
      first(),
    ).subscribe(data=>{
      console.log(data);
    })
  }
  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }
}
