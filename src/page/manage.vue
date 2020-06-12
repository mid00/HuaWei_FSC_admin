<template>
	<div class="manage_page fillcontain">

	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<div @click="redirectToHome" ref="SystemTitle" style="vertical-align:middle;padding: 11px;cursor:pointer;background-color: #1f2d3d">
					<i style="float: left;" class="el-icon-menu"></i>
					<span style="width:80%;float: right;font-size: 0.7vw;color:#FFFFFF ">
							永泰新欣科技有限公司
					</span>
				</div>
				<el-scrollbar
						:native="false"
						wrapStyle=""
						wrapClass=""
						viewClass=""
						viewStyle=""
						tag="section"
				>
					<el-menu ref="BarMenu" :default-active="defaultActive" style="min-height:100%;" background-color="#324157"
                             text-color="#fff"   router>
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-office-building"></i>
                                基础数据
                            </template>
                            <el-menu-item index="basics">基础数据管理</el-menu-item>
                            <el-menu-item index="user">用户管理</el-menu-item>
                            <el-menu-item index="workstation">工位管理</el-menu-item>
                            <el-menu-item index="product">产品管理</el-menu-item>
							<el-menu-item index="buss">用户诉求管理</el-menu-item>
							<el-menu-item index="queue">队列管理</el-menu-item>
							<el-menu-item index="queueMap">队列与产品&业务映射关系管理</el-menu-item>
                        </el-submenu>
					
                    
                    
				</el-menu>

				</el-scrollbar>
			</el-col>

			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>

				    <router-view></router-view>

				</keep-alive>
			</el-col>

  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
		components:{

		},
		mounted(){
			let DocumentHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //浏览器高度
			let SystemTitleLogHeight = parseInt(DocumentHeight / 21);
			this.$refs.SystemTitle.style.height=SystemTitleLogHeight+"px"
			let _SystemTitleLogHeight = SystemTitleLogHeight+40;
			this.$refs.BarMenu.$el.style.height=DocumentHeight-_SystemTitleLogHeight+'px'
		},
		created:function () {


		},
		methods:{
			redirectToHome:function () {
				this.$router.push('/')

			}
		}
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	// .manage_page{}

// 选中样式
    .el-table__body tr.current-row>td {
    	background-color: #3A9EE4; color: orange;
	}
</style>
