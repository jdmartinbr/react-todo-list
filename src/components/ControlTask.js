import React, { Component } from 'react';

export default class ControlTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    handleDeleteComplete(e){
        e.preventDefault();
        this.props.deleteCompleted();
    };

    handleShowUncompleted(){
        this.props.showUncompleted();
    };

    tasksStatus(){
        const tasksCompleted = this.props.todos.filter(todo => todo.completed);
        const style = {
            color: '#878787'
        };
        return (
            <h2 style={style}>Tasks {tasksCompleted.length}/{this.props.todos.length}</h2>
        )

    }

    render() {
        return (
                <section>
                    <div className="container d-flex justify-content-between">
                        <div>
                            {this.tasksStatus()}
                        </div>
                        <div className="d-flex justify-content-end">
                            <form className='d-flex mr-3' onSubmit={this.handleDeleteComplete.bind(this)}>
                                <button
                                    id="addTask"
                                    className="btn btn-outline-secondary"
                                    type="submit">
                                    Delete completed
                                </button>
                            </form>
                            <button
                                id="addTask"
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.handleShowUncompleted.bind(this)}>
                                {this.props.show ?'Show All':'Show Uncompleted'}
                            </button>
                        </div>
                    </div>
                </section>
        );
    }
}

