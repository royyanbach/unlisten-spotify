import { stateKey } from '../constants';
import { generateRandomString } from '../utilities';

export function login() {
  var client_id = 'c39252443b134b76a6770eb9e24e00f0'; // Your client id
  var redirect_uri = 'http://localhost:8080/'; // Your redirect uri

  var state = generateRandomString(16);

  localStorage.setItem(stateKey, state);
  var scope = 'user-library-read user-library-modify';

  var url = 'https://accounts.spotify.com/authorize';
  url += '?response_type=token';
  url += '&client_id=' + encodeURIComponent(client_id);
  url += '&scope=' + encodeURIComponent(scope);
  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
  url += '&state=' + encodeURIComponent(state);

  window.location = url;
}

export function logout() {
  localStorage.clear();
  window.location = '/';
}
