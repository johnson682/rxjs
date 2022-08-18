import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer, map, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with-operator',
  templateUrl: './start-with-operator.component.html',
  styleUrls: ['./start-with-operator.component.css']
})
export class StartWithOperatorComponent implements OnInit {

  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }
  ngOnInit(): void {
    timer(5000)
    .pipe(
      map(() => 'timer emit'),
      startWith('timer start')//any operators use but only start with run as first
    ).subscribe(x => console.log(x));
  }

}
