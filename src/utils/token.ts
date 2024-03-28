export const SET_TOKEN = (token:string)=>{
  localStorage.setItem('TOKEN', JSON.stringify(token))
}
export const GET_TOKEN = ()=>{
  let data = localStorage.getItem('TOKEN')
  return data ? JSON.parse(data) : null;
}