import React, { Component } from 'react';
import ItemTask from './ItemTask';
import EmptyTask from './EmptyTask';

export default class ListTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }
    render() {
        const list = this.props.todos;
        const listItems = list.map((todo, index) =>
            <ItemTask
                key={index}
                index={index}
                todo={todo}
                toogleTask={this.props.toogleTask}
                deleteTask={this.props.deleteTask}
            />
        );
        if (list.length>0) {
            return (
                <section>
                    <div className="main-wrapper">
                        <div className="container">
                            <div className="title-content">
                                <div id="list-task">
                                    <div>{listItems}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
        return (
            <section>
                <div className="main-wrapper">
                    <div className="container">
                        <div className="title-content">
                            <div id="list-task">
                                <EmptyTask></EmptyTask>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

