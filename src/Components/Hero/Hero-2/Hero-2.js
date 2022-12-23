import "./Hero-2.css";
import HeroComponent from "./HeroComponent";
// import {Herodata} from "./Herodata"
export default function HeroTwo() {

// const elements = Herodata.map(item => 
//     {
//         return( 
//             <HeroComponent 
//                 key= {item.key}  
//                 ClassName={item.ClassName}
//                 Img={item.Img}
//                 Head={item.Head}
//                 Pera={item.Pera}
//                 Price={item.Price}
//                 Time={item.Time}
//                 Button={item.Button}
//             />
//     )
//         })
    return(
    <section className="whole--section">
        <div className="section--main">
                <div className="section--main-2">
                    <div>
                        <div className="section--head">
                            <h2>EXPLORE OUR <span>ACCOMMODATION</span></h2>
                            <p>CHOOSE ACCOMMODATION ACCORDING TO BUDGET</p>
                        </div>
                    </div>
                    <div className="section-contant-whole">
                    <HeroComponent />
                    </div>
                </div>
            </div>
    </section>
    )
} 
