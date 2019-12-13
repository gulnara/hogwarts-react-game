import React from 'react'
import { connect } from 'react-redux'
import { SPRITE_SIZE } from '../../config/constants'
import './styles.css'


function getTileSprite(type){
	switch(type) {
		case 0:
			return 'castle_floor'
		case 1:
			return 'grass'
		case 2:
			return 'left_door'
		case 3:
			return 'right_door'
		case 4:
			return 'left_door_turned'
		case 5:
			return 'right_door_turned'
		case 6: 
			return 'goat'
		case 7:
			return 'carpet1'
		case 8:
			return 'carpet2'
		case 9:
			return 'carpet3'
		case 10:
			return 'carpet4'
		case 11:
			return 'carpet5'
		case 12:
			return 'carpet6'
		case 15:
			return 'lake'
		case 16:
			return 'grass_lake'
		case 17:
			return 'top_wall'
		case 18:
			return 'bottom_wall'
		case 19:
			return 'left_wall'
		case 20:
			return 'right_wall'
		case 21:
			return 'top_right_corner'
		case 22:
			return 'top_left_corner'
		case 23:
			return 'bottom_right_corner'
		case 24:
			return 'bottom_left_corner'
		case 25:
			return 'inner_left_corner'
		case 26:
			return 'inner_right_corner'
		case 27:
			return 'hut_one'
		case 28:
			return 'hut_two'
		case 29:
			return 'hut_three'
		case 30:
			return 'hut_four'
		case 31:
			return 'left_gate'
		case 32:
			return 'right_gate'
		case 33:
			return 'skeleton'
		case 34:
			return 'potion1'
		case 35:
			return 'potion2'
		case 36:
			return 'potion3'
		case 37:
			return 'potion4'
		case 38:
			return 'key'
		case 39:
			return 'wizard'
		case 40:
			return 'dementor_blue'
		case 41:
			return 'dementor_green'
		case 42:
			return 'table1'
		case 43:
			return 'table2'
		case 44:
			return 'table3'
		case 45:
			return 'table4'
		case 46:
			return 'table5'
		case 47:
			return 'table6'
		case 48:
			return 'table7'
		case 49:
			return 'table8'
		case 50:
			return 'table9'
		case 51:
			return 'table10'
		case 52:
			return 'table11'
		case 53:
			return 'table12'
		case 54:
			return 'table13'
		case 55:
			return 'table14'
		case 56:
			return 'table15'
		case 57:
			return 'slitherin'
		case 58:
			return 'gryffindor'
		case 59:
			return 'hufflepuff'
		case 60:
			return 'ravenclaw'
		case 61:
			return 'slytherin_b'
		case 62:
			return 'torch_1'
		case 63:
			return 'torch_left'
		case 64:
			return 'torch_right'
		case 65:
			return 'banner'
		case 66:
			return 'fireplace'
		case 67:
			return 'fire_left'
		case 68:
			return 'fire_right'
		case 69:
			return 'sofa1'
		case 70:
			return 'sofa2'
		case 71:
			return 'sofa3'
		case 72:
			return 'sofa4'
		case 73:
			return 'sofa5'
		case 74:
			return 'sofa6'
		case 75:
			return 'chest'
		case 76:
			return 'hagrid1'
		case 77:
			return 'hagrid2'
		case 78:
			return 'unicorn'
		case 79:
			return 'solder1'
		case 80:
			return 'solder2'
		case 81:
			return 'letter'
		case 82:
			return 'christmas_tree'

	}
}


function MapTile(props){
	return <div 
		className={`tile ${getTileSprite(props.tile)}`}
		style = {{
			height: SPRITE_SIZE,
			width: SPRITE_SIZE,

		}}
		/>
}

function MapRow(props){
	return <div 
		className="row"
		style= {{
				height: SPRITE_SIZE,
		}}
		>
		{
			props.tiles.map( tile => <MapTile tile={tile} />)
		}
	</div>
}

function Map(props) {
	return (
		<div
			style = {{
				position: 'relative',
				top: '0px',
				left: '0px',
				width: '1200px',
				height: '600px',
				border: '4px solid white',
			}}
		>

		{
			props.tiles.map( row => <MapRow tiles={row} />)
		}
		
		</div>
		)
}

function mapStateToProps(state){
	return {
		tiles: state.map.tiles,
	}

}

export default connect(mapStateToProps)(Map)