import React from 'react';

export default function Chute({habilita}){
    
    
    
    
    return(
        <div className="boxChute">
                <label >Já sei a palavra!</label>
                <input disabled= {habilita} type="text"></input>
                <button disabled= {habilita}  >Chutar</button>
            </div>
    )
}