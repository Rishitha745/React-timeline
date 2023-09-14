import React from 'react';
import Theme from "../theme";
import Screensize from './Screensize';

function OddEvent(props){
    const screenSize= Screensize();
	const CustomStyle={color : Theme.secondary, 
		background: Theme.secondaryLight 
	};
    return (
        <div className="timeline__event  " style ={screenSize.width > 786 ?{flexDirection : 'row-reverse'} : {flexDirection : 'column'}}>
		<div className="timeline__event__icon_odd " style={CustomStyle}>
		</div>
		<div className="timeline__event__date "  style ={screenSize.width > 786 ?{color : Theme.secondaryLight, background: Theme.secondary,borderRadius : "0 6px 6px 0"}:{color : Theme.secondaryLight, background: Theme.secondary,borderRadius : "0"} }>
			{props.date}
		</div>
		<div className="timeline__event__content ">
			<div className="timeline__event__title"  style ={{color : Theme.secondary}} >
				{props.title}
			</div>
			<div className="timeline__event__description">
				<p>{props.description}</p>
			</div>
		</div>
	</div>
    )
}

export default OddEvent;