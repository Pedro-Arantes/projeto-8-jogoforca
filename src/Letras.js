import Btn from "./Btn";

export default function Letras({habilita,id,testLetter,arrayTeclas,array }){
    return(
        <div className="btnList">
                {array.map((item, i) => <Btn  teclas = {arrayTeclas} testLetter = {testLetter} index={i} id={id}txt={item} habilita = {habilita}  key={i} />)}
            </div>
    )
}