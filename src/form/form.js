import React, { Component } from 'react';
import Header from '../header/header';
import TodoForm from './todo_form/todo_form';
import TodoList from './todo_list/todo_list';
import axios from 'axios';

window.id = 0;

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

    this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }

  componentDidMount(){
    axios.get(this.apiUrl)
      .then((res) => {
        this.setState({ data:res.data });
      })
  }

  addTodo(val){
    const todo = {text: val}

    axios.post(this.apiUrl, todo)
      .then((res) => {
        this.state.data(res.data);
        this.setState({data: this.state.data})
    });
  }

  handleRemove(id) {
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) {
        return todo;
      }
      return null;
    });

    this.setState({data: remainder});

    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({ data: remainder })
      });
  }

  render () {
    return (
      <div>
        <Header />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}

export default Form;