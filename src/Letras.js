import Btn from "./Btn";

export default function Letras({habilita,id,clickLetter,arrayTeclas,array }){
    return(
        <div className="btnList">
                {array.map((item, i) => <Btn    teclas = {arrayTeclas} clickLetter = {clickLetter} index={i} id={id}txt={item} habilita = {habilita}  key={i} />)}
            </div>
    )
}