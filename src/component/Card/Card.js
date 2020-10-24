import React from 'react'
import LazyImage from './LazyImage/LazyImage';
import './Card.scss'
import { useGetReceipeDetail } from '../../useGet/useGetReceipe';
import { useHistory } from 'react-router-dom';
function Card({id,imgUrl,title,summary}) {
  const [getReceipeDetail] = useGetReceipeDetail()
  const history = useHistory()
  const handleDetails = ()=>{
    getReceipeDetail(id)
    history.push('/detail')
  }
  const createMarkupSummary = () => {
    return {
       __html: summary.slice(-summary.length,210) + '...'
    }
  }
  return (
    <div onClick={handleDetails} className="Card max-w-xs rounded shadow-2xl cursor-pointer mb-5">
      <LazyImage
        src={imgUrl}
        alt={imgUrl}
      />
      <div className="Card__content p-2">
        <h1 className="text-lg font-bold mt-1">{title}</h1>
        <p dangerouslySetInnerHTML={createMarkupSummary()}/>
      </div>
    </div>
  )
}

export default Card