import React, {Component} from 'react';

export default class FilteredList extends Component {
    render() {
        return (
            <div className="filter-list">
                <input placeholder="Filter" type="text" onChange={this.props.filterList}/>
                <ul>
                    {this.props.filtered.map((item) => {
                        return <div key={item.name}></div>
                    })}
                </ul>
            </div>
        );
    }
}
