import React, { Component } from 'react';
import CommentButton from './CommentButton';
import ToDoList from './ToDoList';
import '../css/frontpage.css';
import Structure from './Structure';

export default class FrontPage extends React.Component{
render() {
   return(
     <div className = 'main'>
       <Structure/>
    {/*     <CommentButton/>
   <p>ToDoList</p>
      <ToDoList/> */}
     </div>
   );
 }
};
