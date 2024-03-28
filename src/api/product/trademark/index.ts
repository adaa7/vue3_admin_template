import request from '@/utils/request';
enum API {
  TRSDEMSRK_URL = '/admin/product/baseTrademark/',
  SAVE_URL = '/admin/product/baseTrademark/save',
  UpData_URL='/admin/product/baseTrademark/update',
}
// page,limit
export const reqHasTrademark = (page:number,limit:number)=>request.get<any,any>(API.TRSDEMSRK_URL+`${page}/${limit}` )
export const reqAddOrUpdataTrademark = (data:any)=>{
  if(data.id) {
    request.post<any,any>(API.UpData_URL,data)
  }else {
    request.put<any,any>(API.SAVE_URL,data)
  }
}