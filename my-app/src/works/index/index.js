import React,{Component} from 'react';
import Nav from '../nav/index';      //左侧导航
import '../css/common.css';
import '../iconfont/iconfont.css';
import '../css/style.css'
import '../css/main.css'
class Index extends Component{
    render(){
        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">首页</a>
                            <div className="search">
                                <input type="text" value="" placeholder="搜索" id="search" />
                                <i className="iconfont icon-fangdajing"></i>
                            </div>
                        </div>
                    </div>
                    <div className="mt70 overflow">
                        <div className="mainHeader">
                            <div className="headerPhoto"><img src={require("../img/photo.png")}/></div>
                            <div className="headerName">
                                <p className="name">呦呦</p>
                                <p className="job"><span>公司</span> / <span>技术部</span> / <span>前端工程师</span></p>
                            </div>
                            <ul className="headTips">
                                <li>
                                    <p>未读邮件</p>
                                    <p>33</p>
                                </li>
                                <li className="line"></li>
                                <li>
                                    <p>提示</p>
                                    <p>12</p>
                                </li>
                            </ul>
                        </div>
                        <div className="mainLeft">
                            <h6>工作圈</h6>
                            <div className="say"><input type="text" placeholder="发布信息" /></div>
                            <div className="tabs">
                                <div className="tabList">
                                    <a href="javascript:;" className="active">我的关注</a>
                                    <a href="javascript:;" className="">全公司</a>
                                    <a href="javascript:;" className="">我的收藏</a>
                            </div>
                            <div className="box">
                                <div className="boxCont show">
                                    <div className="ListCont">
                                        <div className="photo"><img src={require("../img/photo.png")}/></div>
                                        <div className="content">
                                            <div className="name">呦呦</div>
                                            <p>大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！</p>
                                        </div>
                                        <div className="btns">
                                            <a className="time">2小时前</a>
                                            <a className="zan">
                                                <i className="iconfont icon-zan"></i>
                                                <span>赞</span>
                                            </a>
                                            <a className="shoucang">
                                                <i className="iconfont icon-shoucang"></i>
                                                <span>收藏</span>
                                            </a>
                                            <a className="del">
                                                <i className="iconfont icon-shanchu"></i>
                                                <span>删除</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ListCont">
                                        <div className="photo"><img src={require("../img/photo.png")}/></div>
                                        <div className="content">
                                            <div className="name">呦呦</div>
                                            <p>大家好，我是新同事，呦呦，请多关照！</p>
                                        </div>
                                        <div className="btns">
                                            <a className="time">2小时前</a>
                                            <a className="zan">
                                                <i className="iconfont icon-zan"></i>
                                                <span>赞</span>
                                            </a>
                                            <a className="shoucang">
                                                <i className="iconfont icon-shoucang"></i>
                                                <span>收藏</span>
                                            </a>
                                            <a className="del">
                                                <i className="iconfont icon-shanchu"></i>
                                                <span>删除</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ListCont">
                                        <div className="photo"><img src={require("../img/photo.png")}/></div>
                                        <div className="content">
                                            <div className="name">呦呦</div>
                                            <p>大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！</p>
                                        </div>
                                        <div className="btns">
                                            <a className="time">2小时前</a>
                                            <a className="zan">
                                                <i className="iconfont icon-zan"></i>
                                                <span>赞</span>
                                            </a>
                                            <a className="shoucang">
                                                <i className="iconfont icon-shoucang"></i>
                                                <span>收藏</span>
                                            </a>
                                            <a className="del">
                                                <i className="iconfont icon-shanchu"></i>
                                                <span>删除</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxCont">
                                    <div className="ListCont">
                                        <div className="photo"><img src={require("../img/photo.png")}/></div>
                                        <div className="content">
                                            <div className="name">呦呦</div>
                                            <p>大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！大家好，我是新同事，呦呦，请多关照！</p>
                                        </div>
                                        <div className="btns">
                                            <a className="time">2小时前</a>
                                            <a className="zan">
                                                <i className="iconfont icon-zan"></i>
                                                <span>赞</span>
                                            </a>
                                            <a className="shoucang">
                                                <i className="iconfont icon-shoucang"></i>
                                                <span>收藏</span>
                                            </a>
                                            <a className="del">
                                                <i className="iconfont icon-shanchu"></i>
                                                <span>删除</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="boxCont">
                                    <div className="ListCont" style={{'borderBottom':'none'}}>
                                        <img src={require("../img/a1.png")}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="mainRight">
                            <h6>今日工作<span><i className="iconfont icon-tianjia"></i></span></h6>
                            <div className="workCont">
                                <p><span></span><span>开会</span><span>14:00-15:00</span></p>
                                <p><span></span><span>开会</span><span>14:00-15:00</span></p>
                                <p><span></span><span>开会</span><span>14:00-15:00</span></p>
                                <p><span></span><span>开会</span><span>14:00-15:00</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Index;