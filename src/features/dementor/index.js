import React from 'react'
import { connect } from 'react-redux'
import dementorSprite from './dementor.png'
import handleMovement from './movement'
import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'

function Dementor(props){
	return (
		<div
		style = {{
			position: 'absolute',
			top: props.position[1],
			left: props.position[0],
			backgroundImage: `url('${dementorSprite}')`,
			backgroundPosition: props.spriteLocation,
			width: '40px',
			height: '40px',
		}}
		/>
		)
}
	function sleep(milliseconds) {
	  const date = Date.now();
	  let currentDate = null;
	  do {
	    currentDate = Date.now();
	  } while (currentDate - date < milliseconds);
	}



function mapStateToProps(state){
	console.log(state)
	return {
		...state.dementor,
	}
}

export default connect(mapStateToProps)(handleMovement(Dementor))

// export default Dementor