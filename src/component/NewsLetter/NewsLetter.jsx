

const NewsLetter = () => {
    return (
        <div className="flex justify-between bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <div>
                <div className="relative">
                <img className="w-full h-full mt-8" src="https://i.ibb.co/p1VLr33/newsletter-shape-1.png"/>
                </div>
               <div>
               <p className="text-3xl font-semibold  absolute text-center text-white ml-20 -mt-28">Do You Want To Know get updated <br/>What Upcoming</p>
               </div>
              
            </div>
            <div>
                 <div className="relative">
                 <img src="https://i.ibb.co/yNvCpQH/newsletter-shape-2.png"/>
                 </div>
                 <div className="form-control">
      <div className="input-group absolute -mt-36 -ml-56 ">
        <input type="email" placeholder="Enter Your Email" className="input input-bordered" />
       <button className="btn btn-secondary">
         Subscribe
      </button>
      </div>
   </div>
               
                 
              
            
            </div>
        </div>
    );
};

export default NewsLetter;