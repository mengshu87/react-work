//获取部门数据接口
export const getDepartData=(num)=>{
    return dispatch=>{
        fetch('http://localhost:8088/department?act=get&page='+num)
        .then(e=>e.json())
        .then(res=>{
            dispatch(getDepartDataFn(res))
        })
    }
}
//添加部门数据接口
export const addDepartData=(d)=>{
    return dispatch=>{
        fetch('http://localhost:8088/department',{
            method:"post",
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            },
            body:new URLSearchParams(d).toString()
        })
        .then(e=>e.json())
        .then(res=>{
            if(res.code==0){
                console.log(res);
            }else if(res.code==1){
                console.log(res);
                alert('部门已存在！');
            }
        })
    }
}

//删除部门数据接口
export const delDepartData=(id)=>{
    return dispatch=>{
        fetch('http://localhost:8088/department?act=del&id='+id)
            .then(e=>e.json())
            .then(res=>{
                console.log(res);
            })
    }
}
//编辑部门数据接口
export const updateDepartData=(d)=>{
    return dispatch=>{
        fetch('http://localhost:8088/department/bj',{
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
//批量删除
export const delAllDepartData=(all)=>{
    //console.log(all);
    return dispatch=>{
        fetch('http://localhost:8088/department?act=delAll&all='+all)
        .then(e=>e.json())
        .then(res=>{
            console.log(res);
        })
    }
}
//获取页码数据接口
export const getDepartPage=()=>{
    return dispatch=>{
        fetch('http://localhost:8088/department?act=get_page_count')
        .then(e=>e.json())
        .then(res=>{
            //console.log(res);
            dispatch(getDepartPageNum(res.count));
        })
    }
}

//部门搜索的接口
export const getSearchData=(name)=>{
    return dispatch=>{
        fetch('http://localhost:8088/department?act=search&name='+name)
            .then(e=>e.json())
            .then(res=>{
                console.log(res);
                dispatch(searchData(res))
            })
    }
}


//获取数据
function getDepartDataFn(data){
    return {
        type:'GET_DEPARTDATA',
        data
    }
}
//获取页面方法
export function getDepartPageNum(num){
    return {
        type:'DEPART_PAGENUM',
        num
    }
}
//搜索数据
export function searchData(data){
    return {
        type:'SEARCH_DEPART',
        data
    }
}

//添加数据方法
/*export function addDepartDataFn(data){
    return {
        type:"ADD_DEPARTDATA",
        data
    }
}*/
//删除数据方法
/*export function delDepartDataFn(id){
    return {
        type:'DEL_DEPAETDATA',
        id
    }
}*/
//选中数据方法
/* export function checkedDepartDataFn(id){
     return {
         type:'CHECKED_DEPARTDATA',
         id
     }
 }*/




