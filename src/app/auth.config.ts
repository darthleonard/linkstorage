import { isPlatform } from '@ionic/angular';
import config from '../../capacitor.config';

export const domain = '';
export const clientId = '';

const { appId } = config;
const auth0Domain = domain;
const iosOrAndroid = isPlatform('hybrid');

export const callbackUri = iosOrAndroid
  ? `${appId}://${auth0Domain}/capacitor/${appId}/callback`
  : 'http://localhost:8100';
