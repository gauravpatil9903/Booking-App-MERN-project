
import { useState } from "react";
// import Header from "../Header";
import axios from "axios";
import { Link } from "react-router-dom";
// import { response } from "express";
export default function IndexPage(){
  const [places, setPlaces] = useState([]);
  useState(() =>{
    axios.get('/places').then(response =>{
      setPlaces(response.data);
    });
  }, []);
    return(

      <div className="m-4 ">
           <div className="mt-4 grid gap-4 grid-cols-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
       
       {places.length >0 && places.map(place => (
        <div className="m-3 bg-gray-200 rounded-2xl">
              <Link to={'/place/' + place._id}>
           <div className="bg-gray-500 mb-3  rounded-2xl flex  ">
             {place.photos?.[0] && (
               <img className="rounded-2xl object-cover aspect-square shadow-lg max-w-xs transition duration-300 ease-in-out hover:scale-110" src={'http://localhost:4000/uploads/'+place.photos?.[0]} alt="" />
             )}
           </div>
           <div className="m-3 p-1 ">
           <h2 className="font-bold ">{place.address}</h2>
           <h3 className="text-sm text-gray-500">{place.title}</h3>
           <div className="mt-1">
             <span className="font-bold">${place.price}</span> per night
           </div>
           
          
           </div>
         </Link>
        </div>
         
       ))}
     </div>
      </div>
     
    )
}