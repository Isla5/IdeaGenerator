import React, { Component } from 'react';
import '../css/frontpage.css';

export default class Structure extends Component{
render() {
   return(
     <div className="background">
   <ul className='navbar'>
     <li className='navbar-li'><a href="#home">Home</a></li>
     <li className='navbar-li'><a href="#news">News</a></li>
       <li className="dropping-menu">
        <a href="" className="dropdown-main">Create Ideas</a>
        <div className="dropdown-items">
          <a href=""> 1</a>
          <a href=""> 2</a>
          <a href=""> 3</a>
        </div>
       </li>
     <li className='right'><a class="active" href="#about">About</a></li>
   </ul>
 </div>
   );
 }
};
