import React, {Component} from 'react';
import '../css/frontpage.css';
import {Link} from 'react-router';

export default class Structure extends Component {
    render() {
        return (
            <div className="background">
                <ul className='navbar'>
                    <li className='navbar-li'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='navbar-li'>
                        <a href="#news">News</a>
                    </li>
                    <li className="dropping-menu">
                        <a href="" className="dropdown-main">GenerateIdeas</a>
                        <div className="dropdown-items">
                            <Link to='/ideas'>IdeaList</Link>
                            <Link to='/coms'>IdeaComments</Link>
                        </div>
                    </li>
                    <li className='right'>
                        <a class="active" href="#about">About</a>
                    </li>
                </ul>

            </div>
        );
    }
};
