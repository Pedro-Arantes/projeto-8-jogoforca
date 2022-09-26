

export default function Btn({txt,clickLetter,index,teclas,habilita,status}){
    //console.log(teclas[index])
    //console.log(index)
    const  indexa = teclas[index]
    return(
        
        <button  disabled = {status === "fim " || status === "erro" ? true: false} onClick={()=>clickLetter(index)} id={ teclas.includes(index) || habilita || status === "fim " || status === "erro" ? "btnGrey" : ""} data-identifier ='letter'>{txt}</button>
    )
}