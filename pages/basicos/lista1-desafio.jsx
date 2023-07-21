export default function criarLista(){
    let criarSpan = (numeroSpans)=>{
        let lista = [];
        for(let i = 0; i < numeroSpans+1; i++){
            lista.push(<span key={i}> {i}</span>)
        }
        return lista
    }
    return(
        <div>
            {criarSpan(10)}
        </div>
    )
}