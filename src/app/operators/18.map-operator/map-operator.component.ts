import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from, map, Observable } from 'rxjs';

@Component({
  selector: 'app-map-operator',
  templateUrl: './map-operator.component.html',
  styleUrls: ['./map-operator.component.css']
})
export class MapOperatorComponent implements OnInit {

  a=[1,2,3,4,5]

  a$:Observable<number>=from(this.a)


  constructor(private router:Router) { }

  onCancel(){
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
    this.a$.pipe(
      map((v)=> v+10) //map is used to getting entire value of array or object
    ).subscribe(data=>{
      console.log(data);

    })

  }

}
