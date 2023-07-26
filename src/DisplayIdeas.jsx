import React,{useState} from 'react'

export default function DisplayIdeas(props) {
    // store function in a variable
    let crazyIdeas = props.ideas.map((idea,index) => <li key={index}>{idea}</li>)
    
    return (
        <div>
            <ul>
                {crazyIdeas}
            </ul>

        </div>
    )
}