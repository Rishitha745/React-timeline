import React from 'react';
import Heading from './Heading';
import Theme from "../theme"
import TimelineEntries from '../timelineEntries';
import OddEvent from './OddEvent';
import EvenEvent from './EvenEvent';

function App(){
    function displayEntry(entry,index){
        if(index%2==0){
            return (
                <EvenEvent key={entry.id} index={index} title={entry.title} date={entry.date} description={entry.description}/>
            )
        }
        else{
            return (
                <OddEvent key={entry.id} index={index} title={entry.title} date={entry.date} description={entry.description}/>
            )
        }
                
    }
    return (
        <div>
        <Heading textcolor={Theme.textColor}/>
        <div className='timeline'>
        {TimelineEntries.map((entry, index) => displayEntry(entry, index))}
        </div>
        </div>
    )
}

export default App;

