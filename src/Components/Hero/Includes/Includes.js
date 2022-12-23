import "./Includes.css";
import Data from "./Data";
import {IncludeData} from "./IncludeData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";


export default function Included() {
    const section = IncludeData.map(items => {
        return(
            <Data 
                key = {items.key}
                Head = {items.Head}
                Description ={items.Description}
                Button = {items.Button}
            />            
        )
    })

    return(
        <section>
            <div className="section--des"> 
                        <h1><span>WE</span> HAVE</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempornpm  incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        </p>
                    </div>
                    <div className="we--have">
                    <div className="section--container--all">
                    {section}
                    </div>
                <div className="section--all">
                    <div className="section--img">
                        <div>
                            <Carousel infiniteLoop useKeyboardArrows autoPlay interval="80000" transitionTime="5000"  showThumbs={false}> 
                            <img className="imgpool" src="../Images/Resort.jpg"  alt="pool"/>
                            <img className="imgpool" src="../Images/Nature-around-3.jpg" alt="pool"/>
                            <img className="imgpool" src="../Images/Nav--image.jpg" alt="pool"/>
                            </Carousel>
                        </div>
                    </div>
                </div>
                </div>

        </section>
    )
}
