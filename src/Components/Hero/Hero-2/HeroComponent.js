import React from "react";
import "./HeroComponent.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function HeroComponent() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
      responsive: [
        {
          breakpoint: 1224,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1038,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: true
          }
        },
        {
          breakpoint: 743,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        }
        },
        {
            breakpoint: 300,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              

          }
          }
      ]
    };
    return(
        <div className="section--contant">
            <Slider  {...settings} >
          <div>
          <div className="apple">
                    <img src="../Images/Room--2.jpg" alt="Room1" className="Section--img"/>
                    <div className="section-contant-bottom">
                        <h3>Mountain Faced</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.Ut enim ad minim veniam.</p>
                        <h5>17000/-<span>/Night</span></h5>
                        <button>More Detail</button>  
                    </div>
          </div>
          </div>
          <div>
          <div className="apple">
                    <img src="../Images/Room--2.jpg" alt="Room1" className="Section--img"/>
                    <div className="section-contant-bottom">
                        <h3>Mountain Faced</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.Ut enim ad minim veniam.</p>
                        <h5>17000/-<span>/Night</span></h5>
                        <button>More Detail</button>  
                    </div>
          </div>
          </div>
          <div>
          <div className="apple">
                    <img src="../Images/Room--2.jpg" alt="Room1" className="Section--img"/>
                    <div className="section-contant-bottom">
                        <h3>Mountain Faced</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.Ut enim ad minim veniam.</p>
                        <h5>17000/-<span>/Night</span></h5>
                        <button>More Detail</button>  
                    </div>
          </div>
          </div>
          <div>
          <div className="apple">
                    <img src="../Images/Room--2.jpg" alt="Room1" className="Section--img"/>
                    <div className="section-contant-bottom">
                        <h3>Mountain Faced</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.Ut enim ad minim veniam.</p>
                        <h5>17000/-<span>/Night</span></h5>
                        <button>More Detail</button>  
                    </div>
          </div>
          </div>
          <div>
          <div className="apple">
                    <img src="../Images/Room--2.jpg" alt="Room1" className="Section--img"/>
                    <div className="section-contant-bottom">
                        <h3>Mountain Faced</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.Ut enim ad minim veniam.</p>
                        <h5>17000/-<span>/Night</span></h5>
                        <button>More Detail</button>  
                    </div>
          </div>
          </div>
          <div>
          <div className="apple">
                    <img src="../Images/Room--2.jpg" alt="Room1" className="Section--img"/>
                    <div className="section-contant-bottom">
                        <h3>Mountain Faced</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.Ut enim ad minim veniam.</p>
                        <h5>17000/-<span>/Night</span></h5>
                        <button>More Detail</button>  
                    </div>
          </div>
          </div>
          <div>
          <div className="apple">
                    <img src="../Images/Room--2.jpg" alt="Room1" className="Section--img"/>
                    <div className="section-contant-bottom">
                        <h3>Mountain Faced</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.Ut enim ad minim veniam.</p>
                        <h5>17000/-<span>/Night</span></h5>
                        <button>More Detail</button>  
                    </div>
          </div>
          </div>
          <div>
          <div className="apple">
                    <img src="../Images/Room--2.jpg" alt="Room1" className="Section--img"/>
                    <div className="section-contant-bottom">
                        <h3>Mountain Faced</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.Ut enim ad minim veniam.</p>
                        <h5>17000/-<span>/Night</span></h5>
                        <button>More Detail</button>  
                    </div>
          </div>
          </div>
          <div>
          <div className="apple">
                    <img src="../Images/Room--2.jpg" alt="Room1" className="Section--img"/>
                    <div className="section-contant-bottom">
                        <h3>Mountain Faced</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, magna aliqua.Ut enim ad minim veniam.</p>
                        <h5>17000/-<span>/Night</span></h5>
                        <button>More Detail</button>  
                    </div>
          </div>
          </div>
            </Slider> 
        </div>           
            
    )
};
