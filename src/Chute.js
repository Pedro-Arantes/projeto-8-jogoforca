import React from 'react';

export default function Chute({habilita,chute,verChute,inputValue}){
    
    
    
    
    return(
        <div className="boxChute">
                <label >Já sei a palavra!</label>
                <input onChange={chute} value = {inputValue} disabled= {habilita} type="text"></input>
                <button onClick={verChute} disabled= {habilita}  >Chutar</button>
            </div>
    )
}