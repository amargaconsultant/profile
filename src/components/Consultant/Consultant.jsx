import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Menu1 from './Menu1'
import Menu2 from './Menu2'
export class Course extends Component {

  state = {
    menu:1
  };

  clickMenu=(value)=>{
    this.setState({menu:value})
  }

  renderInfo=()=>{
    switch(this.state.menu){
      case 1:
        return <Menu1/>
      case 2:
        return <Menu2/>
      default:
        return <Menu1/>
    }
  }

    render() {
        return (
          <div className="container-fluid pb-5">
           <div className='row'>
                
                  <div className='col-12 bg-dark' style={{backgroundImage:`url(images/courseandconsultantbg.png)`,backgroundSize:'cover',backgroundPosition:'center'}}>
                  <h1 className='display-4 text-center py-5'><strong>Consultant</strong></h1>
                  </div>
                </div>
            <div className='container mt-5'>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-3">
                <Link onClick={()=>{this.clickMenu(1)}} className='nav-link p-0 py-2' to='#'>Auditing</Link>     
                <Link onClick={()=>{this.clickMenu(2)}} className='nav-link p-0 py-2' to='#'>Outside Agency Level III Services</Link>
              </div>
              <div className="col-12 col-sm-12 col-md-9">
              <div className='card p-4 mt-3 mt-md-0'>
                {this.renderInfo()}
              </div>
              </div>
            </div>
            </div>
            <div style={{height:'50px'}}></div>
          </div>
        );
    }
}

export default Course
