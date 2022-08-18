import { OnDestroy } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { bufferTime, distinct, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-buffer-time-operator',
  templateUrl: './buffer-time-operator.component.html',
  styleUrls: ['./buffer-time-operator.component.css']
})
export class BufferTimeOperatorComponent implements OnDestroy{


  searchForm:FormGroup

  stop:Subscription

  name:FormControl;

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.searchForm =new FormGroup({
      name: new FormControl('start search')
    });
    // this.searchForm.get('name').valueChanges.subscribe(data=>{ //when ever changes the input value the valueChanges emit the data  //without RxJS operator all th changes will show
    //   console.log(data);
    // })
    this.stop=this.searchForm.get('name').valueChanges
    .pipe(bufferTime(3000)).subscribe(data =>{ //with RxJs operator particular time the final value will shown
      console.log(data);
    })
  }

  ngOnDestroy(): void {
      this.stop.unsubscribe()
  }

}
