//获取所有的数据
export const getAllData=()=>{
    return dispatch=>{
        fetch('http://localhost:8088/myschedule?act=get0')
            .then(e=>e.json())
            .then(res=>{
                dispatch(getAllDataFn(res))
            })
    }
}
//获取大于等于今天日期的日程数据接口
export const getData=(num)=>{
    return dispatch=>{
        fetch('http://localhost:8088/myschedule?act=get&page='+num)
            .then(e=>e.json())
            .then(res=>{
                dispatch(getDataFn(res))
            })
    }
}
//获取小于今天日期的日程数据接口
export const getOtherData=(num)=>{
    return dispatch=>{
        fetch('http://localhost:8088/myschedule?act=getother&page='+num)
            .then(e=>e.json())
            .then(res=>{
                dispatch(getOtherDataFn(res))
            })
    }
}
//添加日程数据接口
export const addData=(d)=>{
    return dispatch=>{
        fetch('http://localhost:8088/myschedule',{
            method:"post",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body:new URLSearchParams(d).toString()
        })
            .then(e=>e.json())
            .then(res=>{
                console.log(res);
            })
    }
}

//获取过期数据页码数据接口
export const getPage=()=>{
    return dispatch=>{
        fetch('http://localhost:8088/myschedule?act=get_page_count')
            .then(e=>e.json())
            .then(res=>{
                //console.log(res);
                dispatch(getPageNum(res.count));
            })
    }
}
//获取过期数据的页码数据接口
export const getOtherPage=()=>{
    return dispatch=>{
        fetch('http://localhost:8088/myschedule?act=get_page_count2')
            .then(e=>e.json())
            .then(res=>{
                //console.log(res);
                dispatch(getOtherPageNum(res.count));
            })
    }
}

//过期数据批量删除的接口
export const delAllData=(all)=>{
    return dispatch=>{
        fetch('http://localhost:8088/myschedule?act=delAll&all='+all)
            .then(e=>e.json())
            .then(res=>{
                console.log(res);
            })
    }
}
//搜索的接口
export const getSearchData=(name)=>{
    return dispatch=>{
        fetch('http://localhost:8088/myschedule?act=search&name='+name)
            .then(e=>e.json())
            .then(res=>{
                console.log(res);
                dispatch(searchData(res))
            })
    }
}


function getAllDataFn(data){
    return {
        type:'GET_ALLDATA',
        data
    }
}

//获取未过期的数据
function getDataFn(data){
    return {
        type:'GET_DATA',
        data
    }
}
//获取过期的数据
export function getOtherDataFn(data){
    return {
        type:'GET_OTHERDATA',
        data
    }
}

//获取未过期数据页面方法
export function getPageNum(num){
    return {
        type:'GET_PAGENUM',
        num
    }
}
//获取过期的数据的页面方法
export function getOtherPageNum(num){
    return {
        type:'GET_OTHERPAGENUM',
        num
    }
}
//搜索数据
export function searchData(data){
    return {
        type:'SEARCH_DATA',
        data
    }
}
/*
export function getData2(data){
    return {
        type:'GET',
        data
    }
}*/
//获取日程的所有的方法
export function getAllPage(num){
    return {
        type:'GET_ALLPAGE',
        num
    }
}