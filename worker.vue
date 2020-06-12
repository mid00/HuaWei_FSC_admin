<template>
    <div class="fillcontain">
        <head-top></head-top>
        <el-row style="">
            <el-col :span="24" class="button_margin" style="padding: 20px;">
            <el-button @click="AddWindowDialog" type="primary">添加</el-button>
              <el-button @click="SaveWindowDialog">编辑</el-button>
              <el-button @click="DeleteWindowDialog">删除</el-button>
            </el-col>
        </el-row>
        <div class="table_container">
            <el-table
                 :data="tableData"
                 highlight-current-row
                 @current-change="handleWindowListChange"
                 @select = "handleSelectionChange"
                 ref="windowTable"
                 v-loading="loading"
                 style="width: 100%;margin-bottom: 20px;"
                 row-key="workerId"
                 border
                 default-expand-all
                 :tree-props="{children: 'children', hasChildren: 'hasChildren'}">

                        <el-table-column
                            property="workerId"
                            label="序号"
                            width="80"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            property="departmentIdStr"
                            label="所属部门"
                            width="190px"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            property="workerNo"
                            label="员工编号"
                            width="120px"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            property="name"
                            label="员工名字"
                            align="center"
                            width="150px">
                        </el-table-column>

                        <el-table-column
                            property="age"
                            label="年龄"
                            align="center"
                            width="90px">
                        </el-table-column>

                        <el-table-column
                            property="telNumber"
                            label="柜员电话"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            property="email"
                            label="邮箱"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            property="sex"
                            label="性别"
                            align="center"
                            width="60px">
                        </el-table-column>

                        <el-table-column
                            property="star"
                            label="星级"
                            align="center"
                            width="60px">
                        </el-table-column>

                        <el-table-column
                            property="message"
                            label="服务寄语"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            property="telSupervise"
                            label="监督电话"
                            align="center">
                        </el-table-column>

                        <el-table-column
                            property="isHangup"
                            label="启用挂起功能"
                            align="center"
                            width="110px">
                        </el-table-column>

                        <el-table-column
                            property="status"
                            label="员工状态"
                            align="center"
                            width="100px">
                        </el-table-column>

                        <el-table-column property="UploadAddress.ServerAddress+imgUrl" label="员工照片"                             align="center"
                                         width="100px" >
                            <!-- 图片的显示 -->
                            <template   slot-scope="scope" >
<!--                                <img :src="UploadAddress.ServerAddress+scope.row.imgUrl"  alt="" style="width: 30px;height:30px"  >-->
                                <img :src="UploadAddress.ServerAddress+scope.row.imgUrl"  alt="" width="50" height="50"  >
                            </template>
                        </el-table-column>

                 </el-table>

        </div>
        <el-dialog :title="WindowTitle" :visible.sync="addWindowStatus" @close="closeDialog">
            <el-form :model="windowData" :rules="rules" ref="windowData">
                <el-form-item label="部门" label-width="130px">
                    <el-select v-model.number="windowData.departmentId" @input="SelectDepartmentFun"
                               placeholder="请选择部门">
                        <el-option
                            v-for="item in DepartmentData"
                            :key="item.departmentId"
                            :label="item.name"
                            :value="item.departmentId"
                            :disabled="item.disabled">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="员工编号" label-width="130px" >
                    <el-input v-model="windowData.workerNo" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="员工姓名" label-width="130px" prop="name">
                    <el-input v-model="windowData.name" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="员工年龄" label-width="130px">
                    <el-input v-model.number="windowData.age" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="柜员电话" label-width="130px">
                    <el-input v-model="windowData.telNumber" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="柜员邮箱" label-width="130px">
                    <el-input v-model="windowData.email" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="柜员性别" label-width="130px">
                    <el-radio v-model="windowData.sex" label="1">男</el-radio>
                    <el-radio v-model="windowData.sex" label="2">女</el-radio>
                </el-form-item>

                <el-form-item label="柜员星级" label-width="130px">
                    <el-input type="number" v-model.number="windowData.star" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="服务寄语" label-width="130px">
                    <el-input v-model="windowData.message" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="监督电话" label-width="130px">
                    <el-input v-model="windowData.telSupervise" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="是否使用挂起功能:" label-width="130px">
                    <el-radio v-model="windowData.isHangup" :label="0">否</el-radio>
                    <el-radio v-model="windowData.isHangup" :label="1">是</el-radio>
                </el-form-item>

                <el-form-item label="登录密码" label-width="130px">
                    <el-input type="text" v-model="windowData.password" auto-complete="off"></el-input>
                </el-form-item>

                <el-form-item label="员工照片" label-width="130px">
                    <el-upload
                        class="avatar-uploader"
                        :action="UploadAddress.UploadBusinessAddress+'?fileName=workerImg'"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"

                    ><img v-if="windowData.imgUrl" :src="UploadAddress.ServerAddress+windowData.imgUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>

                <el-form-item label="状态" label-width="130px">
                    <el-radio v-model="windowData.status" :label='1'>启用</el-radio>
                    <el-radio v-model="windowData.status" :label='0'>停用</el-radio>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer" align="center">
                <el-button @click="Cancel('windowData')">取 消</el-button>
                <el-button type="primary" @click="AddScreenData('windowData')">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="确认吗？" width="30%" @close="closeDialog" :visible.sync="DeleteConfirmModel" >
            确定要删除窗口：{{saveWindowData.name}}  吗？
            <div slot="footer" class="dialog-footer" align="center">
                <el-button @click="Cancel()">取 消</el-button>
                <el-button type="primary" @click="DeleteConfirm()">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {
        DepartmentListData,
        getWinList,
        getWorkerList,
        addWorkerList,
        saveWorkerList,
        deleteWorkerList,
        getBussItemList,
        deleWorkerBussList
    } from '@/api/getData'

    export default {
        data() {
            return {
                tableData: [],
                TreeData:[],
                TreeId:[],
                TreeDataArr:[],
                addWindowStatus:false,
                DeleteConfirmModel:false,
                WindowTitle:"添加窗口",
                WindowDialogSaveStatus:0,
                loading:true,
                UploadAddress:this.GLOBAL,
                DepartmentData:[],
                WorkerBusData:[],
                WinData:[],

                windowData:{
                    name:"",
                    workerId:0,
                    winId:0,
                    departmentId:0,
                    workerNo:"",
                    password:"",
                    imgUrl:"",
                    imgExt:"",
                    imgPath:"",
                    age:0,
                    telNumber:"",
                    email:"",
                    sex:"1",
                    star:0,
                    message:"",
                    telSupervise :"",
                    isHangup :1,
                    status:1
                },

                saveWindowData:{
                    name:"",
                    workerId:0,
                    winId:0,
                    departmentId:"",
                    workerNo:"",
                    password:"",
                    imgUrl:"",
                    imgExt:"",
                    imgPath:"",
                    age:0,
                    telNumber:"",
                    email:"",
                    sex:"1",
                    star:0,
                    message:"",
                    telSupervise :"",
                    isHangup :1,
                    status:1
                },
                queue_select:"",
                rules:{
                    name:[
                        {required:true,message:"请输入窗口名",trigger:"blur"},
                        {min:1,max:100,message:"长度在1到100个字符",trigger:"blur"}
                    ]
                },

            }
        },

        components: {
            headTop,
        },

        created() {
            this.GetDepartment();
            this.getWindowData();

        },

        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },

            async getWindowData() {
                const WindowData = await getWorkerList("",1);
                let WindowDataArr = WindowData.data[0].content
                this.tableData = [];
                console.log("9999999999999999")
                console.log(WindowDataArr)

                WindowDataArr.forEach(item => {
                    const tableData = {};
                    tableData.name = item.name;
                    tableData.workerId = item.workerId;
                    tableData.winId = item.winId;
                    //获取部门名称
                    tableData.departmentId = item.departmentId;
                    tableData.departmentIdStr = this.GetDepartmentName(item.departmentId);
                    tableData.departmentIdStr = tableData.departmentIdStr=="无"? "": tableData.departmentIdStr;

                    tableData.workerNo = item.workerNo;
                    tableData.password = item.password;
                    tableData.imgUrl = item.imgUrl;
                    tableData.imgExt = item.imgExt;
                    tableData.imgPath = item.imgPath;
                    tableData.age = item.age;
                    tableData.telNumber = item.telNumber;
                    tableData.email = item.email;
                    tableData.sex = item.sex;
                    tableData.imgExt = item.imgExt;
                    tableData.imgPath = item.imgPath;
                    tableData.sex = item.sex == "1" ? "男" : "女";
                    tableData.star = item.star;
                    tableData.message = item.message;
                    tableData.telSupervise = item.telSupervise;
                    tableData.isHangup = item.isHangup;
                    tableData.isHangup = item.isHangup == 1 ? "是" : "否";
                    tableData.status = item.status == 1 ? "启用" : "停用";
                    this.tableData.push(tableData);
                })
                this.loading=false
            },

            handleAvatarSuccess(msg,file){
                if (msg.status=='success'){
                    this.windowData.imgUrl=msg.photo+msg.name
                    this.windowData.imgExt=msg.imgExt
                    this.windowData.imgPath=msg.imgPath
                    console.log("bbbbbbbbbbbbbbbbbbbbb");
                    console.log(this.windowData.imgUrl);

                }else{
                    this.$refs["buss-img"].clearFiles()
                }

            },

            AddWindowDialog(){              //打开添加对话框
                this.windowData.name = "";
                this.windowData.workerId = "";
                this.windowData.winId = "";
                this.windowData.password = "";

                this.windowData.departmentId ="";
                this.windowData.workerNo ="";
                this.windowData.age =0;
                this.windowData.telNumber = "";

                this.windowData.email ="";
                this.windowData.imgUrl ="";
                this.windowData.imgExt=""
                this.windowData.imgPath=""

                this.windowData.sex = "1";
                this.windowData.star =0;
                this.windowData.message = "";
                this.windowData.telSupervise = "";
                this.windowData.isHangup = 0;

                this.windowData.status =1;


                this.WindowTitle="添加工作人员"
                this.addWindowStatus=true
            },

            SaveWindowDialog(){          //打开编辑对话框
                console.log("00000000000");
                console.log(this.saveWindowData);

                let SaveData = this.saveWindowData;
                if (typeof SaveData !="undefined"
                    && typeof SaveData.name !="undefined"
                    && SaveData.name.length > 0){

                    this.WindowDialogSaveStatus=1
                    this.WindowTitle="编辑窗口:"+SaveData.name
                    this.addWindowStatus=true
                    this.windowData = SaveData

                }else{
                    this.$notify.error({
                        title: '错误',
                        message: '请选择要编辑的数据',
                        offset: 100
                    });
                }
            },

            DeleteWindowDialog(){       //删除对话框

                let SaveData = this.saveWindowData
                if (SaveData){
                    this.DeleteConfirmModel=true
                }else{
                    this.$notify.error({
                        title: '错误',
                        message: '请选择要删除的数据',
                        offset: 100
                    });
                }
            },

            Cancel(validateHtml){   //对话框取消
                this.addWindowStatus=false
                this.DeleteConfirmModel=false
                this.$refs.windowTable.setCurrentRow();
                if (validateHtml != undefined){
                    this.$refs[validateHtml].resetFields();
                }
            },

            handleWindowListChange(val,row){
                console.log("22222222");
                console.log(val)
                if (typeof val =="object" && val!=null && val.name.length > 0){
                    this.saveWindowData.name = val.name;
                    this.saveWindowData.workerId =val.workerId;
                    this.saveWindowData.winId =val.winId;
                    this.saveWindowData.password =val.password;

                    this.saveWindowData.departmentId =val.departmentId;
                    this.saveWindowData.workerNo =val.workerNo;
                    this.saveWindowData.age = val.age;
                    this.saveWindowData.telNumber =val.telNumber;

                    this.saveWindowData.email =val.email;

                    this.saveWindowData.imgUrl =val.imgUrl;
                    this.saveWindowData.imgExt =val.imgExt;
                    this.saveWindowData.imgPath =val.imgPath;

                    this.saveWindowData.sex =val.sex =="男" ? "1" :"2";
                    this.saveWindowData.star =val.star;
                    this.saveWindowData.message =val.message;
                    this.saveWindowData.telSupervise =val.telSupervise;
                    this.saveWindowData.isHangup =val.isHangup =="否" ? 0 :1;

                    this.saveWindowData.status =val.status =="启用" ? 1 :0;
                }


            },


            handleSelectionChange(row){
                console.log("22222222");
                console.log(row)
            },

            async DeleteConfirm(){
                let SaveData = this.saveWindowData,TableData = this.tableData,res
                res=await deleteWorkerList([SaveData.workerId],1);
                if (typeof res == "object" && res.result==0){

                    for (let i=0;i<TableData.length;i++){
                        if (SaveData.speakerId == TableData[i].speakerId){
                            this.tableData.splice(i,1)
                            break;
                        }
                    }

                }else{
                    this.$notify.error({
                        title: '删除失败',
                        message: '失败',
                        offset: 100
                    });
                }
                this.DeleteConfirmModel=false
            },

            async AddScreenData(validateHtml){
                this.$refs[validateHtml].validate(async (valid)=>{
                    if (valid){
                        let EditOrStatus = this.WindowDialogSaveStatus,TipsMsgStr,SendDataJson= this.windowData,res

                        if (EditOrStatus == 1){
                            TipsMsgStr = "编辑"
                            SendDataJson.entId = SendDataJson.workerId

                            res=await saveWorkerList([SendDataJson],1);

                        }else if (EditOrStatus == 0){
                            TipsMsgStr = "添加"
                            res=await addWorkerList([SendDataJson],1);
                        }
                        console.log(res)
                        if (typeof res =="object" && res.result==0){
                            this.$message({
                                type: 'success',
                                message: TipsMsgStr+'成功'
                            });
                            this.getWindowData()
                            this.addWindowStatus=false
                        }else{
                            this.$notify.error({
                                title: '失败',
                                message: TipsMsgStr+'失败',
                                offset: 100
                            });
                        }
                    }else{
                        this.$notify.error({
                            title: '错误',
                            message: '请输入正确的窗口名称',
                            offset: 100
                        });
                    }
                })
            },

            closeDialog(){
                this.saveWindowData.name = "";
                this.saveWindowData.workerId = "";
                this.saveWindowData.winId = 0;
                this.saveWindowData.departmentId ="";
                this.saveWindowData.workerNo ="";
                this.saveWindowData.password ="";
                this.saveWindowData.age =0;
                this.saveWindowData.telNumber = "";
                this.saveWindowData.email ="";
                this.saveWindowData.imgUrl ="";
                this.saveWindowData.sex = "1";
                this.saveWindowData.star = 0;
                this.saveWindowData.message = "";
                this.saveWindowData.telSupervise = "";
                this.saveWindowData.isHangup = 0;
                this.saveWindowData.status =1;
                this.$refs.windowTable.setCurrentRow();
            },

            SelectFun(v){

            },

            GetDepartmentName(id){          //根据ID获取部门名
                let DepartmentDataArr = this.DepartmentData,DepartmentNameStr=""
                for (let i=0;i<=DepartmentDataArr.length;i++){
                    if (typeof DepartmentDataArr[i] !="undefined"
                        && DepartmentDataArr[i].departmentId == id
                    ){
                        DepartmentNameStr=DepartmentDataArr[i].name
                        break;
                    }
                }
                return DepartmentNameStr;
            },


            SelectDepartmentFun(){

            },

            async GetDepartment(){
                let DepartData = await DepartmentListData("",1),DeaprtDataArr = DepartData.data[0].content;
                let v = {
                    name:"无",
                    departmentId:0,
                }
                DeaprtDataArr.unshift(v)
                this.DepartmentData = DeaprtDataArr
            },

        }
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .table_container {
        padding: 0 20px 0 20px;
    }

</style>
