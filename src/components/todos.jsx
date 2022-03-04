import React, { Component } from 'react';

import Todo from './singleTodo';
import AddTodo from './addTodo';

class Todos extends Component {
    state = {
        todos: [],
    }

    async componentDidMount() {
        fetch('https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list')
            .then(res => res.json())
            .then(json => this.setState({ todos: json }));
    }
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    handleDelete = todo => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo
        });
        this.setState({ todos });
    }

    handleDone = todo => {
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({ todos });
    }

    render() {
        return (
            <table className="table">
                <tbody>
                    {this.state.todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.status}</td>
                            <td>{todo.created_at}</td>
                            <Todo todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="4" className="text-center">
                            <AddTodo />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Todos;