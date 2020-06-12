<template>

    <el-table
        :data="TableData.DataArr"
        highlight-current-row
        @current-change="handleWindowListChange"
        @select = "handleSelectionChange"
        ref="windowTable"
        height="TableStyle.height"
        border
        style="width: 100%;"
    ><el-table-column
        v-for="(cloums,index) in TableData.TitleArr"
        :key="index"
        :property="cloums.field"
        :label="cloums.name"
        width="100"
    ></el-table-column>


    </el-table>
</template>

<script>
    export default {
        name: "CommonTable",
        data(){
            return {
                loading:true
            }
        },
        props:{
            TableData:{
                type:Object,
                default:function () {
                    return {
                        TitleArr:[
                            {name:"",field:""}
                        ],
                        DataArr:[]
                    };
                }
            },
            TableStyle:{
                type:Object,
                default:function () {
                    return {
                        height:"700",
                        width:"100%"
                    }
                }
            }
        },
        watch:{
            TableData(newValue,oldValue){
                this.$nextTick(function () {
                    console.log(this.TableData)

                })
            }
        },
        methods:{
            handleWindowListChange(val,row){
                console.log(val)
            },
            handleSelectionChange(val,row){
                console.log(val)
            }
        }
    }
</script>

<style scoped>

</style>
