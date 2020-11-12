import Axios from 'axios'
import { useDispatch } from 'react-redux'
import { addRecipeResultSearch, addReceipe } from '../features/counterReceipeSlice'
export function useReceipe(){
  const dispatch = useDispatch()
  const getSearchReceipe = (query,pageNumber)=>{
    dispatch(addRecipeResultSearch({
      loading : true 
    }))
    Axios({
      method : 'GET',
      url : 'https://api.spoonacular.com/recipes/complexSearch',
      params : {apiKey : '693426d6f4ac45729a3e0830cb67f181',query:query, addRecipeInformation:true, offset : pageNumber,number : 100}
    }).then(res=>{
      dispatch(addRecipeResultSearch({
        dataRecipeResultSearch : res.data,
        loading : false
      }))
    }).catch(err=>{
      dispatch(addRecipeResultSearch({
        loading : false 
      }))
      alert(err)
    })
  }
  const getRandomReceipe = ()=>{
    dispatch(addReceipe({
      loading : true
    }))
    Axios({
      method : 'GET',
      url : 'https://api.spoonacular.com/recipes/random',
      params : {apiKey : '693426d6f4ac45729a3e0830cb67f181',number : 100}
    }).then(res=>{
      dispatch(addReceipe({
        dataReceipe : res.data,
        loading :  false
      }))
    }).catch(err=>{
      dispatch(addReceipe({
        loading : false
      }))
      alert(err)
    })
  }
  return {getSearchReceipe,getRandomReceipe}
}