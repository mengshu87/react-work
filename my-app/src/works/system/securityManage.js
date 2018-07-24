import React,{Component} from 'react';
import cookie from 'react-cookies'
import Nav from '../nav/index';
import {myQuery} from '../lib/public';
import '../css/security.css';
class SecurityManage extends Component{
    constructor(props){
        super(props);
        const { cookies } = props;
        this.state = {
            name:cookie.load('name'),
            primaryPass:'',
            newPass:'',
            sureNewPass:''
        };
    }
    componentDidMount(){
        let {primaryPass,name}=this.state;
        let {getSearchData}=this.props;
        fetch('http://localhost:8088/usermanage?act=search&name='+name)
            .then(e=>e.json())
            .then(res=>{
                res.map(e=>{
                    primaryPass=e.pass;
                    console.log(primaryPass);
                })
                this.setState({primaryPass});
            })
    }
    clickUser=()=>{
        myQuery('#signOut').style.opacity=1;
    }
    signOut=()=>{
        let {history}=this.props;
        setTimeout(function(){
            history.push('/');
        },500)
    };
    passChange=(ev)=>{
        let {value:newPass}=ev.target;
        this.setState({newPass});
    }
    surePassChange=(ev)=>{
        let {value:sureNewPass}=ev.target;
        this.setState({sureNewPass});
    }
    sure=()=>{
        let {newPass,sureNewPass}=this.state;
        if(newPass!=sureNewPass){
            alert('两次输入的密码不一致！')
        }else{
           /* setTimeout(function(){
                fetch('http://localhost:8088/usermanage?act=findPass',{

                })
                    .then(e=>e.json())
                    .then(res=>{
                        res.map(e=>{
                            primaryPass=e.pass;
                            console.log(primaryPass);
                        })
                        this.setState({primaryPass});
                    })
            })*/


        }
    }
    cancel=()=>{
        let {newPass,sureNewPass}=this.state;
        this.setState({newPass:'',sureNewPass:''});
    }

    render(){
        let {name,primaryPass,newPass,sureNewPass}=this.state;

        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">安全管理</a>
                            <div className="search">
                                <input type="text" value="" placeholder="搜索" id="search"/>
                                    <i className="iconfont icon-fangdajing"></i></div>
                            <ul className="tips">
                                <li>
                                    <a><i className="iconfont icon-lingdang"></i></a>
                                </li>
                                <li>
                                    <a><i className="iconfont icon-youxiang"></i></a>
                                </li>
                                <li style={{'position':'relative'}}>
                                    <a>
                                        <span
                                            onClick={this.clickUser}
                                        >呦呦</span>
                                    </a>
                                    <div
                                        className="signOut"
                                        id="signOut"
                                        onClick={this.signOut}
                                    >退出</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt70 overflow" >
                        <div className="security">
                            <div>
                                <span>用户名：</span>
                                <span>{name}</span>
                            </div>
                            <div>
                                <span>原密码：</span>
                                <input
                                    type="text"
                                    value={primaryPass}
                                    disabled="true"
                                />
                            </div>
                            <div>
                                <span>新密码：</span>
                                <input
                                    type="text"
                                    value={newPass}
                                    onChange={this.passChange}
                                />
                            </div>
                            <div>
                                <span>确认新密码：</span>
                                <input
                                    type="text"
                                    value={sureNewPass}
                                    onChange={this.surePassChange}
                                />
                            </div>
                            <div className="btn">
                                <button onClick={this.sure}>确定</button>
                                <button onClick={this.cancel}>取消</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default SecurityManage;


