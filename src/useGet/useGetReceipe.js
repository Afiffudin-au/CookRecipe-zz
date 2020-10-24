import Axios from 'axios'
import { useCounterAddReceipe, useCounterAddReceipeDetail } from '../useCounter/useCounter'
import { useState } from 'react'
export function useGetSearchReceipe(){
  const [handleAddReceipe] = useCounterAddReceipe()
  const [loading,setLoading] = useState(null)
  const getSearchReceipe = (query,pageNumber)=>{
    setLoading(true)
    Axios({
      method : 'GET',
      url : 'https://api.spoonacular.com/recipes/complexSearch',
      params : {apiKey : '693426d6f4ac45729a3e0830cb67f181',query:query, addRecipeInformation:true, offset : pageNumber,number : 100}
    }).then(res=>{
      setLoading(false)
      handleAddReceipe(res.data)
    }).catch(err=>{
      setLoading(false)
      alert(err)
    })
  }
  return {getSearchReceipe,loading}
}
export function useGetRandomReceipe(){
  const [handleAddReceipe] = useCounterAddReceipe()
  const [loading,setLoading] = useState(true)
  const getRandomReceipe = ()=>{
    setLoading(true)
    Axios({
      method : 'GET',
      url : 'https://api.spoonacular.com/recipes/random',
      params : {apiKey : '693426d6f4ac45729a3e0830cb67f181',number : 100}
    }).then(res=>{
      setLoading(false)
      handleAddReceipe(res.data)
    }).catch(err=>{
      setLoading(false)
      alert(err)
    })
  }
  return {getRandomReceipe,loading}
}
export function useGetReceipeDetail(){
  const [handleAddReceipeDetail] = useCounterAddReceipeDetail()
  const getReceipeDetail = (id)=>{
    Axios({
      method : 'GET',
      url : `https://api.spoonacular.com/recipes/${id}/information`,
      params : {apiKey : '693426d6f4ac45729a3e0830cb67f181'}
    }).then(res=>{
      handleAddReceipeDetail(res.data)
    }).catch(err=>{
      alert(err)
    })
  }
  return [getReceipeDetail]
}