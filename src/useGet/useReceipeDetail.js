import { useDispatch } from "react-redux"
import Axios from "axios"
import { addReceipeDetail } from "../features/counterReceipeSlice"
export function useReceipeDetail(){
  const dispatch = useDispatch()
  const getReceipeDetail = (id)=>{
    dispatch(addReceipeDetail({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : `https://api.spoonacular.com/recipes/${id}/information`,
      params : {apiKey : '693426d6f4ac45729a3e0830cb67f181'}
    }).then(res=>{
      dispatch(addReceipeDetail({
        dataReceipeDetails : res.data,
        loading : false
      }))
    }).catch(err=>{
      dispatch(addReceipeDetail({
        loading : false
      }))
      alert(err)
    })
  }
  return {getReceipeDetail}
}