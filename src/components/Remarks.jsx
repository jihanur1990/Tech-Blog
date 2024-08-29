import PropTypes from 'prop-types';
const Remarks = ({ bookmarks, readTime}) => {

    return (
        <div className="md:w-1/3">
            <div >
                <div className="bg-gray-200 text-[#6047EC] font-semibold text-2xl text-center p-5 rounded-lg border-[#6047EC1A] border-[1px] mb-4"><h3>Spent time on read : {readTime} min</h3></div>
            </div>

            <div className='bg-gray-200 p-6 rounded-lg'> 
            <div>
                <div className='text-2xl font-bold'>Bookmarked Blogs : {bookmarks.length} </div>
                {
                    bookmarks.map((bookmark,idx) =><div key={idx} className='bg-white rounded-md mt-4 p-5 text-[18px]'>{bookmark.title}</div>)
                }
            </div>
            </div>
        </div>
    );
};
Remarks.propTypes = {
    bookmarks: PropTypes.object,
    readTime:PropTypes.number
}
export default Remarks;