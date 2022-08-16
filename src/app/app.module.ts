import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';

import { OfOperatorComponent } from './operators/1.of-operator/of-operator.component';
import { FromOperatorComponent } from './operators/2.from-operator/from-operator.component';
import { FromEventOperatorComponent } from './operators/3.from-event-operator/from-event-operator.component';
import { IntervalOperatorComponent } from './operators/4.interval-operator/interval-operator.component';
import { DebounceTimeComponent } from './operators/5.debounce-time/debounce-time.component';
import { TakeOperatorComponent } from './operators/6.take-operator/take-operator.component';
import { TakeWhileOperatorComponent } from './operators/7.take-while-operator/take-while-operator.component';
import { TakeLastOperatorComponent } from './operators/8.take-last-operator/take-last-operator.component';
import { FirstOperatorComponent } from './operators/9.first-operator/first-operator.component';
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
import { ConcatOperatorComponent } from './operators/21.concat-operator/concat-operator.component';
import { BufferTimeOperatorComponent } from './operators/22.buffer-time-operator/buffer-time-operator.component';
import { ConcatMapOperatorComponent } from './operators/23.concat-map-operator/concat-map-operator.component';
import { MergeMapOperatorComponent } from './operators/24.merge-map-operator/merge-map-operator.component';
import { MergeOperatorComponent } from './operators/25.merge-operator/merge-operator.component';
import { StartWithOperatorComponent } from './operators/26.start-with-operator/start-with-operator.component';
import { SwitchMapOperatorComponent } from './operators/27.switch-map-operator/switch-map-operator.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    OfOperatorComponent,
    FromOperatorComponent,
    FromEventOperatorComponent,
    IntervalOperatorComponent,
    DebounceTimeComponent,
    TakeOperatorComponent,
    TakeWhileOperatorComponent,
    TakeLastOperatorComponent,
    FirstOperatorComponent,
    LastOperatorComponent,
    ElementAtOperatorComponent,
    FilterOperatorComponent,
    DistinctOperatorComponent,
    SkipOperatorComponent,
    CountOperatorComponent,
    MaxOperatorComponent,
    MinOperatorComponent,
    MapOperatorComponent,
    TapOperatorComponent,
    ConcatOperatorComponent,
    BufferTimeOperatorComponent,
    ConcatOperatorComponent,
    MergeOperatorComponent,
    MergeMapOperatorComponent,
    StartWithOperatorComponent,
    SwitchMapOperatorComponent,
    ConcatMapOperatorComponent,
    LinkComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
