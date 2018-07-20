import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/myScheduleAction';
import {myQuery} from '../lib/public';
import Nav from '../nav/index';
import MyList from './myList';
import '../css/schedule.css';
import '../css/frame.css';
import { DatePicker,TimePicker,Button } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
//const { RangePicker, MonthPicker } = DatePicker;

class MySchedule extends Component{
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
    componentDidMount(){
        let {getData,getPage}=this.props;
        setTimeout(function(){
            getPage();
            getData(1);
        });
    }


    addData=()=>{
        myQuery('#addSchedule').style.display='block';

    }
    close=()=>{
        myQuery('#addSchedule').style.display='none';
    }
    cancel=()=>{
        myQuery('#addSchedule').style.display='none';
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
        console.log(dt);
        this.setState({dt});
        this.setState({dateString});
    };

    //时间控件
    timeChange=(time, timeString)=>{
        let {tt}=this.state;
        tt=timeString;
        console.log(tt);
        this.setState({tt});
        this.setState({timeString});
    }
    handleOpenChange = (open) => {
        this.setState({ open });
    }
    handleClose = () => this.setState({ open: false })


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
        myQuery('#addSchedule').style.display='none';
        this.setState({hVal:'',rVal:'',pVal:'',dt:'',tt:'',mVal:'',yVal:'',oVal:''});
    }
    render(){
        let {hVal,rVal,pVal,yVal,oVal}=this.state;
        let {data}=this.props;
        let newArr=data.map((e,i)=>{
            return <MyList{...{
                key:i+1,
                i,
                e,
                id:e.id
            }}/>
        })


        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">我的日程</a>
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
                        <div className="schedule">
                            <button
                                className="btn"
                                onClick={this.addData}
                            >添加日程</button>
                            <div>
                                {newArr}
                                {/*<div className="work">
                                    <h5 className="red">开会</h5>
                                    <div>2018年06月06日 上午09:00开会</div>
                                    <div>
                                        <span>位置:</span>
                                        <span>第三会议室</span>
                                    </div>
                                    <div className="worMb time">
                                        <span>起止时间:</span>
                                        <span>2018-06-06  09:00-12：00</span>
                                    </div>
                                    <div className="worMb">
                                        <span>定时提醒:</span>
                                        <span>当天上午9点</span>
                                    </div>
                                    <div className="worMb person">
                                        <span>参与人员</span>
                                        <span>张三、李中</span>
                                    </div>
                                    <div>
                                        <span>发起人:</span>
                                        <span>总经理</span>
                                    </div>
                                </div>
                                <div className="work">
                                    <h5 className="green">拜访客户</h5>
                                    <div>2018年06月06日 上午09:00</div>
                                    <div>
                                        <span>位置:</span>
                                        <span>长安街徽行大厦</span>
                                    </div>
                                    <div className="worMb time">
                                        <span>起止时间:</span>
                                        <span>2018-06-06  09:00-12：00</span>
                                    </div>
                                    <div className="worMb">
                                        <span>定时提醒:</span>
                                        <span>当天上午9点</span>
                                    </div>
                                    <div className="worMb person">
                                        <span>参与人员</span>
                                        <span>张三、李中</span>
                                    </div>
                                    <div>
                                        <span>发起人:</span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="work">
                                    <h5 className="blue">发邮件</h5>
                                    <div>2018年06月06日 上午09:00开会</div>
                                    <div>
                                        <span>位置:</span>
                                        <span>第三会议室</span>
                                    </div>
                                    <div className="worMb time">
                                        <span>起止时间:</span>
                                        <span>2018-06-06  09:00-12：00</span>
                                    </div>
                                    <div className="worMb">
                                        <span>定时提醒:</span>
                                        <span>当天上午9点</span>
                                    </div>
                                    <div className="worMb person">
                                        <span>参与人员</span>
                                        <span>张三、李中</span>
                                    </div>
                                    <div>
                                        <span>发起人:</span>
                                        <span>总经理</span>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="freameSec" id="addSchedule">
                    <div className="frame framework">
                        <div className="head">
                            <span>日程</span>
                            <span
                                className="close"
                                onClick={this.close}
                            >×</span>
                        </div>
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
                                        onChange={this.timeChange}
                                        open={this.state.open}
                                        onOpenChange={this.handleOpenChange}
                                        addon={() => (
                                              <Button size="small" type="primary" onClick={this.handleClose}>
                                                Ok
                                              </Button>
                                        )}
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
            </div>
        )
    }
}
export default connect((state)=>{
    return {
        data:state.reducerMySchedule.content,
        pageNum:state.reducerMySchedule.page
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(MySchedule);
