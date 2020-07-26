import React,{useState,Fragment} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {listData} from './DataCertificate'
//import fs from 'fs' 




export default function Certificatenew() {
    // File path.
    
    const [activeTab, setActiveTab] = useState(1);

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
    
    function renderContent(){
        var abjad = listData[0].Nama[0]
        var isi = []
        var perTab = []
        
        listData.map((item,index)=>{
            if(abjad==item.Nama[0]){
                isi.push(
                    <div class="card">
                        <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href={"#collapse"+index}>
                            {item.Nama}
                        </a>
                        </div>
                        <div id={"collapse"+index} class="collapse" data-parent={"#accordion"+abjad}>
                        <div class="card-body">
                            {item.No}
                        </div>
                        </div>
                    </div>
                )
            }else{
                
                perTab.push([isi,abjad])
                abjad=item.Nama[0]
                isi=[]
                isi.push(
                    <div class="card">
                        <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href={"#collapse"+index}>
                            {item.Nama}
                        </a>
                        </div>
                        <div id={"collapse"+index} class="collapse" data-parent={"#accordion"+abjad}>
                        <div class="card-body">
                            {item.No}
                        </div>
                        </div>
                    </div>
                )
            }
        })
        perTab.push([isi,abjad])
        return perTab.map((item,index)=>{
            return(
                <TabPane tabId={index+1}>
                    <Row>
                        <Col sm="12">
                        <div id={`accordion${item[1]}`}>
                        {item[0]}
                        </div>
                        </Col>
                    </Row>
                </TabPane>
            )
        })
        
    }

    function renderNavTabs(){
        var abjad = '';
        var manu = []
        listData.map((item,index)=>{
            if(abjad!=item.Nama[0]){
                abjad = item.Nama[0]
                manu.push(abjad)
            }
        })

        return manu.map((item,index)=>{
                return(
                    <NavItem key={index}>
                        <NavLink
                            className={classnames({ active: activeTab === index+1 })}
                            onClick={() => { toggle(index+1); }}
                        >
                            {item}
                        </NavLink>
                    </NavItem>
                )
        })
    }
    
    return (
        <div>
            <Nav tabs>
                {renderNavTabs()}
            </Nav>
            <TabContent activeTab={activeTab}>
                {renderContent()}
            </TabContent> 
        </div>
    )
}
