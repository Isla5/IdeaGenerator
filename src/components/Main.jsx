import React, {Component} from 'react';
//import Todo from './ToDo.jsx';
import WorkList from './WorkList.jsx';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            line: [
                {
                    name: 'Work',
                    work: ['sth to do1']
                }, {
                    name: 'Private',
                    work: ['sth to do2', 'sth else']
                }
            ],
            active: false
        };
    }
    onItemClick(item) {}
    render() {
        return (
            <div >
                {/* <Todo line={this.state.line}/> */}
                <WorkList line={this.state.line}/>
            </div>
        );
    }
};
