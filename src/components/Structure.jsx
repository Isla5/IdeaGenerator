import React, {Component} from 'react';
import '../css/frontpage.css';
import CommentButton from './CommentButton'
import {Link} from 'react-router';

export default class Structure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (e) => {
        this.setState({value: e.target.value});
    }

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
                        <a href="" className="dropdown-main">Courses</a>
                        <div className="dropdown-items">
                            <Link to='/ideas'>JavaScript</Link>
                            <Link to='/coms'>Python</Link>
                            <a href='#'>C++</a>
                        </div>
                    </li>
                    <li className='right'>
                        <li>
                            <form className='search'>
                                <input className='searchinput' type="text" placeholder="Search.."/>
                            </form>
                        </li>
                        <li>
                            <a class="active" href="#about">About</a>
                        </li>
                    </li>
                </ul>
                <div className='headers'> Our lessons </div>
                <div className='lessonlist'>
                    <div className='lessons'>
                        <img src='https://a248.e.akamai.net/secure.meetupstatic.com/photos/event/c/5/4/6/global_309230502.jpeg'/>
                        <p>
                            Javascript lessons for <select value={this.state.value} onChange={this.handleChange}>
                                <option>Beginners</option>
                                <option>Level...</option>
                            </select>
                        </p>
                    </div>
                    <div className='lessons'>
                        <img src='https://www.sololearn.com/Icons/Courses/1073.png'/>
                        <p>
                            Python lessons for <select value={this.state.value} onChange={this.handleChange}>
                                <option>Beginners</option>
                                <option>Level...</option>
                            </select></p>
                    </div>
                    <div className='lessons'>
                        <img src='https://ignite.apache.org/images/cpp.png'/>
                        <p>
                            C++ lessons for <select value={this.state.value} onChange={this.handleChange}>
                                <option>Beginners</option>
                             <option>Level...</option>
                            </select></p>
                    </div>
                </div>
                <footer><CommentButton/></footer>
            </div>
        );
    }
};
