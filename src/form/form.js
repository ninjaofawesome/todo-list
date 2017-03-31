import React, { Component } from 'react';
import Header from '../header/header';
import TodoFormInput from './todo_form_input/todo_form_input';
import TodoList from './todo_list/todo_list';
import axios from 'axios';

class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }

    this.apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
  }

  componentDidMount(){
    axios.get(this.apiUrl)
      .then((res) => {
        this.setState({data:res.data});
      });
  }

  addTodo(val){
    const todo = {text: val}
    axios.post(this.apiUrl, todo)
       .then((res) => {
          this.state.data.push(res.data);
          this.setState({data: this.state.data});
       });
  }

  handleRemove(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) {
        return todo;
      }
      return null;
    });


    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: remainder});
      })
  }

  render(){
    return (
      <section className="form">
        <Header
          todoCount={this.state.data.length}
        />
        <TodoFormInput
          className="form__input"
          addTodo={this.addTodo.bind(this)}
        />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </section>
    );
  }


}

export default Form;