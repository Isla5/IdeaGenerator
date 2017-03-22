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
                        <input ref= {(a) => this.inputRef = a}/>
                        <input type="submit" value='+'></input>
                    </form>
                </div>
                <ul className="theList">
                    {this.props.works.map((item, i) => <li key={i}>{item}</li>)
}
                </ul>
            </div>
        )
    }
};
