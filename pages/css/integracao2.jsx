import estilo from "./integracao2.module.css";

export default function integracao2(){
    return(
        <div id={estilo.integracao2}>
            <div className={estilo.vermelha}>Texto #01</div>
            <div className={estilo.azul}>Texto #02</div>
            <div className={estilo.branco}>Texto #03</div>
        </div>
    )
}