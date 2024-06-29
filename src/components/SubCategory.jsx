// import React from 'react';

import { Link } from "react-router-dom";

const SubCategory = ({itemSub}) => {
    const {imgUrl, itemName, subcategoryName, price, shotDescription,rating,customization,processingTime, stockStatus, userName, userEmail, _id} = itemSub;

    return (
        <div className="category-card">
    
          <div className="card card-compact w-96 bg-purple-200 shadow-xl">
            <figure><img src={imgUrl} alt="loading..." /></figure>
            <div className="card-body">
              <h2 className="card-title text-3xl"> {subcategoryName} </h2>

              <h5 className="underline text-xl">Why It For You ?</h5>

              <p className="text-blue-800">The process of {subcategoryName} is to first thread an {subcategoryName} needle with thread or yarn. Then, starting at the back of the textile, work the needle and thread through the fabric, and return through the fabric to the backside of the tapestry. This is the same for all {subcategoryName}, other than surface {subcategoryName}.</p>

              <div className="card-actions justify-end">
                <Link to="/error"> <button className="btn btn-primary">Buy Now</button></Link>
              </div>
            </div>
          </div>


        </div>
    );
};

export default SubCategory;