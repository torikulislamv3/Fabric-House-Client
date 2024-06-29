// import React from 'react';

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";



const AddCraftsItem = () => {
  const {user} = useAuth()
  console.log(user);


  const handleAddItems = event =>{
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

    const newItem = {imgUrl, itemName, subcategoryName, price, shotDescription,rating,customization,processingTime, stockStatus, userName, userEmail}

    console.log(newItem);

    // send data

    fetch('https://server-site-arts-cl1ui2awt-md-torikul-islams-projects.vercel.app/Items', {
      method : 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          icon: "success",
          title: "Congratulation!",
          text: "Your Item has been Added",
          footer: '<p>Thank You</p>'
        })
      }
    })
    


  }

    return (
        <div className="bg-purple-300">

          <h1 className="text-5xl text-yellow-900 font-bold text-center">
            Add Your Arts & Crufts
          </h1>
          
          <form onSubmit={handleAddItems}>
            <div className=" text-center mt-5 ">
              <div>
              <input type="text" placeholder="image URL" className="input input-bordered w-full max-w-xs mb-5" name="imgUrl" />
              <br />
              <input type="text" placeholder=" item name" className="input input-bordered w-full max-w-xs mb-5" name="itemName"/>
              <br />
            
              <input type="text" placeholder="subcategory Name" className="input input-bordered w-full max-w-xs mb-5" name="subcategoryName"/>
              <h1 className="text-[#FFFFFF]">category: a. Embroidery
b. Knitting & Crocheting
c. Quilting
d. Beadwork
e. Tie-Dyeing
f. Macrame</h1>
              <br />
              <input type="text" placeholder="short description" className="input input-bordered w-full max-w-xs mb-5" name="shotDescription"/>
              <br />
              <input type="text" placeholder="price" className="input input-bordered w-full max-w-xs mb-5" name="price"/>
              
              </div>
              <div>
              <input type="text" placeholder="rating" className="input input-bordered w-full max-w-xs mb-5" name="rating"/>
              <br />
              <input type="text" placeholder="customization" className="input input-bordered w-full max-w-xs mb-5" name="customization"/>
              <br />
              <input type="text" placeholder=" processing time" className="input input-bordered w-full max-w-xs mb-5" name="processingTime"/>
              <br />
              <input type="text" placeholder="stockStatus" className="input input-bordered w-full max-w-xs mb-5" name="stockStatus"/>
              <br />
              <input type="text" placeholder="User Name" className="input input-bordered w-full max-w-xs mb-5" name="userName" defaultValue={user?.displayName}/>
              <br />
              <input type="text" placeholder="User Email
" className="input input-bordered w-full max-w-xs mb-5" name="userEmail" defaultValue={user?.email}/>
              </div>
             
            </div>
            <div className="text-center">
            <button className="btn btn-success bg-blue-800 mb-5"><input className="text-xl text-[#FFFFFF]" type="submit" value="Add Now" /></button>
            </div>
          </form>

        </div>
    );
};

export default AddCraftsItem;