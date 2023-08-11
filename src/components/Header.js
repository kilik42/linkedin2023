import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@mui/icons-material';
function Header() {
  return (
    <div className='header'>

        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="" />
            <div className="header__search">
                <SearchIcon />
                <input type="text" />

            </div>
        </div>

        <div className="header__right">
            <HeaderOption Icon={HomeIcon}title='Home'/>
            <HeaderOption Icon = {SupervisorAccountIcon}title="My Network"/>
            <HeaderOption Icon = {BusinessCenter }title="Jobs"/>
            <HeaderOption Icon = {Chat }title="Messaging"/>
            <HeaderOption Icon={Notifications}title='Notifications'/>
            <HeaderOption avatar='https://media-exp1.licdn.com/dms/image/C4D03AQG3Z3Z4Z4Z4Z4/profile-displaypho' title='Me'/>
        </div>
     
    </div>
  )
}

export default Header
