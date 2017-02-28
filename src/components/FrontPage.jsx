import React, {Component} from 'react';
import CommentButton from './CommentButton';
import ToDoList from './ToDoList';
import '../css/frontpage.css';
import Structure from './Structure';

export default class FrontPage extends Component {
    render() {
        return (
            <div>
              <Structure />
              <CommentButton/>
              <ToDoList/>
            </div>
        );
    }
};
