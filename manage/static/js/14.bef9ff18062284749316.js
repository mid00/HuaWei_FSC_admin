webpackJsonp([14],{231:function(t,e,a){a(500);var n=a(94)(a(357),a(539),null,null);t.exports=n.exports},246:function(t,e,a){a(249);var n=a(94)(a(247),a(250),null,null);t.exports=n.exports},247:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(57),i=a.n(n),o=a(56),r=a.n(o),s=a(58),l=a.n(s),c=(a(96),a(98)),d=a(97);e.default={data:function(){return{baseImgPath:c.c}},created:function(){this.adminInfo.id||this.getAdminData()},computed:l()({},a.i(d.b)(["adminInfo"])),methods:l()({},a.i(d.c)(["getAdminData"]),{handleCommand:function(t){var e=this;return r()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"home"==t?e.$router.push("/manage"):"signout"==t&&e.$router.push("/");case 1:case"end":return a.stop()}},a,e)}))()}})}},248:function(t,e,a){e=t.exports=a(95)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#324057;height:67px;width:83%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px;position:fixed;left:16.5%;z-index:999}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},249:function(t,e,a){var n=a(248);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(208)("c0391230",n,!0)},250:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}}),t._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:t.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:t.baseImgPath+t.adminInfo.avatar}}),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"home"}},[t._v("首页")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"signout"}},[t._v("退出")])],1)],1)],1)},staticRenderFns:[]}},357:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(18),i=a.n(n),o=a(57),r=a.n(o),s=a(56),l=a.n(s),c=a(246),d=a.n(c),u=a(96);e.default={data:function(){return{tableData:[],currentRow:null,offset:0,limit:20,count:0,currentPage:1,addWindowStatus:!1,DeleteConfirmModel:!1,WindowTitle:"添加窗口",windowData:{WinDisplayId:0,Name:"",Desc:"",IOType:0,IOParam1:"",IOParam2:"",QueueMechineId:"",ScreenStatus:""},saveWindowData:{WinDisplayId:0,Name:"",Desc:"",IOType:0,IOParam1:"",IOParam2:"",QueueMechineId:"",ScreenStatus:""},rules:{Name:[{required:!0,message:"请输入窗口名",trigger:"blur"},{min:3,max:5,message:"长度在3到5个字符",trigger:"blur"}]}}},components:{headTop:d.a},created:function(){this.initData(),this.getUsers()},methods:{initData:function(){var t=this;return l()(r.a.mark(function e(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.currentPage=t,this.offset=(t-1)*this.limit,this.getUsers()},RowClick:function(t,e,a){console.log(a)},getUsers:function(){var t=this;return l()(r.a.mark(function e(){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.i(u._14)({offset:t.offset,limit:t.limit});case 2:n=e.sent,t.tableData=[],n.forEach(function(e){var a={};a.Name=e.Name,a.WinDisplayId=e.WinDisplayId,a.Desc=e.Desc,a.IOType=e.IOType,a.IOParam1=e.IOParam1,a.IOParam2=e.IOParam2,a.QueueMechineId=e.QueueMechineId,a.ScreenStatus=e.ScreenStatus,t.tableData.push(a)});case 5:case"end":return e.stop()}},e,t)}))()},AddWindowDialog:function(){this.windowData.WinDisplayId="",this.windowData.Name="",this.windowData.Desc="",this.windowData.IOType="0",this.windowData.IOParam1="",this.windowData.IOParam2="",this.windowData.QueueMechineId="",this.windowData.ScreenStatus="",this.addWindowStatus=!0},SaveWindowDialog:function(){var t=this.saveWindowData;void 0!==t&&void 0!==t.Name&&t.Name.length>0?(this.addWindowStatus=!0,this.windowData=t,console.log(t)):this.$notify.error({title:"错误",message:"请选择要编辑的数据",offset:100})},DeleteWindowDialog:function(){var t=this.saveWindowData;console.log(t),t.Name.length>0?this.DeleteConfirmModel=!0:this.$notify.error({title:"错误",message:"请选择要删除的数据",offset:100})},Cancel:function(t){this.addWindowStatus=!1,this.DeleteConfirmModel=!1,this.$refs.windowTable.setCurrentRow(),void 0!=t&&this.$refs[t].resetFields()},handleWindowListChange:function(t,e){"object"==(void 0===t?"undefined":i()(t))&&null!=t&&t.Name.length>0&&(this.saveWindowData.WinDisplayId=t.WinDisplayId,this.saveWindowData.Name=t.Name,this.saveWindowData.Desc=t.Desc,this.saveWindowData.IOType=t.IOType,this.saveWindowData.IOParam1=t.IOParam1,this.saveWindowData.IOParam2=t.IOParam2,this.saveWindowData.QueueMechineId=t.QueueMechineId,this.saveWindowData.ScreenStatus=t.ScreenSaveInitData)},handleSelectionChange:function(t){var e=t.row;t.rowIndex;console.log("rs"+e)},DeleteConfirm:function(){for(var t=this.saveWindowData,e=this.tableData,a=0;a<e.length;a++)if(t.WinDisplayId==e[a].WinDisplayId){this.tableData.splice(a,1);break}this.DeleteConfirmModel=!1},AddWindowData:function(t){var e=this;return l()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e.$refs[t].validate(function(){var t=l()(r.a.mark(function t(n){var i,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=8;break}return i=e.windowData,t.next=4,a.i(u._15)(i);case 4:o=t.sent,console.log(o),t.next=9;break;case 8:e.$notify.error({title:"错误",message:"请输入正确的窗口名称",offset:100});case 9:case"end":return t.stop()}},t,e)}));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return n.stop()}},n,e)}))()},closeDialog:function(){this.saveWindowData.WinDisplayId=0,this.saveWindowData.Name="",this.saveWindowData.Desc="",this.saveWindowData.IOType="0",this.saveWindowData.IOParam1="",this.saveWindowData.IOParam2="",this.saveWindowData.QueueMechineId="",this.saveWindowData.ScreenStatus="",this.$refs.windowTable.setCurrentRow()}}}},377:function(t,e,a){e=t.exports=a(95)(!1),e.push([t.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.table_container{padding:20px}",""])},500:function(t,e,a){var n=a(377);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(208)("3379b2c3",n,!0)},539:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fillcontain"},[a("head-top"),t._v(" "),a("el-row",{},[a("el-col",{staticClass:"button_margin",staticStyle:{padding:"20px"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:t.AddWindowDialog}},[t._v("添加")]),t._v(" "),a("el-button",{on:{click:t.SaveWindowDialog}},[t._v("编辑")]),t._v(" "),a("el-button",{on:{click:t.DeleteWindowDialog}},[t._v("删除")])],1)],1),t._v(" "),a("div",{staticClass:"table_container"},[a("el-table",{ref:"windowTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"highlight-current-row":""},on:{"current-change":t.handleWindowListChange,"row-click":t.RowClick,select:t.handleSelectionChange}},[a("el-table-column",{attrs:{property:"WinDisplayId",label:"序号",width:"100",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"Name",label:"窗口名称",width:"220",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"Desc",label:"窗口描述",width:"220",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"IOType",label:"接口类型",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"IOParam1",label:"接口参数1",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"IOParam2",label:"接口参数2",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"QueueMechineId",label:"中转排队机序号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{property:"ScreenStatus",label:"窗口状态",align:"center"}})],1)],1),t._v(" "),a("el-dialog",{attrs:{title:t.WindowTitle,visible:t.addWindowStatus},on:{"update:visible":function(e){t.addWindowStatus=e},close:t.closeDialog}},[a("el-form",{ref:"windowData",attrs:{model:t.windowData,rules:t.rules}},[a("el-form-item",{attrs:{label:"窗口名称","label-width":"100px",prop:"Name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.windowData.Name,callback:function(e){t.$set(t.windowData,"Name",e)},expression:"windowData.Name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"窗口描述","label-width":"100px"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:t.windowData.Desc,callback:function(e){t.$set(t.windowData,"Desc",e)},expression:"windowData.Desc"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"接口类型","label-width":"100px"}},[a("el-radio",{attrs:{label:"0"},model:{value:t.windowData.IOType,callback:function(e){t.$set(t.windowData,"IOType",e)},expression:"windowData.IOType"}},[t._v("网口")]),t._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:t.windowData.IOType,callback:function(e){t.$set(t.windowData,"IOType",e)},expression:"windowData.IOType"}},[t._v("无线")])],1),t._v(" "),"1"==t.windowData.IOType?a("el-form-item",{attrs:{label:"接口参数1","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.windowData.IOParam1,callback:function(e){t.$set(t.windowData,"IOParam1",e)},expression:"windowData.IOParam1"}})],1):t._e(),t._v(" "),"1"==t.windowData.IOType?a("el-form-item",{attrs:{label:"接口参数2","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.windowData.IOParam2,callback:function(e){t.$set(t.windowData,"IOParam2",e)},expression:"windowData.IOParam2"}})],1):t._e(),t._v(" "),a("el-form-item",{attrs:{label:"中转排队机序号","label-width":"100px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:t.windowData.QueueMechineId,callback:function(e){t.$set(t.windowData,"QueueMechineId",e)},expression:"windowData.QueueMechineId"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.Cancel("windowData")}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.AddWindowData("windowData")}}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"确认吗？",width:"30%",visible:t.DeleteConfirmModel},on:{close:t.closeDialog,"update:visible":function(e){t.DeleteConfirmModel=e}}},[t._v("\n\n        确定要删除窗口："+t._s(t.saveWindowData.Name)+"  吗？\n        "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[a("el-button",{on:{click:function(e){return t.Cancel()}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.DeleteConfirm()}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]}}});