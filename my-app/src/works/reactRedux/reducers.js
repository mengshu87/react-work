import {combineReducers} from 'redux';

//部门数据
const reducerDepart = (state ={content:[],page:1}, action) => {
    switch (action.type) {
        case 'GET_DEPARTDATA':
            let dataObj=Object.assign({},state);
            dataObj.content=action.data;
            return dataObj;
        case 'DEPART_PAGENUM':
            let dataObj2=Object.assign({},state);
            //let dataObj2=JSON.parse(JSON.stringify(state));
            dataObj2.page=action.num;
            return dataObj2;
        case 'SEARCH_DEPART':
            let dataObj3=Object.assign({},state);
            dataObj3.content=action.data;
            return dataObj3;
        default:
            return state;
    }
}
//用户数据
const reducerUser=(state={content:[],page:0},action)=>{
    switch(action.type){
        case 'GET_USERDATA':
            let dataObj=Object.assign({},state);
            dataObj.content=action.data;
            return dataObj;
        case 'USER_PAGENUM':
            let dataObj2=Object.assign({},state);
            dataObj2.page=action.num;
            return dataObj2;
        case 'SEARCH_DEPART':
            let dataObj3=Object.assign({},state);
            dataObj3.content=action.data;
            return dataObj3;
        default:
            return state;
    }
}


//我的日程
const reducerMySchedule=(state={content:[],page:0},action)=>{
    switch(action.type){
        case 'GET_ALLDATA':
            let dataObj0=Object.assign({},state);
            dataObj0.content=action.data;
            return dataObj0;
        case 'GET_DATA':
            let dataObj=Object.assign({},state);
            dataObj.content=action.data;
            return dataObj;
        case 'GET_PAGENUM':
            let dataObj2=Object.assign({},state);
            dataObj2.page=action.num;
            return dataObj2;
        case 'GET_OTHERDATA':
            let dataObj3=Object.assign({},state);
            dataObj3.content=action.data;
            return dataObj3;
        case 'GET_OTHERPAGENUM':
            let dataObj4=Object.assign({},state);
            dataObj4.page=action.num;
            return dataObj4;
        case 'SEARCH_DEPART':
            let dataObj5=Object.assign({},state);
            dataObj5.content=action.data;
            return dataObj5;
        case 'SEARCH_DATA':
            let dataObj6=Object.assign({},state);
            dataObj6.content=action.data;
            return dataObj6;
        default:
            return state;
    }
}
//日历的日程
const reducerCompanySchedule=(state=[],action)=>{
    switch(action.type){
        case 'GET_ALLDATA':
            let dataObj=Object.assign({},state);
            dataObj.content=action.data;
            return dataObj;
        default:
            return state;
    }
}
//所有日程
const reducerAllSchedule=(state={content:[],page:0},action)=>{
    switch(action.type){
        case 'GET_ALLDATA2':
            let dataObj=Object.assign({},state);
            dataObj.content=action.data;
            return dataObj;
        case 'GET_ALLPAGE':
            let dataObj2=Object.assign({},state);
            dataObj2.page=action.num;
            return dataObj2;
        default:
            return state;
    }
}


const reducer2=(state=[],action)=>{
    switch(action.type){
        case 'GET':
            return action.data;
        default:
            return state;
    }
}
const reducers = combineReducers({
    reducerDepart,
    reducerUser,
    reducerMySchedule,
    reducerCompanySchedule,
    reducerAllSchedule,
    reducer2
});

export {reducers}