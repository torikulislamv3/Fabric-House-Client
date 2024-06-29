// import React from 'react';

import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const UpdateItem = () => {
    const {user} = useAuth()
    const itemData = useLoaderData()
    const {imgUrl, itemName, subcategoryName, price, shotDescription,rating,customization,processingTime, stockStatus, userName, userEmail, _id} = itemData[0];

    const handleUpdateItem = event =>{
        event.preventDefault()
    
        const form = event.target;
    
        const imgUrl =form.imgUrl.value;
        const itemName =form.itemName.value;
        const subcategoryName =form.subcategoryName.value;
        const shotDescription =form.shotDescription.value;
        const price =form.price.value;
        const rating =form.rating.value;
        const customization =form.customization.value;
        const processingTime =form.processingTime.value;
        const stockStatus =form.stockStatus.value;
        const userName =form.userName.value;
        const userEmail =form.userEmail.value;
    
        const UpdateItem = {imgUrl, itemName, subcategoryName, price, shotDescription,rating,customization,processingTime, stockStatus, userName, userEmail}
    
        console.log(UpdateItem);
    
        // send data
    
        fetch(`https://server-site-arts.vercel.app/Items/${_id}`, {
          method : 'PUT',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(UpdateItem)
        })
        .then(res=> res.json())
        .then(data=>{
          console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
              icon: "success",
              title: "Congratulation!",
              text: "Your Item has been Updated",
              footer: '<p>Thank You</p>'
            })
          }
        })
        
    
    
      }
    
    return (
        <div className="bg-purple-300">

          <h1 className="text-5xl text-yellow-900 font-bold text-center">
            Update Your Arts & Crufts
          </h1>
          
          <form onSubmit={handleUpdateItem}>
            <div className=" text-center mt-5 ">
              <div>
                <h3 className="text-blue-900">img url</h3>
              <input type="text" placeholder="image URL" className="input input-bordered w-full max-w-xs mb-5" name="imgUrl" defaultValue={imgUrl} />
              <br />
              <h3 className="text-blue-900">item name</h3>
              <input type="text" placeholder=" item name" className="input input-bordered w-full max-w-xs mb-5" name="itemName" defaultValue={itemName}/>
              <br />
              <h3 className="text-blue-900">subcategory Name</h3>
              <input type="text" placeholder="subcategory Name" className="input input-bordered w-full max-w-xs mb-5" name="subcategoryName" defaultValue={subcategoryName}/>
             
              <br />
              <h3 className="text-blue-900">short description</h3>
              <input type="text" placeholder="short description" className="input input-bordered w-full max-w-xs mb-5" name="shotDescription" defaultValue={shotDescription}/>
              <br />
              <h3 className="text-blue-900">price</h3>
              <input type="text" placeholder="price" className="input input-bordered w-full max-w-xs mb-5" name="price" defaultValue={price}/>
              
              </div>
              <div>
              <h3 className="text-blue-900">rating</h3>
              <input type="text" placeholder="rating" className="input input-bordered w-full max-w-xs mb-5" name="rating" defaultValue={rating}/>
              <br />
              <h3 className="text-blue-900">customization</h3>
              <input type="text" placeholder="customization" className="input input-bordered w-full max-w-xs mb-5" name="customization" defaultValue={customization}/>
              <br />
              <h3 className="text-blue-900">processing time</h3>
              <input type="text" placeholder=" processing time" className="input input-bordered w-full max-w-xs mb-5" name="processingTime" defaultValue={processingTime}/>
              <br />
              <h3 className="text-blue-900">stockStatus</h3>
              <input type="text" placeholder="stockStatus" className="input input-bordered w-full max-w-xs mb-5" name="stockStatus" defaultValue={stockStatus}/>
              <br />
              <h3 className="text-blue-900">user name</h3>
              <input type="text" placeholder="User Name" className="input input-bordered w-full max-w-xs mb-5" name="userName" defaultValue={user?.displayName}/>
              <br />
              <h3 className="text-blue-900">user email</h3>
              <input type="text" placeholder="User Email
" className="input input-bordered w-full max-w-xs mb-5" name="userEmail" defaultValue={user?.email}/>
              </div>
             
            </div>
            <div className="text-center">
            <button className="btn btn-success bg-blue-800 mb-5"><input className="text-xl text-[#FFFFFF]" type="submit" value="Update Item" /></button>
            </div>
          </form>

        </div>
    );
};

export default UpdateItem;