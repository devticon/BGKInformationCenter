import { API_URL, CLIENT_ID, TENANT_ID } from '@env';
import { AuthorizeResult } from 'react-native-app-auth';

export const authConfig = {
  issuer: `https://login.microsoftonline.com/${TENANT_ID}/v2.0`,
  clientId: CLIENT_ID,
  redirectUrl: 'com.bgkinformationcenter://oauth/redirect/',
  scopes: ['openid', 'profile', 'email', 'offline_access', 'https://graph.microsoft.com/.default'],
};

export function authenticate(authState: AuthorizeResult) {
  return fetch(`${API_URL}/ms-subscribe`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(authState),
  }).then(response => response.json());
}
