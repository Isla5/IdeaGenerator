import React, {Component} from 'react';

export default class WorkList extends Component {
    addWork = (e) => {
        e.preventDefault();
        this.props.onWorkAdd(this.inputRef.value);
        this.inputRef.value = "";
    }
    render() {
        if (!this.props.works) {
            return null;
        }
        return (
            <div>
                <div>
                    <form onSubmit={this.addWork}>
                        <input ref= {(a) => this.inputRef = a} required/>
                        <input type="submit" value='+'></input>
                    </form>
                </div>
                <ul className="theList">
                    {this.props.works.map((item, i) => <li key={i} onClick={this.props.onClickk}>{item}
                        <input type="checkbox" checked={this.props.checked} onClick={this.props.onClickk} onClick={this.props.onClick}/>
                    </li>)}
                </ul>
            </div>
        )
    }
};
