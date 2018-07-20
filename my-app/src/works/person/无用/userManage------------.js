import React,{Component} from 'react';
import Nav from '../nav/index';
import UserList from './userList';
import {myQuery} from '../lib/public';
import '../css/style.css';
import '../css/table.css';

class UserManage extends Component{
    constructor(props){
        super(props);
        this.state={
            nVal:'',
            zVal:'',
            bVal:'',
            sVal:'',
            arr:[],     //用来存储数据
        }
    }
    componentDidMount(){  //首次的数据请求，只执行一次
        this.getArr(true);   //上来先渲染数据
    }
    getData = async(url)=>{  //请求数据       (请求数据的公共方法)
        let data=await fetch('http://localhost:8088/usermanage?'+url);
        return await data.json();
    }

    getArr = async(offset)=>{           //请求数据--传页码的数据
        //let {match:{params}}=this.props;
        //let num=params.id;      //就能得到当前的页面的id,将id 值传给current
        let newArr=await this.getData('act=get&page='+1);
        if(offset){     //如果offset 是true 那就让他重新请求数据渲染页面，如果为false 就不让他重新请求数据
            let pageNum=await this.getData('act=get_page_count');       //这是获得当前有多少页的数据 得到的值可以传给数据，用来渲染各个页面的数据
            this.setState({arr:newArr,val:'',pageCount:pageNum.count,current:1});
        }
        this.setState({arr:newArr,val:''});
    };
    addUser=()=>{
        let {addDepartment}=this.refs;
        addDepartment.style.display='block';
    }
    addUserClose=()=>{
        let {addDepartment}=this.refs;
        addDepartment.style.display='none';
    }
    nameChange=(ev)=>{      //弹框员工姓名
        let {value:nVal}=ev.target;
        this.setState({nVal});
    }
    zwChange=(ev)=>{
        let {value:zVal}=ev.target;
        this.setState({zVal});
    }
    leaderChange=(ev)=>{
        let {value:sVal}=ev.target;
        this.setState({sVal});
    }

    bmClick=()=>{
        let partName=myQuery('#partName');
        let html='';
        fetch('http://localhost:8088/department?act=get&page=1')
            .then(e=>e.json()).then(res=>{
            res.forEach((e,i)=>{
                html+=`<option>${e.bmmc}</option>`;
            })
           partName.innerHTML=html;
        });
        console.log(partName);
    }
    bmChange=(ev)=>{
        let {value:bVal}=ev.target;
        this.setState({bVal});
    }

    frameSure=()=> {
        console.log(1);
        let {nVal, zVal, bVal, sVal, arr}=this.state;
        if (nVal && zVal && bVal && sVal) {
            fetch('http://localhost:8088/usermanage', {
                method: 'post',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    act: 'add',
                    ygxm: nVal,
                    ygzw: zVal,
                    bmmc: bVal,
                    sjld: sVal,
                    edit: '编辑'
                }).toString()
            }).then(res=>res.json())
                .then(data=> {
                    arr.push(data);
                    let {addDepartment}=this.refs;
                    addDepartment.style.display = 'none';
                    this.getArr(true);
                })
        } else {
            alert('请输入内容！');
        }
    }
    render(){
        let {arr,nVal,zVal,bVal,sVal}=this.state;
        //console.log(arr);
        //let {match:{params}}=this.props;
        //current=params.id;
        let newArr=arr.map((e,i)=>{
            return <UserList {...{
                key:i+1,
                id:i+1,
                name:e.name,
                pass:e.pass,
                ygxm:e.ygxm,
                ygzw:e.ygzw,
                bmmc:e.bmmc,
                sjld:e.sjld,
                edit:e.edit,
                getArr:this.getArr,
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
                                <input type="text" value="" placeholder="搜索" id="search" />
                                    <i className="iconfont icon-fangdajing"></i>
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
                        </div>
                        <div className="tab">
                            <table>
                                <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
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
                                    {/*<tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>2</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>3</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>4</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>5</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>6</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>7</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>8</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>9</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>10</td>
                                    <td>小明</td>
                                    <td>销售人员</td>
                                    <td>销售部</td>
                                    <td>张三</td>
                                    <td><span>编辑  </span>|<span>  删除</span></td>
                                </tr>*/}
                                </tbody>
                            </table>
                        </div>
                        {/*<div className="page">
                            <a href="javascript:;">《</a>
                            <a href="javascript:;" className="active">1</a>
                            <a href="javascript:;">2</a>
                            <a href="javascript:;">3</a>
                            <a href="javascript:;">4</a>
                            <a href="javascript:;">》</a>
                        </div>*/}
                    </div>
                </section>
                <div className="freameSec" id="freameSec" ref="addDepartment">
                    <div className="frame">
                        <div className="head"><span>新增员工</span><span className="close" onClick={this.addUserClose}>×</span></div>
                        <div className="main">
                            <div>
                                <span>用户名：</span>
                                <input
                                    type="text"
                                    placeholder="请输入用户名"
                                    value={yVal}
                                    onChange={this.nameChange}
                                />
                            </div>
                            <div>
                                <span>密码：</span>
                                <input
                                    type="text"
                                    placeholder="请输入密码"
                                    value={pVal}
                                    onChange={this.nameChange}
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
                                    onClick={this.bmClick}
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
                                onClick={this.frameSure}
                            >确定</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserManage;