import React from 'react'
import { Link } from 'gatsby'
import navbarSyles from '../styles/navbar.module.scss'
import Logo from '../images/bedacity_logo.svg'
import Avatar from '../images/avatar.svg'

const NavBar = (props) => {
    return(
        <nav class="navbar navbar-expand navbar-light fixed-top" id={navbarSyles.navbarColor}>
            <Link className={navbarSyles.navbarBrand} to="/"><img src={Logo} alt="bedacity" /></Link>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#items"
                aria-controls="items"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="items">
                <ul class="navbar-nav mr-4">                    
                    <li><Link className={navbarSyles.navItem} activeClassName={navbarSyles.activeNavItem} to="/challenge">Challenge</Link></li>
                    <li><Link className={navbarSyles.navItem} activeClassName={navbarSyles.activeNavItem} to="/team">Team</Link></li>
                </ul>                
            </div>
            <div className={navbarSyles.login}>
                <p class="navbar-nav mr-3">Login</p>
            </div>          
            <Link to="/login"><img src={Avatar} alt="avatar" /></Link>              
        </nav>
    )}

export default NavBar