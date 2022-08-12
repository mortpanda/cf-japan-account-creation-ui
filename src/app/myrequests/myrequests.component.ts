import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataService } from '../shared/data-service/data.service';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { OktaApiService } from '../shared/okta/okta-api.service';
import { OktaConfigService } from "../shared/okta/okta-config.service";

@Component({
  selector: 'app-myrequests',
  templateUrl: './myrequests.component.html',
  styleUrls: ['./myrequests.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyrequestsComponent implements OnInit {
  RequestData: boolean;
  smallScreen: boolean;
  selectedMessage: any;
  myReqTableHead: string[] = ['action', 'executionID', 'expiryDate', 'status']
  myEmail;
  GetReq: boolean;
  constructor(
    public DataService: DataService,
    private breakpointObserver: BreakpointObserver,
    private OktaApiService: OktaApiService,
    private OktaConfigService: OktaConfigService,

  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });

    this.RequestData = false;
    /////////////////////////////////////////
    this.myEmail = this.OktaConfigService.strDemoUsername;
    /////////////////////////////////////////
  }

  async ngOnInit() {
  }

  myReQRes;
  async CallGetReq() {
    await this.GetMyRequests(this.OktaConfigService.strGetRequestsUri, this.myEmail)
    await console.log(this.GetRequestRes);
  }

  GetRequestRes;
  async GetMyRequests(url, email) {
    let requestURI;
    requestURI = url; let requestBody;
    requestBody = {
      email: email
    }
    this.GetRequestRes = await this.OktaApiService.InvokeFlow(requestURI, requestBody);
    this.RequestData = true;
    
  }


}
