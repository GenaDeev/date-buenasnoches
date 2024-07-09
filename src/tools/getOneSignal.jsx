import OneSignal from 'react-onesignal';

export default async function getOneSignal() {
  await OneSignal.init({ appId: '45fe168d-f094-4b3b-8efa-aa4400c02ab0'});
  OneSignal.Slidedown.promptPush();
}