import React, {Component} from 'react';

export default class Todo extends Component {
    addItem = (e) => {
        var ArrayofLines = this.props.line;
        ArrayofLines.push({name: this.todoInpText.value});
        this.setState({line: ArrayofLines});
        this.todoInpText.value = "";
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this.todoInpText = a}/>
                        <button type="submit">
                            +
                        </button>
                    </form >
                    <Todoline entries={this.props.line}/>
                </div>
            </div>
        )
    }
};

class Todoline extends Component {
  render() {
      var todoEntries = this.props.entries;
      return (
          <ul className="theList">
              {todoEntries.map((item, i) => {
                  return <li key={i}>
                      ....................................................
                      <li>Title: {item.name}</li>
                      <li>Key: {item.key}</li>
                      <li>Worklist:{item.work}</li>
                  </li>
              })}
          </ul>
      )
  }
};
