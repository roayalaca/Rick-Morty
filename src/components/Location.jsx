import { useState } from "react";
import axios from "axios";


const Location = ( {data, set} ) => {

    const [id, setId] = useState("")

    
    const searchById = () => {
        axios
        .get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(resp => set(resp.data))
        .catch(error => console.error(error))
    }

    return (
        <div className="locContainer">

            <div className="Input">
                <input type="text"
                placeholder="    Type a location id..."
                value={id}
                onChange={ (e) => setId(e.target.value)}/>

                 <button onClick={ searchById }> Search </button>
            </div>
            
            <div className="Location">
                <div className="Location1">
                    <h1 className="Name">Name: <span>{data.name}</span></h1>
                    <h1 className="Type">Type: <span>{data.type}</span></h1>
                    <h1 className="Dimension">Dimension: <span>{data.dimension}</span></h1>
                    <h1 className="Population">Population: <span>{data.residents?.length}</span></h1>
                </div>
            </div>  


            
        </div>


    );
};

export default Location;