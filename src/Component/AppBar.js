import React, { Component } from 'react'
import { Link } from 'react-router'
import './../style.css'
export default class AppBar extends Component {
  render () {
    return (
      <ul className='topnav' id='myTopnav'>
          <li><a className='logo'><font color='black'>FITM ADMINISTER</font></a></li>
          <Link to='/student'><li><span className='selectLi'>Student</span></li> </Link>
          <Link to='/class'><li><span className='selectLi'>Class</span></li> </Link>
          <Link to='/exam'> <li><span className='selectLi'>Exam</span></li> </Link>
          <li>Teacher Class</li>
        </ul>
    )
  }
}
