export default function criarLista(){
    let criarSpan = (numeroSpans = 10)=>{
        let lista = [];
        for(let i = 0; i < numeroSpans+1; i++){
            lista.push(<span key={i}> {i}</span>)
        }
        return lista
    }
    return(
        <div>
            <div>
                {criarSpan(20)}
            </div>
            <div>
                {criarSpan(3)}
            </div>
        </div>
    )
}