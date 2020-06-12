<template>
    <div class="fillcontain">
<!-- 1 首页、退出 -->
        <head-top></head-top>
<!-- 2 添加、修改、删除 按钮 -->
        <el-row style="">
            <el-col :span="24" class="button_margin" style="padding: 20px;">
                <el-button @click="dialogVisible = true">添加</el-button>	<!-- dialogVisible 1 -->
                <el-button @click="edit">编辑</el-button>
                <el-button @click="delect">删除</el-button>
            </el-col>
        </el-row>

<!-- 3 页面列表 -->
		<div class="table_container">
		    <el-table
				height="500"
				border
				style="width: 100%"
				highlight-current-row

				:data="tableData"
				@row-click="choiceData">
				
				<el-table-column width="180" align="center" label="网点名称" prop="DotName"></el-table-column>
				
				<el-table-column width="180" align="center" label="网点代码" prop="DotCode"></el-table-column>
				
				<el-table-column align="center" label="地区编码" prop="AreaCode"></el-table-column>
				
				<el-table-column align="center" label="预约队列前缀" prop="QueueFlag"></el-table-column>
				
				<el-table-column align="center" label="预约队列票号长度" prop="TicketLen"></el-table-column>
				
				<el-table-column align="center" label="每日开始工作时间" prop="DayBegin"></el-table-column>
				
				<el-table-column align="center" label="每日结束工作时间" prop="DayEnd"></el-table-column>

			</el-table>
		</div>

<!-- 4 编辑窗口 -->
        <el-dialog width="50%" :visible.sync="dialogVisible" :title="titleName" :before-close="handleClose">	<!-- dialogVisible 2 -->

		  	<el-form label-width="150px" ref="form" :model="form">

				<el-form-item label="网点名称">
					<el-input v-model="form.DotName" placeholder="必填"></el-input>
				</el-form-item>

				<el-form-item label="网点代码">
					<el-input v-model="form.DotCode" placeholder="必填"></el-input>
				</el-form-item>

				<el-form-item label="地区编码">
					<el-input v-model="form.AreaCode" placeholder="必填"></el-input>
				</el-form-item>

				<el-form-item label="排队机退出密码">
					<el-input v-model="form.Password" placeholder="必填"></el-input>
				</el-form-item>

				<el-form-item label="预约队列前缀">
					<el-input v-model="form.QueueFlag" placeholder="可填"></el-input>
				</el-form-item>

				<el-form-item label="预约队列票号长度">
					<el-input v-model="form.TicketLen" placeholder="可填"></el-input>
				</el-form-item>

				<el-form-item label="每日开始工作时间">
					<el-time-picker
						v-model="form.DayBegin"
						format="HH:mm:ss"
						value-format="HH:mm:ss"
						placeholder="请选择开始工作时间 - 必填">
					</el-time-picker>
				</el-form-item>

				<el-form-item label="每日结束工作时间">
					<el-time-picker
						v-model="form.DayEnd"
						format="HH:mm:ss"
						value-format="HH:mm:ss"					
						placeholder="请选择结束工作时间 - 必填">
					</el-time-picker>
				</el-form-item>

       		</el-form>

<!-- 4.1 确定、取消 按钮 -->
			<span slot="footer" class="dialog-footer">
				<el-button @click="canceladd">取 消</el-button>	<!-- dialogVisible 3 -->
				<el-button type="primary" @click="AddData">确 定</el-button>
			</span>

       </el-dialog>

    </div>
</template>

<script>

    import headTop from '../components/headTop'
    import {getList, inserList,updataList,delectList} from '@/api/getData'

    export default {
		components: { headTop, },
        data() {
            return {
				tableData: [],			/* 0 页面列表参数 */
				dialogVisible: false,	/* 点击添加按钮弹出对话框 */
				titleName:"添加基础数据",/* 4 对话框中的提示名，是添加呢还是编辑 */
				form:{					/* 4 添加按钮对话框参数 */
					DotName: '',
					DotCode: '',
					AreaCode: '',
					DayBegin: '',
					DayEnd: ''
				},
				choiceDataValue:"",		/* 当用户选择某行，暂存某行数据 */
            }
        },
        created() { this.selectList(); },
        methods: {

/* 一、0. 列表页获取数据 */
            async selectList() {	// 查看表
				const selectDade = await getList({
						"cmd":"basics",
						"type":"select"
				});

				console.log( "获取数据" );
				console.log( selectDade );

				this.tableData = [];
				if(selectDade.result==200 && selectDade.data !=""){
					selectDade.data.forEach(item=>{

						const tableDataLsit = {};

						tableDataLsit.BasicsId	= item.basicsid;
						tableDataLsit.DotName	= item.dotname;
						tableDataLsit.DotCode	= item.dotcode;
						tableDataLsit.AreaCode	= item.areacode;
						tableDataLsit.QueueFlag	= item.queueflag;
						tableDataLsit.TicketLen	= item.ticketlen;
						tableDataLsit.DayBegin	= item.daybegin;
						tableDataLsit.DayEnd	= item.dayend;

						this.tableData.push(tableDataLsit);
					})

				}else{
					this.$notify({		// element-ui 弹出框
						title: '错误',
						message: selectDade.errdesc,
						});
					return;
				}
            },

/* 二、4 用户添加的数据保存到数据库中去 */
			async AddData(){	// 添加数据

				if(this.form.DotName == ""){
					this.$notify({
						title: '警告',
						message: '网点名称不能为空',
						type: 'warning'
					});
					return;
				}
				if(this.form.DotCode == ""){
					this.$notify({
						title: '警告',
						message: '网点代码不能为空',
						type: 'warning'
					});
					return;
				}
				if(this.form.AreaCode == ""){
					this.$notify({
						title: '警告',
						message: '地区编码不能为空',
						type: 'warning'
					});
					return;
				}
				if(this.form.DayBegin == ""){
					this.$notify({
						title: '警告',
						message: '每日开始工作时间不能为空',
						type: 'warning'
					});
					return;
				}
				if(this.form.DayEnd == ""){
					this.$notify({
						title: '警告',
						message: '每日结束工作时间不能为空',
						type: 'warning'
					});
					return;
				}
			 
				if(this.choiceDataValue == ""){	// 如果 choiceDateValue为空，插入数据
					const inserDade = await inserList({
						"cmd":"basics",
						"type":"insert",
						"data":this.form
					});
					if(inserDade.result==200){
						this.$notify({
							title: '成功',
							message: '数据添加成功！',
							type: 'success'
						});
					}else{
						this.$notify({
							title: '错误',
							message: selectDade.errdesc,
						});
						return;
					}

				}else{		// 如果 choiceDateValue不为空，更新数据
					const inserDade = await updataList({
							"cmd":"basics",
							"type":"updata",
							"data":this.choiceDataValue
					});

					if(inserDade.result==200){
						this.$notify({
							title: '成功',
							message: '数据编辑成功！',
							type: 'success'
						});
					}else{
						this.$notify({
							title: '错误',
							message: selectDade.errdesc,
						});
						return;
					}
				}

				this.form = {};
				this.choiceDataValue = "";
				this.dialogVisible = false;
				this.selectList();
			},


// ----------------------------------------------------------------------------
// dialog 关闭按钮
			async handleClose(){
				console.log("关闭dialog")
				this.form={};

				console.log(this.choiceDataValue)
				this.dialogVisible = false
			},


// dialog 取消按钮
			async canceladd(){

				console.log("取消编辑")
				this.form={};

				console.log(this.choiceDataValue)
				this.dialogVisible = false
			},
// ----------------------------------------------------------------------------


/* 当用户选择一行数据作为编辑，将用户选择的数据临时保存在一个参数中 */
			async choiceData(row){	// 展示页面数据的方法
				this.choiceDataValue = "";
				this.choiceDataValue = row;
			},

/* 将用户选择的数据处理后放到添加编辑对话框中，并弹出对话框 */
			async edit(){
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
				this.titleName="编辑基础数据";
				this.dialogVisible = true;
			},

/* 删除数据 */
			async delect(){
				if(this.choiceDataValue == ""){
					this.$notify({
						title: '警告',
						message: '请选择要删除的数据！',
						type: 'warning'
					});
					return;
				}

				const delectDade = await delectList({
					"cmd":"basics",
					"type":"delect",
					"basicsid":this.choiceDataValue.BasicsId
				});

				if(delectDade.result==200){
					this.$notify({
						title: '成功',
						message: '数据删除成功！',
						type: 'success'
					});
				}else{
					this.$notify({
						title: '错误',
						message: selectDade.errdesc,
					});
					return;
				}

				this.choiceDataValue="";
				this.selectList();
			}
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';

    .table_container {
        padding: 20px;
	}
	.el-table__body tr.current-row>td {
    	background-color: #3A9EE4; color: orange;
	}

</style>
