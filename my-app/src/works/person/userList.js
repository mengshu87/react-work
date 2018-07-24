import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/userAction';
import {myQuery} from '../lib/public';

class UserList extends Component{

    userChecked=()=>{
        let {e,id,checkedFn}=this.props;
        e.checked=!e.checked;
        this.setState({e});
        checkedFn(id,e.checked);
    }
    userEdit=()=>{
        let {id,editFrame}=this.props;
        console.log(id);
        editFrame(id);      

        //该员工属于哪个部门，先去请求接口
        let editPartName=myQuery('#editPartName');
        let html='';
        fetch('http://localhost:8088/department?act=get&page=1')
            .then(e=>e.json()).then(res=>{
            res.forEach((e,i)=>{
                html+=`<option>${e.bmmc}</option>`;
            })
            editPartName.innerHTML=html;
        });
    }
    userDel=()=>{
        let {getUserData,delUserData,id,current}=this.props;
        console.log(delUserData);
        delUserData(id);
        setTimeout(function(){
            getUserData(current);

        });
    }
    
    render(){
        let {i,e}=this.props;
        return(
            <tr className={e.checked?'active':''}>
                    <td><input
                        type="checkbox"
                        checked={e.checked}
                        onChange={this.userChecked}
                    /></td>
                <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.ygxm}</td>
                <td>{e.ygzw}</td>
                <td>{e.bmmc}</td>
                <td>{e.sjld}</td>
                <td><span onClick={this.userEdit}>编辑  </span>|<span onClick={this.userDel}>  删除</span></td>
            </tr>
        )
    }
}

export default connect((state)=>{
    return {data:state.reducerUser.content}
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(UserList);

