<script setup lang='ts'>
import { ref, onMounted, reactive } from 'vue';
import { reqHasTrademark, reqAddOrUpdataTrademark } from '@/api/product/trademark';
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'

let pageNo = ref<number>(1)
let Limt = ref<number>(4)
let total = ref<number>(0)
let trademarkArr = ref<any>([])
let DialogVisible = ref<boolean>(false)
let trademarkParams = reactive<any>({
  tmName: '',
  logoUrl: ''
})
const getHasTrademark = async () => {
  let result = await reqHasTrademark(pageNo.value, Limt.value)
  console.log(result);
  if (result.code == 200) {
    total.value = result.data.total
    trademarkArr.value = result.data.records
  }
}
onMounted(() => {
  getHasTrademark()
})
function changePageNo() {
  getHasTrademark()
}
const upDataChange = (row: any) => {
  console.log(row);
  DialogVisible.value = true
  trademarkParams.id = row.id
  trademarkParams.tmName = row.tmName
  trademarkParams.logoUrl = row.logoUrl

}
const conFirm = async () => {
  let result = await reqAddOrUpdataTrademark(getHasTrademark);
  console.log(result);

}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {

  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('请使用JPEG格式')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('大于 2MB!')
    return false
  }
  return true
}
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  console.log('response:  ', response + '\nuploadFile:\t', uploadFile);

  trademarkParams.logoUrl = URL.createObjectURL(uploadFile.raw!)
}

</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header id="header">
        <el-button type="primary" @click="upDataChange">添加</el-button>
      </template>

      <el-table :data="trademarkArr">
        <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
        <el-table-column label="品牌名称" prop="tmName"></el-table-column>
        <el-table-column label="品牌Logo">
          <template #="{ row, $index }">
            <img :src="row.logoUrl" alt="找不到本地图片" height="100px">
          </template>
        </el-table-column>
        <el-table-column label="品牌操作">
          <template #="{ row, $index }">
            <el-button type="primary" size="small" icon="Edit" @click="upDataChange(row)"></el-button>
            <el-button type="primary" size="small" icon="Delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination v-model:current-page="pageNo" @size-change="changePageNo" @current-change="changePageNo"
        v-model:page-size="Limt" :page-sizes="[3, 5, 7, 9]" :background="true"
        layout=" prev, pager, next, jumper,->,sizes, total" :total="total" />
    </el-card>


    <el-dialog v-model="DialogVisible" title="修改品牌">
      <el-form>
        <el-form-item label="名称" prop="pass">
          <el-input type="text" autocomplete="off" v-model="trademarkParams.tmName" />
        </el-form-item>
        <el-form-item label="上传图片" prop="checkPass">
          <el-upload class="avatar-uploader" action="/api/admin/product/fileUpload" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="DialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="conFirm">Confirm</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>