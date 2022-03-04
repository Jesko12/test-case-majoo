import React, { Component } from 'react';
import { ButtonSubmit, FlexDisplay, FormInput, TableWrapper } from '../common/CommonElements';


class AddTodo extends Component {
    state = {
        data: {
            title: "",
            description: "",
            status: "",
            createdAt: ""
        },
    }

    handleChange = e => {
        const { value } = e.target;
        this.setState({data: value});
    }

    handleSubmit = event => {   
        event.preventDefault();
        const newTodo = event.target.value;
        const { todos } = [...this.state.todos, newTodo]
        this.setState({ todos });
      };
    render() {
        const { data } = this.state;
        return (
            <TableWrapper>
                <FlexDisplay>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={data}
                            onChange={this.handleChange}
                        />
                    </form>
                </FlexDisplay>
                <FlexDisplay>
                    <ButtonSubmit onClick={this.handleSubmit}>Add New ToDo</ButtonSubmit>
                </FlexDisplay>
            </TableWrapper>
        );
    }
}

export default AddTodo;