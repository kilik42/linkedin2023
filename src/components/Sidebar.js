import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
function Sidebar() {
  return (
   <div className="sidebar">
        {/* <h1>I am the sidebar</h1> */}
        <div className="sidebar__top">
            <img src="https://plus.unsplash.com/premium_photo-1685868556097-641c237f3fa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2056&q=80" alt=""/>
            <Avatar className="sidebar__avatar" />
            <h2>user display name</h2>
            <h4>user email</h4>


        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">
                    2,543
                </p>
            </div>
            <div className="sidebar__stat">
                 <p>Views on post</p>
                <p className="sidebar__statNumber">
                    2,444
                </p>
            </div>

        </div>

      <div className="sidebar__button">
            <p>Recent</p>
            {/* recent items */}
            <div className="sidebar__recentItem">
                <span className="sidebar__hash">#</span>
                <p>reactjs</p>
            </div>
      </div>

   </div>
  )
}

export default Sidebar
