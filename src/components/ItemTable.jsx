// import React from 'react';

import { Link } from "react-router-dom";

const ItemTable = ({itemTable}) => {
    const {imgUrl, itemName, subcategoryName, price, shotDescription,rating,customization,processingTime, stockStatus, userName, userEmail, _id} = itemTable;
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th className="text-2xl text-yellow-700">Item Name</th>
              <th className="text-2xl text-yellow-700">Subcategory Name</th>
              <th className="text-2xl text-yellow-700">Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={imgUrl} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{itemName}</div>
                    <div className="text-sm opacity-50">{rating}</div>
                  </div>
                </div>
              </td>
              <td>
                {subcategoryName}
                <br/>
                <span className="badge badge-ghost badge-sm"> customization : <span className="text-xl">{customization}</span></span>
              </td>
              <td>{}</td>
              <th>
               <Link to={`/viewDetails/${_id}`}>
               <button className="btn btn-ghost btn-xs">details</button>
               </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default ItemTable;