

const Slider = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item rounded-xl relative w-full">
          <img src='https://i.ibb.co/q0rtkxv/woman-reading-stories-children-23-2147797978.jpg' className="w-full" />
          <div className="absolute flex rounded-xl items-center h-full  bg-gradient-to-r from-[#151515] to-">
            <div className='text-white pl-6  space-y-7 w-1/2'>
                <h2 className='text-3xl font-bold'>Affordable Price For Car Servicing</h2>
                <p className='tex-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                 <div className='flex gap-3'>
                 <button className="btn btn-accent">Accent</button>
                 <button className="btn btn-outline btn-secondary">Secondary</button>
                 </div>
            </div>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src='https://i.ibb.co/8zy2YLd/454545.png' className="w-full" />
          <div className="absolute flex rounded-xl items-center h-full  bg-gradient-to-r from-[#151515] to-">
            <div className='text-white pl-6  space-y-7 w-1/2'>
                <h2 className='text-3xl font-bold'>Affordable Price For Car Servicing</h2>
                <p className='tex-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                 <div className='flex gap-3'>
                 <button className="btn btn-accent">Discover more</button>
                 <button className="btn btn-outline btn-secondary">Latest Project</button>
                 </div>
            </div>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex rounded-xl items-center h-full  bg-gradient-to-r from-[#151515] to-">
            <div className='text-white pl-6  space-y-7 w-1/2'>
                <h2 className='text-3xl font-bold'>Affordable Price For Car Servicing</h2>
                <p className='tex-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                 <div className='flex gap-3'>
                 <button className="btn btn-accent">Discover More</button>
                 <button className="btn btn-outline btn-secondary">Latest Project</button>
                 </div>
            </div>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-4">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex rounded-xl items-center h-full  bg-gradient-to-r from-[#151515] to-">
            <div className='text-white pl-6  space-y-7 w-1/2'>
                <h2 className='text-3xl font-bold'>Affordable Price For Car Servicing</h2>
                <p className='tex-xl font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                 <div className='flex gap-3'>
                 <button className="btn btn-accent">Discover More</button>
                 <button className="btn btn-outline btn-secondary">Latest Project</button>
                 </div>
            </div>
          </div>
          <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-4">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Slider;