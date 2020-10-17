import { useState } from "react";
import React from 'react';
import shortid from 'shortid';

function App() {

  const [todos, setTodos] = useState("")
  const [lista, setLista] = useState([])
  const [id, setId] = useState('')

  const guardarDatos = (evento) => {
      evento.preventDefault()
      
      if(!todos.trim()){

          console.log("Campo esta vacio")
          return 
      }
      setLista([...lista,{id: shortid.generate(), nombreTodo: todos}])

      console.log(`procesando datos ... ${ id } ${ todos }`)
      evento.target.reset()
      setTodos("")
      
  }

  const eliminarDatos = (id) => {
      
    const arrayFiltrado = lista.filter(item => item.id !== id)
    setLista(arrayFiltrado)
  }



  return (
      <div>
          <h2 className="text-center mt-4">TODOS</h2>
          <form onSubmit={ guardarDatos }>
              <input 
                  type="text" 
                  placeholder="What needs to be done?" 
                  className=" col-4 form-control mb-2 mx-auto mt-4 font-italic" 
                  onChange={evento => setTodos(evento.target.value)}/>
              <button 
                  className=" col-4 btn btn-primary btn-block mx-auto" type="submit">Agregar
              </button>
                                            
          </form>
          
              <div className="mt-5">
               
              </div>
              <div>
              <h4 className="text-center">TODOS List</h4>
              <ul className="col-5 list-group mx-auto">
              {
                  lista.map((item, index) => (
                <li 
                      className="list-group-item" 
                      key={item.id}>{ item.nombreTodo } 
                  <button 
                      className="btn btn-danger btn-sm float-right mx-2"
                      onClick={() => eliminarDatos(item.id)}
                  >
                      Eliminar
                  </button>
                </li>
              ))
              }
              </ul>

              <li 
                      className=" col-4 list-group-item mx-auto font-italic mt-3">
                      { lista.length } Item Left
                </li>
              </div>
                   
      </div>
  )
}

export default App;
