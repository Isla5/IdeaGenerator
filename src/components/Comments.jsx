import React, { Component } from 'react';
import Search from 'react-search';

export default class Comments extends Component{
  HiItems(items) {
    console.log(items)
  }
  render() {
    var data = this.props.data;
    var allIdeas = data.map(function(idea, index) {
      return (
        <div >
          <b className='author'>{idea.usr}: </b>
          <p>{idea.txt}</p>
        </div>
      )
    })
    return (
      <div>
        {allIdeas}
        <TestComponent />
      </div>
    );
  }
};

class TestComponent extends Component {

  HiItems(items) {
    console.log(items)
  }

  constructor (props) {
    super(props)
    this.state = {
      repos: []
    }
  }

  render () {
    let items = [
      {value: 'Everyone will survive!'},
      {value: 'ALL FOR ONE!'},
      {value: 'Death shall reign'},
    ]

    return (
      <div>
        <Search items={items}
                placeholder='Pick your comment...'
                maxSelected={1}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} />
      </div>
    )
  }
}
