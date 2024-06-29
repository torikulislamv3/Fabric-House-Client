// import React from 'react';

import { useLoaderData } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import ItemTable from "./ItemTable";

const AllCraftItems = () => {
    const Items = useLoaderData();
    const { loading} = useAuth();
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
       }
    return (
        <div>
            {Items.map(itemtable => <ItemTable key={itemtable._id} itemTable={itemtable}>


            </ItemTable>)}
        </div>
    );
};

export default AllCraftItems;