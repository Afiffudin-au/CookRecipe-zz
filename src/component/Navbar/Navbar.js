import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStylesNavbar } from '../../useStyles/UseStyle';
import './Navbar.scss'
import { useGetSearchReceipe } from '../../useGet/useGetReceipe';
import LoadingSpin from '../Loading/LoadingSpin';
import { useHistory } from 'react-router-dom';
function Navbar() {
  const [query,setQuery] = useState('')
  const classes = useStylesNavbar();
  const {getSearchReceipe,loading} = useGetSearchReceipe()
  const history = useHistory()
  const handleSearch = (e)=>{
    e.preventDefault()
    if(!query) return
    getSearchReceipe(query)
    history.push('/resultRecipe')
  }
  return (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          CookReceipe-ZZ
        </Typography>
        {
          loading && <LoadingSpin/>
        }
        <form action="">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              placeholder="Search food receipes... and enter"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <button onClick={handleSearch} style={{display : 'none'}}></button>
          </div>
        </form>
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Navbar
