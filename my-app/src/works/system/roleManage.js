import React,{Component} from 'react';
import Nav from '../nav/index';
import '../css/style.css';

class RoleManage extends Component{
    
    render(){
        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">角色管理</a>
                            <div className="search">
                                <input type="text" value="" placeholder="搜索" id="search"/>
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
                            <button>添加角色</button>
                        </div>
                        <div className="tab">
                            <table>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>角色名称</th>
                                    <th>备注</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>系统管理员</td>
                                    <td></td>
                                    <td><span>设置权限  </span>|<span> 查看权限 </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>普通用户</td>
                                    <td></td>
                                    <td><span>设置权限  </span>|<span> 查看权限 </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>部门主管</td>
                                    <td></td>
                                    <td><span>设置权限  </span>|<span> 查看权限 </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>人事管理员</td>
                                    <td></td>
                                    <td><span>设置权限  </span>|<span> 查看权限 </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>信息管理员</td>
                                    <td></td>
                                    <td><span>设置权限  </span>|<span> 查看权限 </span>|<span>  删除</span></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default RoleManage;