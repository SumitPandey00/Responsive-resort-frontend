import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import "./Front-page.css";


export default function frontPage() {
    return(
<div className="frontPage">   
        <div className="frontImg">   
            <Carousel  infiniteLoop useKeyboardArrows autoPlay transitionTime={10000} showThumbs={false} interval={8000} >
            <img src="..\Images\Nature-around-3.jpg" alt="navImg" />
            <img src="..\Images\Resort.jpg" alt="navImg" /> 
            <img src="..\Images\Nature-around-1.jpg" alt="navImg" />
            </Carousel>
        </div>
        <div className="Stay">
                <h1>A Luxury Stay</h1>
                <form>
                    <input type="date" placeholder="Check In->"  required/>
                    <input type="date" id="CheckOut" placeholder="Check out->"  required/> 
                    <button type="submit">BookNow</button>
                </form>
        </div>
    </div>  
    )
}
