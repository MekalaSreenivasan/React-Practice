import { useState } from "react";

export default function Player({initialName, symbol, isActive, onNameChange}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {
        //setIsEditing(isEditing ? false:true);
        //setIsEditing(!isEditing);
        //Always pass a function tpo the state updating function instead of value
        //Here when we use the function the function will automatically 
        // gets the current state value as an input
        setIsEditing((editing) => !editing);
        if(isEditing) {
            onNameChange(symbol, playerName);
        }

        //Example of state update difference while using a function in set state
        /**
         * setIsEditing(!isEditing); //gets false
         * setIsEditing(!isEditing); //gets false
         * While we call the set state function twice here both isEditing will get same state value
         * 
         * setIsEditing((editing) => !editing); //gets false
         * setIsEditing((editing) => !editing); //gets true
         * But in this case the latest/updated state value is got and updated accordingly.
         */
    }

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    let playerNameElement = <span className="player-name">{playerName}</span>;
    //let btnText = "Edit";
    if(isEditing) {
        playerNameElement = <input type="text" required value={playerName} onChange={handleChange} />;
        //btnText = "Save";
    }

    return (
        <li className={isActive ? 'active': undefined}>
            <span className="player">
                {/**isEditing && <input type="text" />*/}
                {/**!isEditing && <span class="player-name">{name}</span>*/}
                {playerNameElement}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>        
    );
}