import estilo from "./index.module.css";
import Quadros from "@/components/Quadros/Quadros";

export default function Tabuleiro() {
    function renderizarQuadros(numerorecebido){
        return <Quadros key={numerorecebido} numero={numerorecebido}/>
    }
    function rodarLoop(numero, inicio){
        let quadros = []
        for (let i = inicio; i <= numero; i++) {
            quadros.push(renderizarQuadros(i))
        }
        return quadros
    }

    return (
        <div className={estilo.paiDeTodos}>
            <div className={estilo.parent}>
                {rodarLoop(8, 1)}
                {rodarLoop(9, 2)}
                {rodarLoop(8, 1)}
                {rodarLoop(9, 2)}
                {rodarLoop(8, 1)}
                {rodarLoop(9, 2)}
                {rodarLoop(8, 1)}
                {rodarLoop(9, 2)}
            </div>
        </div>
    )
}