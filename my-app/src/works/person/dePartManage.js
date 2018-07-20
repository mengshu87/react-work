import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/departAction';
import {myQuery} from '../lib/public';
import Nav from '../nav/index';
import DepartList from './departList';
import Page from './departPage';
import '../css/style.css';
import '../css/table.css';
import '../css/frame.css';
import '../css/departManage.css';
class DepartManage extends Component{
    constructor(props){
        super(props);
        this.state={
            id:'',
            nVal:'',
            mVal:'',
            fVal:'',
            pVal:'',
            search:'',
            arr:[],
            current:1,
            offset:false
        }
    }
    componentDidMount(){
        let {getDepartData,getDepartPage}=this.props;
        setTimeout(function(){
            getDepartPage();
            getDepartData(1);
        });
    }
    //改变页码的方法
    //删除时判断全选开关
    on = (onOff, nowpage) => {
        this.setState({
            offset: onOff,
            current: nowpage
        })
    }

    //全选
    checkedAll=(ev)=>{
        let {data}=this.props;
        let {checked}=ev.target;
        data.forEach(e=>{
            if(checked){
                e.checked=true;
            }else{
                e.checked=false;
            }
        })
        this.setState({data});
    }
    //单选方法
    checkedFn=(id,checked)=>{
        let {data}=this.props;
        data.forEach(e=>{
            if(e.id==id){
                e.checked=checked;
            }
        })
        this.setState({data});
    }
    //点击批量删除
    delDepart=()=>{
        let {arr}=this.state;
        let {data,delAllDepartData,getDepartData}=this.props;
        data.map(e=>{
            if(e.checked){
                arr.push(e.id);
            }
        })
        let d=JSON.stringify(arr);
        delAllDepartData(d);
        arr=[];
        d='';
        setTimeout(()=>{
            getDepartData(1);
        })
    }
    //搜索
    searchChange=(ev)=>{
        let {getDepartData,getDepartPage}=this.props;
        let {current}=this.state;
        let {value:search}=ev.target;
        this.setState({search});
        if(search==''){
            getDepartPage();
            getDepartData(current);
        }
    }
    searchClick=()=>{
        let {search}=this.state;
        let {getSearchData}=this.props;
        console.log(getSearchData);
        getSearchData(search);
    }

    //点击添加部门
    addDepart=()=>{
        let {nVal,mVal,fVal,pVal}=this.state;
        this.setState({nVal:'',mVal:'',fVal:'',pVal:''});
        myQuery('#freameAdd').style.display='block';
    }
    //关闭添加部门
    closeAddDepart=()=>{
        myQuery('#freameAdd').style.display='none';
        this.setState({nVal:'',mVal:'',fVal:'',pVal:''});
    }
    closeEditDepart=()=>{
        myQuery('#freameBJ').style.display='none';
    }
    //弹框部门名称
    nameChange=(ev)=>{
        let {value:nVal}=ev.target;
        this.setState({nVal});
    }
    //弹框部门描述
    desChange=(ev)=>{
        let {value:mVal}=ev.target;
        this.setState({mVal});
    }
    //弹框部门负责人
    fzrChange=(ev)=>{
        let {value:fVal}=ev.target;
        this.setState({fVal});
    }
    //弹框上级部门
    partChange=(ev)=>{
        let {value:pVal}=ev.target;
        this.setState({pVal});
    }
    //弹框确定按钮
    frameSure=()=>{
        let {addDepartData,getDepartData,getDepartPage}=this.props;
        let {nVal,mVal,fVal,pVal,current}=this.state;
        let obj={
            act:'add',
            checked:false,
            bmmc:nVal,
            bmms:mVal,
            bmfzr:fVal,
            sjbm:pVal
        }
        addDepartData(obj);
        async function asyncGetData() {
            let data1 = await getDepartPage();
            let data2 = await getDepartData(current);
        }
        asyncGetData();
        myQuery('#freameAdd').style.display='none';
        this.setState({nVal:'',mVal:'',fVal:'',pVal:''});

    }
    //点击编辑查看按钮的公共方法
    editFrame=(d)=>{
        let {nVal,mVal,fVal,pVal}=this.state;
        myQuery('#freameBJ').style.display='block';
        let {data}=this.props;
        data.forEach((e,i)=>{
           if(e.id==d){
               this.setState({
                   id:d,
                   nVal:e.bmmc,
                   mVal:e.bmms,
                   fVal:e.bmfzr,
                   pVal:e.sjbm
               })
           }
        });
    }
    //重新编辑部门名称
    nameEditChange=(ev)=>{
        let {value:nVal}=ev.target;
        this.setState({nVal});
    }
    //重新编辑部门描述
    desEditChange=(ev)=>{
        let {value:mVal}=ev.target;
        this.setState({mVal});
    }
    //重新编辑部门负责人
    fzrEditChange=(ev)=>{
        let {value:fVal}=ev.target;
        this.setState({fVal});
    }
    //重新编辑上级部门
    partEditChange=(ev)=>{
        let {value:pVal}=ev.target;
        this.setState({pVal});
    }
    //重新编辑确定按钮
    frameEditSure=()=>{
        let {updateDepartData,getDepartData}=this.props;
        let {nVal,mVal,fVal,pVal,id,current}=this.state;
        let obj={
            id:id,
            act:'edit',
            checked:false,
            bmmc:nVal,
            bmms:mVal,
            bmfzr:fVal,
            sjbm:pVal
        }
        updateDepartData(obj);
        setTimeout(function(){
            getDepartData(current);
            myQuery('#freameBJ').style.display='none';
        });

    }
    //点击查看按钮的公共方法
    lookFrame=(ev)=>{
        let {nVal,mVal,fVal,pVal}=this.state;
        myQuery('#freameCK').style.display='block';
        let {data}=this.props;
        
        data.forEach((e,i)=>{
            if(e.id==ev){
                this.setState({
                    id:ev,
                    nVal:e.bmmc,
                    mVal:e.bmms,
                    fVal:e.bmfzr,
                    pVal:e.sjbm
                })
            }
        });
    }
    //点击查看后弹框的关闭和确定按钮
    closeLookDepart=()=>{
        myQuery('#freameCK').style.display='none';
    }
    frameLookSure=()=>{
        myQuery('#freameCK').style.display='none';
    }

    render(){
        let {data,pageNum}=this.props;
        let {nVal,mVal,fVal,pVal,current,search}=this.state;
        let newArr=data.map((e,i)=>{
            return <DepartList {...{
                key:i+1,
                i,
                e,
                id:e.id,
                checked:e.checked,
                bmmc:e.bmmc,
                bmms:e.bmms,
                bmfzr:e.bmfzr,
                sjbm:e.sjbm,
                editFrame:this.editFrame,
                lookFrame:this.lookFrame,
                checkedFn:this.checkedFn,
                current
            }}/>
        });
        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">部门管理</a>
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="搜索"
                                    id="search"
                                    value={search}
                                    onChange={this.searchChange}
                                />
                                <i
                                    className="iconfont icon-fangdajing"
                                    onClick={this.searchClick}
                                ></i>
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
                            <button onClick={this.addDepart}>新增部门</button>
                            <button onClick={this.delDepart} style={{'marginLeft':'10px'}}>批量删除</button>
                        </div>
                        <div className="tab">
                            <table>
                                <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            id="checkAll"
                                            checked={data.length?data.every(e=>e.checked):false}
                                            onChange={this.checkedAll}
                                        />
                                    </th>
                                    <th>ID</th>
                                    <th>部门名称</th>
                                    <th>部门描述</th>
                                    <th>部门负责人</th>
                                    <th>上级部门</th>
                                    <th>操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {newArr}
                                </tbody>
                            </table>
                        </div>
                        <Page count={pageNum} on={this.on}/>
                    </div>
                </section>
                <div className="freameSec" id="freameAdd">
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
                <div className="freameSec" id="freameBJ">
                    <div className="frame">
                        <div className="head"><span>编辑部门</span><span className="close" onClick={this.closeEditDepart}>×</span></div>
                        <div className="main">
                            <div>
                                <span>部门名称：</span>
                                <input id="partEditName"
                                    type="text"
                                    placeholder="请输入部门名称"
                                    value={nVal}
                                    onChange={this.nameEditChange}
                                />
                            </div>
                            <div>
                                <span>部门描述：</span>
                                    <textarea
                                        id="partEditDes"
                                        className="bmmsText"
                                        placeholder="描述信息"
                                        value={mVal}
                                        onChange={this.desEditChange}
                                    ></textarea>
                            </div>
                            <div>
                                <span>部门负责人：</span>
                                <input
                                    id="partEditFzr"
                                    type="text"
                                    placeholder="请输入负责人"
                                    value={fVal}
                                    onChange={this.fzrEditChange}
                                />
                            </div>
                            <div>
                                <span>上级部门：</span>
                                <select

                                    name="总公司"
                                    id="partEditSj"
                                    value={pVal}
                                    onChange={this.partEditChange}
                                >
                                    <option >总公司</option>
                                    <option>人事部</option>
                                    <option>技术部</option>
                                    <option>销售部</option>
                                </select>
                            </div>
                            <button
                                className="btn"
                                onClick={this.frameEditSure}
                            >确定</button>
                        </div>
                    </div>
                </div>
                <div className="freameSec" id="freameCK">
                    <div className="frame">
                        <div className="head"><span>查看部门</span><span className="close" onClick={this.closeLookDepart}>×</span></div>
                        <div className="main">
                            <div>
                                <span>部门名称：</span>
                                <input id="partEditName"
                                       type="text"
                                       placeholder="请输入部门名称"
                                       value={nVal}
                                       disabled="disabled"
                                />
                            </div>
                            <div>
                                <span>部门描述：</span>
                                    <textarea
                                        id="partEditDes"
                                        className="bmmsText"
                                        placeholder="描述信息"
                                        value={mVal}
                                        disabled="disabled"
                                    ></textarea>
                            </div>
                            <div>
                                <span>部门负责人：</span>
                                <input
                                    id="partEditFzr"
                                    type="text"
                                    placeholder="请输入负责人"
                                    value={fVal}
                                    disabled="disabled"
                                />
                            </div>
                            <div>
                                <span>上级部门：</span>
                                <select

                                    name="总公司"
                                    id="partEditSj"
                                    value={pVal}
                                    disabled="disabled"
                                >
                                    <option >总公司</option>
                                    <option>人事部</option>
                                    <option>技术部</option>
                                    <option>销售部</option>
                                </select>
                            </div>
                            <button
                                className="btn"
                                onClick={this.frameLookSure}
                            >确定</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect((state)=>{
    return {
        data:state.reducerDepart.content,
        pageNum:state.reducerDepart.page
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(DepartManage);

