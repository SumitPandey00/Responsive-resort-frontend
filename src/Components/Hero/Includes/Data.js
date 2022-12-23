export default function Data(props) {
    return(
        <div>
            <div className="section--con">
                <h2>{props.Head}</h2>
                <p>{props.Description}</p>
                <button>{props.Button}</button>
            </div>
        </div>
    )
};
