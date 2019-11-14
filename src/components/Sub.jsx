import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export class Sub extends Component {
  
  state={
    active:'course'
  }
  
  componentDidMount() {
    this.setState({active:'course'})
  }
  

  onClick=(val)=>{
    this.setState({active:val})
  }

  renderLink=()=>{
    if(this.state.active==='course'){
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home Page
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => {
                this.onClick("course");
              }}
              className="nav-link active"
              to="/sub/course"
            >
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => {
                this.onClick("consultant");
              }}
              className="nav-link"
              to="/sub/consultant"
            >
              Consultant
            </Link>
          </li>
        </ul>
      );
    }else{
      return (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/#home">
              Home Page
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={e => {
                this.onClick("course");
              }}
              className="nav-link"
              to="/sub/course"
            >
              Courses
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={e => {
                this.onClick("consultant");
              }}
              className="nav-link active"
              to="/sub/consultant"
            >
              Consultant
            </Link>
          </li>
        </ul>
      );
    }
    
  }

  render() {
        return (
          <div>
            <div className="bg-dark" style={{ height: "50px" }}></div>
            <nav
              id="navbarnyasub"
              className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top"
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
                {this.renderLink()}
                {/* <li className="nav-item">
                    <Link className="nav-link" to='/sub/contact'>
                      Contact
                    </Link>
                  </li> */}
              </div>
            </nav>

            <div className="footer fixed-bottom bg-dark text-white text-center">
              <h6 className="my-3">
                Any Question? Please Call 08129258446 Or Email Us
                sarndtservice@gmail.com
              </h6>
            </div>
          </div>
        );
    }
}

export default Sub
