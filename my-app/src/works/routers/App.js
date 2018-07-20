import React,{Component} from 'react';
import {renderComponent} from './routers';
import Login from '../login';
import Index from '../index/index';  //首页
import DepartManage from '../person/dePartManage';
import UserManage from '../person/userManage';
import CompanySchedule from '../schedule/companySchedule';
import MySchedule from '../schedule/mySchedule';
import CompleteSchedule from '../schedule/completeSchedule';
import DocumentManage from '../document/documentManage';
import RecycleBin from '../document/recycleBin';
import InfoManage from '../info/infoManage';
import InfoList from '../info/infoList';
import RoleManage from '../system/roleManage'
import SecurityManage from '../system/securityManage';

import '../css/common.css';          //公共样式
import '../iconfont/iconfont.css';   //小图标样式
import '../css/style.css';          //右侧顶部公共


const routs=[
    {
        path:'/',
        exact:true,
        component:Login
    },
    {
        path:'/index',
        component:Index
    },
    {
        path:'/dePartManage',
        component:DepartManage
    },
    {
        path:'/userManage',
        component:UserManage
    },
    {
        path:'/companySchedule',
        component:CompanySchedule
    },
    {
        path:'/mySchedule',
        component:MySchedule
    },
    {
        path:'/completeSchedule',
        component:CompleteSchedule
    },
    {
        path:'/documentManage',
        component:DocumentManage
    },
    {
        path:'/recycleBin',
        component:RecycleBin
    },
    {
        path:'/infoManage',
        component:InfoManage
    },
    {
        path:'/infoList',
        component:InfoList
    },
    {
        path:'/roleManage',
        component:RoleManage
    },
    {
        path:'/securityManage',
        component:SecurityManage
    }
];


class App extends Component{
    render(){
        return(
            <div>
                {renderComponent(routs)}
            </div>
        )
    }
}
export default App;