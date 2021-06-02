import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { AlertmessageService } from 'src/services/alertmessage.service';

@Component({
  selector: 'app-alertmessage',
  templateUrl: './alertmessage.component.html',
  styleUrls: ['./alertmessage.component.scss']
})
export class AlertmessageComponent implements OnInit {

  content = 'Evenement déclenché';
  severity = 123;
  hideContent = true;

  constructor(private alertmessageService: AlertmessageService) { }

  ngOnInit(): void {
    this.content = this.alertmessageService.getMessage();
  }

  btnClick() {
    this.hideContent = !this.hideContent;
  }

  btnClickAsync() {
    timer(500).subscribe(() => { this.btnClick(); })
  }
}
