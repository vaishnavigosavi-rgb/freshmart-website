import React, { useEffect, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {

        setShowMenu(!showMenu)
    }

    useEffect(() => {

        const handleScroll = () => {

            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)

    }, [])

    return (
        <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
            <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>
                {/* logo */}
                <Link to="/" className='text-3xl font-bold'>
                    Fre<span className='text-green-600 uppercase'>sh</span>mart
                </Link>

                {/* Desktop Menu  selecting multiple tabs use alt + tabs select*/}
                <ul className='md:flex items-center gap-x-15 hidden'>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-green-600'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-green-600'>About Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-green-600'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-green-600'>Contact Us</a>
                    </li>
                </ul>

                {/* NAv Action*/}
                <div className='flex items-center gap-x-5'>

                    {/* Input field*/}
                    <div className='md:flex p-1 border-2 border-green-500 rounded-full hidden'>
                        <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'
                            className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-green-400 to-green-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                            <FaSearch />
                        </button>
                    </div>
                    <a href="#" className='text-zinc-800 text-2xl'>
                        <FaHeart />
                    </a>

                    <a href="#" className='text-zinc-800 text-2xl'>
                        <FaShoppingBag />
                    </a>

                    {/* hamburger */}
                    <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu} >
                        {showMenu ? <TbMenu3 /> : <TbMenu2 />
                        }
                    </a>
                </div>

                {/* mobile menu */}
                <ul className={`flex flex-col gap-y-12 bg-green-500/15 backdrop-blur-xl  shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transtion-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-green-500'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-green-500'>About Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-green-500'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-green-500'>Contact Us</a>
                    </li>
                    <li className='flex p-1 border-2 border-green-500 rounded-full md:hidden'>
                        <input type="text" name="text" id="text" placeholder='Search...' autoComplete='off'
                            className='flex-1 h-[5vh] px-3 focus:outline-none' />
                        <button className='bg-gradient-to-b from-green-400 to-green-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                            <FaSearch />
                        </button>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Navbar