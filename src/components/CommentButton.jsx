import React, { Component } from 'react';
import AllComments from './AllComments';
import CommentList from './CommentList';

export default class CommentButton extends React.Component{
 constructor(){
    super();
    this.state = {inputsVisible: false, buttonText: "Write Comment"};
}

onClick = () => {
    this.setState({inputsVisible: !this.state.inputsVisible, buttonText: !this.state.buttonText});
}
render() {
   let buttonText = "Nothing, delete all";
   if (this.state.buttonText) {buttonText = "Write Your Ideas"}

   return(
     <div>
       {
         this.state.inputsVisible
           ? <AllComments/>
         : null
       }
       <div onClick={this.onClick}>
         <button> {buttonText} </button>
       </div>
     </div>
   );
 }
};
