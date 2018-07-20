//获取数据
export const getUserData=(num)=>{
    return dispatch=>{
        fetch('http://localhost:8088/usermanage?act=get&page='+num)
            .then(e=>e.json())
            .then(res=>{
                //console.log(res);
                dispatch(getUserDataFn(res));
            })
    }
}
//添加员工数据接口
export const addUserData=(d)=>{
    return dispatch=>{
        fetch('http://localhost:8088/userManage',{
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
                    alert('用户名已存在！');
                }

            })
    }
}

//删除数据
export const delUserData=(id)=>{
    return dispatch=>{
        fetch('http://localhost:8088/usermanage?act=del&id='+id)
            .then(e=>e.json())
            .then(res=>{
                console.log(res);
            })
    }
}

//编辑员工数据接口
export const updateUserData=(d)=>{
    return dispatch=>{
        fetch('http://localhost:8088/usermanage/bj',{
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
export const delAllUserData=(all)=>{
    return dispatch=>{
        fetch('http://localhost:8088/usermanage?act=delAll&all='+all)
            .then(e=>e.json())
            .then(res=>{
                console.log(res);
            })
    }
}

//获取页码数据接口
export const getUserPage=()=>{
    return dispatch=>{
        fetch('http://localhost:8088/usermanage?act=get_page_count')
            .then(e=>e.json())
            .then(res=>{
                //console.log(res.count);
                dispatch(getUserPageNum(res.count));
            })
    }
}

//部门搜索的接口
export const getSearchData=(name)=>{
    return dispatch=>{
        fetch('http://localhost:8088/usermanage?act=search&name='+name)
            .then(e=>e.json())
            .then(res=>{
                console.log(res);
                dispatch(searchData(res))
            })
    }
}




//获取数据的方法
function getUserDataFn(data){
    return {
        type:'GET_USERDATA',
        data
    }

}
//获取页面方法
export function getUserPageNum(num){
    return {
        type:'USER_PAGENUM',
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