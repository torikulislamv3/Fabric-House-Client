// import React from 'react';

import {  Link, useLoaderData, useParams } from "react-router-dom";



const ViewDetails = () => {
   const item = useLoaderData()
   
    const {imgUrl, itemName, subcategoryName, price, shotDescription,rating,customization,processingTime, stockStatus, userName, userEmail} = item[0];
    console.log(item);
    
   

    return (
        <div>
            <div className="card card-side bg-purple-200 shadow-xl p-[50px]">
  <figure><img className="rounded-lg" src={imgUrl} alt="image"/></figure>
  <div className="card-body">
    <h2 className="card-title text-4xl text-blue-900">{itemName}</h2>

    <p className="text-black">{shotDescription}</p>
    <h2 className="text-black">price :<span className="text-2xl text-rose-600 font-extrabold"> {price}</span></h2>
    <p className="text-xl text-black">rating :        <span className="text-3xl text-yellow-900 font-bold"> {rating}</span></p>
    <p className="text-xl text-black">subcategory :   <span className="text-3xl text-yellow-900 font-bold"> {subcategoryName}</span></p>
    <p className="text-xl text-black">customization : <span className="text-3xl text-yellow-900 font-bold"> {customization}</span></p>
   <p className="text-xl text-black">processing time :<span className="text-3xl text-yellow-900 font-bold"> {processingTime}</span></p>
    <p className="text-xl text-black">stock status :  <span className="text-3xl text-yellow-900 font-bold"> {stockStatus}</span></p>
    <p className="text-xl text-black">user_name :     <span className="text-3xl text-yellow-900 font-bold"> {userName}</span></p>
    <p className="text-xl text-black">user_email :  <span className="font-bold text-yellow-800"> {userEmail}</span></p>
    
  </div>
</div>
        </div>
    );
};

export default ViewDetails;