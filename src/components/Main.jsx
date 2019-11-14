import React, { Component } from 'react'
import Home from './Home'
import {HashLink} from 'react-router-hash-link'
import {Link} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Client from './Client'


export class Utama extends Component {
    render() {
        return (
          <div>
            <nav
              id="navbarnya"
              className="navbar navbar-expand-sm navbar-dark fixed-top"
            >
              <Link className="navbar-brand p-0" to="/">
                <img width='50px' src="images/Logo.png" alt=""/>
              </Link>
              <Link className="navbar-brand text-white" to="/">
                NDT Solution
              </Link>
              <button
                className="navbar-toggler ml-auto"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                id="navbarSupportedContent"
                className="collapse navbar-collapse"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <HashLink className='nav-link' to='#home'> Home</HashLink>
                  </li>
                  <li className="nav-item">
                  <HashLink className='nav-link' to='#about'> About</HashLink>
                  </li>
                  <li className="nav-item">
                  <HashLink className='nav-link' to='#client'> Client</HashLink>
                  </li>
                  <li className="nav-item">
                  <HashLink className='nav-link' to='#contact'> Contact</HashLink>
                  </li>
                </ul>
              </div>
            </nav>

            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="client">
              <Client />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <div style={{height:'120px'}}></div>
            <div className='footer fixed-bottom bg-dark text-white text-center'>
                <h6 className='my-3'>Copyright ASNT Corporate Partner 2019</h6></div>
          </div>
        );
    }
}

export default Utama
