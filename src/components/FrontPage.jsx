import React, { Component } from 'react';
import CommentButton from './CommentButton';
import ToDoList from './ToDoList';

export default class FrontPage extends React.Component{
render() {
   return(
     <div>
      <CommentButton/>
      <p>ToDoList</p>
      <ToDoList/>
     </div>
   );
 }
};
