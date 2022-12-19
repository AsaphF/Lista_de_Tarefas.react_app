import React from 'react';


function Tarefa ({tarefa}) {  
    return(
            <div>
                <label>              
                <input type="checkbox" checked={tarefa.completado}></input>
                {tarefa.nome} 
                </label>
            </div>
        ) 
}


export default Tarefa;