import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Home extends Component {
    state={
        height:0
    }
   
    componentDidMount() {
        this.setState({height:window.innerHeight})
    }
    
    render() {
        return (
            <div id='homenya' className='container-fluid d-flex align-items-center justify-content-center' style={{backgroundImage:`url(images/Home.png)`,backgroundSize:'cover',backgroundPosition:'center',height:this.state.height}}>
                
                <div className='row'>
                <div className='col-12'><h1 className='text-center text-white'><strong>Non-Destructive Testing (NDT)</strong></h1></div>
                <div className='col-12'><h2 className='h-4 text-center text-white'>SERVICE AND TRAINING</h2></div>
                
                    <div className='col-6 mx-auto mt-3 mt-md-5'>
                        <Link to='/sub/course' className='btn btn-success btn-block'>
                        Courses & Services
                        </Link>
                    </div>
                
                </div>
                
            </div>
        )
    }
}

export default Home
