import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.css']
})
export class FilterOperatorComponent implements OnInit {

  searchForm:FormGroup;

  name:FormControl;

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.searchForm =new FormGroup({
      name: new FormControl('start search')
    });

    this.searchForm.get('name').valueChanges
    .pipe(
      filter((v)=>this.charCount(v))
    ).subscribe(data =>{ //with RxJs operator particular time the final value will shown
      console.log(data);
    })
  }

  charCount(value){
    return value.length < 10 ? true : false
  }
}
