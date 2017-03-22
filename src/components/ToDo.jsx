import React, {Component} from 'react';

export default class Todo extends Component {
    addWork = (e) => {
        e.preventDefault();
        this.props.onRowAdd({name: this.inputRef.value, work: []});
        this.inputRef.value = "";
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.addWork}>
                        <input ref= {(a) => this.inputRef = a}/>
                        <input type="submit" value='+'></input>
                    </form>

                    <ul className="theList">
                        {this.props.todos.map((item, i) => {
                            return (
                                <li key={i} onClick= {() => this.props.onTodoRowClick(i)}>
                                    <div>
                                        Title: {item.name}</div>
                                    <div>
                                        Worklist : {item.work}</div >
                                </li>
                            );

                        })}
                    </ul>
                </div>
            </div>
        )
    }
};
