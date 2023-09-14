import React from 'react';
import Theme from "../theme"

function Entry(props){
    return (
        <div className="timeline__event " style ={props.index%2===0 ?{flexDirection : "row"} :{flexDirection : 'row-reverse'}}>
		<div className="timeline__event__icon " style ={props.index%2 ===0 ?{color : Theme.primary, background: Theme.primaryLight} : {color : Theme.secondary, background: Theme.secondaryLight}}>
		</div>
		<div className="timeline__event__date "  style ={props.index%2 ===0 ?{color : Theme.primaryLight, background: Theme.primary,borderRadius : "6px 0 0 6px"} : {color : Theme.secondaryLight, background: Theme.secondary,borderRadius : "0 6px 6px 0"} }>
			{props.date}
		</div>
		<div className="timeline__event__content ">
			<div className="timeline__event__title"  style ={props.index%2 ===0 ?{color : Theme.primary} : {color : Theme.secondary}} >
				{props.title}
			</div>
			<div className="timeline__event__description">
				<p>{props.description}</p>
			</div>
		</div>
	</div>
    )
}

export default Entry;