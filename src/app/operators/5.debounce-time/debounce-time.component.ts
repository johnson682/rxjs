import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {

  searchForm:FormGroup;

  name:FormControl;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.searchForm =new FormGroup({
      name: new FormControl('start search')
    });
    // this.searchForm.get('name').valueChanges.subscribe(data=>{ //when ever changes the input value the valueChanges emit the data  //without RxJS operator all th changes will show
    //   console.log(data);
    // })
    this.searchForm.get('name').valueChanges
    .pipe(debounceTime(3000)).subscribe(data =>{ //with RxJs operator particular time the final value will shown
      console.log(data);
    })
  }

  onCancel(){
    this.router.navigate(['/'])
  }
}
