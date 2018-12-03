
import React, { Component } from 'react';
import './../App.css';

class TodoItem extends Component {

    onDelete(todoKey)
    {
        this.props.deleteTodo(todoKey);
    }

    onUpdate(todo){
        this.props.updateTodo(todo);
    }

  render() {
    
    return (
      <div className="Todolist">
             <li >
                <span>{this.props.todo.todo}</span>
                <button className="btn btn-danger" onClick={this.onUpdate.bind(this, this.props.todo)}><i className="fas fa-pencil-alt"></i></button>
                   <button className="btn btn-warning" onClick={this.onDelete.bind(this, this.props.todo)}><i className="far fa-trash-alt"></i></button>
                  
            </li>   
      </div>
    );
  }
}

export default TodoItem;
