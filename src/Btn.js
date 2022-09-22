

export default function Btn({txt,id,testLetter,index,teclas,habilita}){
    //console.log(teclas[index])
    //console.log(index)
    const  indexa = teclas[index]
    return(
        
        <button onClick={()=>testLetter(index)} id={ teclas.includes(index) || habilita ? "btnGrey" : ""}>{txt}</button>
    )
}