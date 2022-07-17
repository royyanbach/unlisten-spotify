import { useCallback, useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Hero from './Hero';
import { stateKey } from '../constants';
import { logout } from '../libs/auth';

const spotifyApi = new SpotifyWebApi();

/**
   * Obtains parameters from the hash of the URL
   * @return Object
   */
 function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
  while ( e = r.exec(q)) {
     hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

async function getMe(accessToken) {
  const respRaw = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      'Authorization': 'Bearer ' + accessToken,
    }
  })
  const respJson = await respRaw.json();
  console.log(respJson);
}

const App = () => {
  const [accessToken, setAccessToken] = useState(null);

  const getPlaylist = useCallback(async () => {
    try {
      const resp = await spotifyApi.getMySavedTracks();
      console.log(resp);
    } catch (error) {
      console.error(error.status);
      // if (error?.status === 403) {
      //   logout();
      // } else {
      // }
    }
    // spotifyApi.getArtistAlbums(
    //   '43ZHCT0cAZBISjO8DG9PnE',
    //   { limit: 10, offset: 20 },
    //   function (err, data) {
    //     if (err) console.error(err);
    //     else console.log('Artist albums', data);
    //   }
    // );
  }, []);

  useEffect(() => {
    const params = getHashParams();

    const { access_token, state } = params;
    const storedState = localStorage.getItem(stateKey);

    if (access_token) {
      if (state == null || state !== storedState) {
        alert('There was an error during the authentication');
        logout();
      } else {
        localStorage.setItem('access_token', access_token);
        history.replaceState(null, null, ' ');
      }
    }

    const accessToken = access_token || localStorage.getItem('access_token');
    spotifyApi.setAccessToken(accessToken);
    setAccessToken(accessToken);
  }, []);

  useEffect(() => {
    if (accessToken) {
      getPlaylist();
    }
  }, [accessToken]);

  return <Hero />;
};

export default App;
