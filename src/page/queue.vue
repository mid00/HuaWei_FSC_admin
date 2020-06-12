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

				<el-table-column width="180" align="center" label="网点代码" prop="DotCode">    <!-- 展示数据 变量 1 -->
				</el-table-column>

				<el-table-column width="180" align="center" label="队列名称" prop="Name">   <!-- 变量 2 -->
				</el-table-column>

				<el-table-column align="center" label="队列描述" prop="Description">                   <!-- 变量 3 -->
				</el-table-column>

				<el-table-column align="center" label="队列前缀" prop="QueueFlag">                        <!-- 变量 4 -->
				</el-table-column>

				<el-table-column width="180" align="center" label="票号数字长度" prop="TicketLen">                    <!-- 变量 5 -->
				</el-table-column>

				<el-table-column width="180" align="center" label="约定编号" prop="YueDingCode"> <!-- 变量 6 -->
				</el-table-column>

				<el-table-column width="180" align="center" label="是否VIP队列" prop="IsVip">    <!-- 变量 7 -->
				</el-table-column>

                <el-table-column width="180" align="center" label="是否优先处理预约用户" prop="IsYuYue">    <!-- 变量 8 -->
				</el-table-column>

                <el-table-column width="180" align="center" label="是否取机队列" prop="IsObtain">    <!-- 变量 8 -->
				</el-table-column>

                <el-table-column width="180" align="center" label="队列状态" prop="Status">    <!-- 变量 9 -->
				</el-table-column>

                <el-table-column width="180" align="center" label="添加时间" prop="AddTime">    <!-- 变量 10 -->
				</el-table-column>
			  </el-table>
		</div>

<!-- 4.0 添加、编辑、删除 对话框 -->
        <el-dialog :title="titleName" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">    <!-- 数据 dialogVisible=true 显示 -->

			<el-form ref="form" :model="form" label-width="150px">  <!-- 数据 -->

				<el-form-item label="网点代码">
					<el-input v-model="form.DotCode" placeholder="必填"></el-input>    <!-- 添加数据 变量 1 -->
				</el-form-item>

				<el-form-item label="队列名称">
					<el-input v-model="form.Name" placeholder="可填"></el-input>   <!-- 变量 2 -->
				</el-form-item>

				<el-form-item label="队列描述">
					<el-input v-model="form.Description" placeholder="可填"></el-input>       <!-- 变量 3 -->
				</el-form-item>

				<el-form-item label="队列前缀">
					<el-input v-model="form.QueueFlag" placeholder="可填"></el-input>        <!-- 变量 4 -->
				</el-form-item>

				<el-form-item label="票号数字长度">
					<el-input v-model="form.TicketLen" placeholder="可填"></el-input>        <!-- 变量 5 -->
				</el-form-item>



                <el-form-item label="约定编号"><!-- 变量 6 -->

                        <el-input v-model="form.YueDingCode" placeholder="可填"></el-input>

<!-- 
                        <el-radio v-model="form.YueDingCode" label="100000000" border>更换屏幕队列-100,000,000</el-radio>
                        <el-radio v-model="form.YueDingCode" label="100000001" border>更换电池队列-100,000,001</el-radio>
                        <el-radio v-model="form.YueDingCode" label="100000002" border>综合维修队列-100,000,002</el-radio>
                        <el-radio v-model="form.YueDingCode" label="100000003" border>简单服务队列-100,000,003</el-radio>
                        <el-radio v-model="form.YueDingCode" label="100000004" border>VIP&nbsp;服务队列-100,000,004</el-radio>
 -->

				</el-form-item>

                <el-form-item label="是否VIP队列">                                          <!-- 变量 7 -->   
                    <el-radio v-model="form.IsVip" label="1" border>是</el-radio>
                    <el-radio v-model="form.IsVip" label="2" border>否</el-radio>
				</el-form-item>

                <el-form-item label="优先处理预约用户">                                     <!-- 变量 8 -->
                    <el-radio v-model="form.IsYuYue" label="1" border>是</el-radio>
                    <el-radio v-model="form.IsYuYue" label="2" border>否</el-radio>
				</el-form-item>

                <el-form-item label="是否取机队列">                                     <!-- 变量 8 -->
                    <el-radio v-model="form.IsObtain" label="1" border>是</el-radio>
                    <el-radio v-model="form.IsObtain" label="2" border>否</el-radio>
				</el-form-item>

                <el-form-item label="队列状态">                                             <!-- 变量 9 -->
                    <el-radio v-model="form.Status" label="1" border>启用</el-radio>
                    <el-radio v-model="form.Status" label="2" border>禁用</el-radio>
				</el-form-item>



				<el-form-item label="添加时间">
					<el-date-picker
                        type="datetime"
                        placeholder="请选择开始工作时间 - 必填"
                        align="right"
                        :picker-options="pickerOptions"
						v-model="form.AddTime">                     <!-- 变量 10 -->
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
                    DotCode:'',     // 变量 1
                    Name:'',        // 变量 2
                    Description:'', // 变量 3
                    QueueFlag:'',   // 变量 4
                    TicketLen:'',   // 变量 5
                    YueDingCode:'', // 变量 6
                    IsVip:'',       // 变量 7
                    IsYuYue:'',     // 变量 8
                    IsObtain: '',   // 变量 9
                    Status:'',      // 变量 9
                    AddTime:'',     // 变量 10
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
                        "cmd":"queue",
                        "type":"select"
                });

                console.log("获取数据  1111111111111111111111")
                console.log(selectDade)

                this.tableData = [];    /* 3. 列表页获取数据 */

                if(selectDade.result==200 && selectDade.data !=""){

                    selectDade.data.forEach(item=>{ // forEach遍历，把请求回来的数据赋给变量 tableDate

                        const tableDataLsit = {};

                        tableDataLsit.QueueId       = item.queueid      // 员工ID
                        tableDataLsit.DotCode       = item.dotcode;     // 请求数据 变量 1
                        tableDataLsit.Name          = item.name;        // 变量 2
                        tableDataLsit.Description   = item.description; // 变量 3
                        tableDataLsit.QueueFlag     = item.queueflag;   // 变量 4
                        tableDataLsit.YueDingCode   = item.yuedingcode; // 变量 5
                        tableDataLsit.TicketLen     = item.ticketlen;   // 变量 6
                        tableDataLsit.IsVip         = (item.isvip == 1)?    '是': '否';     // 变量 7
                        tableDataLsit.IsYuYue       = (item.isyuyue == 1)?  '是': '否';     // 变量 8
                        tableDataLsit.IsObtain      = (item.isobtain == 1)? '是': '否';     // 变量 8
                        tableDataLsit.Status        = (item.status == 1)?   '启用': '禁用'; // 变量 9
                        tableDataLsit.AddTime       = item.addtime;     // 变量 10

                        this.tableData.push(tableDataLsit);             // 3. 页面列表参数
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

                console.log("提交按钮")
                console.log(this.form)

                if(this.form.DotCode == ""){    // 添加方法 变量 1

                    this.$notify({
                        title: '警告',
                        message: '网点代码不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.Name == ""){   //  变量 2

                    this.$notify({
                        title: '警告',
                        message: '队列名称不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.Status == ""){     //  变量 6

                    this.$notify({
                        title: '警告',
                        message: '队列状态不能为空',
                        type: 'warning'
                    });
                    return;
                }
                if(this.form.AddTime == ""){    //  变量 7

                    this.$notify({
                        title: '警告',
                        message: '添加时间不能为空',
                        type: 'warning'
                    });
                    return;
                }

                console.log( this.choiceDataValue )

                if(this.choiceDataValue == ""){ // 没有点某一项，choiceDataValue 为空，插入数据 ---------------

                    console.log( "判断" )
                    console.log( this.form )
                    // var str = this.form.YueDingCode;
                    // var index = Number( str.indexOf("-") );
                    // this.form.YueDingCode = str.slice( index + 2);

                    const inserDade = await inserList({
                        "cmd":"queue",
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
                else{                          // choiceDataValue 不为空更新数据 ------------------------------
                    console.log( "this.choiceDataValue不为空" )

                    const inserDade = await updataList({
                        "cmd":"queue",
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


// 选中某一行
			async choiceData(row){ //-----------------------------------------------------方法 三 3.1

                this.choiceDataValue = "";          /* 当用户选择一行数据作为编辑，将用户选择的数据临时保存在一个参数中 */
                this.choiceDataValue = row;

                console.log( "选中某行" )
                console.log( this.choiceDataValue )
                console.log( "this.form" )
                console.log( this.form )
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

			   this.from = {};                      /* 2.2 将用户选择的数据处理后放到添加编辑对话框中，并弹出对话框 */
               this.form = this.choiceDataValue;
               

                console.log('获取行信息')
                console.log(this.form)

                if(this.form.IsVip == '是'){ this.form.IsVip = '1'}
                else if(this.form.IsVip == '1'){ this.form.IsVip = '1'}
                else{ this.form.IsVip = '2'}

                if(this.form.IsYuYue == '是'){ this.form.IsYuYue = '1'}
                else if(this.form.IsYuYue == '1'){ this.form.IsYuYue = '1'}
                else{ this.form.IsYuYue = '2'}

                if(this.form.IsObtain == '是'){ this.form.IsObtain = '1'}
                else if(this.form.IsObtain == '1'){ this.form.IsObtain = '1'}
                else{ this.form.IsObtain = '2'}

                if(this.form.Status == '启用'){ this.form.Status = '1'}
                else if(this.form.Status == '1'){ this.form.Status = '1'}
                else{ this.form.Status = '2'}

                // this.form.YueDingCode = this.form.Name +' - '+ this.form.YueDingCode;


			   this.titleName="编辑用户数据";
               this.dialogVisible = true;
			},


/* 2.3 删除数据 */
			async delect(){ //-----------------------------------------------------------方法 五 2.3

                console.log(" 删除员工 -> ")

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
                    "cmd":"queue",
                    "type":"delect",
                    "queueid":this.choiceDataValue.QueueId
                });

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
    .el-radio-button__inner{ padding: 12px 10px;}
    .el-radio.is-bordered+.el-radio.is-bordered{
        margin: 1px 30px 1px 0px;
    }

// 选中样式
    .el-table__body tr.current-row>td {
    	background-color: #3A9EE4; color: rgb(255, 164, 148);
    }
</style>
