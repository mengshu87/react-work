import {combineReducers} from 'redux';

/*部门页面的接口*/
const getData= async(url)=>{  //请求数据       (请求数据的公共方法)
    let data=await fetch('http://localhost:8088/department?'+url);
    return await data.json();
}

const getArr=function(){

    let newArr=this.getData('act=get&page=1');
    return newArr;
}

/*const dePart=async(offset)=>{           //请求数据--传页码的数据
    //let {match:{params}}=this.props;
    //let num=params.id;      //就能得到当前的页面的id,将id 值传给current
    let newArr=await this.getDepart('act=get&page='+1);
    if(offset){     //如果offset 是true 那就让他重新请求数据渲染页面，如果为false 就不让他重新请求数据
        let pageNum=await this.getDepart('act=get_page_count');       //这是获得当前有多少页的数据 得到的值可以传给数据，用来渲染各个页面的数据
        this.setState({arr:newArr,val:'',pageCount:pageNum.count,current:1});
    }

}*/
const reducerArr=(state=1,action)=>{
    switch(action.type){
        case '':
            return
        default:
            console.log(getArr())
            console.log(state);
            return state
    }
};


const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_DEPART':
            let arr = [...state];
            return arr;
    }
}

const reducers2=combineReducers({
    reducerArr,
    reducer
});
export {reducers2}