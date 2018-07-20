/*封装函数 */
/*获取元素是id 还是class 或是tag*/
export function myQuery(){
    let strOne=arguments[0][0];         //获取元素前面的是id 还是class 或者tagName
    let eleName=arguments[0].substr(1);     //获取# 或 . 后面的东西
    let allEle=document.getElementsByTagName('*');      //获取页面中所的标签
    let resultArr=[];
    switch(strOne){
        case '#':
            return document.getElementById(eleName);   //传入的如果是id ,就直接获取#号后面的值就可以。因为id 的只能在页面中有一个。
            break;
        case '.':       //如果传入的是class 因为class 有多个，并且有可能有class="li li1 li2" 这样连写的情况
            for(let i=0;i<allEle.length;i++){       //获取页面中所有标签并循环出有class 名的元素。
                //console.log(allEle[i].className);
                let aEle=allEle[i].className.split(' ');    //将有class 名的元素给先择(zhai)出来，
                if(aEle){
                    for(let j=0;j<aEle.length;j++){
                        if(aEle[j]===eleName){
                            resultArr.push(allEle[i]);
                        }
                        //console.log(j);
                    }
                }
            }
            return resultArr;
            break;
        default:
            return document.getElementsByTagName(arguments[0]);
            break;
    }
    //console.log(arguments);
}
export function tips(ele,text){
    ele.style.opacity=0;
    ele.innerHTML=text;
}

export function toD(n){
    return n=n<10?'0'+n:''+n
}