import { useLoaderData } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";
import Banner from "../components/Banner/Banner";
import useAuth from "../Hooks/useAuth";

const Items = () => {
    const Items = useLoaderData();
    const { loading} = useAuth();
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
       }
    return (
        <div>
             <Banner></Banner>

<div className="grid gap-10 md:grid-cols-2 ">
                    {
                        Items.map(item=> <ItemCard  key={item._id} item={item}
                        >

                        </ItemCard>)
                    }

                    
                </div>


        </div>
    );
};

export default Items;