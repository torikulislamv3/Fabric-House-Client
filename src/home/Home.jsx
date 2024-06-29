import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import ItemCard from "../components/ItemCard/ItemCard";
import useAuth from "../Hooks/useAuth";
import SubCategory from "../components/SubCategory";

const Home = () => {
  const Items = useLoaderData();
  const { loading} = useAuth();

  if(loading){
   return <span className="loading loading-bars loading-lg"></span>
  }
  return (
    <div>
      <Banner></Banner>
      <div className="craft-items">
        <h1 className="text-center text-3xl font-semibold text-purple-400 mb-2">Cruft Arts & Design</h1>
        <div className="grid gap-10 md:grid-cols-2 ">
          {
            Items.map(item => <ItemCard key={item._id} item={item}
            >

            </ItemCard>)
          }
        </div>
      </div>
      <div className="mt-10 mb-10">
        <h2 className="text-center text-3xl text-purple-400 font-bold">
          <marquee> Chose Our Textile Arts and Crafts Category</marquee>
        </h2>

       <div className="grid gap-2 lg:grid-cols-3">
       {
          Items.map(itemSub=> <SubCategory key={itemSub._id} itemSub={itemSub}>

          </SubCategory>)
        }

       </div>
       

      </div>



      <div className="accord mb-10">
      <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
    Why Chose Our Design ?
  </div>
  <div className="collapse-content"> 
    <p>Our product is clean and clear design.
      If you chose our design , I hope you will be happy.
    </p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    How many our Category of design ?
  </div>
  <div className="collapse-content"> 
    <p>
      We provide six category.<br />
      a. Embroidery<br />
b. Knitting & Crocheting <br />
c. Quilting<br />
d. Beadwork<br />
e. Tie-Dyeing<br />
f. Macrame
    </p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Our office Location ?
  </div>
  <div className="collapse-content"> 
    <p>
      Landon <br />
      Ula-jhu
    </p>
  </div>
</div>
      </div>

      <div className="text-area text-center">
            <label>
              <h2 className="text-xl text-red-300">sent your message</h2>
             <textarea className="border p-3 bg-purple-200 text-black font-bold" name="message" id="" cols="50" rows="10" placeholder="provide your message here"></textarea>
            </label><br />
            <Link to="/send"><button className="btn btn-circle bg-purple-800 text-black font-bold">Sent Now</button></Link>
      </div>
    </div>
  );
};

export default Home;