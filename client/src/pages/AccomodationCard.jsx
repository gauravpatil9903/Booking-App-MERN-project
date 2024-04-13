import { useState } from "react";
import PlaceImg from "../PlaceImg"
import { Link, useParams } from "react-router-dom";

const AccomodationCard = ({ place }) => {
    const [readMore, setReadMore] = useState(false);
    const info = readMore ? place.description : `${place.description.substring(0, 150)}...`

    const readHandler = () => {
        setReadMore(!readMore);
    }
    return (
        <div className="p-2 ">
            <div className="flex cursor-pointer gap-4 bg-gray-200 p-4 rounded-2xl ">
                <Link to={'/account/places/' + place._id} className="flex w-32 h-32 bg-gray-300 grow shrink-0">
                    < PlaceImg place={place} />
                </Link>
                <div className="grow-0 shrink p-4">
                    <h2 className="text-xl">{place.title}</h2>
                    <p className="text-sm mt-2  ">
                        {info}
                        <span onClick={readHandler} className="text-blue-700">
                            {
                                readMore ? "Show less" : "Read more"
                            }
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AccomodationCard
