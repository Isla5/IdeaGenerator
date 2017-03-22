import React, {Component} from 'react';
import Todo from './ToDo.jsx';
import WorkList from './WorkList.jsx';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    name: 'Work',
                    work: ['do coding']
                }, {
                    name: 'Private',
                    work: ['do coding again', 'whatever, coding']
                }
            ],
            selectedIndex: 0
        };
    }

    onRowSelect = (selectedIndex) => {
        this.setState({selectedIndex});
    };

    onRowAdd = (newRow) => {
        const {todos} = this.state;
        todos.push(newRow);
        this.setState({todos});
    }

    onWorkAdd = (newWork) => {
        const {todos} = this.state;
        todos[this.state.selectedIndex].work.push(newWork);
        this.setState({todos});
    };

    render() {
        return (
            <div>
                <Todo todos={this.state.todos} onTodoRowClick={this.onRowSelect} onRowAdd={this.onRowAdd}/>
                <WorkList works={this.state.todos[this.state.selectedIndex].work} onWorkAdd={this.onWorkAdd}/>
            </div>
        );
    }
};
