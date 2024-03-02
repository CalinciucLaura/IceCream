import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            {/* <div className="wrapper">
                <div className="social">
                    <a href="#"><img src="/images/facebook.png" alt=""></img></a>
                    <a href="#"><img src="/images/instagram.png" alt=""></img></a>
                    <a href="#"><img src="/images/youtube.png" alt=""></img></a>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar;