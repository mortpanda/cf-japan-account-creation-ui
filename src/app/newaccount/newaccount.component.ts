import { Component, OnInit } from '@angular/core';
import { OktaGetTokenService } from '../shared/okta/okta-get-token.service';
import { ViewEncapsulation } from '@angular/core';
import { OktaSDKAuthService } from '../shared/okta/okta-auth.service';
import { OktaAuth } from '@okta/okta-auth-js'
import { OktaConfigService } from "../shared/okta/okta-config.service";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MessageService } from 'primeng/api';
import { OktaApiService } from '../shared/okta/okta-api.service';
import { ProcessingComponent } from '../shared/processing/processing.component';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewaccountComponent implements OnInit {
  smallScreen: boolean;
  userEmail: string;
  strJust: string;
  toastMsg: string;
  processRequest: boolean;
  strFirstname;
  strLastname;
  // processRequest: boolean;
  newAccountRes;
  public authService = new OktaAuth(this.OktaSDKAuthService.config);
  strUserSession;
  strThisUser;
  myAccessToken;
  demoApprover;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private messageService: MessageService,
    private OktaApiService: OktaApiService,
    private OktaConfigService: OktaConfigService,
    private ProcessingComponent: ProcessingComponent,
    public OktaGetTokenService: OktaGetTokenService,
    public OktaSDKAuthService: OktaSDKAuthService,
  ) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small
    ]).subscribe(result => {
      this.smallScreen = result.matches;
    });
    /////////////////////////////////////////////////////////
    ///////////////////// Pre-fill Form ///////////////////// 
    this.userEmail = this.OktaConfigService.strDemoUsername;
    this.strJust = this.OktaConfigService.strJust;
    this.strFirstname = this.OktaConfigService.strDemoUserFirstname;
    this.strLastname = this.OktaConfigService.strDemoUserLastname;
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////

  }
  justifyError: boolean;
  emailError: boolean;
  fistnameError: boolean;
  lastnameError: boolean;

  async ngOnInit() {
    this.justifyError = false;
    this.emailError = false;
    this.fistnameError = false;
    this.lastnameError = false;
    this.processRequest = false;
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
        } catch (e) {
          window.location.replace(this.OktaConfigService.strPostLogoutURL);
        }
        break;
    }
    console.log(this.strThisUser)
    console.log(this.myAccessToken.accessToken);
    this.demoApprover = this.strThisUser.email
  }

  async AccountRequest() {
    this.processRequest = true;
    switch (this.strJust) {
      case undefined: {
        this.toastMsg = "Justification is empty";
        this.justifyError = false;
        this.showError()
        break;
      }
      case null: {
        this.toastMsg = "Justification is empty";
        this.justifyError = false;
        this.showError()
        break;
      }
      default: {
        this.justifyError = true;
        break;
      }
    }

    switch (this.userEmail) {
      case undefined: {
        this.toastMsg = "Email is empty";
        this.emailError = false;
        this.showError()
        break;
      }
      case null: {
        this.toastMsg = "Email is empty";
        this.emailError = false;
        this.showError()
        break;
      }
      default: {
        this.emailError = true;
        break;
      }
    }
    switch (this.strFirstname) {
      case undefined: {
        this.toastMsg = "Firstname Empty";
        this.fistnameError = false;
        this.showError()
        break;
      }
      case null: {
        this.toastMsg = "Firstname Empty";
        this.fistnameError = false;
        this.showError()
        break;
      }
      default: {
        this.fistnameError = true;
        break;
      }
    }

    switch (this.strLastname) {
      case undefined: {
        this.toastMsg = "Lastname Empty";
        this.lastnameError = false;
        this.showError()
        break;
      }
      case null: {
        this.toastMsg = "Lastname Empty";
        this.lastnameError = false;
        this.showError()
        break;
      }
      default: {
        this.lastnameError = true;
        break;
      }
    }
    await this.SendRequest("new_account", this.OktaConfigService.strFlowUri, this.userEmail, this.strJust, this.strFirstname, this.strLastname,this.demoApprover);
    this.processRequest = await false;
    // await this.CloseProgress();
  }

  async SendRequest(action, url, email, strJustify, firstname, lastname, demoApprover) {
    if (this.emailError == true && this.justifyError == true && this.fistnameError == true && this.lastnameError == true) {

      let requestURI;
      requestURI = url;

      let requestBody;
      requestBody = {
        demoApprover:demoApprover,
        action: action,
        email: email,
        justify: strJustify,
        firstname: firstname,
        lastname: lastname,
      }
      this.newAccountRes = await this.OktaApiService.InvokeFlow(requestURI, requestBody);
      await console.log(this.newAccountRes.status)


      switch (this.newAccountRes.status) {
        case "All good, starting approval flow": {
          this.toastMsg = await this.newAccountRes.status;
          await this.showSuccess();

          break;
        }
        case "Not Authorised": {
          this.toastMsg = await this.newAccountRes.status;
          await this.showError();

          break;
        }
        default: {
          break;
        }
      }
    }
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: this.toastMsg });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.toastMsg });
  }
  onReject() {
    this.messageService.clear('c');
  }
}
