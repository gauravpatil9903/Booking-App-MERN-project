// import { useState } from "react";

// export default function PlaceGallery({place}){
//     const [showAllPhotos,setShowAllPhotos] = useState(false);
//     if(showAllPhotos){
//         return(
//             <div className="absolute inset-0  bg-white text-white min-h-screen">
//                 <div className="bg-black p-8 grid gap-4">
//                     <div>
//                         <h2 className="text-3xl mr-48">photos of {place.title}</h2>
//                         <button onClick={() => setShowAllPhotos(false)} className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//   <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
// </svg>

//                             Close photos </button>
//                     </div>
//                 {place?.photos?.length >0 && place.photos.map(photo => (
//                 <div>
//                     <img src={'http://localhost:4000/uploads/'+photo} alt="" />
//                 </div>
//             ))}
//                 </div>
//                </div>
//         );
//     }
//     return(
//         <div className="relative">
//             <div className="grid gap-6 grid-cols-[2fr_1fr]  rounded-3xl overflow-hidden">
//                 <div>

//                     {place.photos?.[0] && (
//                         <div>
//                             <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={'http://localhost:4000/uploads/'+place.photos[0]} alt="" />
//                         </div>
                        
//                     )}
//                 </div>
//                 <div className="grid">
//                 {place.photos?.[1] && (
//                         <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover" src={'http://localhost:4000/uploads/'+place.photos[1]} alt="" />
//                     )}

//                     <div className=" overflow-hidden">
//                     {place.photos?.[2] && (
//                         <img onClick={() => setShowAllPhotos(true)} className="aspect-square cursor-pointer object-cover relative top-2" src={'http://localhost:4000/uploads/'+place.photos[2]} alt="" />
//                     )}
//                     </div>
                     
//                 </div>
//             </div>
//             <button onClick={() => setShowAllPhotos(true)} className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//   <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clipRule="evenodd" />
// </svg>

//                 Show more photos
//                 </button>
//             </div>
//     );
// }



// import { useState } from "react";

// export default function PlaceGallery({ place }) {
//   const [showAllPhotos, setShowAllPhotos] = useState(false);

//   if (showAllPhotos) {
//     return (
//       <div className="absolute inset-0 bg-white text-white min-h-screen  ">
//         <div className="bg-white p-8 grid gap-4  ">
//           <div className="">
//             <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
//             <button
//               onClick={() => setShowAllPhotos(false)}
//               className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-lighten-500 duration-300 "
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//               Close Photos
//             </button>
//           </div>
//           {place?.photos?.length > 0 &&
//             place.photos.map((photo) => (
//               <div key={photo} className="">
//                 <img src={"http://localhost:4000/uploads/" + photo} alt="" />
//               </div>
//             ))}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative">
//       <div className="grid gap-3 lg:grid-cols-5  grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
//         {place.photos?.length > 0 && (
//           <>
//             {place.photos.slice(0, 5).map((photo, index) => (
//               <div key={photo}>
//                 <img
//                   onClick={() => setShowAllPhotos(true)}
//                   className={`aspect-square cursor-pointer object-cover ${
//                     index > 0 ? "lg:h-70 lg:mb-0" : "lg:h-90"
//                   }`}
//                   src={"http://localhost:4000/uploads/" + photo}
//                   alt=""
//                 />
//               </div>
//             ))}
//           </>
//         )}
//       </div>
//       <button
//         onClick={() => setShowAllPhotos(true)}
//         className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             fillRule="evenodd"
//             d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
//             clipRule="evenodd"
//           />
//         </svg>
//         Show More Photos
//         {/* <span class="relative flex h-3 w-3">
//   <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
//   <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
// </span>  */}
//       </button>
//     </div>
//   );
// }

import { useState } from "react";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-white text-white min-h-screen  ">
        <div className="">
        <div className="bg-white p-8 grid gap-4">
          <div className="">
            <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-lighten-500 duration-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              Close Photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div key={photo} className="">
                <img src={"http://localhost:4000/uploads/" + photo} alt="" />
              </div>
            ))}
        </div>
        </div>
        
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="">
      <div className="grid gap-3 lg:grid-cols-5  grid-cols-[2fr_1fr] rounded-3xl overflow-hidden ">
        {place.photos?.length > 0 && (
          <>
            {place.photos.slice(0, 5).map((photo, index) => (
              <div key={photo} className={`col-span-${index === 0 ? "2" : "1"}max-w-xs transition duration-300 ease-in-out hover:scale-105  `} >
                <img
                  onClick={() => setShowAllPhotos(true)}
                  className={`aspect-square cursor-pointer object-cover  ${
                    index > 0 ? "lg:h-72 lg:mb-0" : "lg:h-90"
                  }`}
                  src={"http://localhost:4000/uploads/" + photo}
                  alt=""
                />
              </div>
            ))}
          </>
        )}
      </div>
      </div>
      
      <button
        onClick={() => setShowAllPhotos(true)}
        className="flex gap-1 absolute bottom-2 right-2 py-2 px-4 bg-white rounded-2xl shadow shadow-md shadow-gray-500 transition ease-in-out delay-150 bg-white-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
            clipRule="evenodd"
          />
        </svg>
        Show More Photos
        {/* <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>  */}
      </button>
    </div>
  );
}

