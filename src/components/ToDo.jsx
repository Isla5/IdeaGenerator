import React, {Component} from 'react';

export default class Todo extends Component {
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
    onItemClick = (item) => {
        alert('df')
    }
    render() {
        var todoEntries = this.props.entries;
        return (
            <ul className="theList">
                {todoEntries.map((item, i) => {
                    return <ul key={i}>
                        ....................................................
                        <li onClick={this.props.onItemClick}>Title: {item.name}</li>
                        <li>Worklist:{item.work}</li>
                    </ul>
                })}
            </ul>
        )
    }
};
