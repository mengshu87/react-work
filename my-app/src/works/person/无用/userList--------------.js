import React,{Component} from 'react';
class UserList extends Component{
    constructor(props){
        super(props);
        this.state={
        
        }
    }
    
    render(){
        let {id,yVal,nVal,zVal,bVal,sVal,edit,arr}=this.props;

        return(
            <tr>
                <td><input type="checkbox" /></td>
                <td>{id}</td>
                <td>{yVal}</td>
                <td>{nVal}</td>
                <td>{zVal}</td>
                <td>{bVal}</td>
                <td>{sVal}</td>
                <td><span>{sVal}  </span>|<span>  删除</span></td>
            </tr>
        )
    }
}


/*export default connect((state)=>{
    return {data:state.reducerDepart.count};
},(dispatch)=>{
    return bindActionCreators(actionCreators, dispatch)
})(UserList)*/
export default UserList;
