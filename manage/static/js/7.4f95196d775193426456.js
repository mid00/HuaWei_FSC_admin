webpackJsonp([7],{239:function(e,t,a){a(502);var n=a(94)(a(365),a(541),null,null);e.exports=n.exports},246:function(e,t,a){a(249);var n=a(94)(a(247),a(250),null,null);e.exports=n.exports},247:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(57),i=a.n(n),o=a(56),r=a.n(o),l=a(58),s=a.n(l),d=(a(96),a(98)),c=a(97);t.default={data:function(){return{baseImgPath:d.c}},created:function(){this.adminInfo.id||this.getAdminData()},computed:s()({},a.i(c.b)(["adminInfo"])),methods:s()({},a.i(c.c)(["getAdminData"]),{handleCommand:function(e){var t=this;return r()(i.a.mark(function a(){return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:"home"==e?t.$router.push("/manage"):"signout"==e&&t.$router.push("/");case 1:case"end":return a.stop()}},a,t)}))()}})}},248:function(e,t,a){t=e.exports=a(95)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.header_container{background-color:#324057;height:67px;width:83%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-left:20px;position:fixed;left:16.5%;z-index:999}.avator{width:36px;height:36px;border-radius:50%;margin-right:37px}.el-dropdown-menu__item{text-align:center}",""])},249:function(e,t,a){var n=a(248);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(208)("c0391230",n,!0)},250:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header_container"},[a("el-breadcrumb",{attrs:{separator:"/"}}),e._v(" "),a("el-dropdown",{attrs:{"menu-align":"start"},on:{command:e.handleCommand}},[a("img",{staticClass:"avator",attrs:{src:e.baseImgPath+e.adminInfo.avatar}}),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"home"}},[e._v("首页")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"signout"}},[e._v("退出")])],1)],1)],1)},staticRenderFns:[]}},365:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(18),i=a.n(n),o=a(57),r=a.n(o),l=a(56),s=a.n(l),d=a(246),c=a.n(d),u=a(96);t.default={data:function(){return{tableData:[],addWindowStatus:!1,DeleteConfirmModel:!1,WindowTitle:"添加窗口",WindowDialogSaveStatus:0,loading:!0,windowData:{winId:0,winNo:"",name:"",description:"",regionId:"",winDesc:"",bussName:"",winDisplayId:"",speakerId:"",evaluatorId:"",callerId:""},saveWindowData:{winId:0,winNo:"",name:"",description:"",regionId:"",winDesc:"",bussName:"",winDisplayId:"",speakerId:"",evaluatorId:"",callerId:""},WinDisplay:[],Speaker:[],Evaluator:[],Caller:[],Region:[],queue_select:"",rules:{name:[{required:!0,message:"请输入窗口名",trigger:"blur"},{min:3,max:100,message:"长度在3到10个字符",trigger:"blur"}]}}},components:{headTop:c.a},created:function(){this.GetWinJointDatas(),this.getWindowData()},methods:{initData:function(){var e=this;return s()(r.a.mark(function t(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},t,e)}))()},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.currentPage=e,this.offset=(e-1)*this.limit,this.getUsers()},getWindowData:function(){var e=this;return s()(r.a.mark(function t(){var n,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.GetWinJointDatas(),t.next=3,a.i(u.o)("",1);case 3:n=t.sent,i=n.data[0].content,console.log("77777777777777777777"),console.log(i),e.tableData=[],i.forEach(function(t){var a={};a.name=t.name,a.winNo=t.winNo,a.description=t.description,a.winDesc=t.winDesc,a.winId=t.winId,a.bussName=t.bussName,a.regionId=t.regionId,a.regionStr=e.GetWinJointDataName("Region",t.regionId),a.regionStr="无"==a.regionStr?"":a.regionStr,a.winDisplayId=t.winDisplayId,a.winDisplayStr=e.GetWinJointDataName("WinDisplay",t.winDisplayId),a.winDisplayStr="无"==a.winDisplayStr?"":a.winDisplayStr,a.speakerId=t.speakerId,a.speakerStr=e.GetWinJointDataName("Speaker",t.speakerId),a.speakerStr="无"==a.speakerStr?"":a.speakerStr,a.evaluatorId=t.evaluatorId,a.evaluatorStr=e.GetWinJointDataName("Evaluator",t.evaluatorId),a.evaluatorStr="无"==a.evaluatorStr?"":a.evaluatorStr,a.callerId=t.callerId,a.callerStr=e.GetWinJointDataName("Caller",t.callerId),a.callerStr="无"==a.callerStr?"":a.callerStr,e.tableData.push(a)}),e.loading=!1;case 10:case"end":return t.stop()}},t,e)}))()},AddWindowDialog:function(){this.windowData.winId=0,this.windowData.name="",this.windowData.winNo="",this.windowData.description="",this.windowData.regionId="",this.windowData.bussName="",this.windowData.winDisplayId="",this.windowData.speakerId="",this.windowData.evaluatorId="",this.windowData.callerId="",this.windowData.winDesc="",this.WindowTitle="添加业务窗口",this.addWindowStatus=!0},SaveWindowDialog:function(){var e=this.saveWindowData;void 0!==e&&void 0!==e.name&&e.name.length>0?(this.WindowDialogSaveStatus=1,this.WindowTitle="编辑窗口:"+e.name,this.addWindowStatus=!0,this.windowData=e):this.$notify.error({title:"错误",message:"请选择要编辑的数据",offset:100})},DeleteWindowDialog:function(){this.saveWindowData.name.length>0?this.DeleteConfirmModel=!0:this.$notify.error({title:"错误",message:"请选择要删除的数据",offset:100})},Cancel:function(e){this.addWindowStatus=!1,this.DeleteConfirmModel=!1,this.$refs.windowTable.setCurrentRow(),void 0!=e&&this.$refs[e].resetFields()},handleWindowListChange:function(e,t){"object"==(void 0===e?"undefined":i()(e))&&null!=e&&e.name.length>0&&(this.saveWindowData.winId=e.winId,this.saveWindowData.name=e.name,this.saveWindowData.description=e.description,this.saveWindowData.winNo=e.winNo,this.saveWindowData.bussName=e.bussName,this.saveWindowData.regionId=e.regionId,this.saveWindowData.winDesc=e.winDesc,this.saveWindowData.winDisplayId=e.winDisplayId,this.saveWindowData.speakerId=e.speakerId,this.saveWindowData.evaluatorId=e.evaluatorId,this.saveWindowData.callerId=e.callerId)},handleSelectionChange:function(e){console.log(e)},DeleteConfirm:function(){var e=this;return s()(r.a.mark(function t(){var n,o,l,s;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.saveWindowData,o=e.tableData,l=void 0,t.next=3,a.i(u._10)([n.winId],1);case 3:if(l=t.sent,"object"!=(void 0===l?"undefined":i()(l))||0!=l.result){t.next=15;break}s=0;case 6:if(!(s<o.length)){t.next=13;break}if(n.winId!=o[s].winId){t.next=10;break}return e.tableData.splice(s,1),t.abrupt("break",13);case 10:s++,t.next=6;break;case 13:t.next=16;break;case 15:e.$notify.error({title:"删除失败",message:"失败",offset:100});case 16:e.DeleteConfirmModel=!1;case 17:case"end":return t.stop()}},t,e)}))()},AddScreenData:function(e){var t=this;return s()(r.a.mark(function n(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t.$refs[e].validate(function(){var e=s()(r.a.mark(function e(n){var o,l,s,d;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=26;break}if(o=t.WindowDialogSaveStatus,l=void 0,s=t.windowData,d=void 0,1!=o){e.next=13;break}return l="编辑",s.entId=s.winId,console.log("5555555555555"),console.log(s),console.log(s.winId),e.next=10,a.i(u._11)([s],1);case 10:d=e.sent,e.next=22;break;case 13:if(0!=o){e.next=22;break}return l="添加",console.log("00000"),console.log(s),e.next=19,a.i(u._12)([s],1);case 19:d=e.sent,console.log("1111111"),console.log(d);case 22:console.log(d),"object"==(void 0===d?"undefined":i()(d))&&0==d.result?(t.$message({type:"success",message:l+"成功"}),t.getWindowData(),t.addWindowStatus=!1):t.$notify.error({title:"失败",message:l+"失败",offset:100}),e.next=27;break;case 26:t.$notify.error({title:"错误",message:"请输入正确的窗口名称",offset:100});case 27:case"end":return e.stop()}},e,t)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return n.stop()}},n,t)}))()},closeDialog:function(){this.saveWindowData.winId=0,this.saveWindowData.winNo="",this.saveWindowData.description="",this.saveWindowData.name="",this.saveWindowData.bussName="",this.saveWindowData.winDisplayId="",this.saveWindowData.regionId="",this.saveWindowData.winDesc="",this.saveWindowData.speakerId="",this.saveWindowData.evaluatorId="",this.saveWindowData.callerId="",this.$refs.windowTable.setCurrentRow()},SelectFun:function(e){},GetWinJointDataName:function(e,t){var a="";switch(e){case"WinDisplay":for(var n=this.WinDisplay,i=0;i<n.length;i++)if(n[i].winDisplayId==t){a=n[i].name;break}break;case"Region":for(var o=this.Region,r=0;r<o.length;r++)if(o[r].regionId==t){a=o[r].name;break}break;case"Speaker":for(var l=this.Speaker,s=0;s<l.length;s++)if(l[s].speakerId==t){a=l[s].name;break}break;case"Evaluator":for(var d=this.Evaluator,c=0;c<d.length;c++)if(d[c].evaluatorId==t){a=d[c].name;break}break;case"Caller":for(var u=this.Caller,w=0;w<u.length;w++)if(u[w].callerId==t){a=u[w].name;break}}return a},GetWinJointDatas:function(){var e=this;return s()(r.a.mark(function t(){var n,i,o,l,s,d,c,w,p,f,m,v,h;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.i(u._13)("",1);case 2:n=t.sent,i=n.data,o=[],l=[],s=[],d=[],c=[],w=0;case 5:if(!(w<i.length)){t.next=23;break}console.log(i[w]),t.t0=i[w].dataType,t.next="T_WinDisplay"===t.t0?10:"T_HallRegion"===t.t0?12:"T_Speaker"===t.t0?14:"T_Evaluator"===t.t0?16:"T_WinCaller"===t.t0?18:20;break;case 10:return o=i[w].content,t.abrupt("break",20);case 12:return c=i[w].content,t.abrupt("break",20);case 14:return l=i[w].content,t.abrupt("break",20);case 16:return s=i[w].content,t.abrupt("break",20);case 18:return d=i[w].content,t.abrupt("break",20);case 20:w++,t.next=5;break;case 23:p={name:"无",winDisplayId:0},o.unshift(p),e.WinDisplay=o,f={name:"无",speakerId:0},l.unshift(f),e.Speaker=l,m={name:"无",evaluatorId:0},s.unshift(m),e.Evaluator=s,v={name:"无",callerId:0},d.unshift(v),e.Caller=d,h={name:"无",regionId:0},c.unshift(h),e.Region=c;case 38:case"end":return t.stop()}},t,e)}))()}}}},379:function(e,t,a){t=e.exports=a(95)(!1),t.push([e.i,".allcover{position:absolute;top:0;right:0}.ctt{left:50%;transform:translate(-50%,-50%)}.ctt,.tb{position:absolute;top:50%}.tb{transform:translateY(-50%)}.lr{position:absolute;left:50%;transform:translateX(-50%)}.table_container{padding:20px}",""])},502:function(e,t,a){var n=a(379);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(208)("480cbebe",n,!0)},541:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fillcontain"},[a("head-top"),e._v(" "),a("el-row",{},[a("el-col",{staticClass:"button_margin",staticStyle:{padding:"20px"},attrs:{span:24}},[a("el-button",{attrs:{type:"primary"},on:{click:e.AddWindowDialog}},[e._v("添加")]),e._v(" "),a("el-button",{on:{click:e.SaveWindowDialog}},[e._v("编辑")]),e._v(" "),a("el-button",{on:{click:e.DeleteWindowDialog}},[e._v("删除")])],1)],1),e._v(" "),a("div",{staticClass:"table_container"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"windowTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"highlight-current-row":"",height:"700",border:""},on:{"current-change":e.handleWindowListChange,select:e.handleSelectionChange}},[a("el-table-column",{attrs:{property:"winId",label:"序号",width:"80",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{property:"winNo",label:"窗口编号",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{property:"name",label:"窗口名称",width:"110",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{property:"bussName",label:"窗口业务名称",align:"center",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{property:"winDesc",label:"窗口业务介绍",align:"center",width:"450"}}),e._v(" "),a("el-table-column",{attrs:{property:"description",label:"窗口描述",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{property:"winDisplayStr",label:"窗口显示屏",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{property:"regionStr",label:"楼层区域",align:"center",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{property:"speakerStr",label:"语音外放",align:"center",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{property:"evaluatorStr",label:"评价器",align:"center",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{property:"callerStr",label:"叫号器",align:"center",width:"80"}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.WindowTitle,visible:e.addWindowStatus},on:{"update:visible":function(t){e.addWindowStatus=t},close:e.closeDialog}},[a("el-form",{ref:"windowData",attrs:{model:e.windowData,rules:e.rules}},[a("el-form-item",{attrs:{label:"业务窗口名称","label-width":"130px",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.windowData.name,callback:function(t){e.$set(e.windowData,"name",t)},expression:"windowData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"业务窗口编号","label-width":"130px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.windowData.winNo,callback:function(t){e.$set(e.windowData,"winNo",t)},expression:"windowData.winNo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"窗口业务名称","label-width":"130px"}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.windowData.bussName,callback:function(t){e.$set(e.windowData,"bussName",t)},expression:"windowData.bussName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"窗口业务介绍","label-width":"130px"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:e.windowData.winDesc,callback:function(t){e.$set(e.windowData,"winDesc",t)},expression:"windowData.winDesc"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"窗口描述","label-width":"130px"}},[a("el-input",{attrs:{type:"textarea","auto-complete":"off"},model:{value:e.windowData.description,callback:function(t){e.$set(e.windowData,"description",t)},expression:"windowData.description"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"楼层区域","label-width":"130px"}},[a("el-select",{attrs:{placeholder:"请选择楼层区域"},on:{change:e.SelectFun},model:{value:e.windowData.regionId,callback:function(t){e.$set(e.windowData,"regionId",t)},expression:"windowData.regionId"}},e._l(e.Region,function(e){return a("el-option",{key:e.regionId,attrs:{label:e.name,value:e.regionId,disabled:e.disabled}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"窗口屏","label-width":"130px"}},[a("el-select",{attrs:{placeholder:"请选择窗口屏"},on:{change:e.SelectFun},model:{value:e.windowData.winDisplayId,callback:function(t){e.$set(e.windowData,"winDisplayId",t)},expression:"windowData.winDisplayId"}},e._l(e.WinDisplay,function(e){return a("el-option",{key:e.winDisplayId,attrs:{label:e.name,value:e.winDisplayId,disabled:e.disabled}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"语音外放","label-width":"130px"}},[a("el-select",{attrs:{placeholder:"请选择语音外放"},on:{change:e.SelectFun},model:{value:e.windowData.speakerId,callback:function(t){e.$set(e.windowData,"speakerId",t)},expression:"windowData.speakerId"}},e._l(e.Speaker,function(e){return a("el-option",{key:e.speakerId,attrs:{label:e.name,value:e.speakerId,disabled:e.disabled}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"评价器","label-width":"130px"}},[a("el-select",{attrs:{placeholder:"请选择评价器"},on:{change:e.SelectFun},model:{value:e.windowData.evaluatorId,callback:function(t){e.$set(e.windowData,"evaluatorId",t)},expression:"windowData.evaluatorId"}},e._l(e.Evaluator,function(e){return a("el-option",{key:e.evaluatorId,attrs:{label:e.name,value:e.evaluatorId,disabled:e.disabled}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"叫号器","label-width":"130px"}},[a("el-select",{attrs:{placeholder:"请选择叫号器"},on:{change:e.SelectFun},model:{value:e.windowData.callerId,callback:function(t){e.$set(e.windowData,"callerId",t)},expression:"windowData.callerId"}},e._l(e.Caller,function(e){return a("el-option",{key:e.callerId,attrs:{label:e.name,value:e.callerId,disabled:e.disabled}})}),1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.Cancel("windowData")}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.AddScreenData("windowData")}}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"确认吗？",width:"30%",visible:e.DeleteConfirmModel},on:{close:e.closeDialog,"update:visible":function(t){e.DeleteConfirmModel=t}}},[e._v("\n        确定要删除窗口："+e._s(e.saveWindowData.name)+"  吗？\n        "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer",align:"center"},slot:"footer"},[a("el-button",{on:{click:function(t){return e.Cancel()}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.DeleteConfirm()}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]}}});