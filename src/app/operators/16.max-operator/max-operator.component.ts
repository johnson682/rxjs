import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, max, Observable } from 'rxjs';

@Component({
  selector: 'app-max-operator',
  templateUrl: './max-operator.component.html',
  styleUrls: ['./max-operator.component.css']
})
export class MaxOperatorComponent implements OnInit {

  rank=[4,3,2,6,7,10,15,1,25,16]

  rank$:Observable<number> = from(this.rank)

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.rank$.pipe(
      max()
    ).subscribe(data=>{
      console.log(data);

    })
  }

}
