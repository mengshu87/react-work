import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/myScheduleAction';
import {myQuery} from '../lib/public';
import '../css/info.css'
import Nav from '../nav/index';
import {Form,DatePicker,TimePicker,Button } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class InfoManage extends Component{
    constructor(props){
        super(props);
        this.state={
            hVal:'',
            rVal:'',
            pVal:'',
            tVal:'',
            yVal:'',
            oVal:'',
            dt:'',
            tt:'',
            open: false
        }
    }

    meetType=(ev)=>{
        let {value:hVal}=ev.target;
        this.setState({hVal});
    }
    titleChange=(ev)=>{
        let {value:rVal}=ev.target;
        this.setState({rVal});
    }
    localChange=(ev)=>{
        let {value:pVal}=ev.target;
        this.setState({pVal});
    }

    //当前日期之前不可选
    disabledDate = function(current, value) {
        // can not select days before today
        var day1 = new Date();
        day1.setDate(day1.getDate() - 1);
        return current && current.toDate().getTime() < day1;
    };

    //日历控件
    dateChange=(date,dateString)=>{
        let {dt}=this.state;
        dt=dateString;
        //console.log(dt);
        this.setState({dt});
        //this.setState({dateString});
    };

    //时间控件
    timeChange=(time, timeString)=>{
        console.log(123);
        let {tt}=this.state;
        tt=timeString;
        //console.log(tt);
        this.setState({tt});
        //this.setState({timeString});
    }
    personChange=(ev)=>{
        let {value:yVal}=ev.target;
        this.setState({yVal});
    }
    originChange=(ev)=>{
        let {value:oVal}=ev.target;
        this.setState({oVal});
    }
    sure=()=>{
        let {getData,addData,getPage}=this.props;
        let {hVal,rVal,pVal,yVal,oVal,dt,tt}=this.state;
        let obj={
            act:'add',
            type:hVal,
            title:rVal,
            local:pVal,
            date:dt,
            time:tt,
            person:yVal,
            originator:oVal
        }
        addData(obj);
        async function asyncGetData() {
            let data1 = await getPage();
            let data2 = await getData(1);
        }
        asyncGetData();
        this.setState({hVal:'',rVal:'',pVal:'',dt:'',tt:'',mVal:'',yVal:'',oVal:''});
    }
    cancel=()=>{
        let {hVal,rVal,pVal,yVal,oVal}=this.state;
        this.setState({hVal:'',rVal:'',pVal:'',dt:'',tt:'',mVal:'',yVal:'',oVal:''});
    }


    render(){
        let {hVal,rVal,pVal,yVal,oVal}=this.state;
        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">发布信息</a>
                            <div className="search"><input type="text" value="" placeholder="搜索" id="search" /><i className="iconfont icon-fangdajing"></i></div>
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
                    </div>
                    <div className="mt70 overflow">
                        <div className="sendInfo">
                            <div className="work">
                                <div className="worMb">
                                    <select
                                        className="span1"
                                        name="部门会议"
                                        value={hVal}
                                        onChange={this.meetType}
                                    >
                                        <option>部门会议</option>
                                        <option>公司会议</option>
                                        <option>销售会议</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="请描述日程内容"
                                        className="workNR"
                                        value={rVal}
                                        onChange={this.titleChange}
                                    />
                                </div>
                                <div className="worMb location">
                                    <span className="span1">位置：</span>
                                    <input className="input1"
                                           type="text"
                                           value={pVal}
                                           onChange={this.localChange}
                                    />
                                </div>
                                <div className="worMb time">
                                    <span className="span1">会议时间：</span>
                                    <div className="time">
                                        <DatePicker
                                            placeholder="请选择日期"
                                            onChange={this.dateChange}
                                            disabledDate={this.disabledDate}

                                        />
                                        <TimePicker
                                            placeholder="请选择时间"
                                            format="HH:mm"
                                            onChange={this.timeChange}
                                        />
                                    </div>
                                </div>
                                <div className="worMb person">
                                    <span className="span1">参与人员：</span>
                                    <input
                                        className="input1"
                                        type="text"
                                        value={yVal}
                                        onChange={this.personChange}
                                    />
                                </div>
                                <div className="worMb person">
                                    <span className="span1">发起人：</span>
                                    <input
                                        className="input1"
                                        type="text"
                                        value={oVal}
                                        onChange={this.originChange}
                                    />
                                </div>
                                <div className="btn">
                                    <button
                                        onClick={this.cancel}
                                    >取消</button>
                                    <button
                                        onClick={this.sure}
                                    >确定</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default connect((state)=>{
    return {
        data:state.reducerCompanySchedule.content,
        pageNum:state.reducerMySchedule.page
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(InfoManage);
