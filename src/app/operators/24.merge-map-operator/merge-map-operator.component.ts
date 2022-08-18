import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, map, mergeMap, Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-merge-map-operator',
  templateUrl: './merge-map-operator.component.html',
  styleUrls: ['./merge-map-operator.component.css']
})
export class MergeMapOperatorComponent implements OnInit,OnDestroy {
  letters:Subscription

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    const name=of('a','b','c')
    this.letters=name.pipe(
      mergeMap(x => interval(1000).pipe(map(i => x+i))),
    ).subscribe(x => console.log(x));
  }
  ngOnDestroy(): void {
      this.letters.unsubscribe()
  }

}
