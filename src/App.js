import React, {Component} from 'react';
import CommentButton from './components/CommentButton';
import ToDoList from './components/ToDoList';
import './css/frontpage.css';
import FrontPage from './components/FrontPage';
import {Router, Route, browserHistory} from 'react-router';

export default class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={FrontPage}/>
                <Route path='/ideas' component={ToDoList}/>
                <Route path='/home' component={CommentButton}/>
            </Router>
        );
    }
};
