import React, { Component } from 'react'
import {
    Card, 
    // CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    // CardSubtitle, 
    // Button
  } from 'reactstrap';

export class About extends Component {
    
    state={
        height:0
    }
    

    render() {
        return (
          <div className="container-fluid border-bottom border-top pb-5">
            
            <h1 className="display-4 text-center py-5">
              <strong>About Us</strong>
            </h1>
            <div className='container'>
            
            <div className="row mb-5">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <Card className='h-100'>
                  <CardBody>
                    <CardTitle className="h2 text-center">
                      Aim and Objective
                    </CardTitle>

                    <CardText className="text-justify">
                      TO serve and train the industrial society with the
                      qualified and certified personnel of Levels I, II and III
                      in the Nondestructive Ultrasonic Testing techniques: The
                      training and certification process is performed according
                      to the American Society of Nondestructive Teesting
                      Recomended Practice SNT-TC-1A and or NAS 410/EN 417q. The
                      performance of service in industry will be responsible by
                      ASNT/NAS410/EN4179 NDT level III.
                    </CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 mt-5 mt-md-0">
                <Card className='h-100'>
                  <CardBody className="d-flex align-items-center justify-content-center">
                  <img style={{objectFit:'contain'}} width='300px'  src="images\missiondsb.png" alt="" />
                  </CardBody>
                </Card>
              </div> 
            </div>
            
            <div className="row pt-5 px-3 px-sm-5 px-md-5">
              <div className="col-12 col-sm-12 col-md-6 mx-auto col-lg-4 px-5">
                <div
                  className="bg-ku"
                  style={{
                    border: "3px solid black",
                    borderRadius: "100%"
                  }}
                >
                  <img className='rounded-circle' width="100%" height='100%' src="images\Experience.png" alt="" />
                </div>
                <div className="text-center">
                  <h5 className="font-weight-bold mt-3">Experiences</h5>
                  <p>NDT For Boeing-747, A330, A320, B737 series, ATR etc.</p>
                  <p>NDT For Fabrication, Refinery, Power Plant, Pipe etc.</p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 mx-auto col-lg-4 px-5">
                <div
                  className="p-3 bg-ku"
                  style={{
                    border: "3px solid black",
                    borderRadius: "100%"
                  }}
                >
                  <img className='rounded-circle' width="100%" height='100%' src="images\mission.png" alt="" />
                </div>
                <div className="text-center">
                  <h5 className="font-weight-bold mt-3">Mission Statement</h5>
                  <p>
                    to be the premier NDT education company in Indonesia and
                    Asia, and to provide industry-leading consulting and
                    auditing service. We strive to exceed our clients
                    expectations, and to provide an unmatched level of service
                    in our field.
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 mx-auto col-lg-4 px-5">
                <div
                  className="bg-ku"
                  style={{
                    border: "3px solid black",
                    borderRadius: "100%"
                  }}
                >
                  <img className='rounded-circle' width="100%" src="images\corebeliefs.png" alt="" />
                </div>
                <div className="text-center">
                  <h5 className="font-weight-bold mt-3">Core Beliefs</h5>
                  <p>
                    Our core beliefs are built upon: our mission, our
                    investment, our commitment and our culture as illustrated by
                    the chart below.
                  </p>
                </div>
              </div>
            </div>
            
            </div>
          </div>
        );
    }
}

export default About
