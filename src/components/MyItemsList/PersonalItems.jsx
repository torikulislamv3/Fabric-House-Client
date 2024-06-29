// import React from 'react';

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const PersonalItems = ({personal}) => {

        const handleDelete = _id =>{
            console.log(_id);
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then((result) => {
              if (result.isConfirmed) {
                
                fetch(`https://server-site-arts.vercel.app/Items/${_id}`, {
                  'method' : "DELETE"
                })
                .then(res=> res.json())
                .then(data=>{
                  console.log(data);
                  if(data.deletedCount> 0){
Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                  }
                })
              }
            });
           
                  };
            
                 

    const {imgUrl, itemName, subcategoryName, price, shotDescription,rating,customization,processingTime, stockStatus, userName, userEmail, _id} = personal;
    return (
        <div>
             <div>
            <div className="card card-side bg-purple-200 shadow-xl p-[50px]">
  <figure><img className="rounded-lg" src={imgUrl} alt="image"/></figure>
  <div className="card-body">
  <h2 className="card-title text-4xl text-blue-900">{itemName}</h2>

<p className="text-black">{shotDescription}</p>
<h2 className="text-black">price :<span className="text-2xl text-rose-600 font-extrabold"> {price}</span></h2>
<p className="text-xl text-black">rating :        <span className="text-3xl text-yellow-900 font-bold"> {rating}</span></p>

<p className="text-xl text-black">customization : <span className="text-3xl text-yellow-900 font-bold"> {customization}</span></p>

<p className="text-xl text-black">stock status :  <span className="text-3xl text-yellow-900 font-bold"> {stockStatus}</span></p>


    <div className="card-actions justify-end">
     <div className="flex">
        <div className="mr-10">
        <Link to={`/updateItem/${_id}`}>
     <button className="btn btn-primary">Update</button>
     </Link>
        </div>
        <div>
        <Link>
     <button onClick={()=> handleDelete(_id)} className="btn btn-primary bg-yellow-400">Delete</button>
     </Link>
        </div>
     </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default PersonalItems;