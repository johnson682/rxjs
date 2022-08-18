import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concat, interval, range, take } from 'rxjs';

@Component({
  selector: 'app-concat-operator',
  templateUrl: './concat-operator.component.html',
  styleUrls: ['./concat-operator.component.css']
})
export class ConcatOperatorComponent implements OnInit {

    timer = interval(1000).pipe(take(4));
    sequence = range(1, 10);
    result = concat(this.timer, this.sequence).subscribe(x => console.log(x));


    constructor(private router:Router) { }

    onCancel(){
      this.router.navigate(['/'])
    }

  ngOnInit(): void {

  }

}
