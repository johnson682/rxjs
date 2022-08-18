import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, interval, merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-merge-operator',
  templateUrl: './merge-operator.component.html',
  styleUrls: ['./merge-operator.component.css']
})
export class MergeOperatorComponent implements OnInit ,OnDestroy{

  clicksOrTimer:Subscription
  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    const clicks = fromEvent(document, 'click');
    const timer = interval(1000);
    this.clicksOrTimer = merge(clicks, timer).subscribe(x => console.log(x));
  }

  ngOnDestroy(): void {
      this.clicksOrTimer.unsubscribe()
  }

}
