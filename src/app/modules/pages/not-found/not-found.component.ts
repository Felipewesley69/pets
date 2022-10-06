import { Component, OnInit } from '@angular/core';
import { UtilService } from '@core/services/util.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private utilService: UtilService) { }

  ngOnInit() {
  }

  back(): void { this.utilService.backPage() }

}
