import { Component, OnInit, OnChanges, DoCheck, OnDestroy, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lifecycle-reporter',
  template: `<div>Lifecycle Reporter Rendered {{num}}</div>`
})
export class LifecycleReporterComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() num: number;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
