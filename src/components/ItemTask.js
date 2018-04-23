import React, { Component } from 'react';

export default class ItemTask extends Component {
    constructor(props) {
        super(props);
        this.state= {
            isEditing: false
        }
    };

    isEditingSection() {
        if (this.state.isEditing) {
            return <div>
                <button className='btn btn-primary mr-3'>Save</button>
                <button className='btn btn-primary' onClick={this.editClick.bind(this)}>Cancel</button>
            </div>
        }
        return <div>
            <button className='btn btn-primary mr-3' onClick={this.editClick.bind(this)}>Edit</button>
            <button className='btn btn-primary'>Delete</button>
        </div>
    };

    itemSection() {
        const {id, title, completed} = this.props.todo;
        const taskStyle = {
          color: completed ? '#aaa' : 'inherit',
          textDecoration: completed ? 'line-through': 'none',
          cursor: 'pointer',
        };

        return (
            <div
                className='d-flex'
                onClick={this.props.toogleTask.bind(this, this.props.index)}
                >
                <div className="d-flex align-items-center">
                    <label className="containerCb">
                        <input
                            onChange={this.props.toogleTask.bind(this, this.props.index)}
                            type="checkbox"
                            checked={completed}/>
                        <span className="checkmarkCb"></span>
                    </label>
                </div>
                <h3 style={taskStyle}
                    className="d-flex align-items-center mb-0 mr-3">
                    Task {id} - {title}
                </h3>
                <h1>{this.props.todo.completed}</h1>
            </div> )

    };

    editClick() {
        let nextState = !this.state.isEditing;
        this.setState({isEditing: nextState})
    };

    handleDelete() {
        this.props.deleteTask(this.props.index);
        let nextState = !this.state.isEditing;
        this.setState({isEditing: nextState})
    };

    doneTask() {
        if (this.props.todo.completed) {
            return {opacity: 0.5}
        };
    }

    render() {
        return (
            <div>
                <div className="test"
                    style={this.doneTask()}>
                    <div className="item-list d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            {this.itemSection()}
                        </div>
                        <div className="d-flex align-items-center">
                            <div>
                                <i className="delete-icon material-icons"
                                    onClick={this.handleDelete.bind(this)}>
                                    clear
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

