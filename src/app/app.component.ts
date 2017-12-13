import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalRef: BsModalRef;

  @ViewChild('template')
  modal: ElementRef;

  constructor(private modalService: BsModalService) {


    let timer = Observable.interval(1000);

    timer.subscribe(
      function (x) {
        console.log('Next: ' + x);
        if (x === 4)
          modalService.show(this.modal);
      },
      function (err) {
        console.log('Error: ' + err);
      },
      function () {
        console.log('Completed');
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
