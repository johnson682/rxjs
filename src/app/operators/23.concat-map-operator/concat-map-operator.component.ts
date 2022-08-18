import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concatMap, fromEvent, interval, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-concat-map-operator',
  templateUrl: './concat-map-operator.component.html',
  styleUrls: ['./concat-map-operator.component.css']
})
export class ConcatMapOperatorComponent implements OnInit ,OnDestroy{

  constructor(private router:Router) { }

  result:Subscription
  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    this.result = clicks.pipe(
      concatMap(ev => interval(1000).pipe(take(4)))
    ).subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {
      this.result.unsubscribe()
  }
}
