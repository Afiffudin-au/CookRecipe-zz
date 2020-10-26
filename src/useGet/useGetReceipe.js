import Axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addRecipeResultSearch, addReceipe, addReceipeDetail } from '../features/counterReceipeSlice'
export function useGetSearchReceipe(){
  const [loading,setLoading] = useState(null)
  const dispatch = useDispatch()
  const getSearchReceipe = (query,pageNumber)=>{
    setLoading(true)
    dispatch(addRecipeResultSearch({
      loading : true 
    }))
    Axios({
      method : 'GET',
      url : 'https://api.spoonacular.com/recipes/complexSearch',
      params : {apiKey : '693426d6f4ac45729a3e0830cb67f181',query:query, addRecipeInformation:true, offset : pageNumber,number : 100}
    }).then(res=>{
      setLoading(false)
      dispatch(addRecipeResultSearch({
        dataRecipeResultSearch : res.data,
        loading : false
      }))
    }).catch(err=>{
      setLoading(false)
      alert(err)
    })
  }
  return {getSearchReceipe,loading}
}
export function useGetRandomReceipe(){
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  const getRandomReceipe = ()=>{
    setLoading(true)
    Axios({
      method : 'GET',
      url : 'https://api.spoonacular.com/recipes/random',
      params : {apiKey : '693426d6f4ac45729a3e0830cb67f181',number : 100}
    }).then(res=>{
      setLoading(false)
      dispatch(addReceipe({
        dataReceipe : res.data
      }))
    }).catch(err=>{
      setLoading(false)
      alert(err)
    })
  }
  return {getRandomReceipe,loading}
}
export function useGetReceipeDetail(){
  const dispatch = useDispatch()
  const getReceipeDetail = (id)=>{
    Axios({
      method : 'GET',
      url : `https://api.spoonacular.com/recipes/${id}/information`,
      params : {apiKey : '693426d6f4ac45729a3e0830cb67f181'}
    }).then(res=>{
      dispatch(addReceipeDetail({
        dataReceipeDetails : res.data
      }))
    }).catch(err=>{
      alert(err)
    })
  }
  return [getReceipeDetail]
}