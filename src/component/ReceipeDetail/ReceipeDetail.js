import React from 'react'
import { useSelector } from 'react-redux'
import { selectReceipeDetails } from '../../features/counterReceipeSlice'
import LayzImageDetail from './LayzImageDetail/LayzImageDetail'
import './ReceipeDetail.scss'
function ReceipeDetail() {
  const receipeDetail = useSelector(selectReceipeDetails)
  const detail = {...receipeDetail?.dataReceipeDetails}
  const createMarkupInstructions = () => {
    return {
       __html: detail.instructions  
    }
  }
  const createMarkupSummary = () => {
    return {
       __html: detail.summary  
    }
  }
  return (
    <div className="detailReceipe mx-auto sm:w-8/12">
      <LayzImageDetail
       src={detail.image}
       alt={detail.image}
       />
      <h1 className="font-semibold text-2xl text-gray-800">{detail.title}</h1>
      <div className="detailReceipe__summary border-b border-gray-600" dangerouslySetInnerHTML={createMarkupSummary()}/>
      <div className="detailReceipe__types flex gap-2">
        {
          detail?.dishTypes?.map((item,index)=>(
            <p className="font-semibold text-xl italic text-gray-700" key={index}>{item}</p>
          ))
        }
      </div>
      <div className="detailReceipe__ingredients  border-b border-gray-600">
        <h1 className="font-bold text-2xl text-gray-800">Ingredients</h1>
        {
          detail?.extendedIngredients?.map((item,index)=>(
            <p key={index}>{item.original}</p>
          ))
        }
      </div>
      <div className="detailReceipe__instructions  border-b border-gray-600">
      <h1 className="font-bold text-2xl text-gray-800">instructions</h1>
        <p dangerouslySetInnerHTML={createMarkupInstructions()} /> 
      </div>
    </div>
  )
}

export default ReceipeDetail
