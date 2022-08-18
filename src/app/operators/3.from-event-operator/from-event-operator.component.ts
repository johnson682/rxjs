import { ElementRef } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event-operator',
  templateUrl: './from-event-operator.component.html',
  styleUrls: ['./from-event-operator.component.css']
})
export class FromEventOperatorComponent implements OnInit {

  @ViewChild('validate') validate:ElementRef;
  @ViewChild('getLink') getLink:ElementRef;
  constructor(private router:Router) { }

  ngOnInit(): void {

  }
  eventObservable(){
    const student = fromEvent(this.validate?.nativeElement,'click'); //the event concverted from observable
    console.log(student)
    student.subscribe(data=>{
      console.log(data)
    })
  }

  onGetLink(){
    const link = fromEvent(this.getLink?.nativeElement,'mouseover');
    console.log(link);
    link.subscribe(data=>{
      console.log(data)
    })
  }
  onCancel(){
    this.router.navigate(['/'])
  }

}
