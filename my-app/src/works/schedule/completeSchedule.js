import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/myScheduleAction';
import {myQuery} from '../lib/public';
import Nav from '../nav/index';
import CompleteList from './completeList';
import Page from './completePage';

class CompleteSchedule extends Component{
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
            search:'',
            arr:[],
            current:1
        }
    }
    componentDidMount(){
        let {getOtherData,getOtherPage}=this.props;
        setTimeout(function(){
            getOtherPage();
            getOtherData(1);
        });
    }
    //删除时判断全选开关
    on = (onOff, nowpage) => {
        this.setState({
            offset: onOff,
            current: nowpage
        })
    }
    //全选
    checkedAll=(ev)=>{
        let {data}=this.props;
        let {checked}=ev.target;
        data.forEach(e=>{
            if(checked){
                e.checked=true;
            }else{
                e.checked=false;
            }
        })
        this.setState({data});
    }
    //单选方法
    checkedFn=(id,checked)=>{
        let {data}=this.props;
        data.forEach(e=>{
            if(e.id==id){
                e.checked=checked;
            }
        })
        this.setState({data});
    }
    //点击批量删除
    delAll=()=>{
        let {arr,current}=this.state;
        let {data,delAllData,getOtherData}=this.props;
        arr=[];
        let d='';
        console.log(arr,d);
        data.map(e=>{
            if(e.checked){
                arr.push(e.id);
            }
        })
        d=JSON.stringify(arr);
        if(d){
            delAllData(d);
        }
        setTimeout(()=>{
            getOtherData(current);
        })

    }

    //搜索
    searchChange=(ev)=>{
        let {getOtherData,getOtherPage}=this.props;
        let {current}=this.state;
        let {value:search}=ev.target;
        this.setState({search});
        if(search==''){
            getOtherPage();
            getOtherData(current);
        }
    }
    searchClick=()=>{
        let {search}=this.state;
        let {getSearchData}=this.props;
        console.log(getSearchData);
        getSearchData(search);
    }

    //查看按钮的方法
    lookFrame=(ev)=>{
        let {hVal,rVal,pVal,yVal,oVal,dt,tt}=this.state;
        myQuery('#lookSchedule').style.display='block';
        let {data}=this.props;
        //console.log(data);
        data.forEach((e,i)=>{
            if(e.id==ev){
                console.log(e);
                this.setState({
                    id:ev,
                    hVal:e.type,
                    rVal:e.title,
                    pVal:e.local,
                    dt:e.date,
                    tt:e.time,
                    yVal:e.person,
                    oVal:e.originator
                })
            }
        });

    }
    close=()=>{
        myQuery('#lookSchedule').style.display='none';
    }
    cancel=()=>{
        myQuery('#lookSchedule').style.display='none';
    }
    sure=()=>{
        myQuery('#lookSchedule').style.display='none';
    }

    render(){
        let {data,pageNum}=this.props;
        let {hVal,rVal,pVal,yVal,oVal,dt,tt,search,current}=this.state;
        let newArr=data.map((e,i)=>{
            return <CompleteList{...{
                key:i,
                i,
                e,
                id:e.id,
                checked:e.checked,
                lookFrame:this.lookFrame,
                checkedFn:this.checkedFn,
                current
            }}/>
        })
        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">员工管理</a>
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="搜索"
                                    id="search"
                                    value={search}
                                    onChange={this.searchChange}
                                />
                                <i
                                    className="iconfont icon-fangdajing"
                                    onClick={this.searchClick}
                                ></i></div>
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
                        <div className="create">
                            <button onClick={this.delAll}>批量删除</button>
                        </div>
                        <div className="tab" style={{"marginTop":"15px"}} >
                            <table>
                                <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            checked={data.length?data.every(e=>e.checked):false}
                                            onChange={this.checkedAll}
                                        />
                                    </th>
                                    <th>ID</th>
                                    <th>发起人</th>
                                    <th>会议内容</th>
                                    <th>时间</th>
                                    <th>类型</th>
                                    <th>参与人</th>
                                    <th>状态</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {newArr}
                                {/*<tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售部</td>
                                    <td>销售部</td>
                                    <td>2018-06-06 13:00-15:00</td>
                                    <td><span>查看  </span></td>
                                </tr>*/}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Page  count={pageNum} on={this.on}/>
                </section>
                <div className="freameSec" id="lookSchedule">
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
                                    disabled="disabled"
                                />
                            </div>
                            <div className="worMb location">
                                <span className="span1">位置：</span>
                                <input className="input1"
                                       type="text"
                                       value={pVal}
                                       disabled="disabled"
                                />
                            </div>
                            <div className="worMb time">
                                <span className="span1">会议时间：</span>
                                <div className="time">
                                    <input
                                        className="timeInput"
                                        type="text"
                                        value={dt}
                                        disabled="disabled"
                                    />
                                    <input
                                        className="timeInput"
                                        type="text"
                                        value={tt}
                                        disabled="disabled"
                                    />

                                </div>
                            </div>
                            <div className="worMb person">
                                <span className="span1">参与人员：</span>
                                <input
                                    className="input1"
                                    type="text"
                                    value={yVal}
                                    disabled="disabled"
                                />
                            </div>
                            <div className="worMb person">
                                <span className="span1">发起人：</span>
                                <input
                                    className="input1"
                                    type="text"
                                    value={oVal}
                                    disabled="disabled"
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
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(CompleteSchedule);


