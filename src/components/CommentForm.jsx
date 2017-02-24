import React, { Component } from 'react';

export default class CommentForm extends React.Component{
  constructor() {
    super();
    this.state= {visible: true}
  }
  onClick = () => {
  this.setState({
    visible: !this.state.visible
  })}

  handleClick = () => {
    this.props.onInput(this.refs.commentInputText.value, this.refs.nameInpText.value);
  }

  render() {
    return(
      <div>

        {
          this.state.visible
            ?     <form>
                  <h1> What is on your mind? </h1>
                  Name:
                  <input type="text" placeholder="Your Name" ref="nameInpText"/>
                  Idea:
                  <input type="text" placeholder="Your comment here" ref="commentInputText"/>
                  <button type="button" onClick={this.handleClick}> Add Idea </button>
                  <button type="button" onClick={this.onClick}> I have changed my mind</button>
                </form>
          : null
        }
        <div onClick={this.onClick}></div>
        </div>

    );
  }
};
