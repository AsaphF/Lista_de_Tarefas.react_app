import  React  from "react";
import Tarefa from "./Tarefa"

export default function TodoList ({tarefas}){ // Função Componente!!
    return (
        tarefas.map((tarefa) => {
            return <Tarefa key={tarefa.id} tarefa={tarefa}   />
        })
    )
     
}



