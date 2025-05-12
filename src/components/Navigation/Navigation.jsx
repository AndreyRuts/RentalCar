import { NavLink } from "react-router-dom"

import s from './Navigation.module.css';

function Navigation() {

    return (
      <>
        <nav className={s.navigation}>
            <NavLink to='/' className={s.navLink}>Home</NavLink>
            <NavLink to='/catalog' className={s.navLink}>Catalog</NavLink>
        </nav>
      </>
    )
  }
  
  export default Navigation