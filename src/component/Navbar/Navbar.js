import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStylesNavbar } from '../../useStyles/UseStyle';
import './Navbar.scss'
import { useReceipe } from '../../useGet/useReceipe';
import { useHistory, Link } from 'react-router-dom';
function Navbar() {
  const [query,setQuery] = useState('')
  const classes = useStylesNavbar();
  const {getSearchReceipe} = useReceipe()
  const history = useHistory()
  const handleSearch = (e)=>{
    e.preventDefault()
    const userText = query.replace(/^\s+/, '').replace(/\s+$/, '');
    if(userText === ''){
      return
    }
    getSearchReceipe(query)
    history.push('/resultRecipe')
  }
  return (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
           <Link to="/">
            CookReceipe-ZZ
            </Link>
          </Typography>
      <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        <form action="">
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
        </form>
      </div>
      </Toolbar>
    </AppBar>
  </div>
  )
}

export default Navbar
