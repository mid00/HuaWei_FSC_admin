webpackJsonp([4],{242:function(t,e,a){a(511);var n=a(94)(a(368),a(550),null,null);t.exports=n.exports},246:function(t,e,a){a(249);var n=a(94)(a(247),a(250),null,null);t.exports=n.exports},247:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(57),i=a.n(n),o=a(56),s=a.n(o),r=a(58),l=a.n(r),d=(a(96),a(98)),c=a(97);e.default={data:function(){return{baseImgPath:d.c}},created:function(){this.adminInfo.id||this.getAdminData()},computed:l()({},a.i(c.b)(["adminInfo"])),methods:l()({},a.i(c.c)(["getAdminData"]),{handleCommand:function(t){var e=this;return s()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"home"==t?e.$router.push("/manage"):"signout"==t&&e.$router.push("/");case 1:case"end":return a.stop()}},a,e)}))()}})}},248:function(t,e,a){e=t.exports=a(95)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#324057;height:67px;width:83%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px;position:fixed;left:16.5%;z-index:999}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},249:function(t,e,a){var n=a(248);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(208)("c0391230",n,!0)},250:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}}),t._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:t.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:t.baseImgPath+t.adminInfo.avatar}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"home"}},[t._v("首页")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"signout"}},[t._v("退出")])],1)],1)],1)},staticRenderFns:[]}},368:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(18),i=a.n(n),o=a(57),s=a.n(o),r=a(56),l=a.n(r),d=a(246),c=a.n(d),u=a(96);e.default={data:function(){return{tableData:[],currentRow:null,offset:0,limit:20,count:0,currentPage:1,addWindowStatus:!1,DeleteConfirmModel:!1,WindowTitle:"添加窗口屏",WindowDialogSaveStatus:0,loading:!0,windowData:{winDisplayId:0,name:"",description:"",ioType:0,ioParam1:"",ioParam2:"",status:1,isBind:0},saveWindowData:{winDisplayId:0,name:"",description:"",ioType:0,ioParam1:"",ioParam2:"",status:1,isBind:0},QueuingData:[],queue_select:"",rules:{name:[{required:!0,message:"请输入窗口屏",trigger:"blur"},{min:1,max:100,message:"长度在1到100个字符",trigger:"blur"}]}}},components:{headTop:c.a},created:function(){this.getQueueMachineData(),this.getWindowData()},beforeCreate:function(){},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.getUsers()},getWindowData:function(){var t=this;return l()(s.a.mark(function e(){var n,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.i(u._14)("",1);case 2:n=e.sent,i=n.data[0].content,o="",console.log(i),t.tableData=[],i.forEach(function(e){var a={};a.name=e.name,a.winDisplayId=e.winDisplayId,a.description=e.description,0==e.ioType?a.ioTypeStr="网口":a.ioTypeStr="无线模块",a.ioType=e.ioType,a.ioParam1=o+e.ioParam1,a.ioParam2=e.ioParam2,a.ioParam2Str=t.GetHallQueuingName(e.ioParam2),a.status=e.status,a.StatusStr=1==e.status?"启用":"停用",a.isBind=e.isBind,t.tableData.push(a)}),t.loading=!1;case 8:case"end":return e.stop()}},e,t)}))()},AddWindowDialog:function(){this.windowData.winDisplayId="",this.windowData.name="",this.windowData.description="",this.windowData.ioType=0,this.windowData.ioParam1="",this.windowData.ioParam2="",this.windowData.status=1,this.windowData.isBind=0,this.WindowTitle="添加窗口屏",this.addWindowStatus=!0},SaveWindowDialog:function(){var t=this.saveWindowData;void 0!==t&&void 0!==t.name&&t.name.length>0?(this.WindowDialogSaveStatus=1,this.WindowTitle="编辑窗口屏:"+t.name,this.addWindowStatus=!0,this.windowData=t):this.$notify.error({title:"错误",message:"请选择要编辑的数据",offset:100})},DeleteWindowDialog:function(){var t=this.saveWindowData;console.log(t),t.name.length>0?this.DeleteConfirmModel=!0:this.$notify.error({title:"错误",message:"请选择要删除的数据",offset:100})},Cancel:function(t){this.addWindowStatus=!1,this.DeleteConfirmModel=!1,this.$refs.windowTable.setCurrentRow(),void 0!=t&&this.$refs[t].resetFields()},handleWindowListChange:function(t,e){console.log(t),"object"==(void 0===t?"undefined":i()(t))&&null!=t&&t.name.length>0&&(this.saveWindowData.winDisplayId=t.winDisplayId,this.saveWindowData.name=t.name,this.saveWindowData.description=t.description,this.saveWindowData.ioType=t.ioType,this.saveWindowData.ioParam1=t.ioParam1,this.saveWindowData.ioParam2=t.ioParam2,this.saveWindowData.status=t.status,this.saveWindowData.isBind=t.isBind)},handleSelectionChange:function(t){console.log(t)},DeleteConfirm:function(){var t=this;return l()(s.a.mark(function e(){var n,o,r,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.saveWindowData,o=t.tableData,r=void 0,e.next=3,a.i(u._50)([n.winDisplayId],1);case 3:if(r=e.sent,"object"!=(void 0===r?"undefined":i()(r))){e.next=15;break}l=0;case 6:if(!(l<o.length)){e.next=13;break}if(n.winDisplayId!=o[l].winDisplayId){e.next=10;break}return t.tableData.splice(l,1),e.abrupt("break",13);case 10:l++,e.next=6;break;case 13:e.next=16;break;case 15:t.$notify.error({title:"删除失败",message:"失败",offset:100});case 16:t.DeleteConfirmModel=!1;case 17:case"end":return e.stop()}},e,t)}))()},AddWindowData:function(t){var e=this;return l()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.$refs[t].validate(function(){var t=l()(s.a.mark(function t(n){var o,r,l,d;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=20;break}if(o=e.WindowDialogSaveStatus,r=void 0,l=e.windowData,d=void 0,1!=o){t.next=10;break}return r="编辑",l.entId=l.winDisplayId,t.next=7,a.i(u._51)([l],1);case 7:d=t.sent,t.next=17;break;case 10:if(0!=o){t.next=17;break}return r="添加",console.log("11111111111111111111"),console.log(l),t.next=16,a.i(u._15)([l],1);case 16:d=t.sent;case 17:"object"==(void 0===d?"undefined":i()(d))&&0==d.result?(e.$message({type:"success",message:r+"成功"}),e.getWindowData(),e.addWindowStatus=!1):e.$notify.error({title:"失败",message:r+"失败",offset:100}),t.next=21;break;case 20:e.$notify.error({title:"错误",message:"请输入正确的窗口屏",offset:100});case 21:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return n.stop()}},n,e)}))()},closeDialog:function(){this.saveWindowData.winDisplayId=0,this.saveWindowData.name="",this.saveWindowData.description="",this.saveWindowData.ioType=0,this.saveWindowData.ioParam1="",this.saveWindowData.ioParam2="",this.saveWindowData.status=1,this.saveWindowData.isBind=0,this.WindowDialogSaveStatus=0,this.$refs.windowTable.setCurrentRow()},GetHallQueuingName:function(t){for(var e=this.QueuingData,a="",n=0;n<=e.length;n++)if(void 0!==e[n]&&e[n].machineId==t){a=e[n].name;break}return a},getQueueMachineData:function(){var t=this;return l()(s.a.mark(function e(){var n,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.i(u._9)("",1);case 2:for(n=e.sent,i=n.data[0].content,o=0;o<i.length;o++)i[o].machineId=String(i[o].machineId);t.QueuingData=i;case 6:case"end":return e.stop()}},e,t)}))()},SelectFun:function(t){}}}},388:function(t,e,a){e=t.exports=a(95)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.table_container{padding:20px}",""])},511:function(t,e,a){var n=a(388);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(208)("07b37248",n,!0)},550:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("head-top"),t._v(" "),a("el-row",{},[a("el-col",{staticClass:"button_margin",staticStyle:{padding:"20px"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:t.AddWindowDialog}},[t._v("添加")]),t._v(" "),a("el-button",{on:{click:t.SaveWindowDialog}},[t._v("编辑")]),t._v(" "),a("el-button",{on:{click:t.DeleteWindowDialog}},[t._v("删除")])],1)],1),t._v(" "),a("div",{staticClass:"table_container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"windowTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"highlight-current-row":"",height:"700",border:""},on:{"current-change":t.handleWindowListChange,select:t.handleSelectionChange}},[a("el-table-column",{attrs:{property:"winDisplayId",label:"序号",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"name",label:"窗口名称",width:"220",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"description",label:"窗口描述",width:"220",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"ioTypeStr",label:"接口类型",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"ioParam1",label:"接口参数1",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"ioParam2Str",label:"中转排队机",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"StatusStr",label:"窗口状态",align:"center"}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.WindowTitle,visible:t.addWindowStatus},on:{"update:visible":function(e){t.addWindowStatus=e},close:t.closeDialog}},[a("el-form",{ref:"windowData",attrs:{model:t.windowData,rules:t.rules}},[a("el-form-item",{attrs:{label:"窗口名称","label-width":"100px",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.windowData.name,callback:function(e){t.$set(t.windowData,"name",e)},expression:"windowData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"窗口描述","label-width":"100px"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:t.windowData.description,callback:function(e){t.$set(t.windowData,"description",e)},expression:"windowData.description"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"接口类型","label-width":"100px"}},[a("el-radio",{attrs:{label:0},model:{value:t.windowData.ioType,callback:function(e){t.$set(t.windowData,"ioType",e)},expression:"windowData.ioType"}},[t._v("网口")]),t._v(" "),a("el-radio",{attrs:{label:1},model:{value:t.windowData.ioType,callback:function(e){t.$set(t.windowData,"ioType",e)},expression:"windowData.ioType"}},[t._v("无线")])],1),t._v(" "),a("el-form-item",{attrs:{label:"0"==t.windowData.ioType?"MAC地址":"使用频道","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.windowData.ioParam1,callback:function(e){t.$set(t.windowData,"ioParam1",e)},expression:"windowData.ioParam1"}}),t._v(" "),"1"==t.windowData.ioType?a("span",[t._v("(多个频道用逗号分隔)")]):t._e()],1),t._v(" "),"1"==t.windowData.ioType?a("el-form-item",{attrs:{label:"中转排队机","label-width":"110px"}},[a("el-select",{attrs:{placeholder:"请选择中转排队机"},on:{input:t.SelectFun},model:{value:t.windowData.ioParam2,callback:function(e){t.$set(t.windowData,"ioParam2",e)},expression:"windowData.ioParam2"}},t._l(t.QueuingData,function(t){return a("el-option",{key:t.machineId,attrs:{label:t.name,value:t.machineId,disabled:t.disabled}})}),1)],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"状态","label-width":"100px"}},[a("el-radio",{attrs:{label:1},model:{value:t.windowData.status,callback:function(e){t.$set(t.windowData,"status",e)},expression:"windowData.status"}},[t._v("启用")]),t._v(" "),a("el-radio",{attrs:{label:0},model:{value:t.windowData.status,callback:function(e){t.$set(t.windowData,"status",e)},expression:"windowData.status"}},[t._v("停用")])],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.Cancel("windowData")}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.AddWindowData("windowData")}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"确认吗？",width:"30%",visible:t.DeleteConfirmModel},on:{close:t.closeDialog,"update:visible":function(e){t.DeleteConfirmModel=e}}},[t._v("\n\n        确定要删除窗口屏："+t._s(t.saveWindowData.name)+"  吗？\n        "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.Cancel()}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.DeleteConfirm()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]}}});