import React from 'react';
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";

export default function Jogo({ RandomWord, palavra, erro, word, valor }) {


    const srcSituation = () => {
        switch (erro) {
            case 0:
                return forca0
            case 1:
                return forca1
            case 2:
                return forca2
            case 3:
                return forca3
            case 4:
                return forca4
            case 5:
                return forca5
            case 6:
                return forca6
            default:
                return forca6

        }
    }

    const eFimDeJogo = (v) => {
        if (v  === "fim") {
            return "tituloForcaAcerto"
        } else if (erro +1> 6 || v === "erro") {
            return "tituloForcaErro"
        } else {
            return "tituloForca"
        }

    }

    
    return (
        <div className="boxForca">
            <img data-identifier='game-image'src={srcSituation()} alt="nada" />
            <div className="boxBtnEsc">
                <button data-identifier="choose-word" onClick={() => RandomWord()}>Escolher Palavra</button>
                <h1 data-identifier='word'className={eFimDeJogo(valor)}>{erro+1 > 6 || valor === "fim" || valor === "erro" ? word : palavra}</h1>
            </div>
        </div>
    )
}