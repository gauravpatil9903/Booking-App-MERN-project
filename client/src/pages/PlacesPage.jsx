import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import axios from "axios";
import AccomodationCard from "./AccomodationCard";



// import { response } from "express";
// import { response } from "express";

export default function PlacesPage() {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('/user-places').then(({ data }) => {
            setPlaces(data);
        });

    }, []);

    return (
        <div>
            <AccountNav />

            <div className=" text-center ">
                

                <Link className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full transition ease-in-out delay-150 bg-primary-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " to={'/account/places/new'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                    Add new Places
                </Link>
            </div >

            <div className="mt-4 m-10 p-4 grid lg:grid-cols-2">
                
                {places.length > 0 && places.map(place => (
                    <AccomodationCard place={place} />
                ))}
            </div>

        </div>
    );
}