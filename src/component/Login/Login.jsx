import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";
import {  FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
     const {signIn } = useContext(Authcontext)
     const {googleSignIn} = useContext(Authcontext)
     const navigate = useNavigate();
     const location = useLocation();
     console.log(location)
    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)


        
        // sign in 
        signIn(email,password)
        .then(res =>{
            console.log(res.user)
            event.target.reset();
            navigate(location?.state ? location?.state : '/')
        })
        .catch(error =>{
            console.log(error, 'error')
        })

    }
       // googleSignIn
    const handleGoogleSignIn = () =>{
        googleSignIn(GoogleAuthProvider)
        .then(res =>{
          res.user
        })
        .catch(error =>{
         console.log(error, 'The invalid account')
        })
     }
    return (
        <div className="hero min-h-screen bg-[#87CEEB]">
        <div className="hero-content flex-col gap-20 lg:flex-row">
          <div className="text-center">
            <img className="rounded-xl" src="https://i.ibb.co/pW9rY7N/8888a.png"/>
            {/* <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
              <div className="btn">
                <button onClick={handleGoogleSignIn} type="button"><FaGoogle></FaGoogle></button>
              </div>
              <p>Do not have an account <Link to='/register'>Register</Link></p>
            </form>
           
          </div>
        </div>
      </div>
    );
};

export default Login;