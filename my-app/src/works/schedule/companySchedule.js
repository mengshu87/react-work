import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/myScheduleAction';
import Nav from '../nav/index';
import '../css/style.css';
import '../css/calendar.css';
import {toD} from '../lib/public';
import { Calendar,Badge } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

class CompanySchedule extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[],
            arr2:[]
        }
    }
    componentDidMount(){
        let {getAllData}=this.props;
        setTimeout(function(){
            getAllData();
            //console.log(data);
        });
    }
    getData=(value)=>{
        let {arr}=this.state;
        //console.log(Array.isArray(value));
        value.forEach(e=>{
            arr.push(e.date);
        })
        //console.log(arr);
        let time=new Date();
        let y=time.getFullYear();
        let m=toD(time.getMonth()+1);
        let d=toD(time.getDate());
        arr.filter(e=>{
            return e;
        })
        //console.log(arr);


        //console.log(y,m,d);

    }

    /*dateCellRender=(value)=>{
        let {arr2}=this.state;
        //console.log(arr2);
        //console.log(value._d);
        let y=value._d.getFullYear();
        let m=value._d.getMonth()+1;
        let d=value._d.getDate();
        //let time=y+'-'+m+'-'+d;
        let time=toD(y)+'-'+toD(m)+'-'+toD(d);
        //arr2.indexOf(time);
        console.log(value);

        //return time;

        //return <div className="red">●</div>;
    }
    /!*onSelect=(value)=>{
        console.log(value);
    }*!/

    monthCellRender=(value)=>{
        /!*return <div>自定义月数据</div>;*!/
    }*/



    getListData=(value)=>{
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' }

                ]; break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ]; break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ]; break;
            default:
        }
        return listData || [];
    }

    dateCellRender=(value)=>{
        //let getListData=this.state;
        const listData = this.getListData(value);
        return (
            <ul className="events">
                {
                    listData.map(item => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))
                }
            </ul>
        );
    }

    getMonthData=(value)=>{
        if (value.month() === 8) {
            return 1394;
        }
    }

    monthCellRender=(value)=>{
        //let {getMonthData}=this.state;
        const num = this.getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    render(){
        let {dateCellRender,monthCellRender}=this.state;
        let {data}=this.props;
        if(data){
            this.getData(data)
        }



        return(
            <div className="wrapper" id="schedule">
                <Nav/>
                <section className="right" style={{'background':'#fff'}}>
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">公司日程</a>
                            <div className="search">
                                {/* <input type="text" value="" placeholder="搜索" id="search" />
                                <i className="iconfont icon-fangdajing"></i>*/}
                            </div>
                        </div>
                        <ul className="tips">
                            <li>
                                <a><i className="iconfont icon-lingdang"></i></a>
                            </li>
                            <li>
                                <a><i className="iconfont icon-youxiang"></i></a>
                            </li>
                            <li>
                                <a><span>呦呦</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt70 overflow">

                        <Calendar
                            dateCellRender={this.dateCellRender}
                            monthCellRender={this.monthCellRender}
                            />
                        {/*
                         <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
                            onSelect={this.onSelect}

                            <div className="calendar">
                            <div className="calTitle">
                                <img src={require("../img/weekPrev.png")} />
                                <span ref="a">2018-06 </span>
                                <img src={require("../img/weekNext.png")}/>
                            </div>
                            <div className="calBd">
                                <table className='table'>

                                    <thead>
                                        <tr>
                                            <th>星期日</th>
                                            <th>星期一</th>
                                            <th>星期二</th>
                                            <th>星期三</th>
                                            <th>星期四</th>
                                            <th>星期五</th>
                                            <th>星期六</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                            <td>31</td>
                                            <td>1</td>
                                            <td>2</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5<span className="gray"></span></td>
                                            <td>6</td>
                                            <td>7</td>
                                            <td>8</td>
                                            <td>9</td>
                                        </tr>
                                        <tr>
                                            <td className="active">10</td>
                                            <td>11</td>
                                            <td>12<span className="green"></span></td>
                                            <td>13<span className="red"></span></td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                        </tr>
                                        <tr>
                                            <td>17</td>
                                            <td>18<span className="red"></span></td>
                                            <td>19</td>
                                            <td>20<span className="red"></span></td>
                                            <td>21</td>
                                            <td>22</td>
                                            <td>23</td>
                                        </tr>
                                        <tr>
                                            <td>24<span className="red"></span></td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                            <td>29</td>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>*/}
                    </div>
                </section>
            </div>
        )
    }
}
export default connect((state)=>{
    return {
        data:state.reducerCompanySchedule.content
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(CompanySchedule);
