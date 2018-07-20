import React,{Component} from 'react';
import Nav from '../nav/index';

class RecycleBin extends Component{

    render(){
        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">回收站</a>
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
                        <div className="tab" style={{"margin-top":"15px"}}>
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>文件名</th>
                                    <th>创建人</th>
                                    <th>所属部门</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>我的文档</td>
                                    <td>张三</td>
                                    <td>销售部</td>
                                    <td><span>撤回  </span>|<span>  删除</span></td>
                                </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="page">
                            <a href="javascript:;">《</a>
                            <a href="javascript:;" className="active">1</a>
                            <a href="javascript:;">2</a>
                            <a href="javascript:;">3</a>
                            <a href="javascript:;">4</a>
                            <a href="javascript:;">》</a>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default RecycleBin;