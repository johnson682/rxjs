import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkComponent } from './link/link.component';
import { ObservableComponent } from './observable/observable.component';
import { OfOperatorComponent } from './operators/1.of-operator/of-operator.component';
import { LastOperatorComponent } from './operators/10.last-operator/last-operator.component';
import { ElementAtOperatorComponent } from './operators/11.element-at-operator/element-at-operator.component';
import { FilterOperatorComponent } from './operators/12.filter-operator/filter-operator.component';
import { DistinctOperatorComponent } from './operators/13.distinct-operator/distinct-operator.component';
import { SkipOperatorComponent } from './operators/14.skip-operator/skip-operator.component';
import { CountOperatorComponent } from './operators/15.count-operator/count-operator.component';
import { MaxOperatorComponent } from './operators/16.max-operator/max-operator.component';
import { MinOperatorComponent } from './operators/17.min-operator/min-operator.component';
import { MapOperatorComponent } from './operators/18.map-operator/map-operator.component';
import { TapOperatorComponent } from './operators/19.tap-operator/tap-operator.component';
import { FromOperatorComponent } from './operators/2.from-operator/from-operator.component';
import { ConcatOperatorComponent } from './operators/21.concat-operator/concat-operator.component';
import { BufferTimeOperatorComponent } from './operators/22.buffer-time-operator/buffer-time-operator.component';
import { ConcatMapOperatorComponent } from './operators/23.concat-map-operator/concat-map-operator.component';
import { MergeMapOperatorComponent } from './operators/24.merge-map-operator/merge-map-operator.component';
import { MergeOperatorComponent } from './operators/25.merge-operator/merge-operator.component';
import { StartWithOperatorComponent } from './operators/26.start-with-operator/start-with-operator.component';
import { SwitchMapOperatorComponent } from './operators/27.switch-map-operator/switch-map-operator.component';
import { FromEventOperatorComponent } from './operators/3.from-event-operator/from-event-operator.component';
import { IntervalOperatorComponent } from './operators/4.interval-operator/interval-operator.component';
import { DebounceTimeComponent } from './operators/5.debounce-time/debounce-time.component';
import { TakeOperatorComponent } from './operators/6.take-operator/take-operator.component';
import { TakeWhileOperatorComponent } from './operators/7.take-while-operator/take-while-operator.component';
import { TakeLastOperatorComponent } from './operators/8.take-last-operator/take-last-operator.component';
import { FirstOperatorComponent } from './operators/9.first-operator/first-operator.component';

const routes: Routes = [
  {path:'',component:LinkComponent},
  {path:'observable',component:ObservableComponent},
  {path:'of',component:OfOperatorComponent},
  {path:'from',component:FromOperatorComponent},
  {path:'fromEvent',component:FromEventOperatorComponent},
  {path:'interval',component:IntervalOperatorComponent},
  {path:'debounceTime',component:DebounceTimeComponent},
  {path:'take',component:TakeOperatorComponent},
  {path:'takeWhile',component:TakeWhileOperatorComponent},
  {path:'takeLast',component:TakeLastOperatorComponent},
  {path:'first',component:FirstOperatorComponent},
  {path:'last',component:LastOperatorComponent},
  {path:'elementAt',component:ElementAtOperatorComponent},
  {path:'filter',component:FilterOperatorComponent},
  {path:'distinct',component:DistinctOperatorComponent},
  {path:'skip',component:SkipOperatorComponent},
  {path:'count',component:CountOperatorComponent},
  {path:'max',component:MaxOperatorComponent},
  {path:'min',component:MinOperatorComponent},
  {path:'map',component:MapOperatorComponent},
  {path:'tap',component:TapOperatorComponent},
  {path:'concat',component:ConcatOperatorComponent},
  {path:'mergeMap',component:MergeMapOperatorComponent},
  {path:'merge',component:MergeOperatorComponent},
  {path:'bufferTime',component:BufferTimeOperatorComponent},
  {path:'concatMap',component:ConcatMapOperatorComponent},
  {path:'startWith',component:StartWithOperatorComponent},
  {path:'switchMap',component:SwitchMapOperatorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
