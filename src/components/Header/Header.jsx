import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import './Header.css';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.error(error))
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/mapview">Map View</NavLink></li>
        <li><NavLink to="/articles">Articles</NavLink></li>
        <li><NavLink to="/userProfile">User Profile</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
        <li><NavLink to="/register">Register </NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 w-[px] md:w-full ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-[15px] md:text-[40px] font-bold text-violet-600">EstateEase</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            {/* <div className="md:navbar-end flex justify-end"> */}
            <div className="md:navbar-end">
                {
                    user ? <>
                        {/* <span>{user.email}</span> */}
                        {/* <span>{user.displayName}</span> */}
                        <span>
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                {/* <button className="btn">Hover me</button> */}
                                <img className="w-[40px] md:w-[60px] md:h-[60px] border-2 border-violet-600  rounded-full" src={user.photoURL} alt="" />
                            </div>
                        </span>
                        {/* <a onClick={handleLogOut} className="btn bg-[#59C6D2] text-white md:w-[116px] h-[57px] text-[20px]">Log out</a> */}
                        <a onClick={handleLogOut} className="btn btn-primary text-white  md:w-[116px] md:h-[57px] md:text-[20px]">Log out</a>
                    </>
                        :
                        <Link to="/login">
                            <div className="flex items-center md:gap-2">
                                <CgProfile className="text-[50px]" />
                                {/* <span className="btn bg-[#59C6D2] text-white md:w-[116px] md:h-[57px] md:text-[20px]">Log in</span> */}
                                <span className="btn btn-primary text-white md:w-[116px] md:h-[57px] md:text-[20px]">Log in</span>
                            </div>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Header;
