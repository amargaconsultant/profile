import React, { Component } from 'react'
import {Row, Col} from 'reactstrap'

export class Client extends Component {
    
    state={
        height:0,
    }

    

    render() {

        
        return (
            <div className='container-fluid border-top border-bottom pb-5'>
           
            <h1 className='display-4 text-center py-5'><strong>Our Client</strong></h1>
                <div className='container'>
                <Row>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/GMF_AeroAsia_logo.svg.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/Sriwijaya.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/di.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/suco.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/cambodiaairlines.jpg" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/FranklinOffshoreIndonesia.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/Indonesian_Airlines_logo.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/lion.svg" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/nusantaraturbin.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/PUNJLLOYD.jpg" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/RadiantUtama.jpg" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/southpacificviscose.jpg" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/surveyorIndonesia.png" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/TFCO.jpg" alt=""/></Col>
                    <Col className='p-4 d-flex align-items-center justify-content-center' xs='12' sm='6' md='4'><img width='70%' src="images/Client/VOITHINDONESIA.jpg" alt=""/></Col>
                </Row>
                </div>
               
            </div>
        )
    }
}

export default Client
