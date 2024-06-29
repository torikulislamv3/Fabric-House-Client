// import React from 'react';

import { useLoaderData } from "react-router-dom";
import PersonalItems from "../MyItemsList/PersonalItems";
import useAuth from "../../Hooks/useAuth";
// import ItemCard from "../ItemCard/ItemCard";

const MyListItems = () => {
    const Items = useLoaderData();
    const { loading} = useAuth();
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
       }
    

    // const {imgUrl, itemName, subcategoryName, price, shotDescription,rating,customization,processingTime, stockStatus, userName, userEmail} = item;
    return (
        <div className="grid gap-10 md:grid-cols-2 ">
        {/* {
            Items.map(item=> <ItemCard  key={item._id} item={item}
            >

            </ItemCard>)
        } */}
        {
            Items.map(personal=> <PersonalItems key={personal._id} personal = {personal}></PersonalItems>)
        }
    </div>
    );
};

export default MyListItems;