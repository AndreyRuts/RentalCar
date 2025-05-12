import AppBar from "../AppBar/AppBar"

function Layout({children}) {

return (
    <>
        <AppBar />
        {children}
    </>
    )
    
}

export default Layout