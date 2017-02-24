import React, {Component} from 'react';

export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tdl: [],
            usrInp: ''
        }
    }

    inpChange = (e) => {
        const tdl = this.state.tdl.concat(ToDoList);
        if (this.state.usrInp.length === 0) {
            this.setState({usrInp: e.target.value, tdl});
        }
    }
    render() {
        const tdl = this.state.tdl.map((Tdl, index) => {
            return <Tdl index={index} key={index}/>
        });
        return <div>
            <input type="text" onChange={this.inpChange}/>
            <State/>
            <AddFiles/>
            <p>
                {tdl}
                {/*  {this.state.usrInp.length} */}
            </p>
        </div>
    }
}

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <select value={this.state.value} onChange={this.handleChange}>
                <option>Will do</option>
                <option>Done</option>
            </select>
        );
    }
}

class AddFiles extends Component {
    render() {
        return <div></div>
    }
}
