import React from 'react'

const Search = () => {
  return (
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='find user' />
        </div>
        <div className="userChat">
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default Search