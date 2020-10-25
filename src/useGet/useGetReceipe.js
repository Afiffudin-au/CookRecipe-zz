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
      params : {apiKey : '8e81641701dd48b2be1d40f07cc3d34c',query:query, addRecipeInformation:true, offset : pageNumber,number : 100}
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
      params : {apiKey : '8e81641701dd48b2be1d40f07cc3d34c',number : 100}
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
      params : {apiKey : '8e81641701dd48b2be1d40f07cc3d34c'}
    }).then(res=>{
      handleAddReceipeDetail(res.data)
    }).catch(err=>{
      alert(err)
    })
  }
  return [getReceipeDetail]
}