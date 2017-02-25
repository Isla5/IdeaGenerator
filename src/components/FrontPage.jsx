import React, {Component} from 'react';
import CommentButton from './CommentButton';
import ToDoList from './ToDoList';
import '../css/frontpage.css';
import Structure from './Structure';
import {Router, Route, browserHistory} from 'react-router';

export default class FrontPage extends Component {
    render() {
        return (
            <div>
                <Router history={browserHistory}>
                  <Route path='/' component={Structure} />
                  <Route path='/ideas' component={ToDoList} />
                </Router>
            </div>
        );
    }
};
