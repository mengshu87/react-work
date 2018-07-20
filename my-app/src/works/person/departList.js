import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/departAction';


class DepartList extends Component{
    
    //选中按钮
    departChecked=()=> {
        let {e,id,checkedFn}=this.props;
        e.checked=!e.checked;
        this.setState({e});
        checkedFn(id,e.checked);
    }
    //编辑按钮
    editClick=()=>{
        let {id,editFrame}=this.props;
        console.log(id);
        editFrame(id);
    }
    //查看按钮
    lookClick=()=>{
        let {id,lookFrame}=this.props;
        lookFrame(id);
    }
    //删除按钮
    delClick=()=>{
        let {getDepartData,delDepartData,id,current,data,search}=this.props;
        delDepartData(id);
        setTimeout(function(){
            getDepartData(current);
            this.setState({search:''});
        });
    }
    render(){
        let {i,e}=this.props;
        return(
            <tr className={e.checked?'active':''} >
                <td><input
                    type="checkbox"
                    checked={e.checked}
                    onChange={this.departChecked}
                /></td>
                <td>{i+1}</td>
                <td>{e.bmmc}</td>
                <td>{e.bmms}</td>
                <td>{e.bmfzr}</td>
                <td>{e.sjbm}</td>
                <td><span onClick={this.editClick.bind(this)}>编辑 </span>|<span onClick={this.lookClick.bind(this)}>  查看  </span>|<span onClick={this.delClick}>  删除</span></td>
            </tr>
        )
    }
}

export default connect((state)=>{
    return {data:state.reducerDepart.content};
},(dispatch)=>{
    return bindActionCreators(actionCreators, dispatch)
})(DepartList)


