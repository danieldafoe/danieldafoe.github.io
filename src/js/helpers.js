export const APP_CONSTANTS = {
  ACCEPTED_COOKIES: 'acceptedCookies',
  NETLIFY_API_BASE: 'https://api.netlify.com/api/v1',
  NETLIFY_APP_NAME: 'danieldafoe.com',
  NETLIFY_AUTH_TOKEN: 'LKHbNmOdpIeO08oD6AODvRz44FG83vpBnifFLXLIPF0',
};

export function formatNetlifyDate(dateString) {
  const dateObj = new Date(dateString);
  return `${ dateObj.getMonth()+1 }-${ dateObj.getDate() }-${ dateObj.getFullYear() }`
}

export function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}

export function setLocalStorage(key, value) {
  if (key && value) {
    window.localStorage.setItem(key, value);
  }
}
