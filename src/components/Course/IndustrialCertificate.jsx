import React,{useState,Fragment} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {listDataIndustrial} from './DataCertificate'





export default function IndustrialCertificate() {
    // File path.
    
    const [activeTab, setActiveTab] = useState(1);

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  
    function convertToRow(item){
        return(
            <tr>
                <td>{item["Company"]}</td>
                <td>{item["NDT Method"]}</td>
                <td>{item["Certificate No:"]}</td>
                <td>{item["Issued Date"]}</td>
                <td>{item["Expired Date"]}</td>
                <td>{item["Remark"]}</td>
            </tr>
        )
    }

    function convertToCard(nama,rowDataPerName,index,abjad){
        return(
            <div class="card">
                <div class="card-header">
                <a class="text-dark text-decoration-none font-weight-bold d-block" data-toggle="collapse" href={"#collapse"+index}>
                    {nama}
                </a>
                </div>
                <div id={"collapse"+index} class="collapse" data-parent={"#accordion"+abjad}>
                <div class="card-body">
                    <div className='table-responsive'>
                        <table className='table table stripped'>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>NDT Method</th>
                                    <th>Certification No</th>
                                    <th>Issued Date</th>
                                    <th>Expired Date</th>
                                    <th>Remark</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rowDataPerName}
                            </tbody>
                        </table>
                    </div>
                </div>
                </div>
            </div>
        )
    }

    function renderContent(){
        var abjad = listDataIndustrial[0]["Name"][0]
        var nama = listDataIndustrial[0]["Name"]
        var accordionitem = []
        var tabData = []
        var rowDataPerName = []
        
        listDataIndustrial.map((item,index)=>{
            if(item["Name"]!=nama){
                accordionitem.push(
                    convertToCard(nama,rowDataPerName,index-1,abjad) 
                )
                rowDataPerName=[]
                nama=item["Name"]
            }
            rowDataPerName.push(
                convertToRow(item)
            )

            if(abjad!=item["Name"][0]){
                tabData.push([accordionitem,abjad])
                accordionitem=[]
                abjad = item["Name"][0]
            }

            if(index+1==listDataIndustrial.length){
                accordionitem.push(
                    convertToCard(nama,rowDataPerName,index,abjad) 
                )
                tabData.push([accordionitem,abjad])
            }
        })
        
        return tabData.map((item,index)=>{
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
        listDataIndustrial.map((item,index)=>{
            if(abjad!=item["Name"][0]){
                abjad = item["Name"][0]
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
