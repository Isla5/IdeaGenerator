import React, {Component} from 'react';
import '../css/frontpage.css';


export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tdl: [],
            usrInp: '',
        }
    }
    inpChange = (e, num) => {
        const tdl = this.state.tdl;
        tdl[num] = e.target.value
        if (this.state.usrInp.length === 0) {
            const tdl = this.state.tdl.concat(ToDoList);
            this.setState({usrInp: e.target.value, tdl});
        } else if (tdl[num] === '') {
            const tdl = this.state.tdl.splice(ToDoList);
            this.setState({usrInp: e.target.value});
        } else {
            this.setState({usrInp: e.target.value});
        }
    }

    render() {
        const tdl = this.state.tdl.map((Tdl) => {
            return <Tdl/>
        });
        return <div className='background1'>
            <input type="text" onChange={this.inpChange}/>
            <State/>
          {/*  <A/> */}
            <p>
                {tdl}
                {/* {this.state.usrInp.length} */}
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


{/*} class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            buttonText: ""
        };
    }

    handleChange = (e) => {
    this.setState({value: e.target.value,   buttonText: !this.state.buttonText})
  }

    render() {
    let buttonText = "It's OK...keep writing";
      if (this.state.value.length > 28) {
          buttonText = "Maybe create a new line?"
      }
        return (
          <div>
            <input type = 'text' value = {this.state.value} onChange = {this.handleChange}/>
            {buttonText}
          </div>
        );
    }
}
*/}
