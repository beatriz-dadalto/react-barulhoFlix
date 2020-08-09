const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001'
  : 'https://barulhoflix-rockmusic.herokuapp.com';

export default {
  URL_BACKEND,
};
