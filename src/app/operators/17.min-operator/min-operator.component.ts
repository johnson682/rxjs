import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, min, Observable } from 'rxjs';

@Component({
  selector: 'app-min-operator',
  templateUrl: './min-operator.component.html',
  styleUrls: ['./min-operator.component.css']
})
export class MinOperatorComponent implements OnInit {
  rank=[4,3,2,6,7,10,15,1,25,16]

  rank$:Observable<number> = from(this.rank)

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.rank$.pipe(
      min()
    ).subscribe(data=>{
      console.log(data);

    })
  }

}
