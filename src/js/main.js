import { APP_CONSTANTS, setLocalStorage, getLocalStorage } from './helpers';

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  if (acceptedCookiesBanner() === 'true') {
    hideCookiesBanner();
  } else {
    // Set handler
    const cookiesBtn = document.querySelector('aside button');
    cookiesBtn.addEventListener('click', hideCookiesBanner);
  }
}

function acceptedCookiesBanner() {
  return getLocalStorage(APP_CONSTANTS.ACCEPTED_COOKIES);
}

function hideCookiesBanner() {
  const banner = document.getElementsByTagName('aside');
  banner[0].classList.toggle('hide');
  setLocalStorage(APP_CONSTANTS.ACCEPTED_COOKIES, 'true');
}
