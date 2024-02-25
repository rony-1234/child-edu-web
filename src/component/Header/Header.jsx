
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../AuthProvider/AuthProvider';




const Header = () => {

    const {user,logOut} = useContext(Authcontext)
    const handleLogOut = () =>{
        logOut()
        .then(res =>{
            res.user
        })
        .catch(error =>{
            console.log(error , 'The invalid message')
        })
    }

    const navs = <>
     <Link to='/'><li>Home</li></Link>
     <Link to='about'><li>About</li></Link>
     <Link to='services'><li>Services</li></Link>

     {
      user ?. email ?  <>
             <Link to='dashboard'><div className="dropdown dropdown-hover">
       <label tabIndex={0} className=" ">Dashboard</label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <Link to='/addService'><li>Add Service</li></Link>
        <Link to='myService'><li>My Service</li></Link>
        <Link to='/myShedules'><li>My Shedules</li></Link>
        <Link><li><button onClick={handleLogOut}>LogOut</button></li></Link>
      </ul>
         </div></Link>
      
      </>
      : <Link><button to='/login'>Login</button></Link>
     }
  
    </>
    return (
        
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       
         {navs}
      
      </ul>
    </div>
    <div className='flex justify-center items-center'>
        <img className='w-26 h-24' src='https://i.ibb.co/kqRHkV3/Bold-Sale-Brand-Website-Homepage-Banner-7-1200x800.png'/>
    <span className=" font-bold text-4xl">ChildCare</span>
    </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal text-xl font-semibold gap-6 px-1">
     
     {navs}
    </ul>
  </div>
  <div className="navbar-end">
  {
            user ? <div className='flex'>
              <div>
              <img className='w-8 h-8 rounded-full' src={user.photoURL} />
                </div>
                   
                   <button onClick={handleLogOut} className="btn">Sign Out</button>
            </div>
            
            : <Link to="/register">
               <button  className="btn btn-button">Login</button>
            </Link>
          
          }
   
   
  </div>
</div>

    );
};

export default Header;

