import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'

export default function handleMovement(dementor){
	const dementors = []

	function getNewPosition(oldPos, direction) {
		switch(direction){
			case 'WEST':
				return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]
			case 'EAST':
				return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]
			case 'NORTH':
				return [ oldPos[0], oldPos[1]-SPRITE_SIZE ]
			case 'SOUTH':
				return [ oldPos[0], oldPos[1]+SPRITE_SIZE ]
		}

	}


	function getSpriteLocation(direction, walkIndex) {
		switch(direction){
			case 'WEST':
				return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`
			case 'EAST':
				return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px`
			case 'NORTH':
				return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*1}px`
			case 'SOUTH' :
				return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*0}px`
		}
	}


	// function	observeBoundries(oldPos, newPos){
	// 	return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
	// 					(newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
	// }

	// function observeImpassable(oldPos, newPos){
	// 	const tiles = store.getState().map.tiles
	// 	const y = newPos[1] / SPRITE_SIZE
	// 	const x = newPos[0] / SPRITE_SIZE
	// 	const nextTile = tiles[y][x]
	// 	return nextTile < 5
	// }

	function getWalkIndex() {
		const walkIndex = store.getState().dementor.walkIndex
		return walkIndex >= 7 ? 0 : walkIndex + 1 
	}

	const sleep = (milliseconds) => {
	  return new Promise(resolve => setTimeout(resolve, milliseconds))
	}

	function dispatchMove(direction, newPos, walkIndex){
		console.log('dispatched')

		store.dispatch({
			type: 'MOVE_DEMENTOR',
			payload: {
				position: newPos,
				direction: direction,
				walkIndex: walkIndex,
				spriteLocation: getSpriteLocation(direction, walkIndex)
			}
		})
	}

	// function attemptMove(direction){
	// 	console.log('page is fully loaded');
	// 	const oldPos = store.getState().dementor.position
	// 	const newPos = getNewPosition(oldPos, direction)
	// 	dispatchMove(direction, newPos)

	// 	if(observeBoundries(oldPos,newPos) && (observeImpassable(oldPos,newPos)))
	// 		dispatchMove(direction, newPos)
	// }

	// function sleep(milliseconds) {
	//   const date = Date.now();
	//   let currentDate = null;
	//   do {
	//     currentDate = Date.now();
	//   } while (currentDate - date < milliseconds);
	// }



	function move(direction){
		var oldPos = store.getState().dementor.position
		var newPos = getNewPosition(oldPos, direction)
		var walkIndex = getWalkIndex()
		
		for (var i = 0; i < 25; i++) {

		  dispatchMove(direction, newPos,walkIndex)
		  oldPos = store.getState().dementor.position
			newPos = getNewPosition(oldPos, direction)
			walkIndex = getWalkIndex()

		}

	}

	window.addEventListener('load', (e) => {
	  move("EAST")
	});
	// dementors.forEach(dementor => return(dementor));
	return dementor
}