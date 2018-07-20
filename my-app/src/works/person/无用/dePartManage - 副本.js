import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actions';
import {myQuery} from '../lib/public';
import Nav from '../nav/index';
import DepartList from './departList';
import '../css/style.css';
import '../css/table.css';
import '../css/frame.css';
import './departManage.css';
class DepartManage extends Component{
    constructor(props){
        super(props);
        this.state={
            nVal:'',
            mVal:'',
            fVal:'',
            pVal:'',
            arr:[],     //用来存储数据
            pageNum:1,  //当前有多少页的数据
            current:1   //表示当前点击显示的哪页的数据
        }
    }
    /*addDePart=()=>{
        myQuery('#freameSec').style.display='block';
    }*/

    /*componentDidMount(){  //首次的数据请求，只执行一次
        this.getArr(true);   //上来先渲染数据
    }
    getData = async(url)=>{  //请求数据       (请求数据的公共方法)
        let data=await fetch('http://localhost:8088/department?'+url);
        return await data.json();
    }
    addDePart=()=>{     //点击添加部门 出现弹框
        let {addDepartment}=this.refs;
        addDepartment.style.display='block';
        //console.log(addDepartment);
    }
    addDepartClose=()=>{    //点击弹框的关闭按钮
        let {addDepartment}=this.refs;
        addDepartment.style.display='none';
    }
    nameChange=(ev)=>{      //弹框部门名称
        let {value:nVal}=ev.target;
        this.setState({nVal});
    }
    desChange=(ev)=>{   //弹框部门描述
        let {value:mVal}=ev.target;
        this.setState({mVal});
    }
    fzrChange=(ev)=>{       //弹框部门负责人
        let {value:fVal}=ev.target;
        this.setState({fVal});
    }
    partChange=(ev)=>{          //弹框上级部门
        let {value:pVal}=ev.target;
        //console.log(pVal);
        this.setState({pVal});
    }
    getArr = async(offset)=>{           //请求数据--传页码的数据
        //let {match:{params}}=this.props;
        //let num=params.id;      //就能得到当前的页面的id,将id 值传给current
        let newArr=await this.getData('act=get&page='+1);
        console.log(newArr);
        if(offset){     //如果offset 是true 那就让他重新请求数据渲染页面，如果为false 就不让他重新请求数据
            let pageNum=await this.getData('act=get_page_count');       //这是获得当前有多少页的数据 得到的值可以传给数据，用来渲染各个页面的数据
            this.setState({arr:newArr,val:'',pageCount:pageNum.count,current:1});
        }
        this.setState({arr:newArr,val:''});
    };
    frameSure=()=>{
        let {nVal,mVal,fVal,pVal,arr}=this.state;
        if(nVal&&mVal&&fVal&&pVal){
            fetch('http://localhost:8088/department',{
                method:'post',
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                body:new URLSearchParams({
                    act:'add',
                    bmmc:nVal,
                    bmms:mVal,
                    bmfzr:fVal,
                    sjbm:pVal,
                    edit:'编辑',
                    look:'查看'
                }).toString()
            }).then(res=>res.json())
              .then(data=>{
                  arr.push(data);
                  let {addDepartment}=this.refs;
                  addDepartment.style.display='none';
                  this.getArr(true);
              })
        }else{
            alert('请输入内容！');
        }
    }*/
    render(){
        let {arr,pageCount,current,nVal,mVal,fVal,pVal}=this.state;
        console.log(arr);
        //let {match:{params}}=this.props;
        //current=params.id;
        let newArr=arr.map((e,i)=>{
            return <DepartList {...{
                key:i+1,
                id:i+1,
                bmmc:e.bmmc,
                bmms:e.bmms,
                bmfzr:e.bmfzr,
                sjbm:e.sjbm,
                edit:e.edit,
                look:e.look,
                getArr:this.getArr,
                current         //这是当前显示的那一页
            }}/>
        });
        return(
            <div className="wrapper">
                <Nav/>
                <section className="right">
                    <div className="wrapHeader">
                        <div className="header">
                            <a className="title">部门管理</a>
                            <div className="search"><input type="text" value="" placeholder="搜索" id="search"/><i className="iconfont icon-fangdajing"></i></div>
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
                            <button onClick={this.addDePart}>新增部门</button>
                        </div>
                        <div className="tab">
                            <table>
                                <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
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
                                {/*<tr>
                                    <td><input type="checkbox" /></td>
                                    <td>1</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>2</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>3</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>4</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>5</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>6</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>7</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>8</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>9</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>10</td>
                                    <td>销售部</td>
                                    <td>负责销售</td>
                                    <td>张三</td>
                                    <td>总公司</td>
                                    <td><span>编辑  </span>|<span>  查看员工  </span>|<span>  删除</span></td>
                                </tr>*/}
                                </tbody>
                            </table>
                        </div>
                        {/*
                         <div className="page">
                         <a href="javascript:;">《</a>
                         <a href="javascript:;" className="active">1</a>
                         <a href="javascript:;">2</a>
                         <a href="javascript:;">3</a>
                         <a href="javascript:;">4</a>
                         <a href="javascript:;">》</a>
                         </div>
                        */}
                    </div>
                </section>
                <div className="freameSec" id="freameSec" ref="addDepartment">
                    <div className="frame">
                        <div className="head"><span>新增部门</span><span className="close" onClick={this.addDepartClose}>×</span></div>
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
            </div>
        )
    }
}

export default connect((state)=>{
    return {data:state.reducerDePart}
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(DepartManage);

//export default DepartManage;