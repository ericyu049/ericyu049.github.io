import { Component, HostListener, OnInit, ViewContainerRef } from "@angular/core";
import { NgAnimateScrollService } from "ng-animate-scroll";
import { NzModalService } from "ng-zorro-antd/modal";

@Component({
    selector: 'main-comp',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    showButton: boolean;
    percentage = 0;
    constructor(private animateScrollService: NgAnimateScrollService, private modal: NzModalService, private viewContainerRef: ViewContainerRef) {
    }
    ngOnInit() {
        let interval = setInterval(() => {
            if (this.percentage == 101)
                clearInterval(interval);
            else this.percentage++
        }, 33);
    }
    @HostListener("window:scroll", [])
    onScroll(): void {
        this.showButton = (window.pageYOffset > 0) ? true : false;
    }
    navigateTo(element: any, duration?: number) {
        this.animateScrollService.scrollToElement(element, duration)
    }
    openResume() {
        this.modal.create({
            nzContent: PdfViewerComponent,
            nzClosable: false,
            nzBodyStyle: {
                'height': '80vh',
            },
            nzWidth: '70vw',
            nzFooter: null,
            nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
        });
    }
}

@Component({
    selector: 'pdf-viewer',
    template: `<iframe style="width: 100%; height: 100%;" src="/assets/resume.pdf"></iframe>`
})
export class PdfViewerComponent {
}
