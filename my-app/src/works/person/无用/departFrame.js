import React,{Component} from 'react';
import {myQuery} from '../../lib/public';

class DepartFrame extends Component{

    render(){
        let {nVal,mVal,fVal,pVal}=this.props;
        return(
                <div className="freameSec" id="freameBJ">
                    <div className="frame">
                        <div className="head"><span>新增部门</span><span className="close" onClick={this.closeAddDepart}>×</span></div>
                        <div className="main">
                            <div>
                                <span>部门名称：</span>
                                <input
                                    type="text"
                                    placeholder="请输入部门名称"
                                    value={nVal}
                                    onChange={this.nameChange}
                                />
                            </div>
                            <div>
                                <span>部门描述：</span>
                                    <textarea
                                        className="bmmsText"
                                        placeholder="描述信息"
                                        value={mVal}
                                        onChange={this.desChange}
                                    ></textarea>
                            </div>
                            <div>
                                <span>部门负责人：</span>
                                <input
                                    type="text"
                                    placeholder="请输入负责人"
                                    value={fVal}
                                    onChange={this.fzrChange}
                                />
                            </div>
                            <div>
                                <span>上级部门：</span>
                                <select
                                    name="总公司"
                                    id="partName"
                                    value={pVal}
                                    onChange={this.partChange}
                                >
                                    <option >总公司</option>
                                    <option>人事部</option>
                                    <option>技术部</option>
                                    <option>销售部</option>
                                </select>
                            </div>
                            <button
                                className="btn"
                                onClick={this.frameSure}
                            >确定</button>
                        </div>
                    </div>
                </div>
        )
    }
}
export default DepartFrame;
