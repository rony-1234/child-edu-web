import { useLoaderData } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";
import Search from "../Search";
import { useState } from "react";


const Services = () => {
    const services = useLoaderData();
    const [result,setResult] = useState([])


   
    return (
        <div>
           
          
             <div className="my-10">
            <h2 className="text-4xl  text-gradient-to-r from-purple-500 to-pink-500  font-semi-bold">All Services</h2>
            <div className="mx-auto my-20 flex justify-center">
            <Search setResult={setResult}></Search>
            </div>
           
           <div className="grid grid-cols-1 gap-8">
            {
                services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
           </div>
           </div>
        </div>
    );
};

export default Services;