<template>
    <div class="fillcontain">

<!-- 1. 登录退出 -->
        <head-top></head-top>

<!-- 2. 添加删除 -->
        <el-row style="">
            <el-col :span="24" class="button_margin" style="padding: 20px;">
                <el-button @click="dialogVisible = true">添加</el-button>   <!-- 事件 2.1 点击按钮，dialogVisible = true -->
                <el-button @click="edit">编辑</el-button>                   <!-- 事件 2.2 -->
                <el-button @click="delect">删除</el-button>                 <!-- 事件 2.3 -->
            </el-col>
        </el-row>

<!-- 3. 用户管理 -->
		<div class="table_container">
		      <el-table
                height="500"
				highlight-current-row
				border
				style="width: 100%"


                :data="tableData"


                @row-click="choiceData">                                                                   <!-- 事件 3.1 --><!-- 列表页数据 -->

				<el-table-column width="180" align="center" label="网点代码" prop="DotCode">                <!-- 展示数据 变量 1 -->
				</el-table-column>

				<el-table-column width="180" align="center" label="产品名称" prop="Name">                   <!-- 变量 2 -->
				</el-table-column>

				<el-table-column width="180" align="center" label="产品照片地址" prop="ImgUrl">             <!-- 变量 3 -->

                    <!-- <img class="showPic" :src="ImgUrl" width="50" height="50"> -->

                    <template   slot-scope="scope" >
                        <img :src="scope.row.ImgUrl"  alt="" width="50" height="50"  >
                    </template>

				</el-table-column>


<!--			<el-table-column width="180" align="center" label="产品照片扩展名" prop="ImgExt"></el-table-column>
				<el-table-column width="180" align="center" label="产品照片本地路径" prop="ImgPath"></el-table-column>
-->

				<el-table-column width="220" align="center" label="产品状态" prop="Status">                     <!-- 变量 6 -->
				</el-table-column>

                <el-table-column width="220" align="center" label="显示顺序" prop="ShowOrder">                     <!-- 变量 7 -->
				</el-table-column>

				<el-table-column width="180" align="center" label="添加时间" prop="AddTime">                    <!-- 变量 8 -->
				</el-table-column>
			  </el-table>
		</div>

<!-- 4.0 添加、编辑、删除 对话框 -->
        <el-dialog :title="titleName" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">    <!-- 数据 dialogVisible=true 显示 -->

			<el-form ref="form" :model="form" label-width="150px">  <!-- 数据 -->


				<el-form-item label="网点代码">
					<el-input v-model="form.DotCode" placeholder="必填"></el-input>    <!-- 添加数据 变量 1 -->
				</el-form-item>

				<el-form-item label="产品名称">
					<el-input v-model="form.Name" placeholder="必填"></el-input>   <!-- 变量 2 -->
				</el-form-item>

				<el-form-item label="产品照片地址">
					<!-- <el-input v-model="form.ImgUrl" placeholder="可填"></el-input>        -->
                    <!-- http://192.168.0.159   '/Admin/core/common/image.php?fileName=product' -->
                    <el-upload
                        class="upload-demo"
                        :action="UploadAddress.UploadBusinessAddress+'?fileName=product'"
                        :on-success="handleSuccess"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="1"
                        :on-exceed="handleExceed"


                        :file-list="fileList"


                        show-file-list><!-- 1 -->

                        <div class="upload-but">
                            <div slot="tip" class="el-upload__tip">只能上传 png/jpg 文件，且不超过 500kb</div>
                            <el-button size="medium" type="primary">点击上传</el-button>
                        </div>
                    </el-upload>                                                <!-- 变量 3 -->
				</el-form-item>

<!-- 
				<el-form-item label="产品照片扩展名"><el-input v-model="form.ImgExt" placeholder="可填"></el-input></el-form-item>
				<el-form-item label="产品照片本地路径"><el-input v-model="form.ImgPath" placeholder="可填"></el-input></el-form-item>
 -->

				<el-form-item label="产品状态">
                    <el-radio v-model="form.Status" label="1" border>启用</el-radio>    <!-- 变量 6 -->
                    <el-radio v-model="form.Status" label="2" border>禁用</el-radio>
				</el-form-item>

                <el-form-item label="显示顺序">
					<el-input v-model="form.ShowOrder" placeholder="必填"></el-input>    <!-- 显示顺序 变量 1 -->
				</el-form-item>

				<el-form-item label="添加时间">
					<el-date-picker
                        type="datetime"
                        placeholder="请选择开始工作时间 - 必填"
                        align="right"
                        :picker-options="pickerOptions"
						v-model="form.AddTime">                     <!-- 变量 8 -->
					</el-date-picker>
				</el-form-item>

			</el-form>

<!-- 4.1 提交添加按钮 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="canceladd">取 消</el-button>     <!-- 点击按钮，给 dialogVisible = false -->
				<el-button type="primary" @click="AddData">确 定</el-button>    <!-- 事件 4.1 -->
			</span>

       </el-dialog>


    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {getList, inserList,updataList,delectList} from '@/api/getData'

    export default {
        components: { headTop , },  // 首页/退出组件
        data() {
            return {
                choiceDataValue:"", /* 2.2 选择某行, 暂存某行数据*/

                tableData: [],      /* 3. 页面列表参数 */

                UploadAddress:this.GLOBAL,/*上传图片地址 */

                dialogVisible: false,   /* 点击添加按钮弹出对话框 默认隐藏 */
                titleName:"添加用户",   /* 4. 按钮对话框 - 对话框中的提示名，是添加呢还是编辑 */

                form:{              /* 4. 添加按钮对话框参数 */
                    ShowOrder:'',// 变量
                    DotCode:'', // 变量 1
                    Name:'',    // 变量 2
                    ImgUrl:'',  // 变量 3
                    ImgExt:'',  // 变量 4
                    ImgPath:'', // 变量 5
                    Status:'',  // 变量 6
                    AddTime:'', // 变量 7
                },
                pickerOptions: {    // picker标签
                    shortcuts: [
                        {
                            text: '今天',
                            onClick(picker) {
                                picker.$emit('pick', new Date());
                            }
                        },
                        {
                            text: '昨天',
                            onClick(picker) {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                picker.$emit('pick', date);
                            }
                        },
                        {
                            text: '一周前',
                            onClick(picker) {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                picker.$emit('pick', date);
                            }
                        }
                    ]
                },

                fileList: [], // 2
                baseURL: '', // 基础路径
                productImgUrl: '',
            }
        },
        created() {
            this.selectList(); // 列表页获取数据
            this.getUrl();  // 获取基础地址
        },
        methods: {

            async getUrl(){ // 获取基础地址
                this.baseURL = sessionStorage.getItem('baseURL')
                console.log(sessionStorage.getItem('baseURL'))
                console.log(this.baseURL)

                this.productImgUrl = sessionStorage.getItem('productImgURL')
            },

            async selectList() {    /* 3. 列表页获取数据 *///--------------------------------------- 方法 一


                const selectDade = await getList({
                        "cmd":"product",
                        "type":"select"
                });

                console.log("获取数据：")
                console.log(selectDade)

                this.tableData = [];    /* 3. 列表页获取数据 */

                if(selectDade.result==200 && selectDade.data !=""){

                    selectDade.data.forEach(item=>{ // forEach遍历，把请求回来的数据赋给变量 tableDate

                        const tableDataLsit = {};

                        tableDataLsit.ProductId = item.productid;   // 员工ID
                        tableDataLsit.ShowOrder = item.showorder;   // 变量 7
                        tableDataLsit.DotCode   = item.dotcode;     // 请求数据 变量 1
                        tableDataLsit.Name      = item.name;        // 变量 2
                        tableDataLsit.ImgUrl    = item.imgurl;      // 变量 3
                        tableDataLsit.ImgExt    = item.imgext;      // 变量 4
                        tableDataLsit.ImgPath   = item.imgpath;     // 变量 5
                        tableDataLsit.Status    = (item.status==1)?'启用':'禁用';      // 变量 6
                        tableDataLsit.AddTime   = item.addtime;     // 变量 8

                        // var arr = tableDataLsit.ImgUrl.split('/')
                        // tableDataLsit.ImgUrl = arr[arr.length-1]

                        // if(tableDataLsit.ImgUrl.indexOf('Admin') == '-1'){
                        //     var arr = tableDataLsit.ImgUrl.split('/')
                        //     tableDataLsit.ImgUrl = this.baseURL + this.productImgUrl + arr[arr.length-1]
                        // }
                        if(tableDataLsit.ImgUrl.indexOf('http') == '-1'){ // 给图片加路径
                            tableDataLsit.ImgUrl = this.UploadAddress.ServerAddress + tableDataLsit.ImgUrl

                            console.log(tableDataLsit.ImgUrl)
                        }
                        

                        this.tableData.push(tableDataLsit);     // 3. 页面列表参数
                    })

                    console.log(this.tableData)

                }else{
                    this.$notify({
                        title: '错误',
                        message: selectDade.errdesc,
                        });
                    return;
                }
            },

// --------------------------------------------------------------------------------------- 添加数据
            async AddData(){            /* 4.1 确定按钮，用户添加的数据保存到数据库中去 *///---------- 方法 二

                console.log("查看图片添加地址")

                if(this.form.ShowOrder == ""){  // 添加方法 变量 1 

                    this.$notify({
                        title: '警告',
                        message: '显示顺序不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.DotCode == ""){    // 添加方法 变量 1 

                    this.$notify({
                        title: '警告',
                        message: '网点代码不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.Name == ""){       // 变量 2

                    this.$notify({
                        title: '警告',
                        message: '员工账号不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.Status == ""){     // 变量 6

                    this.$notify({
                        title: '警告',
                        message: '员工状态不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.AddTime == ""){    // 变量 7

                    this.$notify({
                        title: '警告',
                        message: '添加时间不能为空',
                        type: 'warning'
                    });
                    return;
                }

                console.log( this.choiceDataValue )

                if(this.choiceDataValue == ""){ // 没有点某一项，choiceDataValue 为空，插入数据 --------------- 处理图片地址  1

                    console.log( "判断" )
                    console.log( this.form )

                    // this.form.ImgUrl = this.baseURL + this.productImgUrl + this.form.ImgUrl
                    var url = this.form.ImgUrl;
                    var index = url.indexOf("/Admin");
                    this.form.ImgUrl = url.slice(index);


                    const inserDade = await inserList({
                        "cmd":"product",
                        "type":"insert",
                        "data":this.form
                    });

                    console.log( "插入结果" )
                    console.log( inserDade )

                    if(inserDade.result==200){

                        this.$notify({      // element-ui 添加成功通知
                            title: '成功',
                            message: '数据添加成功！',
                            type: 'success'
                        });
                    }
                    else{
                        this.$notify({      // element-ui 添加成功通知
                            title: '错误',
                            message: selectDade.errdesc,
                        });
                        return;
                    }
                }
                else{                          // choiceDataValue 不为空修改数据 ------------------------------ 处理图片地址  2
                    console.log( "this.choiceDataValue不为空" );

                    var url = this.choiceDataValue.ImgUrl;
                    var index = url.indexOf("/Admin");
                    this.choiceDataValue.ImgUrl = url.slice(index);


                    const inserDade = await updataList({
                        "cmd":"product",
                        "type":"updata",
                        "data":this.choiceDataValue
                    });

                    console.log( "更新结果" )
                    console.log( inserDade )

                    if(inserDade.result==200){

                        this.$notify({  // element-ui 添加成功通知
                            title: '成功',
                            message: '数据编辑成功！',
                            type: 'success'
                        });
                    }
                    else{
                        this.$notify({  // element-ui 添加成功通知
                            title: '错误',
                            message: selectDade.errdesc,
                            });
                        return;
                    }
			    }


                this.form = {};                 /* 添加、更新函数中 对话框数据清空 */
                this.choiceDataValue = "";      /* 添加、更新函数中 choiceDataValue为空 */

                this.fileList = [];             /* 3 */

                this.dialogVisible = false;     /* 添加、更新函数中 对话框隐藏 */
                this.selectList();              /* 刷新 */
            },
// ---------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// dialog 关闭按钮
			async handleClose(){

                console.log("关闭dialog")

				this.form={};
                this.dialogVisible = false;


                this.fileList = []; // 4
                this.choiceDataValue = "";
                this.selectList();   // 刷新
			},


// dialog 取消按钮
			async canceladd(){

                console.log("取消编辑")

				this.form={};
                this.dialogVisible = false;


                this.fileList = []; // 5
                this.choiceDataValue = "";
                this.selectList();   // 刷新
            },

// 图片上传成功
            async handleSuccess(response, file, fileList){ this.form.ImgUrl = response.photo + response.name }, // 6

// 文件超出个数限制时的钩子
            async handleExceed(files, fileList) {   // 7
                this.$message.warning(`当前限制 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`); },// 8

// 点击文件列表中已上传的文件时的钩子
            async handlePreview(file){ console.log(file); },

// 删除文件之前的钩子
            async beforeRemove(file, fileList){ return this.$confirm(`确定移除 ${ file.name }？`); },// 9

// 文件列表移除文件时的钩子
            async handleRemove(file, fileList){ console.log(file, fileList); },// 10、11

// ----------------------------------------------------------------------------


// 选择某一行
			async choiceData(row){ //-----------------------------------------------------方法 三 3.1

                this.choiceDataValue = "";  /* 当用户选择一行数据作为编辑，将用户选择的数据临时保存在一个参数中 */
                this.choiceDataValue = row;
			},


// 编辑按钮
			async edit(){ //--------------------------------------------------------------方法 四 2.2

                console.log( "修改用户" )

                if(this.choiceDataValue == ""){

                    this.$notify({
                        title: '警告',
                        message: '请选择要编辑的数据！',
                        type: 'warning'
                    });
                    return;
                }


                // var arr = this.choiceDataValue.ImgUrl.split('/')
                // this.choiceDataValue.ImgUrl = arr[arr.length-1]
                // var str = "http:127.0.0.1/Admin/pages/options"
                // var i = str.indexOf("/Admin");
                // str = str.slice(i)
                // console.log(str)

                // var str = "http:127.0.0.1/Admin/pages/options"
                // var i = str.indexOf("/Admin");
                // str = str.slice(i,)
                // console.log(str)


                this.fileList = [{ name: this.choiceDataValue.ImgUrl }]// 12
                this.form = {};                     /* 2.2 将用户选择的数据处理后放到添加编辑对话框中，并弹出对话框 */


                this.form = this.choiceDataValue;


                if( this.form.Status == "启用"){ this.form.Status = '1' }
                else if( this.form.Status == '1'){ this.form.Status = '1' }
                else{ this.form.Status = '2'}


                this.titleName="编辑用户数据";
                this.dialogVisible = true;

                console.log( this.form );
                console.log( this.choiceDataValue );
			},


/* 2.3 删除数据 */
			async delect(){ //-----------------------------------------------------------方法 五 2.3

                console.log("删除数据")

			   if(this.choiceDataValue == ""){  // 如果没有选中谁

					 this.$notify({
                        title: '警告',
                        message: '请选择要删除的数据！',
                        type: 'warning'
					});
					return;
			   }

                // console.log( this.choiceDataValue )

			   const delectDade = await delectList({
                    "cmd":"product",
                    "type":"delect",
                    "productid":this.choiceDataValue.ProductId
                });

                // console.log( delectDade )

			    if(delectDade.result==200){

                    this.$notify({
                        title: '成功',
                        message: '数据删除成功！',
                        type: 'success'
                    });
                }
                else{
                    this.$notify({
                        title: '错误',
                        message: selectDade.errdesc,
                    });
                    return;
                }

			   this.choiceDataValue="";
			   this.selectList();   // 刷新
			}
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';

    .table_container {
        padding: 20px;
    }

// dialog 上传图片
    .upload-demo{       display: flex; flex-direction: column; }
    .upload-but{        display: flex; justify-content: space-between; align-items: center;}
    .el-upload__tip{    margin: 0;}

// dialog 中上传图片成功选项列表
    .el-upload-list__item-name{         padding: 0; }
    .el-upload-list__item-status-label{ right: 0; }

// 控制图片
    .showPic{   display: block; margin: auto;}

// 选中样式
    .el-table__body tr.current-row>td {
    	background-color: #3A9EE4; color: orange;
	}

</style>