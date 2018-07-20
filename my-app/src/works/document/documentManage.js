import React,{Component} from 'react';
import Nav from '../nav/index';
import './document.css';
class DocumentManage extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">员工管理</a>
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
                    <div className="mt70 overflow">
                        <div className="documentBd">
                            <div className="documentBtn">
                                <button>新建文件</button>
                                <button>上传文件</button>
                                <button>下载文件</button>
                                <button>重命名</button>
                                <button>删除</button>
                                <button>共享</button>
                            </div>
                            <div className="folders">
                                <div className="file-item hover">
                                    <img src={require("../img/file.png")} />
                                    <span className="folder-name">公司规章制度</span>
                                    <input type="text" className="editor" style={{"display":"none"}}/>
                                    <i className="checked" style={{"display":"none"}}></i>
                                </div>
                                <div className="file-item hover">
                                    <img src={require("../img/file.png")} />
                                    <span className="folder-name">公司规章制度</span>
                                    <input type="text" className="editor" style={{"display":"none"}}/>
                                    <i className="checked" style={{"display":"none"}}></i>
                                </div>
                                <div className="file-item hover">
                                    <img src={require("../img/file.png")} />
                                    <span className="folder-name">公司规章制度</span>
                                    <input type="text" className="editor" style={{"display":"none"}}/>
                                    <i className="checked" style={{"display":"none"}}></i>
                                </div>
                                <div className="file-item hover">
                                    <img src={require("../img/file.png")} />
                                    <span className="folder-name">公司规章制度</span>
                                    <input type="text" className="editor" style={{"display":"none"}}/>
                                    <i className="checked" style={{"display":"none"}}></i>
                                </div>
                                <div className="file-item hover">
                                    <img src={require("../img/file.png")} />
                                    <span className="folder-name">公司规章制度</span>
                                    <input type="text" className="editor" style={{"display":"none"}}/>
                                    <i className="checked" style={{"display":"none"}}></i>
                                </div>
                                <div className="file-item hover">
                                    <img src={require("../img/file.png")} />
                                    <span className="folder-name">公司规章制度</span>
                                    <input type="text" className="editor" style={{"display":"none"}}/>
                                    <i className="checked" style={{"display":"none"}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default DocumentManage;