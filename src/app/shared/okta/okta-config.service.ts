import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OktaConfigService {

  strMe = 'test.user123@okta.com';
  strReason = 'I need it because, I need it';
  constructor() { }

  //Localhost https://cf-japan.oktapreview.com
  strBaseURI = 'https://cf-japan.oktapreview.com/';
  strRedirectURL = 'https://localhost:4200/cf-japan-account-creation-ui/start/';
  strMyRequests = 'https://localhost:4200/cf-japan-account-creation-ui/myrequests/';
  strMyApprovals = 'https://localhost:4200/cf-japan-account-creation-ui/myapprovals/';
  strClientID = '0oa4br3b271PaT6v91d7';
  strIssuer = 'https://cf-japan.oktapreview.com/oauth2/default/';
  strPostLogoutURL = 'https://localhost:4200/cf-japan-account-creation-ui/';
  strScope = ['openid', 'email', 'profile'];
  strResponseType = ['token', 'id_token'];
  strResponseMode = 'fragment';
  strPrompt = 'login';
  strPkce = true;
  strLang = 'en';
  strBrand = '#00297A';
  strLogo = "assets/img/okta-japan-small.png";
  strMeEP = '/api/v1/users/me';

  strGitHubRepo = "https://github.com/mortpanda/cf-japan-account-creation-ui";
  strFlowUri = 'https://cf-japan.workflows.oktapreview.com/api/flo/d9ebde0dbd1e7278041cb52a622f3ca4/invoke?clientToken=c50af490a1fecde0d347426978ecdf55c726fb719479cd3a02a2647271b04f96';

  strMyApprovalsUri = 'https://kent-nagao-oie.workflows.oktapreview.com/api/flo/c489aa4a64f1b0006fc4a1ac150106f3/invoke?clientToken=6e57119ef10dc0c90dd177776800feb77c593872e1e4d4f31f1acd13acc739a2';
  
  strGetRequestsUri = 'https://kent-nagao-oie.workflows.oktapreview.com/api/flo/030918320ca8d7ff411ed22a2ef331e0/invoke?clientToken=f0bb6bc5db5963dcbeba9f043aa90794b480f110ef6f483afb33f4a17bcbf4dc';


  


}

