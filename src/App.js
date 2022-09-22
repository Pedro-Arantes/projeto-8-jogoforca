import React from 'react';
import Jogo from "./Jogo";
import Chute from "./Chute";
import Letras from "./Letras";
import palavras from './palavras';

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const [valor, setValor] = React.useState("inicio");
    const [palavra, setPalavra] = React.useState("");
    const [habilita, setHabilita] = React.useState(true);
    const [id, setId] = React.useState("btnGrey");
    const [teclas, setTecla] = React.useState([]);
    const [count, setReset] = React.useState(0);


    

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const RandomWord = ()=>{
        const eInicio = valor === "inicio" ? true : false;
        const NumPalavras = palavras.length;

        if (count%2 === 0) {
            setValor("jogando");
            const num = getRandomInt(NumPalavras);
            const newWord = palavras[num];
            setPalavra(newWord);
            setHabilita(false);
            const x = count+1
            setReset(x)
        }else{
            setValor("jogando");
            const num = getRandomInt(NumPalavras);
            const newWord = palavras[num];
            setPalavra(newWord);
            setHabilita(false);
            setTecla([]);

        }
            

            //setId("")
            //console.log(palavra);
            //console.log(newWord);
           
        
    }

    const testLetter= (i)=>{
        
        if (valor === "jogando") {
            
            const status = habilita === false ? true : false;
            const letter = alfabeto[i]
            const arr = [...teclas,i]
        
        if (teclas.includes(i)) {
            
            
        }else{
            setTecla(arr);
        }
        }
        
        
        
        
        //console.log(x.target);
        
        
    }

    

    
    
    return (

        <main>
            <Jogo RandomWord = {RandomWord} palavra = {palavra}/>
            <Letras   arrayTeclas = {teclas} testLetter={testLetter} id= {id}habilita= {habilita} array ={alfabeto}/>
            <Chute habilita= {habilita}/>
        </main>
    )
}