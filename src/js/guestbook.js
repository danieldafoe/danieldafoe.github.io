import { APP_CONSTANTS, formatNetlifyDate } from './helpers';

document.addEventListener('DOMContentLoaded', onLoad);

function onLoad() {
  loadNetlifySubmissions();
}

function loadNetlifySubmissions() {
  const requestInfo = {
    headers: new Headers({
      'Authorization': `Bearer ${APP_CONSTANTS.NETLIFY_AUTH_TOKEN}`,
      'User-Agent': `${APP_CONSTANTS.NETLIFY_APP_NAME} (dannydafoe@gmail.com)`
    })
  };

  const request = new Request(`${APP_CONSTANTS.NETLIFY_API_BASE}/forms/6070eaa0f74f240007c3f6da/submissions`, requestInfo);
  fetch(request)
    .then(response => response.json())
    .then(submissions => { console.log(submissions); renderSubmissions(submissions) });
}

function renderSubmissions(submissions) {
  submissions.forEach((submission) => {
    const commentsContainer = document.getElementById('comments');
    const formFieldEl = document.createElement('div');
    formFieldEl.classList.add('guestbook__comment');

    const commentNameEl = document.createElement('p');
    const commentName = submission['data']['name'] || 'Anonymous';
    commentNameEl.classList.add('guestbook__comment__name');
    commentNameEl.innerText =  commentName;

    const commentDate = formatNetlifyDate(submission['created_at']);

    const commentTextEl = document.createElement('p');
    commentTextEl.classList.add('guestbook__comment__text')
    commentTextEl.innerText =  submission['data']['comment'];

    formFieldEl.appendChild(commentNameEl);
    formFieldEl.appendChild(commentTextEl);

    commentsContainer.appendChild(formFieldEl);
  });
}