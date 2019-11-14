import React, { Component } from 'react'


export class Contact extends Component {
    
    state={
        height:0,
    }

    componentDidMount() {
        this.setState({height:window.innerHeight})
    }
    
    render() {
        return (
            <div className='container-fluid border-top d-flex align-items-center pb-5'>
            <div className='container'>    
            <div className='row'>
            <div className='col-12'><h1 className='display-4 text-center py-5'><strong>Contact Us</strong></h1></div>
            </div>
            <div className='row'>
                
                <div className='col-12 col-md-6'>
                <div id="map" className='rounded-lg' style={{height:this.state.height*0.5,width:'100%'}}></div>
                </div>
                <div className='col-12 col-md-6 d-flex align-items-center'>
                    
                    <div className='mt-2 mt-sm-2 mt-md-0'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-2'><img width='40px' src="images/mail.svg" className='mr-1 mr-sm-2 mt-2 mt-md-0' alt=""/></div>
                            <div className='col-10'><h5 className=''>sarndtservice@gmail.com</h5></div>
                        </div>
                        <div className='row d-flex align-items-center'>
                            <div className='col-2'><img width='40px' src="images/phone.svg" className='mr-1 mr-sm-2 mt-2 mt-md-0' alt=""/></div>
                            <div className='col-10'><h5 className=''>08129258446</h5></div>
                        </div>
                        <div className='row d-flex align-items-center'>
                            <div className='col-2'><img width='40px' src="images/pin.png" className='mr-1 mr-sm-2 mt-2 mt-md-0' alt=""/></div>
                            <div className='col-10'><h5 className=''>Jl. Raya Serpong Puri Sentosa Blok H No.1<br/>Tangerang Selatan - Banten</h5></div>
                        </div>
                    </div>
                
                </div>
                </div>
            </div>
           
            </div>
        )
    }
}

export default Contact
