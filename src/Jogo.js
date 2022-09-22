import React from 'react';
import forca0 from "./assets/forca0.png"

export default function Jogo({RandomWord,palavra}){

    
    return(
        <div className="boxForca">
                <img src={forca0} alt="nada" />
                <div className="boxBtnEsc">
                    <button  onClick={() =>RandomWord()}>Escolher Palavra</button>
                    <h1 className="tituloForca">{palavra}</h1>
                </div>
            </div>
    )
}