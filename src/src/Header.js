import React, {useState} from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar'
import {Link} from 'react-router-dom';




function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">

            <div className="header__left">
                  <MenuIcon/>
                 <Link to="/">
                  <img
                   className="header__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Youtube_logo.png/120px-Youtube_logo.png" alt=""/>
                 </Link>   
            </div>

            <div className="header__input">
                 <input onChange = {e => setInputSearch(e.target.value)} value={inputSearch}  placeholder="Search" type="text"/>
                  <Link to={`/search/${inputSearch}`}>
                  <SearchIcon className = "header__inputButton"/>
                  </Link>
            </div>
            
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
             <AppsIcon className="header__icon"/>
             <NotificationsIcon className="header__icon"/>
             <Avatar alt="abhishek" src="https://avatars3.githubusercontent.com/u/46296076?s=400&u=a13280b0c51d81fd876a5bdf8dc014399bf00a38&v=4" />
            </div>
            
        </div>
    )
}

export default Header
