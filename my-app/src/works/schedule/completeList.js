import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/myScheduleAction';
import {myQuery} from '../lib/public';

class CompleteList extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    checked=()=>{
        let {e,id,checkedFn}=this.props;
        e.checked=!e.checked;
        this.setState({e});
        checkedFn(id,e.checked);
    }
    look=()=>{
        let {id,lookFrame}=this.props;
        console.log(id);
        lookFrame(id);
    }
    render(){
        let {e,i}=this.props;
        return(
            <tr className={e.checked?'active':''} >
                <td><input
                    type="checkbox"
                    checked={e.checked}
                    onChange={this.checked}
                /></td>
                <td>{i+1}</td>
                <td>{e.originator}</td>
                <td>{e.title}</td>
                <td>{e.date}<span style={{'marginLeft':'15px','color':'#676a6c'}}>{e.time}</span></td>
                <td>{e.type}</td>
                <td>{e.person}</td>
                <td onClick={this.look}><span>查看  </span></td>
            </tr>
        )
    }
}

export default connect((state)=>{
    return {
        data:state.reducerMySchedule.content,
        pageNum:state.reducerMySchedule.page
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(CompleteList);


