import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { debounceTime, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-take-while-operator',
  templateUrl: './take-while-operator.component.html',
  styleUrls: ['./take-while-operator.component.css']
})
export class TakeWhileOperatorComponent implements OnInit {
  searchForm:FormGroup;
  name:FormControl;

  categories=['mobile','Tv','speaker']

  category$:Observable<string> = from(this.categories)

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.searchForm =new FormGroup({
      name: new FormControl('start search')
    });
    // this.searchForm.get('name').valueChanges.subscribe(data=>{ //when ever changes the input value the valueChanges emit the data  //without RxJS operator all th changes will show
    //   console.log(data);
    // })
    this.searchForm.get('name').valueChanges
    .pipe(
      takeWhile((v)=> this.checkCondition(v)),
      debounceTime(3000)
    ).subscribe(data =>{ //with RxJs operator particular time the final value will shown
      console.log(data);
    })
  }
  checkCondition(value:string){
    return value.length > 5 ? false : true //the given string only within 4 character only show then value exceeds that should be stoped
  }

  onCancel(){
    this.router.navigate(['/'])
  }
}
