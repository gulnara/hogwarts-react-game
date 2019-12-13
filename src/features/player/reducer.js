
const initialState = {
	position: [600,440],
	spriteLocation: '0px 0px',
	direction: 'EAST',
	walkIndex: 0,
	talk: '',
	link: '',
	link_text: '',
	coin:'',
	flask: '',
	flying_key: '',
	letter: '',
}

const playerReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'MOVE_PLAYER':
			return {
				...state,
				...action.payload
			}
		case 'PLAYER_TALK':
			return {
				...state,
				...action.payload,
			}
		case 'PLAYER_ITEM':
			return {
				...state,
				...action.payload,
			}
		default:
			return state
	}
}

export default playerReducer