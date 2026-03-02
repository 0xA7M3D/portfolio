import { Outlet } from "react-router-dom";
import NavBar from "./Navbar/Navbar";
import Footer from "./Navbar/footer";


function Layout(){
    return(
        <div className="layOut">
        <NavBar/>
        <Outlet></Outlet>
        <Footer/>
        </div>
    )
}

export default Layout;