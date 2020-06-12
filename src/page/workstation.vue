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
                @row-click="choiceData">    <!-- 事件 3.1 -->
                                            <!-- 列表页数据 -->

				<el-table-column align="center" label="网点代码" prop="DotCode">            <!-- 展示数据 变量 1 -->
				</el-table-column>

				<el-table-column align="center" label="工位编号" prop="WorkSpotCode">       <!-- 变量 2 -->
				</el-table-column>

				<el-table-column align="center" label="工位状态" prop="Status"> <!-- 变量 3 -->
				</el-table-column>

				<el-table-column align="center" label="添加时间" prop="AddTime">            <!-- 变量 4 -->
				</el-table-column>
			  </el-table>
		</div>

<!-- 4.0 添加、编辑、删除 对话框 -->
        <el-dialog :title="titleName" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">    <!-- 数据 dialogVisible=true 显示 -->

			<el-form ref="form" :model="form" label-width="150px">  <!-- 数据 -->

				<el-form-item label="网点代码">
					<el-input v-model="form.DotCode" placeholder="必填"></el-input>     <!-- 添加数据 变量 1 -->
				</el-form-item>

				<el-form-item label="工位编号">
					<el-input v-model="form.WorkSpotCode" placeholder="必填"></el-input><!-- 变量 2 -->
				</el-form-item>

				<el-form-item label="工位状态">
                    <el-radio v-model="form.Status" label="1" border>启用</el-radio>    <!-- 变量 3 -->
                    <el-radio v-model="form.Status" label="2" border>禁用</el-radio>
				</el-form-item>

				<el-form-item label="添加时间">
					<el-date-picker
                        type="datetime"
                        placeholder="请选择开始工作时间 - 必填"
                        align="right"
                        :picker-options="pickerOptions"

						v-model="form.AddTime">                                         <!-- 变量 4 -->
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

                dialogVisible: false,   /* 点击添加按钮弹出对话框 默认隐藏 */
                titleName:"添加用户",   /* 4. 按钮对话框 - 对话框中的提示名，是添加呢还是编辑 */

				form:{              /* 4. 添加按钮对话框参数 */
                    DotCode:'',     // 网点代码 变量 1
                    WorkSpotCode:'',// 工位编号 变量 2
                    Status:'',      // 工位状态 变量 3
                    AddTime:'',     // 添加时间 变量 4
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
            }
        },
        created() { this.selectList(); },
        methods: {

            async selectList() {    /* 3. 列表页获取数据 *///--------------------------------------- 方法 一

                const selectDade = await getList({
                        "cmd":"works",
                        "type":"select"
                });

                console.log("获取工位数据：")
                console.log(selectDade)

                this.tableData = [];    /* 3. 列表页获取数据 */

                if(selectDade.result==200 && selectDade.data !=""){

                    selectDade.data.forEach(item=>{ // forEach遍历，把请求回来的数据赋给变量 tableDate

                        const tableDataLsit = {};

                        tableDataLsit.WorkSpotId    = item.workspotid;              // 员工ID
                        tableDataLsit.DotCode       = item.dotcode;                 // 请求数据 变量 1
                        tableDataLsit.WorkSpotCode  = item.workspotcode;            // 变量 2
                        tableDataLsit.Status        = (item.status==1)?'启用':'禁用';// 变量 3
                        tableDataLsit.AddTime       = item.addtime;                 // 变量 4

                        this.tableData.push(tableDataLsit);                         // 3. 页面列表参数
                    })

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

                console.log("点击确定按钮 ······ ")
                console.log(this.form)

                if(this.form.DotCode == ""){    // 添加方法 变量 1 

                    this.$notify({
                        title: '警告',
                        message: '网点代码不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.WorkSpotCode == ""){   //  变量 2

                    this.$notify({
                        title: '警告',
                        message: '工位编码不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.Status == ""){     //  变量 3

                    this.$notify({
                        title: '警告',
                        message: '工位状态不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.AddTime == ""){    //  变量 4

                    this.$notify({
                        title: '警告',
                        message: '添加时间不能为空',
                        type: 'warning'
                    });
                    return;
                }

                console.log( this.choiceDataValue )

                if(this.choiceDataValue == ""){ // 没有点某一项，choiceDataValue 为空，插入数据 ---------------

                    console.log( "添加工位 ······ " )
                    console.log( this.form )

                    const inserDade = await inserList({
                        "cmd":"works",
                        "type":"insert",
                        "data":this.form
                    });

                    console.log( "添加结果 ······ " )
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
                else{                          // choiceDataValue 不为空更新数据 ------------------------------
                    console.log( "编辑工位 ······ " )

                    const inserDade = await updataList({
                        "cmd":"works",
                        "type":"updata",
                        "data":this.choiceDataValue
                    });

                    console.log( "编辑结果 ······ " )
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
                this.dialogVisible = false;     /* 添加、更新函数中 对话框隐藏 */
                this.selectList();              /* 刷新 */
            },
// ---------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// dialog 关闭按钮
			async handleClose(){

                console.log("关闭dialog")

				this.form={};
                this.dialogVisible = false
                this.selectList();   // 刷新
			},


// dialog 取消按钮
			async canceladd(){

                console.log("取消编辑")

				this.form={};
                this.dialogVisible = false
                this.selectList();   // 刷新
			},
// ----------------------------------------------------------------------------


/* 当用户选择一行数据作为编辑，将用户选择的数据临时保存在一个参数中 */
			async choiceData(row){ //-----------------------------------------------------方法 三 3.1

                this.choiceDataValue = "";
                this.choiceDataValue = row;

                console.log( "选中某行" )
                console.log( this.choiceDataValue )
                console.log( "this.form" )
                console.log( this.form )
			},


/* 2.2 将用户选择的数据处理后放到添加编辑对话框中，并弹出对话框 */
			async edit(){ //--------------------------------------------------------------方法 四 2.2

                console.log( "修改数据 ······ " )

                if(this.choiceDataValue == ""){

                    this.$notify({
                        title: '警告',
                        message: '请选择要编辑的数据！',
                        type: 'warning'
                    });
                    return;
                }

			   this.from = {};
               this.form = this.choiceDataValue;
               

                console.log(this.form)
                if(this.form.Status == "启用"){this.form.Status = '1'}
                else if(this.form.Status == '1'){this.form.Status = '1'}
                else{this.form.Status = '2'}


			   this.titleName="编辑工位数据";
               this.dialogVisible = true;

               console.log( this.form )
			},


/* 2.3 删除数据 */
			async delect(){ //-----------------------------------------------------------方法 五 2.3

                console.log(" 删除数据 -> ")

			   if(this.choiceDataValue == ""){  // 如果没有选中谁

					 this.$notify({
                        title: '警告',
                        message: '请选择要删除的数据！',
                        type: 'warning'
					});
					return;
			   }

                console.log( this.choiceDataValue )

			   const delectDade = await delectList({
                    "cmd":"works",
                    "type":"delect",
                    "workspotid":this.choiceDataValue.WorkSpotId
                });

                console.log( "删除结果 ······ " )
                console.log( delectDade )

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

// 选中样式
    .el-table__body tr.current-row>td {
    	background-color: #3A9EE4; color: orange;
	}

</style>
