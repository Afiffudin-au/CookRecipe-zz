import { useDispatch } from "react-redux"
import { addReceipe,addReceipeDetail } from "../features/counterReceipeSlice"
export const useCounterAddReceipe = ()=>{
  const dispatch = useDispatch()
  const handleAddReceipe = (receipe)=>{
    dispatch(addReceipe({
      dataReceipe : receipe
    }))
  }
  return[
    handleAddReceipe
  ]
}
export const useCounterAddReceipeDetail = ()=>{
  const dispatch = useDispatch()
  const handleAddReceipeDetail = (receipe)=>{
    dispatch(addReceipeDetail({
      dataReceipeDetails : receipe
    }))
  }
  return [handleAddReceipeDetail]
}