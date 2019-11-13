//货品管理api
import request from '@/utils/request'

//获取货品
export function getGoods(query){
  return request({
    url:'',
    method:'get',
    params:query
  })
}

//更新货品
export function updateGoods(data){
  return request({
    url:'',
    method:'get',
    params:data
  })
}

//添加货品
export function insertGoods(data){
  return request({
    url:'',
    method:'post',
    params:data
  })
}

//删除货品
export function deleteGoods(ids){
  return request({
    url:'',
    method:'post',
    params:ids
  })
}
