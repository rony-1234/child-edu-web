import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mx-auto">
            {/* <img src="https://i.ibb.co/z8Wnk7t/999911.png"/> */}
            <h2 className=" font-extrabold text-9xl"><span className="text-orange-700">4</span>0<span className="text-orange-700">4</span></h2>
                <p className="text-3xl font-semibold mt-4">Oopsie! Something missing</p>
               <p>it seems like we do not find what you searched. The page you were<br/> looking for
               does not exist is not available was incorrectly </p>

              <Link to='/'><button className="btn btn-secondary mt-8">Go to Home</button> </Link>
        
        </div>
    );
};

export default ErrorPage;