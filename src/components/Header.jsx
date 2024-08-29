import profile from '../assets/images/profile.png'
const Header = () => {
    return (
        <div className='mx-auto w-full flex justify-between py-7 border-b-[1px]'> 
            <h1 className="text-[40px] font-bold">TECH BLOG</h1>
            <img className='w-[60px] h-[60px]' src={profile} alt="" />
        </div>
    );
};

export default Header;