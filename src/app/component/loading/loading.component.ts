import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'loading-comp',
    template: `<div class="loading play" style="background-image: url(/assets/loading.svg)"></div>
    <div class="percentage">Loading... {{percentage}}%</div>`,
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
    @Input() percentage;
    ngOnInit() {

    }
}
