import React, { Component } from 'react';

export default class EmptyTask extends Component {
    render() {
        return (
            <div>
                <div className="test">
                    <div className="item-list d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                            <h3>No tasks</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

