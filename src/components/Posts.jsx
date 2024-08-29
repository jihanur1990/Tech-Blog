import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import PropTypes from 'prop-types';

const Posts = ({handleBookmark, handleReadingTime}) => {
    const [posts, SetPosts]=useState([])

    useEffect(()=>{
        fetch('../../public/data.json')
        .then(res=>res.json())
        .then( data=>SetPosts(data))
    },[])
    return (

        <div className="md:w-2/3 mr-5">
        <div>
            {
            posts.map (post => <Post post={post} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} key={post.id}> </Post>)
           }
        </div>
        </div>
    );
};

Posts.propTypes={
    handleBookmark:PropTypes.func,
    handleReadingTime:PropTypes.func
}
export default Posts;