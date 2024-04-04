import React from 'react'
import Sidebar from "../components/Sidebar"
import Chats from '../components/Chats'
import Chat from '../components/Chat'
import Search from "../components/Search"

const Home = () => {
  return (
    <div className="home">
        <div className="container">
            <Sidebar/>
            <Chat/>
            
           
        </div>
    </div>
  )
}

export default Home