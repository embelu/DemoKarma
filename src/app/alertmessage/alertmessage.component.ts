import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alertmessage',
  templateUrl: './alertmessage.component.html',
  styleUrls: ['./alertmessage.component.scss']
})
export class AlertmessageComponent implements OnInit {

  content = 'Evenement déclenché';
  severity = 123;
  hideContent = true;

  constructor() { }

  ngOnInit(): void {
  }

  btnClick() {
    this.hideContent = !this.hideContent;
  }
}
