import React,{Component} from 'react';
import './css/login.css';
import './css/common.css';
import './iconfont/iconfont.css'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            uVal:'',
            pVal:'',
            info:''
        }
    }
    userChange=(ev)=>{
        let {value:uVal}=ev.target;
        this.setState({uVal});
    };
    passChange=(ev)=>{
        let {value:pVal}=ev.target;
        this.setState({pVal});
    };
    click=()=>{
        let {history}=this.props;
        let {uVal,pVal,info}=this.state;
        let {tip}=this.refs;
        console.log(tip);
        if(uVal&&pVal){
                fetch('http://localhost:8088/user',{
                method:'post',
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                body:`act=login&name=${uVal}&pass=${pVal}`
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.code===0){
                    this.setState({info:data.msg});
                    setTimeout(function(){
                        history.push('/index')
                    },1000);
                }
                if(data.code===1){
                    this.setState({info:data.msg,uVal:'',pVal:''});
                    let that=this;
                    setTimeout(function(){
                        that.setState({info:' '});
                    },1000)
                }
                if(data.code===2){
                    this.setState({info:data.msg,uVal:'',pVal:''});
                    let that=this;
                    setTimeout(function(){
                        that.setState({info:' '});
                    },1000)
                }
            });
        }

    }
    
    render(){
        let {uVal,pVal,info}=this.state;
        return(
            <div className="wrapper">
                <div className="logo">
                    <h2>登录</h2>
                    <div className="user">
                        <span>
                            <i className="iconfont icon-yonghuming"></i>
                        </span>
                        <input
                            type="text"
                            placeholder="用户名"
                            className="user"
                            value={uVal}
                            onChange={this.userChange}
                        />
                    </div>
                    <div className="pass">
                        <span>
                            <i className="iconfont icon-mima1"></i>
                        </span>
                        <input
                            type="password"
                            placeholder="密码"
                            className="pass"
                            value={pVal}
                            onChange={this.passChange}
                        />
                    </div>
                    <div className="info" ref="tip">{info}</div>
                    <button
                        className="btn"
                        onClick={this.click}
                    >登录</button>
                </div>
            </div>
        )
    }
}
export default Login;