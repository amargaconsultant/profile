import React, { Component } from 'react'
import {schedule} from '../../data/index'

const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']

export class Menu4 extends Component {
    
    state={
        schedule:schedule,
        sortCourse:-1,
        sortPrice:1,
        sortSchedule:1
    }

    componentDidMount(){

    }

    sortCourse=()=>{
        let sortedByCourse=this.state.schedule
        this.setState({sortCourse:this.state.sortCourse*-1})
        sortedByCourse.sort((a,b)=>{
            if(a.course>b.course){
                return 1*this.state.sortCourse
            }else if(a.course===b.course){
                return 0*this.state.sortCourse
            }else{
                return -1*this.state.sortCourse
            }
        })

        this.setState({schedule:sortedByCourse})
    }

    sortSchedule=()=>{
        let sortedBySchedule=this.state.schedule
        this.setState({sortSchedule:this.state.sortSchedule*-1})
        sortedBySchedule.sort((a,b)=>{
            // if(a.schedule.getDate()>b.schedule.getDate()){
            //     return 1*this.state.sortSchedule
            // }else if(a.schedule===b.schedule){
            //     return 0*this.state.sortSchedule
            // }else{
            //     return -1*this.state.sortSchedule
            // }
            return (a.schedule-b.schedule)*this.state.sortSchedule
        })

        this.setState({schedule:sortedBySchedule})
    }

    sortPrice=()=>{
        let sortedByPrice=this.state.schedule
        this.setState({sortPrice:this.state.sortPrice*-1})
        sortedByPrice.sort((a,b)=>{
            return (a.price-b.price)*this.state.sortPrice
        })

        this.setState({schedule:sortedByPrice})
    }

    numberWithCommas=(x)=> {
        var parts = x.toString().split(".");
        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
        return parts.join(",");
        }

    renderTable=()=>{
        return this.state.schedule.map((item,key)=>{
            return (
                <tr key={key}>
                    <td>{item.course}</td>
                    <td>Rp {this.numberWithCommas(item.price)}</td>
                    <td>{(item.schedule.getFullYear() === 9999) ? "TBD":bulan[item.schedule.getMonth()-1]+" "+item.schedule.getFullYear()}</td>
                </tr>
            )
        })
    }
    
   

    render() {
        return (
          <div>
            <div className="table-responsive">
              <table className="table table-bordered w-100">
                <thead className="bg-silver">
                  <tr>
                    <th className='judul' onClick={this.sortCourse}>
                      <div className="row no-gutters">
                        <div className="col-12 col-sm-10">Course</div>
                        <div className="col-12 col-sm-2">
                          <img
                            width="18px"
                            src="images\sort.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </th>
                    <th className='judul' onClick={this.sortPrice}>
                      <div className="row no-gutters">
                        <div className="col-12 col-sm-10">Price</div>
                        <div className="col-12 col-sm-2">
                          <img
                            width="18px"
                            src="images\sort.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </th>
                    <th className='judul' onClick={this.sortSchedule}>
                      <div className="row no-gutters">
                        <div className="col-12 col-sm-10">Schedule</div>
                        <div className="col-12 col-sm-2">
                          <img
                            width="18px"
                            src="images\sort.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        );
    }
}

export default Menu4
