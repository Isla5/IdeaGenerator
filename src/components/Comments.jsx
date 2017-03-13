import React, { Component } from 'react';
import Search from 'react-search';

export default class Comments extends Component{
  render() {
    var data = this.props.data;
    var allIdeas = data.map(function(idea, index) {
      return (
        <div >
          <b className='author'>{idea.usr}: </b>
          <p>{idea.value}</p>
        </div>
      )
    })
    return (
      <div>
        {allIdeas}
      </div>
    );
  }
};
