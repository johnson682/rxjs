import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  agents:Observable<string>

  name:string;

  constructor() { }

  ngOnInit(): void {
    this.agents=new Observable(
      function(observer){
        try{
          setTimeout(()=>{
            observer.next('Antony')
          },1000)
          setTimeout(()=>{
            observer.next('clintan')
          },3000)
          setTimeout(()=>{
            observer.next('Marc')
          },6000)
        }
        catch(e){
          observer.error(e)
        }
      }
    );

    this.agents.subscribe(data=>{
      this.name=data
      console.log(this.name)
    })
  }

}
