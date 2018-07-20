import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/userAction';
import {Link} from 'react-router-dom';
import '../css/page.css'

class Page extends Component{
    constructor(props){
        super(props);
        this.state={
            current:1,      //当前是哪一页
            pageNum:this.props.count,    //当前页面一共有多少页
            onePageNum:10,   //一页显示多少条数据
            startPage: 1,  //分组开始页码
            groupCount: 5  //页码分组，显示7个页码，其余用省略号显示
        }
    }
    componentWillReceiveProps(){
        let {count}=this.props;
        this.setState({
            pageNum: count
        })
    }
    createPage(pageNum,current){
        let { groupCount, startPage,onePageNum} = this.state;
        let pages=[];
        //上一页
        pages.push(
            <Link onClick={this.prevClick.bind(this)}
                to={{
                    pathname: `/userManage/${current-1}`,
                    state: { id: current-1 }
                }}
                key={0}>
                <li className={current === 1 ? "nomore" : null}>《</li>
            </Link>)
        if (pageNum <= 5) {
            /*总页码小于等于10时，全部显示出来*/
            for (let i = 1; i <= pageNum; i++) {
                pages.push(<Link key={i} onClick={this.pageClick.bind(this, i)}
                                 to={{
                        state: { id: i },
                        pathname: `/userManage/${i}`
                    }}
                ><li className={current === i ? "active" : null}>{i}</li></Link>)
            }
        } else {
            /*总页码大于10时，部分显示*/

            //第一页
            pages.push(<Link key={1}
                             to={{
                    state: { id: 1 },
                    pathname: `/userManage/1`
                }}
                             onClick={this.pageClick.bind(this, 1)}>
                <li className={current === 1 ? "active" : null} >1</li></Link>)

            let pageLength = 0;
            if (groupCount + startPage > pageNum) {
                pageLength = pageNum
            } else {
                pageLength = groupCount + startPage;
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (current >= groupCount) {
                pages.push(<li className="" key={-1}>···</li>)
            }
            //非第一页和最后一页显示
            for (let i = startPage; i < pageLength; i++) {
                if (i <= pageNum - 1 && i > 1) {
                    pages.push(<Link key={i}
                                     to={{
                                state: { id: i },
                                pathname: `/userManage/${i}`
                            }}
                                     onClick={this.pageClick.bind(this, i)} ><li className={current === i ? "active" : null} >{i}</li></Link>)
                }
            }
            //后面省略号
            if (pageNum - startPage >= groupCount + 1) {
                pages.push(<li className="" key={-2}>···</li>)
            }
            //最后一页
            pages.push(<Link  key={pageNum}
                              to={{
                        state: { id: pageNum },
                        pathname: `/userManage/${pageNum}`
                    }}
                              onClick={this.pageClick.bind(this, pageNum)}>
                <li className={current === pageNum ? "active" : null}>{pageNum}</li></Link>)
        }
        //下一页
        pages.push(<Link onClick={this.nextClick.bind(this)}
                         to={{
                    pathname: `/userManage/${current+1}`,
                    state: { id: current+1 }
                }}
                         key={pageNum+1}>
            <li className={current === pageNum ? "nomore" : null}>》</li>
        </Link>)
     return pages;
    }

    pageClick(current) {
        let { getUserData,data} = this.props;
        getUserData(current);
        let  { groupCount} = this.state;

        //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
        if (current >= groupCount) {
            this.setState({
                startPage: current - 2
            })
        }
        if (current < groupCount) {
            this.setState({
                startPage: 1
            })
        }
        //第一页时重新设置分组的起始页
        if (current === 1) {
            this.setState({
                startPage: 1
            })
        }
        this.setState({
            current
        })
        let {on} = this.props;
        //判断全选开关

        let onOff = data.every(e => { return e.checked === true });
        on(onOff, current)
    }

    prevClick=()=>{
        let {current} = this.state
        if (--current === 0) {
            return false
        }
        this.pageClick(current)
    }
    nextClick=()=>{
        let {current,pageNum} = this.state;
        if (++current > pageNum) {
            return false
        }
        this.pageClick(current)
    }

    render(){
        let {pageNum,current}=this.state;
        //console.log(pageNum,current);
        const pageArr=this.createPage(pageNum,current);
        return(
            <div className="page">
                {pageArr}
            </div>
        )
    }
}
export default connect((state)=>{
    return {
        data:state.reducerUser.content
    }
},(dispatch)=>bindActionCreators(actionCreators,dispatch))(Page);
