import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/myScheduleAction';
import {myQuery} from '../lib/public';

class MyList extends Component{
    constructor(props){
        super(props);
        this.state={
        
        }
    }
    
    render(){
        let {e,i}=this.props;

        return(
            <div className="work">
                <h5 className="blue">{e.type}</h5>
                <div className="worMb">
                    <span>会议内容：</span>
                    <span>{e.title}</span></div>
                <div className="worMb">
                    <span>位置：</span>
                    <span>{e.local}</span>
                </div>
                <div className="worMb time">
                    <span>开始时间：</span>
                    <span className="red">{e.date}</span>
                    <span className="red"style={{'marginLeft':'10px'}}>{e.time}</span>
                </div>
                <div className="worMb person">
                    <span>参与人员：</span>
                    <span>{e.person}</span>
                </div>
                <div>
                    <span>发起人：</span>
                    <span>{e.originator}</span>
                </div>
            </div>
        )
    }
}
export default connect((state)=>{
    return {
        data:state.reducerMySchedule.content
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(MyList);
