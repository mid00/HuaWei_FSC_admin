webpackJsonp([23],{218:function(e,t,a){a(514);var n=a(94)(a(344),a(553),null,null);e.exports=n.exports},246:function(e,t,a){a(249);var n=a(94)(a(247),a(250),null,null);e.exports=n.exports},247:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(57),o=a.n(n),i=a(56),r=a.n(i),l=a(58),s=a.n(l),c=(a(96),a(98)),d=a(97);t.default={data:function(){return{baseImgPath:c.c}},created:function(){this.adminInfo.id||this.getAdminData()},computed:s()({},a.i(d.b)(["adminInfo"])),methods:s()({},a.i(d.c)(["getAdminData"]),{handleCommand:function(e){var t=this;return r()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"home"==e?t.$router.push("/manage"):"signout"==e&&t.$router.push("/");case 1:case"end":return a.stop()}},a,t)}))()}})}},248:function(e,t,a){t=e.exports=a(95)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#324057;height:67px;width:83%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px;position:fixed;left:16.5%;z-index:999}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},249:function(e,t,a){var n=a(248);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(208)("c0391230",n,!0)},250:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}}),e._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:e.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:e.baseImgPath+e.adminInfo.avatar}}),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"home"}},[e._v("首页")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"signout"}},[e._v("退出")])],1)],1)],1)},staticRenderFns:[]}},344:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(18),o=a.n(n),i=a(57),r=a.n(i),l=a(56),s=a.n(l),c=a(246),d=a.n(c),u=a(96);t.default={data:function(){return{tableData:[],currentRow:null,offset:0,limit:20,count:0,currentPage:1,addWindowStatus:!1,DeleteConfirmModel:!1,WindowTitle:"添加客户端版本",WindowDialogSaveStatus:0,loading:!0,UploadAddress:this.GLOBAL,saveData:[],downloadUrlName:"",clientNameUrl:"",windowData:{versionId:0,clientName:"",clientFlag:"",currentVer:"",downloadUrl:""},saveWindowData:{versionId:0,clientName:"",clientFlag:"",currentVer:"",downloadUrl:""},clientName:[{name:"无",value:0},{name:"窗口屏",value:1},{name:"综合屏",value:2},{name:"评价器",value:3},{name:"呼叫器",value:4}]}},components:{headTop:d.a},created:function(){this.getWindowData()},methods:{initData:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.currentPage=e,this.offset=(e-1)*this.limit,this.getUsers()},handleAvatarSuccess:function(e,t){"success"==e.status?(this.windowData.downloadUrl=e.photo+e.name,console.log("bbbbbbbbbbbbbbbbbbbbb"),console.log(this.windowData.downloadUrl)):this.$refs["buss-img"].clearFiles()},getWindowData:function(){var e=this;return s()(r.a.mark(function t(){var n,o;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.i(u.p)("",1);case 2:n=t.sent,o=n.data[0].content,e.tableData=[],console.log("777777"),console.log(o),o.forEach(function(t){var a={};a.versionId=t.versionId,a.clientName=t.clientName,a.clientFlag=t.clientFlag,a.currentVer=t.currentVer,a.downloadUrl=t.downloadUrl,a.downloadUrlName=e.downloadUrlArr(t.downloadUrl),e.tableData.push(a)}),e.loading=!1;case 9:case"end":return t.stop()}},t,e)}))()},AddWindowDialog:function(){this.windowData.versionId=0,this.windowData.clientName="",this.windowData.clientFlag="",this.windowData.currentVer="",this.windowData.downloadUrl="",this.WindowTitle="添加客户端版本",this.addWindowStatus=!0},SaveWindowDialog:function(){var e=this.saveWindowData;void 0!==e&&e.clientName.length>0?(this.WindowDialogSaveStatus=1,this.WindowTitle="编辑客户端版本:"+e.clientName,this.addWindowStatus=!0,this.windowData=e):this.$alert("请选择编辑数据","消息提示",{confirmButtonText:"确定",callback:function(e){}})},DeleteWindowDialog:function(){var e=this.saveWindowData;console.log("7777777"),console.log(e),e.currentVer?this.DeleteConfirmModel=!0:this.$notify.error({title:"错误",message:"请选择要删除的数据",offset:100})},Cancel:function(e){this.addWindowStatus=!1,this.DeleteConfirmModel=!1,this.$refs.windowTable.setCurrentRow(),void 0!=e&&this.$refs[e].resetFields()},handleWindowListChange:function(e,t){console.log("77777"),console.log(e),this.saveData=e,"object"==(void 0===e?"undefined":o()(e))&&null!=e&&(this.saveWindowData.versionId=e.versionId,this.saveWindowData.clientName=e.clientName,this.saveWindowData.clientFlag=e.clientFlag,this.saveWindowData.currentVer=e.currentVer,this.saveWindowData.downloadUrl=e.downloadUrl)},handleSelectionChange:function(e){console.log(e)},DeleteConfirm:function(){var e=this;return s()(r.a.mark(function t(){var n,i,l,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.saveWindowData,i=e.tableData,l=void 0,t.next=3,a.i(u.q)([n.versionId],1);case 3:if(l=t.sent,"object"!=(void 0===l?"undefined":o()(l))||0!=l.result){t.next=15;break}s=0;case 6:if(!(s<i.length)){t.next=13;break}if(n.versionId!=i[s].versionId){t.next=10;break}return e.tableData.splice(s,1),t.abrupt("break",13);case 10:s++,t.next=6;break;case 13:t.next=16;break;case 15:e.$notify.error({title:"删除失败",message:"失败",offset:100});case 16:e.DeleteConfirmModel=!1;case 17:case"end":return t.stop()}},t,e)}))()},AddScreenData:function(e){var t=this;return s()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.$refs[e].validate(function(){var e=s()(r.a.mark(function e(n){var i,l,s,c,d;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=24;break}if(i=t.WindowDialogSaveStatus,l=void 0,s=t.windowData,c=void 0,d=void 0,1!=i){e.next=15;break}if(!(s.currentVer<=t.saveData.currentVer)){e.next=8;break}l="编辑",d=",请重新输入版本号",e.next=13;break;case 8:return l="编辑",s.entId=s.versionId,e.next=12,a.i(u.r)([s],1);case 12:c=e.sent;case 13:e.next=22;break;case 15:if(0!=i){e.next=22;break}return l="添加",s.clientFlag=t.GetclientFlagName(s.clientName),s.clientName=t.GetClientVerName(s.clientName),e.next=21,a.i(u.s)([s],1);case 21:c=e.sent;case 22:console.log(c),"object"==(void 0===c?"undefined":o()(c))&&0==c.result?(t.$message({type:"success",message:l+"成功"}),t.getWindowData(),t.addWindowStatus=!1):t.$notify.error({title:"失败",message:l+"失败"+d,offset:100});case 24:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return n.stop()}},n,t)}))()},closeDialog:function(){this.windowData.versionId=0,this.windowData.clientName="",this.windowData.clientFlag="",this.windowData.currentVer="",this.windowData.downloadUrl="",this.$refs.windowTable.setCurrentRow()},SelectFun:function(e){this.clientNameUrl=this.windowData.clientName,console.log("0000000000000000"),console.log(this.clientNameUrl)},GetClientVerName:function(e){var t="";return this.clientName.forEach(function(a){a.value==e&&(t=a.name)}),t},GetclientFlagName:function(e){var t="";switch(e){case 1:t="T_WinDisplay";break;case 2:t="T_CompDisplay";break;case 3:t="T_Evaluator";break;case 4:t="T_WinCaller"}return t},downloadUrlArr:function(e){var t=[];return t=e.split("/"),t[3]}}}},391:function(e,t,a){t=e.exports=a(95)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.table_container{padding:20px}",""])},514:function(e,t,a){var n=a(391);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(208)("ded5e306",n,!0)},553:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("head-top"),e._v(" "),a("el-row",{},[a("el-col",{staticClass:"button_margin",staticStyle:{padding:"20px"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:e.AddWindowDialog}},[e._v("添加")]),e._v(" "),a("el-button",{on:{click:e.SaveWindowDialog}},[e._v("编辑")]),e._v(" "),a("el-button",{on:{click:e.DeleteWindowDialog}},[e._v("删除")])],1)],1),e._v(" "),a("div",{staticClass:"table_container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"windowTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"",height:"700",border:""},on:{"current-change":e.handleWindowListChange,select:e.handleSelectionChange}},[a("el-table-column",{attrs:{property:"versionId",label:"序号",align:"center",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{property:"clientName",label:"客户端名称",align:"center",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{property:"currentVer",label:"版本号",align:"center",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{property:"downloadUrlName",label:"文件名",align:"center"}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.WindowTitle,visible:e.addWindowStatus},on:{"update:visible":function(t){e.addWindowStatus=t},close:e.closeDialog}},[a("el-form",{ref:"windowData",attrs:{model:e.windowData}},[a("el-form-item",{attrs:{label:"客户端：","label-width":"150px"}},[a("el-select",{staticStyle:{width:"40%"},attrs:{placeholder:"请选择"},on:{input:e.SelectFun},model:{value:e.windowData.clientName,callback:function(t){e.$set(e.windowData,"clientName",t)},expression:"windowData.clientName"}},e._l(e.clientName,function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value,disabled:e.disabled}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"版本号：","label-width":"150px"}},[a("el-input",{staticStyle:{width:"40%"},attrs:{"auto-complete":"off"},model:{value:e.windowData.currentVer,callback:function(t){e.$set(e.windowData,"currentVer",e._n(t))},expression:"windowData.currentVer"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上传文件：","label-width":"150px"}},[a("el-upload",{staticClass:"upload-demo",attrs:{action:e.UploadAddress.UploadFilesAddress,data:{fileName:this.clientNameUrl},multiple:"","on-success":e.handleAvatarSuccess}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.Cancel("windowData")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.AddScreenData("windowData")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"确认吗？",width:"30%",visible:e.DeleteConfirmModel},on:{close:e.closeDialog,"update:visible":function(t){e.DeleteConfirmModel=t}}},[e._v("\n\n        确定要删除版本："+e._s(e.saveWindowData.clientName)+"  吗？\n        "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.Cancel()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.DeleteConfirm()}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]}}});