import React,{useState,} from "react";
import "./Nav.css";
import {FaPhone,FaBookmark} from "react-icons/fa";
import Hamburger from "hamburger-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";


export default function Nav() {
    const [Change,setChange] = useState(false)     

    return(
    <nav>
        <Carousel infiniteLoop useKeyboardArrows autoPlay transitionTime={6000} showThumbs={false} interval={6000} >
        <img src="..\Images\Nature-around-3.jpg" alt="nav" />
        <img src="..\Images\Resort.jpg" alt="nav" />
        <img src="..\Images\Nature-around-1.jpg" alt="nav" />
        </Carousel>
        <div className="upperNav">
                <div>
                <h3><a href="/">LOGO</a></h3>
                </div>
                <button onClick={() => {
                    setChange(!Change)
                }} className="Ham"><Hamburger /></button>                
                <div className={Change? "menu expanded":"menu"}>
                    
                    <div>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Room</a></li>
                            <li><a href="/">Contect </a></li>
                        </ul>
                    </div>            
                    <div className="button">
                        <a href="/"><FaBookmark/>BookNow!</a>
                        <a href="/"><FaPhone/>91+9368128874</a>
                    </div>

                </div>
        </div>     

        <div className="Stay">
                <h1>A Luxury Stay</h1>
                <form>
                <input onClick="date" type="date" placeholder="Check In->" onchange="this.className=(this.value!=''?'has-value':'')" required/>
                <input type="date" id="CheckOut" placeholder="Check out->" onchange="this.className=(this.value!=''?'has-value':'')" required/> 
                <button type="submit" className="Button-middle">BookNow</button>
                </form>
        </div>
        
    </nav> 
        

                
        
    )
}