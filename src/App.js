import React, {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'tarefaApp.tarefas'

function App() {
  const [tarefas, setTarefas] = useState([])
  
  let refNomeTarefa = useRef()
  
  useEffect(()=>{ // Loading de tarefas
    const tarefasSalvas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(tarefasSalvas) setTarefas(tarefasSalvas)
  }, [])

  useEffect(()=>{ // Salvamento de tarefas
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tarefas))
  },[tarefas])
 
  function addTarefa(){
    const nome = refNomeTarefa.current.value 
    if(nome === '') return
    setTarefas(prevTarefa => {
      return [...prevTarefa, {id: Math.random(), nome: nome, complete: false }]
    })
    refNomeTarefa.current.value = null

  }

  return (
    <>
    <h1>Lista de Tarefas</h1>
    <input ref={refNomeTarefa} type="text"></input>
    <button onClick={addTarefa}>Adicionar Tarefa</button>
    <button>Limpar tarefas</button>
    <div>{tarefas.filter(tarefa => !tarefa.complete).length} tarefas pendentes</div>
    <div>
     <TodoList tarefas = {tarefas}/>
    </div>
    </>
  );
}

export default App;
