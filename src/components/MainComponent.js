import React, { Component } from 'react';

import NewTask from "./NewTask";
import ListTasks from "./ListTasks";
import ControlTask from "./ControlTask";

export default class MainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showUncompleted: false,
            lastId: 1,
            todos: [
            ],
        };
    };

    createTask(task) {
        let newTodos = this.state.todos;
        newTodos.push({
            id: this.state.lastId,
            title: task,
            completed: false
        });
        let newId = this.state.lastId + 1;
        this.setState({todos: newTodos});
        this.setState({lastId: newId})
    };

    toogleTask(id) {
        let newTodos = this.state.todos;
        newTodos[id].completed = !newTodos[id].completed;
        this.setState({todos: newTodos});
    };

    deleteTask(id) {
        let newTodos = this.state.todos;
        newTodos.splice(id, 1);
        this.setState({todos: newTodos});
    };

    deleteCompleted() {
        let newTodos = this.state.todos.filter(todo=>!todo.completed);
        this.setState({todos: newTodos});
    };

    showUncompleted() {
        this.setState({showUncompleted: !this.state.showUncompleted});
    };

    getTodos(){
        if(this.state.showUncompleted) {
            let newTodos = this.state.todos.filter(todo=>!todo.completed);
            return newTodos;
        }
        return this.state.todos;
    }

    render() {
        return (
            <div>
                <NewTask
                    createTask = {this.createTask.bind(this)}
                />
                <ControlTask
                    show = {this.state.showUncompleted}
                    todos = {this.state.todos}
                    deleteCompleted = {this.deleteCompleted.bind(this)}
                    showUncompleted = {this.showUncompleted.bind(this)}
                />
                <ListTasks
                    todos={this.getTodos()}
                    toogleTask={this.toogleTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }
}

