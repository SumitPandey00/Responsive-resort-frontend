import "./Footer.css";
import {
    FaInstagram,
    FaFacebook,
    FaTwitter,
    FaGoogle,
    FaSnapchat,
    FaWhatsapp,
    FaPhone,
    FaLocationArrow,
    FaMailBulk
} from 'react-icons/fa';

export default function Footer() {
    return(
        <footer>
            <div className="footer--all">
            <div className="Logo--all">
                <div><h2><span>THE DEMO</span> RESORT</h2></div>
                <div className="Logo">    
                        <a href="/"><FaInstagram /></a>
                        <a href="/"><FaFacebook /> </a>
                        <a href="/"><FaTwitter /></a>
                        <a href="/"><FaGoogle /></a>
                        <a href="/"><FaSnapchat /></a>
                        <a href="/"><FaWhatsapp /></a>
                    </div>
            </div>
                <div className="link--all">
                    <div className="link--contact">
                        <h4><a href="/"><FaLocationArrow />Location</a></h4>
                        <h4><a href="/"><FaPhone />+932-274-5735</a></h4>
                        <h4 className="ff"><a href="/"><FaMailBulk />thedemoresort@gmail.com</a></h4>
                    </div>
                    <div className="link-set-one">
                        <ul>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/">ROOMS</a></li>
                            <li><a href="/">BOOK NOW</a></li>
                            <li><a href="/">KNOW MORE</a></li>
                        </ul>
                    </div>
                    <div className="link-set-two">
                        <ul>
                            <li><a  href="/">CLIENT TESTAMONY</a></li>
                            <li><a  href="/">PLACE AROUND</a></li>
                            <li><a  href="/">SERVICS</a></li>
                            <li><a  href="/">HOW TO REACH</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}