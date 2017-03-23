import React, {Component} from 'react';
import Todo from './ToDo.jsx';
import WorkList from './WorkList.jsx';
import FilteredList from './SearchBar.jsx'

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    name: 'Work',
                    work: ['coding']
                }, {
                    name: 'Private',
                    work: ['coffeeeee']
                }, {
                    name: 'Pets',
                    work: ['dog']
                }
            ],
            todos2: [
                {
                    name: 'Work',
                    work: ['coding']
                }, {
                    name: 'Private',
                    work: ['coffeeeee']
                }, {
                    name: 'Pets',
                    work: ['dog']
                }
            ],
            selectedIndex: 0,
            search: '',
            filtered: []
        };
    }

    filterList = ({target}) => {
        var updatedList = this.state.todos;
        updatedList = updatedList.filter((item) => {
            return item.name.toLowerCase().search(target.value.toLowerCase()) !== -1;
        });
        if (updatedList.length === 0) {
          this.setState({todos: this.state.todos2, filtered: updatedList})
        } else {
            this.setState({filtered: updatedList, todos: updatedList}) }
        console.log(updatedList.length, this.state.todos, target.value.length)
    }

    componentWillMount = () => {
        this.setState({filtered: this.state.todos})
    }

    onRowSelect = (selectedIndex) => {
        this.setState({selectedIndex});
    };

    onRowAdd = (newRow) => {
        const {todos} = this.state;
        todos.push(newRow);
        this.setState({todos});
    };

    onWorkAdd = (newWork) => {
        const {todos} = this.state;
        todos[this.state.selectedIndex].work.push(newWork);
        this.setState({todos});
    };

    render() {
        return (
            <div>
                <FilteredList todos2={this.state.todos2} todos={this.state.todos} filtered={this.state.filtered} filterList={this.filterList}/>
                <Todo todos={this.state.todos} onTodoRowClick={this.onRowSelect} onRowAdd={this.onRowAdd}/>
                <WorkList works={this.state.todos[this.state.selectedIndex].work} onWorkAdd={this.onWorkAdd}/>
            </div>
        );
    }
};
