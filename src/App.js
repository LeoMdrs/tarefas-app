import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// importando componente / class criado para ser usado
import Navegacao from './components/Navegacao';
import TodoForm from './components/TodoForm';

// importando dados / ex para simular dados recebidos de servidor
import { todos } from './todos.json';

class App extends Component {

  // metodo que execulta quando a classe é chamda
  constructor(){
    super(); //Adquire funçoes da class

    // só "todos" é o msm que "todos: todos"
    this.state = {
      todos
    }

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  //Funcao cria nova tarefa/todo
  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  render() {

    // tratando dados recebidos
    //Metodo map de arrays do javascript
    const todos = this.state.todos.map((todo, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        
        {/* chamando componente / class e passando propriedade titulo */}
        {/* <Navegacao titulo="TarefasApp" /> */}
        
        <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
              Tarefas
              <span className="badge badge-pill badge-light ml-2">
                { this.state.todos.length }
              </span>
          </a>       
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>
            <div className="col-md-8">
              <div className="row">
                {/* chamando o metodo que renderiza as tarefas / todos */}
                { todos }
              </div>
            </div>
          </div>
        </div>
        

      </div>
    );
  }
}

export default App;
