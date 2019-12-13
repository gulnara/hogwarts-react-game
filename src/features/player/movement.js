import store from '../../config/store'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'

// import Modal from '@material-ui/core/Modal';
// import SimpleModal from '../modals'

export default function handleMovement(player){

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


	function	observeBoundries(oldPos, newPos){
		return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
						(newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE)
	}

	function observeImpassable(oldPos, newPos){
		const tiles = store.getState().map.tiles
		const y = newPos[1] / SPRITE_SIZE
		const x = newPos[0] / SPRITE_SIZE
		const nextTile = tiles[y][x]
		return nextTile < 15
	}

	function getWalkIndex() {
		const walkIndex = store.getState().player.walkIndex
		return walkIndex >= 7 ? 0 : walkIndex + 1 
	}


	function dispatchMove(direction, newPos){
		const walkIndex = getWalkIndex()
		store.dispatch({
			type: 'MOVE_PLAYER',
			payload: {
				position: newPos,
				direction: direction,
				walkIndex: walkIndex,
				talk: '',
				link: '',
				link_text: '',
				spriteLocation: getSpriteLocation(direction, walkIndex)
			} 
		}) 
	}


	function dispatchTalk(text,link,link_text){
		store.dispatch({
			type: 'PLAYER_TALK',
			payload: {
				talk: text,
				link: link,
				link_text: link_text,
			}
		})
	}

	function dispatchItem(coin,flask,flying_key,letter){
		store.dispatch({
			type: 'PLAYER_ITEM',
			payload: {
				coin: coin,
				flask: flask,
				flying_key: flying_key,
				letter: letter,
			}
		})
	}

	function attemptMove(direction){
		const oldPos = store.getState().player.position
		const newPos = getNewPosition(oldPos, direction)

		if(observeBoundries(oldPos,newPos) && (observeImpassable(oldPos,newPos)))
			dispatchMove(direction, newPos)
	}

	function findFlask(oldPos, newPos){
		const tiles = store.getState().map.tiles
		const y = newPos[1] / SPRITE_SIZE
		const x = newPos[0] / SPRITE_SIZE
		const nextTile = tiles[y][x]
		console.log(nextTile)
		var flask=store.getState().player.flask
		var coin = store.getState().player.coin
		var flying_key = store.getState().player.flying_key
		var letter = store.getState().player.letter
			if (nextTile==34){
				flask = "potion1"
			}
			if (nextTile == 75){
				coin = 'coin'
			}
			if (nextTile == 6){
				flying_key = 'key'
			}
			if (nextTile == 39){
				letter = 'letter'
			}
		dispatchItem(coin,flask,flying_key,letter)
	}

	function expecto(){
		console.log("Expecto")
		const oldPos = store.getState().player.position
		const direction = store.getState().player.direction
		const newPos = getNewPosition(oldPos, direction)
		console.log(oldPos)
		console.log(direction)
		console.log(newPos)
		findFlask(oldPos, newPos)
	}

	function talk() {
		const oldPos = store.getState().player.position
		console.log(oldPos)
		var speach=''
		var link = ''
		var link_text =''
		const marshawnX = [560,600,600,640,600,560]
		const marshawnY = [200,240,200,200,160,240]
		// Dungeon
		if ((oldPos[0] >= 800 && oldPos[0] <= 1120) && (oldPos[1] >= 280 && oldPos[1] <= 360)){
			speach ='Welcome to Potions Class! \n  '
			link = 'https://github.com/mode/webapp'
			link_text = 'Instructions for your potion are here.'
		}

		// Great Hall
		if ((oldPos[0] >= 40 && oldPos[0] <= 360) && (oldPos[1] >= 40 && oldPos[1] <= 400)){
			speach = "We have different houses but we don't eat, ... work, alone! \n"
			link ='https://mode.com/values/' 
			link_text ='Hogwarts-Mode Values' 
		}

		// Common Room
		if ((oldPos[0] >= 800 && oldPos[0] <= 1120) && (oldPos[1] >= 40 && oldPos[1] <= 200)){
			speach = "Welcome to your Common Room!  \n "
			link = 'https://mode.bamboohr.com/login.php?r=%2Fhome%2F'
			link_text ='You can request to visit Hogsmeade, a.k.a. request PTO, here.'
		}

		// Hagrid's
		if ((oldPos[0] >= 0 && oldPos[0] <= 360) && (oldPos[1] >= 480 && oldPos[1] <= 560)){
			speach = "Welcome to Care of Magical Features!  \n You will have a few drill down sessions, this one is dedicated to Product."
			link = 'https://mode.com/'
			link_text ='Magical Features'
		}

		// Lake
		if ((oldPos[0] >= 800 && oldPos[0] <= 1160) && (oldPos[1] >= 440 && oldPos[1] <= 560)){
			speach ='You need to protect the Castle!!! \n  '
			link = 'https://labs.hunter2.com/'
			link_text = 'Lear how to defeat Dementors here.'
		}

		// Marshawn
		if ((marshawnX.includes(oldPos[0])) && (marshawnY.includes(oldPos[1]))){
			speach ='Hi! I am the Ghost of Marshawn The Goat!!! \n And You can Ask me Anything! I am Always happy to help! I usually chat via Slack bot'
			link = 'https://mode.quip.com/folder/goat-story'
			link_text = 'Here is My Story...'
		}

		dispatchTalk(speach,link,link_text)
	}

	function handleKeyDown(e) {
		e.preventDefault()

		switch(e.keyCode) {
			case 37:
				return attemptMove('WEST')

			case 38:
				return attemptMove('NORTH')

			case 39:
				return attemptMove('EAST')

			case 40:
				return attemptMove('SOUTH')

			case 32:
				return talk()

			case 88:
				return expecto()

			default:
				console.log(e.keyCode)
		}
	}

	window.addEventListener('keydown', (e) => {
		handleKeyDown(e)
	})

	return player
}