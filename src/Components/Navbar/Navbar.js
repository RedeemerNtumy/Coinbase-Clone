<<<<<<< HEAD
import React from 'react';
import './Navbar.css';
import logo from './img/logo.svg'
import Button from '../Button/Button'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <div className='container-inner-div'>
                    <div className='logo-div'>
                        <a href='#'>
                            <img src={logo} alt='logo'/>
                        </a>
                    </div>

                    <nav className='nav-menu'>
                        <a>
                            <div className='menu-butt-div' >
                                <a>
                                    <div className='menu-butt-div'>
                                        <span>Prices</span>
                                    </div>
                                </a>
                            </div>
                        </a>

                        <a>
                            <div className='menu-butt-div' >
                                <a>
                                    <div className='menu-butt-div'>
                                        <span>Learn</span>
                                    </div>
                                </a>
                            </div>
                        </a>

                        <a>
                            <div className='menu-butt-div' >
                                <a>
                                    <div className='menu-butt-div'>
                                        <span>Individuals</span>
                                    </div>
                                </a>
                            </div>
                        </a>

                        <a>
                            <div className='menu-butt-div' >
                                <a>
                                    <div className='menu-butt-div'>
                                        <span>Businesses</span>
                                    </div>
                                </a>
                            </div>
                        </a>

                        <a>
                            <div className='menu-butt-div' >
                                <a>
                                    <div className='menu-butt-div'>
                                        <span>Developers</span>
                                    </div>
                                </a>
                            </div>
                        </a>

                        <a>
                            <div className='menu-butt-div' >
                                <a>
                                    <div className='menu-butt-div'>
                                        <span>Company</span>
                                    </div>
                                </a>
                            </div>
                        </a>
                    </nav>


                    <div className='right-div'>
                        <a>
                            <span>Sign in</span>
                        </a>

                        <span>
                            <Button placeholder='Get started'/>
                        </span>
                    </div>
                </div>
            </div>
=======
import React from 'react'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>

>>>>>>> 272ac275e8ff317475a6612c8383e9ebffa7deb9
        </div>
    );
}

export default Navbar;