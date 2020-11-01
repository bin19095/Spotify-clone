import logo from './logo.svg';
import './App.css';
import Login from './Login';
import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue} from "./DataLayer";
import Player from './Player';
const  spotify = new SpotifyWebApi();

function App() {

const [{ user,token }, dispatch] = useDataLayerValue();


  useEffect(() =>{
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) =>{
        dispatch({
          type: 'SET_USER',
          user: user,
        });
        console.log('👨🏻', user);
      })
    }

  }, []);
  console.log("🧚🏽‍♀️",user);
  console.log("🦹🏾‍♂️", token);

  return (
    <div className="App">

      {/* Spotify Logo */}
      {/*Login with spotify button */}

      {token ? <h1> <Player spotify={spotify} /> </h1> : <Login />}

      
    </div>
  );
}

export default App;
