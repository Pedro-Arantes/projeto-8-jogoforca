import React from 'react';
import Jogo from "./Jogo";
import Chute from "./Chute";
import Letras from "./Letras";
import palavras from './palavras';

export default function App() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const [valor, setValor] = React.useState("inicio");
    const [palavra, setPalavra] = React.useState("");
    const [palavraOculta, setOculto] = React.useState([]);
    const [habilita, setHabilita] = React.useState(true);
    const [status, setStatus] = React.useState("");

    const [teclas, setTecla] = React.useState([]);
    const [count, setReset] = React.useState(0);
    const [erro, setErro] = React.useState(0);
    const [chute, setChute] = React.useState("");
    



    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const RandomWord = () => {
        //const eInicio = valor === "inicio" ? true : false;
        const NumPalavras = palavras.length;
        setChute("")
        if (count % 2 === 0) {
            setValor("jogando");
            const num = getRandomInt(NumPalavras);
            const newWord = palavras[num];
            setPalavra(newWord);
            setHabilita(false);
            const newArray = Array.from(newWord)
            const arrayOculto = transfUnderl(newArray)
            const oculto = arrayOculto.map((item) => item + " ");
            //const regular = /,/gi;
            //oculto = oculto.replace(regular,"")
            console.log(newArray)
            console.log(oculto)
            setOculto(oculto)
            const x = count + 1
            setReset(x)
            setStatus("")
            setErro(0);
            //const interval = setInterval(fimDeJogo, 2000)
            //if (erro >= 6 || status === "fim") {
                //clearInterval(interval)
           // }

        } else {
            setValor("jogando");
            const num = getRandomInt(NumPalavras);
            const newWord = palavras[num];
            setPalavra(newWord);
            setHabilita(false);

            const newArray = Array.from(newWord)
            const arrayOculto = transfUnderl(newArray)
            const oculto = arrayOculto.map((item) => item + " ");
            setOculto(oculto)
            setTecla([]);
            setErro(0);
            
            setStatus("")



        }


        //setId("")
        //console.log(palavra);
        //console.log(newWord);


    }

    const transfUnderl = (array) => {
        const arr = [];
        for (let index = 0; index < array.length; index++) {
            arr.push("_");


        }
        return arr;
    }



    const clickLetter = (i) => {

        if (valor === "jogando" && status !== "fim" && status !== "erro") {

            const status = habilita === false ? true : false;
            const letter = alfabeto[i]
            const arr = [...teclas, i]
            console.log(letter)
            testLetter(letter);

            const string = palavraOculta.toString()
            const condicao = string.includes("_")
            console.log(erro)
            const teste = erro+1 >= 6 ? palavra : ""

            if (condicao === false || teste === palavra) {
                console.log("string vazia")
                if ( count === 0) {
                    
                    //console.log(count)
                } else if (erro+1 === 6) {
                    //console.log("aqui")
                    setStatus("erro")
                    setHabilita(true);
                } else {
                    //console.log("estou")
                    //setTecla([]);
                    //setErro(0);
                    setStatus("fim")
                    setHabilita(true);
                }

            }

            if (teclas.includes(i)) {


            } else {
                setTecla(arr);
            }
        } else {
            alert("clique em escolher palavra para iniciar novo jogo");
        }




        //console.log(x.target);


    }

    const testLetter = (letter) => {

        const newArray = Array.from(palavra.normalize("NFD").replace(/[^a-zA-Z\s]/g, ""))
        console.log(newArray)
        const index = findLetter(newArray, letter)
        if (index.length === 0) {
            //let error = erro;
            
            const erros= erro +1
            setErro(erros)
            console.log(erros);
        } else {
            const oculto = palavraOculta
            for (let i = 0; i < index.length; i++) {
                const element = index[i];
                oculto.splice(element, 1, palavra[element])

            }
            setOculto(oculto)
        }

    }

    const findLetter = (array, letter) => {

        const indexArray = []
        for (let index = 0; index < array.length; index++) {

            const element = array[index];

            if (element === letter) {
                indexArray.push(index)
            }

        }
        return indexArray;
    }

    const setarChute = (event) => setChute(event.target.value)

    const verificaChute = () => {
        console.log(palavra)
        console.log(chute)

        if (palavra.normalize("NFD").replace(/[^a-zA-Z\s]/g, "") === chute.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")) {
            setStatus("fim")
            setHabilita(true)
        }else{
            setStatus("erro")
            setHabilita(true)
        }
    }
    





    return (

        <main>
            <Jogo valor={status} erro={erro} RandomWord={RandomWord} word={palavra} palavra={palavraOculta} />
            <Letras arrayTeclas={teclas} clickLetter={clickLetter} habilita={habilita} array={alfabeto.map((item) => item.toUpperCase())} />
            <Chute  inputValue= {chute} verChute={verificaChute} chute = {setarChute} habilita={habilita} />
        </main>
    )
}