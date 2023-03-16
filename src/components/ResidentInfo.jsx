import { useEffect, useState } from "react";
import axios from "axios";



const ResidentInfo = ( {residentInfo}  ) => {

    const [infoResident, setInfoResident] = useState({})
  
    useEffect( () => {
        axios
            .get (residentInfo)
            .then(resp => setInfoResident(resp.data))
            .catch(error => console.error(error))
        
         
     }, [])
   

    

    

    return (
      
             <div className="Resident">
                <li>
                    <img src={infoResident.image} alt="" />
                    <div className="Box3">
                        <div className="Box4">
                            <div className="Box2">
                            <h1>{infoResident.name}</h1>
                            </div>
                            <div className="Text">
                                <h1>NAME <span>{infoResident.status}</span></h1>
                                <h1>ORIGIN <span>{infoResident.origin?.name}</span></h1>
                                <h1>POPULATION <span>{infoResident.episode?.length}</span></h1>
                            </div>
                        </div>
                    </div>
                </li>
             </div>
        
       
    );
};

export default ResidentInfo;