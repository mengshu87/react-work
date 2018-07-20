import React,{Component} from 'react';
import Nav from '../nav/index';
import './security.css';
class SecurityManage extends Component{

    render(){
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
                                <li>
                                    <a><span>呦呦</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt70 overflow" >
                        <div className="security">
                            <div><span>用户名：</span><span>youyou</span></div>
                            <div><span>密码：</span><input type="text" /></div>
                            <div><span>确认密码：</span><input type="text" /></div>
                            <div className="btn">
                                <button>确定</button>
                                <button>取消</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default SecurityManage;