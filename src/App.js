import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import TodoComponent from './TodoComponent'
import todoData from './todoData'

class App extends Component {
    constructor(){
        super()
        this.state={
            todos: todoData
        }
        this.handleChange=this.handleChange.bind(this)        
    }
    handleChange(id){
        this.setState(prevState => {
            const newTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            
            return {
                todos: newTodos
            }
        })
        
    }
    
  render() {
      const todoList = this.state.todos.map(todo => {return <TodoComponent key={todo.id} item={todo} handleChange={this.handleChange}/>})
    return (
      <div className="App">
        {todoList}
      </div>
    );
  }
}

export default App;
