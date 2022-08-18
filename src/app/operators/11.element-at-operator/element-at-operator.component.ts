import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt, from, Observable } from 'rxjs';

@Component({
  selector: 'app-element-at-operator',
  templateUrl: './element-at-operator.component.html',
  styleUrls: ['./element-at-operator.component.css']
})
export class ElementAtOperatorComponent implements OnInit {

  name=['Antony','Clintan','Marc'];
  name$:Observable<string>=from(this.name)

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.name$.pipe(
      elementAt(1)
    ).subscribe(data=>{
      console.log(data)
    })
  }

}
