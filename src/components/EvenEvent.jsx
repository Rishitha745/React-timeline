import React from 'react';
import Theme from "../theme";
import Screensize from './Screensize';

function EvenEvent(props){
    const screenSize= Screensize();
    return (
        <div className="timeline__event " style ={screenSize.width > 786 ?{flexDirection : "row"}:{flexDirection : 'column'}}>
		<div className="timeline__event__icon_even " style ={{color : Theme.primary, background: Theme.primaryLight} }>
		</div>
		<div className="timeline__event__date "  style ={screenSize.width > 786 ?{color : Theme.primaryLight, background: Theme.primary,borderRadius : "6px 0 0 6px"}:{color : Theme.primaryLight, background: Theme.primary,borderRadius : "0"} }>
			{props.date}
		</div>
		<div className="timeline__event__content ">
			<div className="timeline__event__title"  style ={{color : Theme.primary}} >
				{props.title}
			</div>
			<div className="timeline__event__description">
				<p>{props.description}</p>
			</div>
		</div>
	</div>
    )
}

export default EvenEvent;