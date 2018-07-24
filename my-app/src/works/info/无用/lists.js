import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/myScheduleAction';



class List extends Component{
    constructor(props){
        super(props);
        this.state={
        
        }
    }
    
    render(){
        return(
            <tr>
                <td><input type="checkbox" /></td>
                <td>1</td>
                <td>小明</td>
                <td>明天小明带领销售部开会</td>
                <td>销售部</td>
                <td>2018-06-06</td>
                <td><span className="green">已读  </span></td>
            </tr>
        )
    }
}
export default connect((state)=>{
    return {
        data:state.reducerAllSchedule.content,
        pageNum:state.reducerAllSchedule.page
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(InfoManage);

//export default List;