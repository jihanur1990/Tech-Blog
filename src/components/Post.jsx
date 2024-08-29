import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';
import "./Toggle.css";
import { useState } from 'react';
const Post = ({ post, handleBookmark, handleReadingTime }) => {
    const { cover, title,author_img, author, posted_date, reading_time,hashtags } = post
    const [toggle, setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    
    return (
        <div className="pb-8">
            <div className="rounded-lg">
                <img src={cover} className ='w-full rounded-lg' alt="" />
            </div>
            <div className="md:flex justify-between mb-4 mt-8 space-y-3">
                <div className="flex gap-4">
                    <img src={author_img} className="w-[60px] h-[60]" alt="" />
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    {reading_time} min read
                    <button className={`ml-2 ${toggle && 'bookmarked'}`} onClick={()=>{handleBookmark(post); handleToggle();}}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className="text-[36px] font-bold mb-4">{title}</h2>
            <div className='flex gap-4'> 
                {
                    hashtags.map((hashtag, idx)=><p key={idx}>#{hashtag}</p>)

                }
            </div>
            <button className='my-4 text-[#6047EC] underline' onClick={()=>handleReadingTime(post)}>Mark as read</button>
            
        </div>

    );
};

Post.propTypes={
    post: PropTypes.object,
    handleBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Post;