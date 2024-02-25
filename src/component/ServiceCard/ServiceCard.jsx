import { Link } from "react-router-dom";


const ServiceCard = ({service}) => {
    const {  name,
        email,
        photo,
        area,
        price,
        description} = service
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Movie"/></figure>
        <div className="card-body ">
          <h2 className="card-title">Name:{name}</h2>
          <p>Location: {area}</p>
          <p>Price:${price}</p>
          {/* <p>Description:{description}</p> */}
          <div className="card-actions justify-end">
            <Link>
            <button className="btn btn-primary">View Detail</button>
            </Link>
           
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;