<template>
    <div class="yTable">
        <!--表格-->
        <el-table
            :data="data.slice((pagination.currentPage-1)*pagination.pageSize,pagination.currentPage*pagination.pageSize)"
            border
            stripe
            style="width: 100%;"
        >
            <template v-for="(column, index) in columns" >
                <el-table-column
                        v-if="!column.operations"
                        :prop="column.prop"
                        :key="index"
                        :label="column.label"
                        align="center"
                        :width="column.width"
                >
                    <template slot-scope="scope">
                        <template  v-if="!column.formatter">
                            <span>{{scope.row[column.prop]}}</span>
                        </template>
                        <template v-else>
                            <span v-html="column.formatter(scope.row)"></span>
                        </template>
                    </template>
                </el-table-column>
                <el-table-column  v-else  :label="column.label" :prop="column.prop" align="center" :key="index">
                    <template slot-scope="scope">
                        <el-button v-for="(operate,index) in column.operations" size="small" :type="operate.type" :key="index" @click="operate.method(scope.row)"
                                   >{{operate.label}}</el-button>
                    </template>
                </el-table-column>
            </template>
        </el-table>

        <!--分页-->
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.currentPage"
                :page-sizes="pagination.pageSizes"
                :page-size="pagination.pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pagination.total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        props:{
            data: {
                type: Array,
                default: []
            },
            columns:{
                type:Array,
                default:[]
            },
            total:{
                type:Number,
                default:0
            },
            pagination: {
                type: Object,
                default: null //
            }
        },
        data() {
            return {

                };
        },
        methods: {
            handleSizeChange(size) {
                this.$emit('handleSizeChange',size);
            },
            // 切换页码
            handleCurrentChange (index) {
                this.$emit('handleCurrentChange', index);
            },
        },
    }
</script>
