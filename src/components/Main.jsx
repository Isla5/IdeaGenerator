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
                    work:['coding', 'coffffeeeeeee', 'whatever']
                }, {
                    name: 'Private',
                    work: ['buy coffee', 'make coffee', 'drink coffee', 'shoooooppppping']
                }
            ],
            selectedIndex: 0,
            checked: true
        };
    }

    onClickk = () => {
        console.log(this.state.checked)
    }

    onClick = () => {
        console.log(this.state.checked);
        this.setState({
            checked: !this.state.checked
        });
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
                <Todo todos={this.state.todos} onTodoRowClick={this.onRowSelect} onRowAdd={this.onRowAdd} onClickk={this.onClickk}/>
                <WorkList works={this.state.todos[this.state.selectedIndex].work} onClick={this.onClick} onClickk={this.onClickk}
                  onWorkAdd={this.onWorkAdd}/>
            </div>
        );
    }
};
