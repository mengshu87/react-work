/**
 * Created by MS on 2018/5/09.    公共的获取数据的函数
 */

var Tween = {
    linear: function (t, b, c, d){  //匀速
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d){  //加速曲线
        return c*(t/=d)*t + b;
    },
    easeOut: function(t, b, c, d){  //减速曲线
        return -c *(t/=d)*(t-2) + b;
    },
    easeBoth: function(t, b, c, d){  //加速减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInStrong: function(t, b, c, d){  //加加速曲线
        return c*(t/=d)*t*t*t + b;
    },
    easeOutStrong: function(t, b, c, d){  //减减速曲线
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
        if ((t/=d/2) < 1) {
            return c/2*t*t*t*t + b;
        }
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p/4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    elasticBoth: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d/2) == 2 ) {
            return b+c;
        }
        if (!p) {
            p = d*(0.3*1.5);
        }
        if ( !a || a < Math.abs(c) ) {
            a = c;
            var s = p/4;
        }
        else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        if (t < 1) {
            return - 0.5*(a*Math.pow(2,10*(t-=1)) *
                Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        return a*Math.pow(2,-10*(t-=1)) *
            Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
    },
    backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    backOut: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 3.70158;  //回缩的距离
        }
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    backBoth: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((t /= d/2 ) < 1) {
            return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        }
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
        return c - Tween['bounceOut'](d-t, 0, c, d) + b;
    },
    bounceOut: function(t, b, c, d){
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
        }
        return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
    },
    bounceBoth: function(t, b, c, d){
        if (t < d/2) {
            return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
    }
}


//根据data的数据结构，通过id 来找到与id值相等的pid;就是当前这个id的子级
let t={
    moveFn(opt){            //move 动画
        // opt.attr = opt.attr || {};
        // opt.d = opt.d || 1000;
        // opt.el = opt.el || null;
        // opt.sportName = opt.sportName || 'linear';
        // opt.callback = typeof opt.callback === 'function' && opt.callback || function(){}
        //默认的配置
        let obj = {
            attr:{},
            d:1000,
            el:null,
            sportName:'linear',
            callback:function(){}
        }

        opt = Object.assign(obj,opt);

        let oldTime = Date.now();
        let j = {};

        for(let i in opt.attr){
            let b = parseFloat(getComputedStyle(opt.el)[i])
            j[i] = {
                b,
                c:opt.attr[i] - b
            }
        }

        ;(function animate(){

            opt.el.timer = requestAnimationFrame(animate);
            let t = Date.now() - oldTime;
            if(t >= opt.d){
                t = opt.d;
            }
            for(let attr in j){
                let v = Tween[opt.sportName](t, j[attr].b, j[attr].c, opt.d);
                if(attr === 'opacity'){
                    opt.el.style.opacity = v;
                }else{
                    opt.el.style[attr] = v + 'px';
                }
            }
            if(t === opt.d){
                cancelAnimationFrame(opt.el.timer);
                opt.callback.call(opt.el);
            }

        })();
    },
    getChild(id){   //换到传入的id对应的子级
        let childArr=[];    //创建一个数组，用来存放子级
        for(let attr in data){  //循环data数组，找到需要的元素
            if(data[attr].pid==id){
                childArr.push(data[attr]);      //将需要的元素放到数组中
            }
        }
        if(childArr.length>0){      //判断一下这个子级的数组内是否有元素
            return childArr;        //如果有，就返回这个子级的数组
        }else{
            return null;            //没有，就返回空
        }
    },
    arr:[],         //一个空数组
    getChilds(id){          //通过传入的id值 来找到他们的子孙级元素
        let child=this.getChild(id);     //通过当前的id来找到他们对应的子文件
        if(child){                      //如果子文件还有子文件的话，就继续向下找到子文件的子文件
            child.forEach(e=>{
                t.arr.push(e);          //把当前子文件放入数组中
                this.getChilds(e.id);   //递归 再传入e.id值
            });
        }
        return t.arr;
    },
    getParent(id){      //通过传入的id 来找到它的父级
        if(data[id] && data[id].pid!=-1){       //如果传入的id有父组长，就返回他们的父母，没有就返回null
            return data[data[id].pid];
        }
        return null;
    },
    getParents(id){     //找到传入id的父级的父级
        let parentsArr=[];   //用来存入元素的所有的父级元素
        let now=data[id];   //当前的元素 传入的id，对应的数组就是当前的元素
        while(now){     //循环当前的元素，找到当前元素的父级，放入数组中，然后将当前元素的父级赋值给now.然后再循环，直到他没有了父级为止
            parentsArr.unshift(now);        //在数组内向前添加
            now=this.getParent(now.id);     //将当前元素的父级赋值给now 直到没有父级为止
        }
        return parentsArr;
    },
    bong(box1,box2){        //碰撞
        let bl = box1.offsetLeft;
        let bt = box1.offsetTop;
        let br = bl + box1.offsetWidth;
        let bb = bt + box1.offsetHeight;

        let cl = box2.offsetLeft + box.offsetLeft;
        let ct = box2.offsetTop + box.offsetTop;
        let cr = cl + box2.offsetWidth;
        let cb = ct + box2.offsetHeight;

        if(br < cl || bb < ct || bl > cr || bt > cb){
            return false;
        }else{
            //碰到了
            return true;
        }
    }

}