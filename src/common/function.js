//创建replaceAll()函数
String.prototype.replaceAll = function (FindText, RepText) {
    return this.replace(new RegExp(FindText, "g"), RepText);
}
Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
exports.install=function (Vue,options) {
    //创建检查是否合格时间格式
    Vue.prototype.CheckDateTime=function (str) {
        var reg = /^(\d+)-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        if (typeof str != "undefined"){
            var r = str.match(reg);
            if(r==null)return false;
            r[2]=r[2]-1;
            var d= new Date(r[1], r[2],r[3], r[4],r[5], r[6]);
            if(d.getFullYear()!=r[1])return false;
            if(d.getMonth()!=r[2])return false;
            if(d.getDate()!=r[3])return false;
            if(d.getHours()!=r[4])return false;
            if(d.getMinutes()!=r[5])return false;
            if(d.getSeconds()!=r[6])return false;

            return true;
        }else{
            return  false;
        }
    }

    //获得两个数组的差积
    Vue.prototype.difference=function(arr1, arr2) {
        return arr1.concat(arr2).filter(function(arg){
            return !(arr1.indexOf(arg) >= 0 && arr2.indexOf(arg) >= 0);
        });
    };

    //递归函数
    Vue.prototype.GetTreeData=function(data){
        // 删除 所有 children,以防止多次调用
        data.forEach(function(item) {
            delete item.children;
        });

        // 将数据存储为 以 id 为 KEY 的 map 索引数据列
        var map = {};


        data.forEach(function(item) {
            // 在该方法中可以给每个元素增加其他属性
            item.text = item.name;
            map[String(item.bussItemId)] = item;
        });

        var val = [];
        data.forEach(function(item) {

            // 以当前遍历项，的pid,去map对象中找到索引的id
            var parent = map[String(item.parentId)];

            // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
            if (parent) {
                //  添加到父节点的子节点属性中
                (parent.children || (parent.children = [])).push(item);

            } else {
                //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
                val.push(item);
            }
        });
        return val;
    }


}


