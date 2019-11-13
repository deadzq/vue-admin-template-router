//货品进出口管理api
import request from '@/utils/request'

//获取货品进出口
export function getGoodsInout(query){
  return request({
    url:'',
    method:'get',
    params:query
  })
}

//更新货品进出口
export function updateGoodsInout(data){
  return request({
    url:'',
    method:'get',
    params:data
  })
}

//添加货品进出口
export function insertGoodsInout(data){
  return request({
    url:'',
    method:'post',
    params:data
  })
}

//删除货品进出口
export function deleteGoodsInout(ids){
  return request({
    url:'',
    method:'post',
    params:ids
  })
}
