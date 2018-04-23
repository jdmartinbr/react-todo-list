import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    handleCreate(e) {
        e.preventDefault();
        this.props.createTask(this.refs.createTask.value);
        this.refs.createTask.value = "";
    }

    render() {
        return (
            <section>
                <div className="input-wrapper">
                    <div className="container">
                        <div className="form-group d-flex">
                            <div className="input-content w-100">
                                <div className="input-group mb-2">
                                    <form className='d-flex w-100'
                                          onSubmit={this.handleCreate.bind(this)}>
                                        <div className="input-group">
                                        <input id="input-task"
                                               type="text"
                                               ref="createTask"
                                               className="form-control"
                                               />
                                          <span className="input-group-btn">
                                        <button
                                            id="addTask"
                                            className="btn btn-outline-secondary"
                                            type="submit">
                                            Add Task
                                        </button>
                                          </span>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

