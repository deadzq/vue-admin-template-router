//货品仓储管理api
import request from '@/utils/request'

//获取货品仓储
export function getGoodsStore(query){
  return request({
    url:'',
    method:'get',
    params:query
  })
}

//更新货品仓储
export function updateGoodsStore(data){
  return request({
    url:'',
    method:'get',
    params:data
  })
}

//添加货品仓储
export function insertGoodsStore(data){
  return request({
    url:'',
    method:'post',
    params:data
  })
}

//删除货品仓储
export function deleteGoodsStore(ids){
  return request({
    url:'',
    method:'post',
    params:ids
  })
}
