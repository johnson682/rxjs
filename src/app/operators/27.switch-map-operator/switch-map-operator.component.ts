import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, interval, of, Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map-operator',
  templateUrl: './switch-map-operator.component.html',
  styleUrls: ['./switch-map-operator.component.css']
})
export class SwitchMapOperatorComponent implements OnInit {

  result:Subscription

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    // const clicks = fromEvent(document, 'click');
    // this.result = clicks.pipe(switchMap((ev) => interval(1000))).subscribe(x => console.log(x));


    const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
    switched.subscribe(x => console.log(x));
  }

  // ngOnDestroy(): void {
  //     this.result.unsubscribe()
  // }
}


