import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { selectRecipeResultSearch } from '../../features/counterReceipeSlice'
import LinearProgress from '@material-ui/core/LinearProgress';
function ResultSearch() {
  const resultSearch = useSelector(selectRecipeResultSearch)
  const newResultSearch = {...resultSearch?.dataRecipeResultSearch}
  return (
    <>
      <div className="sticky top-0">
        {
          resultSearch.loading && <LinearProgress color="secondary"/>
        }
      </div>
      <div className="grid p-2 mt-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl2:grid-cols-5 xl3:grid-cols-6">
        {
          newResultSearch?.results?.map((item,index)=>(
            <Card key={item.id} id={item.id} imgUrl={item.image} title={item.title} summary={item.summary} />
          ))
        }
      </div>
    </>
  )
}

export default ResultSearch
