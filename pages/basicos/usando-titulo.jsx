import Titulo from "@/components/Titulo";

export default function usandoTitulo(){
    return (
        <div>
            <h1>Usando Título</h1>
            <Titulo principal="Página de Cadastros" secundario="Incluir, alterar e excluir coisas!" pequeno={true}/>
            <Titulo principal="Página de Login" secundario="Informe o seu email e senha!" pequeno/>
            <Titulo principal="Página de Cadastros" secundario="Incluir, alterar e excluir coisas!" pequeno={false}/>
            <Titulo principal="Página de Login" secundario="Informe o seu email e senha!"/>
        </div>
    )
}