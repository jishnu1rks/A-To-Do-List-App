import React, { Component } from 'react';
import Todo from './Todo';
import uuid from 'uuid';
import '../App.css';
// import { Button } from 'react-bootstrap';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }

        this.addItem = this.addItem.bind(this);
        this.textInput = React.createRef();
        this.submitValue = React.createRef();
        this.hiddenId= React.createRef();
        this.clearUser= this.clearUser.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        let text = this.textInput.current.value;
        if(!text)
        {
            alert("Enter a To-Do Task ! ");
            return ;
        }
        let newTodo = {
            id: this.state.todos.length + 1 ,
            todo: text
        }    
        if(this.submitValue.current.value == "Add"){
            this.setState({todos: this.state.todos.concat(newTodo)});      
        }
        else if(this.submitValue.current.value == "Update"){
            let todos = this.state.todos;
            let index = todos.findIndex(x => x.id = this.hiddenId.current.value);
            todos.splice(index, 1);
            this.setState({todos: todos});
            let newTodo = {
                id: this.hiddenId.current.value,
                todo: this.textInput.current.value
            }   
            this.setState({todos: this.state.todos.concat(newTodo)});   
        }

        this.textInput.current.value = '';  
           
    }

    deleteThisOne(todo){      
       let todos = this.state.todos;
       let index = todos.findIndex(x => x.id = todo.id);
       todos.splice(index, 1);
       this.setState({todos: todos});
    }

    updateThisOne(todo) {

        this.submitValue.current.value = "Update";
        this.textInput.current.value = todo.todo;
        this.hiddenId.current.value = todo.id;
          
    }

    clearUser()
    {
        this.props.username = '';
        this.props.password = '';
    }

    render() {
 
        return (
        <div>
                <a href="/" className="logout_btn" onClick={this.clearUser}>Logout</a><br />
            <div className="todoListMain text-center">
                    
                    <div className="header">
                        <form onSubmit={this.addItem}>
                            <input ref={this.textInput} type="text" placeholder="Enter task" />
                            <input type="hidden" ref={this.hiddenId} />
                            <input type="submit" ref={this.submitValue} value="Add" />
                        </form>
                    </div>
                    <Todo items={this.state.todos} updateThisTodo={this.updateThisOne.bind(this)} deleteThisToDo={this.deleteThisOne.bind(this)}/>
                </div>
            
        </div>
        );
  }
}

export default Home;
