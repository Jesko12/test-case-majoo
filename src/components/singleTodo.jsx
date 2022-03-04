import React, { Component } from 'react';

class SingleTodo extends Component {

    render() {
        return (
            <React.Fragment >
                <td style={{ width: 100 }} className="text-center">
                    <button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
            </React.Fragment>
        );
    }
}

export default SingleTodo;