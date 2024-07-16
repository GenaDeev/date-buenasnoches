import OneSignal from 'react-onesignal';

export async function getOneSignal() {
    await OneSignal.init({ appId: '45fe168d-f094-4b3b-8efa-aa4400c02ab0'});
    OneSignal.Slidedown.promptPush();
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function setTitle(title) {
    document.title = title;
}