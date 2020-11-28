import { CLIENT_ID, TENANT_ID } from '@env';

export const authConfig = {
  issuer: `https://login.microsoftonline.com/${TENANT_ID}/v2.0`,
  clientId: CLIENT_ID,
  redirectUrl: 'com.bgkinformationcenter://oauth/redirect/',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
};
