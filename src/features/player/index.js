import React from 'react'
import { connect } from 'react-redux'
import witchSprite from './witch3.png'
import handleMovement from './movement'
import './styles.css'

function Player(props){
	return (
		<React.Fragment>
			<div
			style = {{
				position: 'absolute',
				top: props.position[1],
				left: props.position[0],
				backgroundImage: `url('${witchSprite}')`,
				backgroundPosition: props.spriteLocation,
				width: '40px',
				height: '40px',
			}}
			>
			</div>
			<div class='pensive'>
				<div class="speach">
					<p>{props.talk} </p>
					<a href={props.link} target="_blank">{props.link_text}</a>
				</div>
				<div class='deathly_hallows'>
					<div className={props.flask} 		
					style = {{
						height: '40px',
						width: '40px',
						display: 'inline-block',
					}}/>
					<div className={props.coin} 		
					style = {{
						height: '40px',
						width: '40px',
						display: 'inline-block',
					}}/>
					<div className={props.flying_key} 		
					style = {{
						height: '40px',
						width: '40px',
						display: 'inline-block',
					}}/>
					<div className={props.letter} 		
					style = {{
						height: '40px',
						width: '40px',
						display: 'inline-block',
					}}/>
				</div>
			</div>

		</React.Fragment>
		)
}

function mapStateToProps(state){
	return {
		...state.player,
	}
}

export default connect(mapStateToProps)(handleMovement(Player))