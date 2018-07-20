import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/userAction';
import Nav from '../nav/index';
import UserList from './userList';
import Page from './userPage';
import {myQuery} from '../lib/public';
import '../css/style.css';
import '../css/table.css';
import '../css/userManage.css';

class UserManage extends Component{
    constructor(props){
        super(props);
        this.state={
            search:'',
            yVal:'',
            pVal:'',
            nVal:'',
            zVal:'',
            bVal:'',
            sVal:'',
            arr:[],
            current:1,
            offset:false

        }
    }
    componentDidMount(){
        let {getUserData,data,getUserPage}=this.props;
        setTimeout(function () {
            getUserPage();
            getUserData(1);
        })
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
    delUser=()=>{
        let {arr,current}=this.state;
        let {data,delAllUserData,getUserData}=this.props;
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
            delAllUserData(d);
        }
        //console.log(arr,d);
        setTimeout(()=>{
            getUserData(current);
        })

    }
    //搜索
    searchChange=(ev)=>{
        let {getUserData,getUserPage}=this.props;
        let {current}=this.state;
        let {value:search}=ev.target;
        this.setState({search});
        if(search==''){
            getUserPage();
            getUserData(current);
        }
    }
    searchClick=()=>{
        let {search}=this.state;
        let {getSearchData}=this.props;
        console.log(getSearchData);
        getSearchData(search);
    }

    //添加员工
    addUser=(ev)=>{
        //该员工属于哪个部门，先去请求接口
        let partName=myQuery('#partName');
        let html='';
        fetch('http://localhost:8088/department?act=get&page=1')
            .then(e=>e.json()).then(res=>{
            res.forEach((e,i)=>{
                html+=`<option>${e.bmmc}</option>`;
            })
            partName.innerHTML=html;
        });

        let {yVal,pVal,nVal,zVal,bVal,sVal}=this.state;
        this.setState({yVal:'',pVal:'',nVal:'',zVal:'',bVal:'',sVal:''});
        myQuery('#freameAdd').style.display='block';
    }
    //弹框关闭按钮
    addUserClose=()=>{
        myQuery('#freameAdd').style.display='none';
    }
    userChange=(ev)=>{
        let {value:yVal}=ev.target;
        this.setState({yVal});
    }
    passChange=(ev)=>{
        let {value:pVal}=ev.target;
        this.setState({pVal});
    }
    nameChange=(ev)=>{
        let {value:nVal}=ev.target;
        this.setState({nVal});
    }
    zwChange=(ev)=>{
        let {value:zVal}=ev.target;
        this.setState({zVal});
    }
    bmChange=(ev)=>{
        let {value:bVal}=ev.target;
        this.setState({bVal});
    }
    leaderChange=(ev)=>{
        let {value:sVal}=ev.target;
        this.setState({sVal});
    }
    frameSure=()=>{
        let {addUserData,getUserData,getUserPage}=this.props;
        let {yVal,pVal,nVal,zVal,bVal,sVal,current}=this.state;
        let obj={
            act:'add',
            checked:false,
            name:yVal,
            pass:pVal,
            ygxm:nVal,
            ygzw:zVal,
            bmmc:bVal,
            sjld:sVal
        }
        addUserData(obj);
        async function asyncGetData() {
            let data1 = await getUserPage();
            let data2 = await getUserData(current);
        }
        console.log(current);
        asyncGetData();

        myQuery('#freameAdd').style.display='none';
        this.setState({yVal:'',pVal:'',nVal:'',zVal:'',bVal:'',sVal:''});
    }

    //点击编辑查看按钮的公共方法
    editFrame=(d)=>{
        let {yVal,pVal,nVal,zVal,bVal,sVal}=this.state;
        myQuery('#freameEdit').style.display='block';
        let {data}=this.props;
        data.forEach((e,i)=>{
            if(e.id==d){
                this.setState({
                    id:d,
                    yVal:e.name,
                    pVal:e.pass,
                    nVal:e.ygxm,
                    zVal:e.ygzw,
                    bVal:e.bmmc,
                    sVal:e.sjld
                })
            }
        });
    }
    editUserClose=()=>{
        myQuery('#freameEdit').style.display='none';
    }
    editUserChange=(ev)=>{
        let {value:yVal}=ev.target;
        this.setState({yVal});
    }
    editPassChange=(ev)=>{
        let {value:pVal}=ev.target;
        this.setState({pVal});
    }
    editNameChange=(ev)=>{
        let {value:nVal}=ev.target;
        this.setState({nVal});
    }
    editZwChange=(ev)=>{
        let {value:zVal}=ev.target;
        this.setState({zVal});
    }
    editBmChange=(ev)=>{
        let {value:bVal}=ev.target;
        this.setState({bVal});
    }
    editLeaderChange=(ev)=>{
        let {value:sVal}=ev.target;
        this.setState({sVal});
    }
    editFrameSure=()=>{
        let {updateUserData,getUserData}=this.props;
        let {yVal,pVal,nVal,zVal,bVal,sVal,id,current}=this.state;
        let obj={
            act:'edit',
            id:id,
            checked:false,
            name:yVal,
            pass:pVal,
            ygxm:nVal,
            ygzw:zVal,
            bmmc:bVal,
            sjld:sVal
        }
        updateUserData(obj);
        setTimeout(function(){
            getUserData(current);
            myQuery('#freameEdit').style.display='none';
        });
    }

    render(){
        let {data,pageNum,getUserData}=this.props;
        let {yVal,pVal,nVal,zVal,bVal,sVal,current,search}=this.state;
        let newArr=data.map((e,i)=>{
            return <UserList {...{
                key:i+1,
                i,
                e,
                id:e.id,
                checked:e.checked,
                name:e.name,
                ygxm:e.ygxm,
                ygzw:e.ygzw,
                bmmc:e.bmmc,
                sjld:e.sjld,
                editFrame:this.editFrame,
                checkedFn:this.checkedFn,
                current
            }}/>
        });

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
                                ></i>
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
                    </div>
                    <div className="mt70 overflow">
                        <div className="create">
                            <button onClick={this.addUser}>新增员工</button>
                            <button onClick={this.delUser} style={{'marginLeft':'10px'}}>批量删除</button>
                        </div>
                        <div className="tab">
                            <table>
                                <thead>
                                <tr>
                                    <th><input 
                                        type="checkbox"
                                        id="checkAll"
                                        checked={data.length?data.every(e=>e.checked):false}
                                        onChange={this.checkedAll}
                                    /></th>
                                    <th>ID</th>
                                    <th>用户名</th>
                                    <th>员工姓名</th>
                                    <th>职位</th>
                                    <th>所属部门</th>
                                    <th>上级领导</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {newArr}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Page  count={pageNum} on={this.on}/>
                </section>
                <div className="freameSec" id="freameAdd">
                    <div className="frame">
                        <div className="head"><span>新增员工</span><span className="close" onClick={this.addUserClose}>×</span></div>
                        <div className="main">
                            <div>
                                <span>用户名：</span>
                                <input
                                    type="text"
                                    placeholder="请输入用户名"
                                    value={yVal}
                                    onChange={this.userChange}
                                />
                            </div>
                            <div>
                                <span>密码：</span>
                                <input
                                    type="text"
                                    placeholder="请输入密码"
                                    value={pVal}
                                    onChange={this.passChange}
                                />
                            </div>
                            <div>
                                <span>员工姓名：</span>
                                <input
                                    type="text"
                                    placeholder="请输入员工姓名"
                                    value={nVal}
                                    onChange={this.nameChange}
                                />
                            </div>
                            <div>
                                <span>职位：</span>
                                <input
                                    type="text"
                                    placeholder="请输入职位"
                                    value={zVal}
                                    onChange={this.zwChange}
                                />
                            </div>
                            <div>
                                <span>所属部门：</span>
                                <select
                                    id="partName"
                                    value={bVal}
                                    onChange={this.bmChange}

                                >
                                </select>
                            </div>
                            <div>
                                <span>上级领导：</span>
                                <input
                                    type="text"
                                    placeholder="请输入领导名"
                                    value={sVal}
                                    onChange={this.leaderChange}
                                />
                            </div>
                            <button
                                className="btn"
                                onClick={this.frameSure.bind(this)}
                            >确定</button>
                        </div>
                    </div>
                </div>
                <div className="freameSec" id="freameEdit">
                    <div className="frame">
                        <div className="head"><span>编辑员工</span><span className="close" onClick={this.editUserClose}>×</span></div>
                        <div className="main">
                            <div>
                                <span>用户名：</span>
                                <input
                                    type="text"
                                    placeholder="请输入用户名"
                                    value={yVal}
                                    onChange={this.editUserChange}
                                />
                            </div>
                            <div>
                                <span>密码：</span>
                                <input
                                    type="text"
                                    placeholder="请输入密码"
                                    value={pVal}
                                    onChange={this.editPassChange}
                                />
                            </div>
                            <div>
                                <span>员工姓名：</span>
                                <input
                                    type="text"
                                    placeholder="请输入员工姓名"
                                    value={nVal}
                                    onChange={this.editNameChange}
                                />
                            </div>
                            <div>
                                <span>职位：</span>
                                <input
                                    type="text"
                                    placeholder="请输入职位"
                                    value={zVal}
                                    onChange={this.editZwChange}
                                />
                            </div>
                            <div>
                                <span>所属部门：</span>
                                <select
                                    id="editPartName"
                                    value={bVal}
                                    onChange={this.editBmChange}
                                >
                                </select>
                            </div>
                            <div>
                                <span>上级领导：</span>
                                <input
                                    type="text"
                                    placeholder="请输入领导名"
                                    value={sVal}
                                    onChange={this.editLeaderChange}
                                />
                            </div>
                            <button
                                className="btn"
                                onClick={this.editFrameSure}
                            >确定</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect((state)=>{
    //console.log(state);
    return {
        data:state.reducerUser.content,
        pageNum:state.reducerUser.page
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(UserManage);
