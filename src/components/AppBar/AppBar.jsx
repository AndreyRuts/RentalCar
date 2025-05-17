import Navigation from "../Navigation/Navigation"

import s from './AppBar.module.css';

function AppBar() {

    return (
        <>
            <div className={s.headerContainer}>
                <svg viewBox="0 0 104 16" width="104" height="16">
                    <use href="/sprite.svg#logoDesc"></use>
                </svg>
                <Navigation />
            </div>
        </>
    )
}
  
export default AppBar