import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {

    const {createUser} = useContext(Authcontext)
    const handleRegister = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo)

       // 
       createUser(email,password)
       .then(res =>{
          console.log(res.user)
       })
       .catch(error => console.log(error))
    }

    return (
        <div className="hero min-h-screen bg-[#00CED1]">
        <div className="hero-content flex-col gap-20 lg:flex-row">
          <div className="text-center">
            <img className="rounded-xl w-full h-full" src="https://i.ibb.co/j3JQvYq/454545c.png"/>
            {/* <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
          </div>
          <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleRegister} className="card-body">
                <h2 className="text-center text-2xl">Register Now</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photo</span>
                </label>
                <input type="photo" name="photo" placeholder="photo" className="input input-bordered" required />
              </div>
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
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <p>Already have an account?<Link to='/login'>Sign In</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;