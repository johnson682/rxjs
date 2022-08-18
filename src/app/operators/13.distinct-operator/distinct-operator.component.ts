import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinct, from, Observable } from 'rxjs';

@Component({
  selector: 'app-distinct-operator',
  templateUrl: './distinct-operator.component.html',
  styleUrls: ['./distinct-operator.component.css']
})
export class DistinctOperatorComponent implements OnInit {
  name=['Antony','Clintan','Antony','Marc','Antony'];
  name$:Observable<string>=from(this.name)


  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.name$.pipe(
      distinct()
    ).subscribe(data=>{
      console.log(data)
    })
  }
}
