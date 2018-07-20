import React,{Component} from 'react';
import Nav from '../nav/index';
import './info.css'

class InfoList extends Component{
    
    render(){
        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">信息列表</a>
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
                        <div className="infoSearch">
                            <span>查询：</span>
                            <select>
                                <option>公司发布</option>
                                <option>部门发布</option>、
                                <option>个人发布</option>
                            </select>
                        </div>
                        <div className="tab">
                            <table>
                                <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>ID</th>
                                    <th>发布人</th>
                                    <th>信息简介</th>
                                    <th>所属部门</th>
                                    <th>创建时间</th>
                                    <th>状态</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="green">已读  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="red">未读  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="red">未读  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="red">未读  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="red">未读  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="red">未读  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="red">未读  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="red">未读  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="red">未读  </span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>小明</td>
                                    <td>明天小明带领销售部开会</td>
                                    <td>销售部</td>
                                    <td>2018-06-06</td>
                                    <td><span class="red">未读  </span></td>
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
export default InfoList;