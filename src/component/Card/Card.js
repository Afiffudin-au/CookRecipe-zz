import React from 'react'
import './Card.scss'
import { useHistory } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';
import LazyLoad from 'react-lazyload';
import { useDispatch } from 'react-redux';
import { addReceipeDetail } from '../../features/counterReceipeSlice';
import { useReceipeDetail } from '../../useGet/useReceipeDetail';
function Card({id,imgUrl,title,summary}) {
  const {getReceipeDetail} = useReceipeDetail()
  const history = useHistory()
  const dispatch = useDispatch()
  const handleDetails = ()=>{
    dispatch(addReceipeDetail({
      dataReceipeDetails : []
    }))
    getReceipeDetail(id)
    history.push('/detail')
  }
  console.log("render")
  const createMarkupSummary = () => {
    return {
       __html: summary.slice(-summary.length,210) + '...'
    }
  }
  return (
    <div onClick={handleDetails} className="Card max-w-xs rounded shadow-2xl cursor-pointer mb-5">
      <LazyLoad width={200} height={200} placeholder={<LinearProgress color="secondary"/>}>
        <img className="rounded object-fill" src={imgUrl} alt={imgUrl}/>
      </LazyLoad> 
      <div className="Card__content p-2">
        <h1 className="text-lg font-bold mt-1">{title}</h1>
        <p dangerouslySetInnerHTML={createMarkupSummary()}/>
      </div>
    </div>
  )
}

export default Card