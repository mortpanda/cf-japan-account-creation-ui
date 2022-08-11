import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataService } from '../../shared/data-service/data.service';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import {OktaApiService} from '../../shared/okta/okta-api.service';
import { OktaSDKAuthService } from '../../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../../shared/okta/okta-config.service";
import {OktaGetTokenService} from '../../shared/okta/okta-get-token.service';

@Component({
  selector: 'app-approval-popup',
  templateUrl: './approval-popup.component.html',
  styleUrls: ['./approval-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ApprovalPopupComponent implements OnInit {
  smallScreen: boolean;
  selectedMessage: any;
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  constructor(
    public DataService: DataService,
    private breakpointObserver: BreakpointObserver,
    private OktaApiService: OktaApiService,
    private OktaGetTokenService:OktaGetTokenService,
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
    
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
  }


  myApprovalItem;

  async ngOnInit() {
    this.DataService.currentMessage.subscribe(message => (this.selectedMessage = message));
    this.myApprovalItem = await this.selectedMessage

    console.log(this.myApprovalItem)
  }

async Approve(){

  this.strUserSession = await this.authService.isAuthenticated();
  console.log(this.strUserSession)
  switch (this.strUserSession == true) {
    case false:
      window.location.replace(this.OktaConfigService.strPostLogoutURL);
    case true:
      this.strThisUser = await this.authService.token.getUserInfo()
        .then(function (user) {
          return user
        })
        .catch((err) => {
          console.log(err);
          window.location.replace(this.OktaConfigService.strPostLogoutURL);
        })
      
      console.log(this.strThisUser)

      this.resumeApproval(this.myApprovalItem.resumeURI,this.myApprovalItem.executionID, this.strThisUser.sub )
      
      break;
  }
}

ResumeApprovalRes;
async resumeApproval(url, executionID, userID){
  let requestURI;
  requestURI = url;

  let requestBody;
    requestBody = {
      executionID: executionID,
      userId:userID,
      
    }
    this.ResumeApprovalRes = await this.OktaApiService.InvokeFlow(requestURI, requestBody);  

}


}
