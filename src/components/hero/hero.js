import "./hero.css";
import {useNavigate} from "react-router-dom"

export const Hero = () => {
const navigate = useNavigate();
    return (
        <div className="div-hero">
            <div id="hero-logo-txt">Logo</div>
            <div id="hero-dash">
                <div id="hero-dash-logo">
                </div>
                <span id="hero-dash-text">Dashboard</span>
            </div>
            
            <div className="hero-cont">
            <div id="hero-contact-logo"></div>
            <span id="hero-contact-txt">Total Contacts</span>
                </div>

            <div className="logout" onClick={()=>{
                window.localStorage.removeItem("token");
                navigate("/")
                }}>
                <div id="hero-logout-logo"></div>
                <span id="hero-logout-txt">Logout</span>
            </div>
        </div>
    )
}