// import React from 'react';

import { Link } from "react-router-dom";

const ItemCard = ({item}) => {
    const {imgUrl, itemName, subcategoryName, price, shotDescription,rating,customization,processingTime, stockStatus, userName, userEmail, _id} = item;
    return (
        <div>
            <div className="card card-side bg-purple-200 shadow-xl p-[50px]">
  <figure><img className="rounded-lg" src={imgUrl} alt="image"/></figure>
  <div className="card-body">
    <h2 className="card-title">{itemName}</h2>
    <p>{shotDescription}</p>
    <h2>price :<span className="text-2xl text-black"> {price}</span></h2>
    <p>rating : <span> {rating}</span></p>
    <div className="card-actions justify-end">
     <Link to={`/viewDetails/${_id}`}>
     <button className="btn btn-primary">View Details</button>
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ItemCard;