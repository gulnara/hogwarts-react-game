import React from 'react'
import Map from '../map'
import Player from '../player'
// import Dementor from '../dementor'

import {tiles} from '../../data/maps/1'
import store from '../../config/store'

function World(props) {
	store.dispatch({ type: 'ADD_TILES', payload: {
		tiles: tiles, 
	}})

	return (
		<div
		style= {{
			position: 'relative',
			width: '1200px',
			height: '800px',
			margin: 'auto',
		}}
		>
	    <Map />
  		<Player />


		</div>
		)
}

export default World