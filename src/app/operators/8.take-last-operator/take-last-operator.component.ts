import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-take-last-operator',
  templateUrl: './take-last-operator.component.html',
  styleUrls: ['./take-last-operator.component.css']
})
export class TakeLastOperatorComponent implements OnInit {
  categories=['mobile','Tv','speaker']

  category$:Observable<string> = from(this.categories)

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.category$.pipe(
      takeLast(2),
    ).subscribe(data=>{
      console.log(data);
    })
  }

  onCancel(){
    this.router.navigate(['/'])
  }
}
