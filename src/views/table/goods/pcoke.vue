<template>
  <div class="app-container">
    <div class="filter-container">

      <!--下面是搜索框-->
      <el-input v-model="" placeholder="搜索项1" style="width:200px;" class="filter-item"/>
      <!--select查询 searchItems 是select下拉选择的数据数组-->
      <el-select v-model="" placeholder="搜索项2" clearable style="width:90px" class="filter-item">
        <el-option v-for="item in searchItems" :key="item" :label="item" :value="item"/>
      </el-select>
      <el-select v-model="" placeholder="搜索项3" clearable class="filter-item" style="width:130px">
        <el-option v-for="item in searchItems2" :key="item.key" :label="item.display_name+'('+item.key+')'"
                   :value="item.key">
        </el-option>
      </el-select>

      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left:10px;" type="primary" icon="el-icon-edit">
        添加
      </el-button>
      <el-button class="filter-item" style="margin-left:10px;" type="primary" icon="el-icon-edit">
        更改
      </el-button>
      <el-button class="filter-item" style="margin-left:10px;" type="primary" icon="el-icon-edit">
        删除
      </el-button>
      <el-checkbox v-model="showCreateTime" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        创建时间
      </el-checkbox>
      <el-checkbox v-model="showUpdateTime" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        更新时间
      </el-checkbox>
    </div>
      <!--el-table展示的全是数据元组(字段)-->
      <el-table
        :key="tableKey"
        v-loading="listLoading"
        :data="list"
        border
        fit
        highlight-current-row
        style="width: 100%;"
        @sort-change="sortChange"
      >
        <!--el-table-column为字段列 label:要展示出来的标题,prop:对应的json的键,
        getSortClass为自定义方法,参数id,根据id排序-->
        <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80"
         :class-name="getSortClass('id')">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <!--可以同时显示两个字段的展示类型,使用了el-tag,只需要将另一个字段放进去就可以了-->
        <!--地区-省份-->
        <el-table-column label="地区" width="180px" align="center" min-width="80px">
          <template slot-scope="{row}">
            <span class="link-type">{{ row.region }}</span>
            <el-tag>{{ row.province }}</el-tag>
          </template>
        </el-table-column>
        <!--可以同时显示两个字段的展示类型,使用了el-tag,只需要将另一个字段放进去就可以了-->
        <!--企业名称-所属-->
        <el-table-column label="企业名称" width="180px" align="center" min-width="80px">
          <template slot-scope="{row}">
            <span class="link-type">{{ row.company }}</span>
            <el-tag>{{ row.belong }}</el-tag>
          </template>
        </el-table-column>
        <!--可以同时显示两个字段的展示类型,使用了el-tag,只需要将另一个字段放进去就可以了-->
        <!--硫含量-型号等级-->
        <el-table-column label="硫含量" width="180px" align="center" min-width="80px">
          <template slot-scope="{row}">
            <span class="link-type">{{ row.sulfur }}</span>
            <el-tag>{{ row.grade }}</el-tag>
          </template>
        </el-table-column>
        <!--普通字段-->
        <!--灰分-->
        <el-table-column label="灰分" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.ash }}</span>
          </template>
        </el-table-column>
        <!--普通字段-->
        <!--挥发分-->
        <el-table-column label="挥发分" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.volatiles }}</span>
          </template>
        </el-table-column>
        <!--普通字段-->
        <!--扣水率-->
        <el-table-column label="扣水率" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.wdr }}</span>
          </template>
        </el-table-column>
        <!--普通字段-->
        <!--钒含量-->
        <el-table-column label="钒含量" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.van }}</span>
          </template>
        </el-table-column>
        <!--普通字段-->
        <!--钒含量-->
        <el-table-column label="钒含量" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.van }}</span>
          </template>
        </el-table-column>
        <!--普通字段-->
        <!--当日报价-->
        <el-table-column label="当日报价" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <!--普通字段-->
        <!--上传人-->
        <el-table-column label="上传人" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.reporter }}</span>
          </template>
        </el-table-column>
        <!--普通字段-->
        <!--真实时间，excel表中定义的时间-->
        <el-table-column label="时间" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.truetime }}</span>
          </template>
        </el-table-column>
        <!--普通字段-->
        <!--备注-->
        <el-table-column label="备注" align="center" width="80">
          <template slot-scope="scope">
            <span>{{ scope.row.remarks }}</span>
          </template>
        </el-table-column>
        <!--选择才展示的两个字段createtime updatetime sql时间-->
        <el-table-column v-if="showCreateTime" label="创建时间" width="150px" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.createtime | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          </template>
        </el-table-column>
        <el-table-column v-if="showUpdateTime" label="更新时间" width="150px" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.updatetime | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
          </template>
        </el-table-column>
      </el-table>
      <!--分页查询-->
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
      <!--新增,更改弹出窗-->
      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      </el-dialog>
      <!--阅读统计-->
      <el-dialog :visible.sync="dialogPvVisible" title="">
        <el-table :data="pvData" border fit highlight-current-row style="width:100%">
          <el-table-column prop="key" label="Channel" />
          <el-table-column prop="pv" label="Pv" />
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogPvVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
  </div>
</template>



<script>
import { } from '@/api/goods'
import
  export default {
    name: "index"
  }
</script>

<style scoped>

</style>
