


import { Link, useLoaderData } from "react-router-dom";
import Slide from "../Slider/Slide";
import ServiceCard from "../ServiceCard/ServiceCard";
import About from "../About/About";
import Facility from "../Facility/Facility";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
           <Slide></Slide>
           <div className="mt-20">
            <h2 className="text-4xl  text-gradient-to-r from-purple-500 to-pink-500  font-semi-bold">All Services</h2>
           <div className="grid grid-cols-1  lg:grid-cols-2 gap-8">
            {
                services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
           </div>
           <Link to='/services'>
           <button className="btn btn-success mt-6">Show All</button>
           </Link>
          
           </div>
             <About></About>
             <Facility></Facility>
             <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;