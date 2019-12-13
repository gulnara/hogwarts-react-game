import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './config/store'
import ReactAudioPlayer from 'react-audio-player';
import './8BITWONDERNominal.ttf'

// import * as serviceWorker from './serviceWorker'

ReactDOM.render(<Provider store={store}>
	  <div class='header'>
		  <div class='game_name'>
		  	<h1>Hogwarts-Mode</h1>
		  </div>
		  <ReactAudioPlayer
	    src= './HedwigsTheme.ogg'
	    // autoPlay
	    controls
	  />
  </div>
	<App />
	</Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
