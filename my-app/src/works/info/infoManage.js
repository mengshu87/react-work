import React,{Component} from 'react';
import Nav from '../nav/index';

class InfoManage extends Component{

    render(){
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
                                <div className="title">
                                    <span>
                                        <select className="infoList">
                                            <option>公告</option>
                                            <option>通知</option>
                                            <option>会议</option>
                                        </select>
                                    </span>
                                    <input type="text" placeholder="请描述日程内容" className="infoInput"/>
                                </div>
                                <div className="location">
                                    <span>位置：</span>
                                    <input type="text" />
                                </div>
                                <div className="time">
                                    <span>起止时间:</span>
                                    <input type="text" /><input type="text"/>到<input type="text" /><input type="text"/>
                                </div>
                                <div className="remind">
                                    <span>定时提醒:</span>
                                    <select>
                                        <option>不提醒</option>
                                        <option>准时</option>
                                        <option>提前10分钟</option>
                                        <option>提前30分钟</option>
                                        <option>提前60分钟</option>
                                        <option>提前1天</option>
                                    </select>
                                </div>
                                <div className="person">
                                    <span>参与人员</span>
                                    <input type="text" />
                                </div>
                                <div className="btn">
                                    <button>取消</button>
                                    <button>确定</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default InfoManage;