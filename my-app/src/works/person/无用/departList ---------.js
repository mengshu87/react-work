import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/departAction';
import {myQuery} from '../lib/public';

class DepartList extends Component{
    editClick=()=>{
        
    }
    lookClick=()=>{

    }
    delClick=()=>{
        /*let {myQuery}=this.props;
        console.log(myQuery('#freameSec'));*/
    }

    render(){
        let {getDate}=this.props;
        console.log(getDate);
        //let {id,bmmc,bmms,bmfzr,sjbm,edit,look}=this.props;
        let {data} = this.props;
        console.log(data);
        return(
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                {
                   /* data.forEach((e,i)=>{
                        return `<td><input type="checkbox" /></td>
                                <td>{i}</td>
                                <td>{e.bmmc}</td>
                                <td>{e.bmms}</td>
                                <td>{e.bmfzr}</td>
                                <td>{e.sjbm}</td>
                                <td><span onClick={this.editClick}>{e.edit} </span>|<span onClick={this.lookClick}>  {e.look}  </span>|<span onClick={this.delClick}>  删除</span></td>`
                    })*/
                }

            </tr>
        )
    }
}

export default connect((state)=>{
    console.log(state)
    return {data:state.reducerDepart};
},(dispatch)=>{
    return bindActionCreators(actionCreators, dispatch)
})(DepartList)

//export default DepartList;
