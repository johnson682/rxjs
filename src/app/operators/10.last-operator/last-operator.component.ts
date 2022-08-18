import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, last, Observable } from 'rxjs';

@Component({
  selector: 'app-last-operator',
  templateUrl: './last-operator.component.html',
  styleUrls: ['./last-operator.component.css']
})
export class LastOperatorComponent implements OnInit {
  name=['Antony','Clintan','Marc'];
  name$:Observable<string>=from(this.name)

  ngOnInit(): void {
    this.name$.pipe(
      last(),
    ).subscribe(data=>{
      console.log(data);
    })
  }
  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }
}
