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
  strLang = 'ja';
  strBrand = '#00297A';
  strLogo = "assets/img/okta-japan-small.png";
  strMeEP = '/api/v1/users/me';

  strGitHubRepo = "https://github.com/mortpanda/cf-japan-account-creation-ui";
  strFlowUri = 'https://kent-nagao-oie.workflows.oktapreview.com/api/flo/e8e1e89f6a8bc24e90600dc22ef14708/invoke?clientToken=86eecaf4ecb61c4ca6d96b4e66c0aab579f22619d97ac8983f0b3cf40ffe5f5c';
  strMyApprovalsUri = 'https://kent-nagao-oie.workflows.oktapreview.com/api/flo/c489aa4a64f1b0006fc4a1ac150106f3/invoke?clientToken=6e57119ef10dc0c90dd177776800feb77c593872e1e4d4f31f1acd13acc739a2';
  strGetRequestsUri = 'https://kent-nagao-oie.workflows.oktapreview.com/api/flo/030918320ca8d7ff411ed22a2ef331e0/invoke?clientToken=f0bb6bc5db5963dcbeba9f043aa90794b480f110ef6f483afb33f4a17bcbf4dc';


  


}

