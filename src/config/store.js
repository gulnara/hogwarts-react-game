import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'
import dementorReducer from '../features/dementor/reducer'

const rootReducer = combineReducers({
	player: playerReducer,
	map: mapReducer,
	dementor: dementorReducer,
})

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store