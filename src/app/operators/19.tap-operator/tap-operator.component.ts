import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-tap-operator',
  templateUrl: './tap-operator.component.html',
  styleUrls: ['./tap-operator.component.css']
})
export class TapOperatorComponent implements OnInit {

  a=[1,2,3,4,5]

  a$:Observable<number>=from(this.a)


  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.a$.pipe(
      tap(data=>{
        console.log(`from tap ${++data}`);//whatever change u put in tap the original output didn't change
      })
    ).subscribe(data=>{
      console.log(data);
    })
  }
}
