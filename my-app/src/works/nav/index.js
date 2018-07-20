import React,{Component} from 'react';
import { Link } from 'react-router-dom'

import './index.css';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            arr:[
                {
                    icon:'iconfont icon-shouye',
                    name:'首页',
                    onOff:false,
                    children:[]
                },
                {
                    icon:'iconfont icon-hrrenshirenshiguanli380',
                    name:'人事管理',
                    onOff:false,
                    children:[
                        {
                            name:'部门管理',
                            rs:'/departManage'
                        },
                        {
                            name:'员工管理',
                            rs:'/userManage'
                        }
                    ]
                },
                {
                    icon:'iconfont icon-Shapecopy',
                    name:'日程管理',
                    onOff:false,
                    children:[
                        {
                            name:'公司日程',
                            rs:'/companySchedule'
                        },
                        {
                            name:'我的日程',
                            rs:'/mySchedule'
                        },
                        {
                            name:'已完成日程',
                            rs:'/completeSchedule'
                        }
                    ]
                },
                {
                    icon:'iconfont icon-wendang',
                    name:'文件管理',
                    onOff:false,
                    children:[
                        {
                            name:'文件列表',
                            rs:'/documentManage'
                        },
                        {
                            name:'回收站',
                            rs:'/recycleBin'
                        }
                    ]
                },
                {
                    icon:'iconfont icon-xiaoxi',
                    name:'信息管理',
                    onOff:false,
                    children:[
                        {
                            name:'发布信息',
                            rs:'/infoManage'
                        },
                        {
                            name:'信息列表',
                            rs:'/infoList'
                        }
                    ]
                },
                {
                    icon:'iconfont icon-xitong',
                    name:'系统管理',
                    onOff:false,
                    children:[
                        {
                            name:'角色管理',
                            rs:'/roleManage'
                        },
                        {
                            name:'安全管理',
                            rs:'/securityManage'
                        }
                    ]
                }
            ]
        }
    };
    click=(ii)=>{
        let {arr}=this.state;
        arr.forEach((e,i)=>{
            if(i!==ii){
                e.onOff=false;
            }
        });
        arr[ii].onOff=!arr[ii].onOff;
        this.setState({arr});
    };
    render(){
        let {arr}=this.state;
        let arr2=[];
        let num=null;
        arr.map((e,i)=>{
            if(e.children){
                let arr3=[];
                arr3=e.children.map((ee,i)=>{
                    num++;
                    return (
                        <li  key={+new Date() + num} >
                            <Link to={ee.rs}>{ee.name}</Link>
                        </li >
                    )
                });
                arr2.push(arr3);
            }
        });
        let newArr2=[];
        let newArr=arr.map((e,i)=>{
            let classA=e.onOff?'list active':'list';
            newArr2=arr2[i];

            return (
                <li className={classA} key={i} onClick={this.click.bind(this, i)}>
                    <a>
                        <i className={e.icon}></i>
                        <span>{e.name}</span>
                    </a>
                    <ul className="ul">
                        {newArr2}
                    </ul>
                </li>
            )
        });
        return(
            <nav className="left">
                <div className="leftPhoto">
                    <div className="photo">
                        <span><img src={require("../img/photo.png")}/></span>
                        <p>呦呦</p>
                        <p>总经理</p>
                    </div>
                </div>
                <ul className="navList">
                    {newArr}
                </ul>
            </nav>
        )
    }
}
export default Nav;