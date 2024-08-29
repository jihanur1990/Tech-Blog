
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Posts from './components/Posts'
import Remarks from './components/Remarks'

function App() {
 const [bookmarks, setBookmarks]=useState([])
 const [readTime, setReadTime]=useState(0)

 const handleBookmark= (post)=>{

  const newBookmark=[...bookmarks, post];
  setBookmarks(newBookmark);
 }
 const handleReadingTime=(post)=>{
  const newReadTime=readTime+post.reading_time;
   setReadTime(newReadTime)
  const newBookmark=bookmarks.filter(bookmark=>post.id !=bookmark.id)
  setBookmarks(newBookmark)
 }
  return (
    <div className='w-[80%] max-w-[1280px] mx-auto'>
      
      <Header></Header>
      <div className='w-full lg:max-w-[1280px] md:flex mx-auto mt-8'>
        <Posts handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Posts>
        <Remarks bookmarks={bookmarks} readTime={readTime}></Remarks>
      </div>
     
    </div>
  )
}

export default App
