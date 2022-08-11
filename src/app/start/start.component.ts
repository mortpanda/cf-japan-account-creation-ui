import { Component, OnInit } from '@angular/core';
import { OktaGetTokenService } from '../shared/okta/okta-get-token.service';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../shared/okta/okta-config.service";
import { OktaWidgetService } from '../shared/okta/okta-widget.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NewaccountComponent } from '../newaccount/newaccount.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StartComponent implements OnInit {
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  smallScreen: boolean;
  strUserSession;
  strThisUser;
  strFullName;
  myAccessToken;

  constructor(
    public OktaGetTokenService: OktaGetTokenService,
    public OktaSDKAuthService: OktaSDKAuthService,
    public OktaConfigService: OktaConfigService,
    public OktaWidgetService: OktaWidgetService,
    private breakpointObserver: BreakpointObserver,
    private _matdialog: MatDialog,
    private NewaccountComponent:NewaccountComponent,
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
  }

  test() {
    console.log('test')
  }

  async ngOnInit() {

    this.strUserSession = await this.authService.isAuthenticated();
    console.log(this.strUserSession)
    switch (this.strUserSession == true) {
      case false:
        window.location.replace(this.OktaConfigService.strPostLogoutURL);
      case true:
        try {
          this.strThisUser = await this.authService.token.getUserInfo()
          this.myAccessToken = await this.OktaGetTokenService.GetAccessToken()
            .then(function (user) {
              return user
            })
            .catch((err) => {
              console.log(err);
              window.location.replace(this.OktaConfigService.strPostLogoutURL);
            })
          this.strFullName = this.strThisUser.name;
        } catch (e) {
          window.location.replace(this.OktaConfigService.strPostLogoutURL);
        }
        break;
    }
    console.log(this.strThisUser)
    console.log(this.myAccessToken.accessToken);
  }

  newAccount() {
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = false;
    DialogConfig.id = "new-account-modal-component";
    DialogConfig.height = "auto";
    DialogConfig.width = "auto";
    const modalDialog = this._matdialog.open(NewaccountComponent, DialogConfig);
  }

}
