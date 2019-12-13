
const initialState = {
	position: [80,80],
	spriteLocation: '0px 0px',
	direction: 'east',
	walkIndex: 0,
}

const dementorReducer = (state=initialState, action) => {
	switch(action.type) {
		case 'MOVE_DEMENTOR':
			return {
				...action.payload
			}
		default:
			return state
	}
}

export default dementorReducer