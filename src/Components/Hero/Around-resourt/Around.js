import "./Around.css";



export default function Around() {
    return(
        <section>
            <div className="Around--head">
                <h1><span>EXPERIENCE AROUND</span> THE RESOURT</h1>
                <hr></hr>                
                <p> Beauty is so inherent to almost all things Uttarakhand stands for 
                    the magnanimous Himalayas, the holiest of the rivers, the spiritual mystery, stunning landscapes,
                    the incessantly colorful play of nature, enchanting history carved in ancient stones, a mesmerizing floral and faunal plethora
                    and the simplest of the people.Myths, anecdotes and stories
                    are part of every visual that unfolds itself to the eyes of the beholder.</p>
            </div>

            <div className="Around--img">
                <a href="/"><img src="../Images/Nature-around-1.jpg" alt="nature--around"/></a>
                <a href="/"><img src="../Images/Nature-around-2.jpg" alt="nature--around2"/></a>
                <a href="/"><img src="../Images/Nature-around-3.jpg" alt="nature--around3"/></a>
                <a href="/"><img src="../Images/resort.jpg" alt="nature--around"/></a>
            </div>
        </section>
    )
}