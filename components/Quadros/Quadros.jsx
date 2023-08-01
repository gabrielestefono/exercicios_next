import estilo from "./Quadros.module.css";

export default function Quadros(props) {
    console.log('Tá renderizando o quadro')
    let classname = props.numero % 2 === 0 ? estilo.quadroPar : estilo.quadroImpar;
    return (
        <div className={classname}>
        </div>
    )
}   