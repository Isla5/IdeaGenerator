import React, {Component} from 'react';

export default class Todo extends Component {
  constructor() {
      super();
      this.state = {
          search: ''
      };
  }
    addWork = (e) => {
        e.preventDefault();
        this.props.onRowAdd({
            name: this.inputRef.value,
            work: {
                wname: ['fooo'],
                checked: true
            }
        });
        this.inputRef.value = "";
    }

    render() {
      let todos = this.props.todos;
      const search = this.state.search.toLowerCase();
      todos = todos.filter(todos => todos.name.toLowerCase().match(search));
      const rendering = todos.map((todos, i) => {
          return <li key={i}>{todos.name}</li>
      })
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
                                        Title:{item.name}</div>
                                    <div>
                                        Worklist:{item.work[0].wname}</div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <input type="text" value={this.state.search} onChange={({target}) => this.setState({search: target.value})} placeholder="Filter..."/>
                <ul>
                    {rendering}
                </ul>
            </div>
        )
    }
};
