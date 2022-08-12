import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OktaConfigService {

strDemoUsername = 'new.user-1@okta.com';
strDemoUserFirstname = 'Demo';
strDemoUserLastname = 'User-1';
strJust = 'Required to access apps.'


  // strMe = 'test.user123@okta.com';
  // strReason = 'I need it because, I need it';
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

  strMyApprovalsUri = 'https://cf-japan.workflows.oktapreview.com/api/flo/e1f3ed12b64aefa472dc269eb570d24a/invoke?clientToken=713c27bd3154e26558d611e653066a5af1f42e424ce2e07d79dee4a21652d0dc';
  
  strGetRequestsUri = 'https://cf-japan.workflows.oktapreview.com/api/flo/8dd8facde4bed9cc8a4eccf0c7e0f708/invoke?clientToken=a4e1a578407639f5d704244fa8db242aa2d817d7c278a6e8feb09310d672f2f8';


  
  //Github pages https://cf-japan.oktapreview.com
  // strBaseURI = 'https://cf-japan.oktapreview.com/';
  // strRedirectURL = 'https://mortpanda.github.io/cf-japan-account-creation-ui/start/';
  // strMyRequests = 'https://mortpanda.github.io//cf-japan-account-creation-ui/myrequests/';
  // strMyApprovals = 'https://mortpanda.github.io//cf-japan-account-creation-ui/myapprovals/';
  // strClientID = '0oa4br3b271PaT6v91d7';
  // strIssuer = 'https://cf-japan.oktapreview.com/oauth2/default/';
  // strPostLogoutURL = 'https://localhost:4200/cf-japan-account-creation-ui/';
  // strScope = ['openid', 'email', 'profile'];
  // strResponseType = ['token', 'id_token'];
  // strResponseMode = 'fragment';
  // strPrompt = 'login';
  // strPkce = true;
  // strLang = 'en';
  // strBrand = '#00297A';
  // strLogo = "assets/img/okta-japan-small.png";
  // strMeEP = '/api/v1/users/me';

  // strPostLogoutURL = 'https://mortpanda.github.io/kent-multi-utils/';

}

