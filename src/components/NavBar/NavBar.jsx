import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";


const NavBar = () => {

    const navLinks = <>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
    </>;

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                    </div>
                    <a className="btn btn-ghost text-4xl font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex gap-10">

                    <ul className="gap-5">

                        {navLinks}

                    </ul>

                </div>
                <div className="navbar-end flex gap-3">
                    <input className="bg-[#150b2b0d] rounded-3xl px-5 py-2 " type="" placeholder="Search" />
                    <div>
                        <CgProfile></CgProfile>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;