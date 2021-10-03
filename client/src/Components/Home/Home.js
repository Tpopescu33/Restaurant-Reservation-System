import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('/api')
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);


    return (
        <div>
            
                <h1 className= 'sub-title1'>{data} </h1>
               
            
        </div>
    )
}

export default Home