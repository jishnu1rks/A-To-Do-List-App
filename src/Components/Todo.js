import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {

   

    handleTodoDelete(todoKey){
        this.props.deleteThisToDo(todoKey);
    }

    handleUpdateTodo(todo){
        this.props.updateThisTodo(todo);
    }

    render() {
        var todosList ;
        if(this.props.items)
        {
            todosList = this.props.items.map(todo => {
               return (
                  
                   <TodoItem key={todo.id} todo={todo} updateTodo={this.handleUpdateTodo.bind(this)} deleteTodo={this.handleTodoDelete.bind(this)}/>
               );
            });
        }
        
        return (
        <div className="Todolist">
            {todosList}
        </div>
        );
    }
}

export default Todo;
