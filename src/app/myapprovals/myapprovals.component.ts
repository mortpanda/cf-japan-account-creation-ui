import { Component, OnInit } from '@angular/core';
import {OktaGetTokenService} from '../shared/okta/okta-get-token.service';
import { ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../shared/okta/okta-config.service";
import {OktaApiService} from '../shared/okta/okta-api.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import {DataService} from '../shared/data-service/data.service';
import { Subject, BehaviorSubject, Observable,ReplaySubject } from 'rxjs';
import { ApprovalPopupComponent } from '../myapprovals/approval-popup/approval-popup.component';

@Component({
  selector: 'app-myapprovals',
  templateUrl: './myapprovals.component.html',
  styleUrls: ['./myapprovals.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MyapprovalsComponent implements OnInit {
  smallScreen: boolean;
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  strFullName;
  arrMyApprovals=[];
  myApprovalLoad:boolean;
  approvalTableHead: string[]=['requestor','firstname','lastname','status','justification']
  selectedRow;
  itemRow;
  constructor(
    private OktaGetTokenService:OktaGetTokenService,
    private breakpointObserver: BreakpointObserver,
    private OktaSDKAuthService: OktaSDKAuthService,
    private OktaConfigService: OktaConfigService,
    private OktaApiService:OktaApiService,
    public dialog: MatDialog,
    public DataService:DataService,
    private ApprovalPopupComponent:ApprovalPopupComponent,
  ) { 
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
    this.myApprovalLoad=false;
  }

  async ngOnInit(){
    
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
        this.strFullName = this.strThisUser.name;
        console.log(this.strThisUser)

        await this.enumMyApprovals('myapprovals', this.OktaConfigService.strMyApprovalsUri,this.strThisUser.email,this.strThisUser.given_name,this.strThisUser.family_name);
        await console.log(this.arrMyApprovals);
        
        this.myApprovalLoad = true;
        
        break;
    }
  }

  arrSmallScreenMyApprovals=[];
  async enumMyApprovals(action, url, email, firstname, lastname){
    let requestURI;
    requestURI = url;

    let requestBody;
    requestBody = {
      action: action,
      email: email,
      firstname: firstname,
      lastname: lastname,
    }
    this.arrMyApprovals = await this.OktaApiService.InvokeFlow(requestURI, requestBody);  
    
  }

  
async openRow(row){
  let dialogRef = this.dialog.open(ApprovalPopupComponent, {
    width: 'auto', height: 'auto',
    data: { row },
  });

  dialogRef.afterClosed().subscribe(result => { row = result; });
  // console.log('Row clicked: ', row);
  this.itemRow = row;
   console.log(this.itemRow);
  this.DataService.changeMessage(this.itemRow);
}

}
