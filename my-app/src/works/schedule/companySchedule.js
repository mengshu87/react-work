import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/myScheduleAction';
import Nav from '../nav/index';
import {myQuery} from '../lib/public';
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
        this.state= {
            arr: [],
            arr2: [],
            y: 1,
            m: 1
        }
    }
    componentDidMount() {
        let {y,m}=this.state;
        let {getAllData}=this.props;
        setTimeout(function () {
            getAllData();
        });
        y = this.refs.a.getElementsByClassName('ant-select-selection-selected-value')[0].innerHTML * 1;
        m = this.refs.a.getElementsByClassName('ant-select-selection-selected-value')[1].innerHTML.substr(0, 1) * 1;
       this.setState({y,m});
    }


    getYearMonth=(year,month)=>{
        let {y,m}=this.state;
        y=year;
        m=month;
        this.setState({y,m});
    }
    onPanelChange=(value, mode)=>{
        let date=value._d;
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        this.getYearMonth(year,month);
    }


    getData=(value)=>{
        let arr=[];
        let {getData2}=this.props;
        value.forEach(e=>{
            arr.push(e);
        })
        let {y,m}=this.state;
       let arrYear=arr.filter(e=>{
            if(e.date.substr(0,4)==y){
                return e;
            }
        })
        let arrData=arrYear.filter(e=>{
            if(e.date.substr(5,2)==m){
                return e;
            }
        })
        this.getListData(arrData);
    }
    getListData=(value)=>{
        console.log(value);
        let d=value.map(e=>{
            return e.date.substr(8,2)*1;
        })
        console.log(d);
        let listData;

        /*switch (value.date()) {
            case 12:
                listData = [
                    { type: 'error' , content: ''}

                ]; break;
            case 24:
                listData = [
                    { type: 'error', content: '' }
                ]; break;
            case 26:
                listData = [
                    { type: 'error', content: '' }

                ]; break;
            default:
        }
        return listData || [];*/
    }

    dateCellRender=(value,data)=>{
        //const listData = this.getListData(value);
        //console.log(listData);
        /*return (
            <ul className="events">
                {
                    listData.map(item => (
                        <li key={item.content}>
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))
                }
            </ul>
        );*/
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
                        <div ref="a">
                            <Calendar
                                getData={this.getData}
                                getYearMonth={this.getYearMonth}
                                onPanelChange={this.onPanelChange}
                                dateCellRender={this.dateCellRender}
                                monthCellRender={this.monthCellRender}

                            />
                        </div>
                        {/*
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
        data:state.reducerCompanySchedule.content,
        data2:state.reducer2
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(CompanySchedule);
