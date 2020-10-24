import React,{useEffect} from 'react'
import Card from '../Card/Card'
import { useGetRandomReceipe } from '../../useGet/useGetReceipe'
import { useSelector } from 'react-redux'
import { selectReceipe } from '../../features/counterReceipeSlice'
import Loading from '../Loading/Loading'
function ReceipeContent() {
  const {getRandomReceipe,loading} = useGetRandomReceipe()
  const receipes = useSelector(selectReceipe)
  useEffect(()=>{
    getRandomReceipe()
  },[])
  return (
    <>
      {
        loading && <Loading/>
      }
      {
        receipes?.dataReceipe?.results?.length === 0 && <p className="text-2xl text-gray-900 font-semibold">Sorry we cannot found receipe</p>
      }
      <div className="grid p-2 mt-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl2:grid-cols-5 xl3:grid-cols-6">
        {
          receipes?.dataReceipe?.recipes?.map((item,index)=>(
            <Card key={item.id} id={item.id} imgUrl={item.image} title={item.title} summary={item.summary} />
          ))
        }
        {
          receipes?.dataReceipe?.results?.map((item,index)=>(
            <Card key={item.id} id={item.id} imgUrl={item.image} title={item.title} summary={item.summary} />
          ))
        }
      </div>
    </>
  )
}

export default ReceipeContent
