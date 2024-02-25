import Swal from 'sweetalert2'

const AddService = () => {
  const handelForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.username.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const area = form.area.value;
    const price = form.price.value;
    const description = form.description.value;

    const myService = {
      name,
      email,
      photo,
      area,
      price,
      description,
    };
    console.log(myService);
    console.log("form submitting");

    // fetch('http://localhost:4000/service',{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json',
    //     },
    //     body:JSON.stringify(MyService)

    // })

    fetch("http://localhost:4000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myService),
    })
      .then((res) => res.json())
      .then((data) =>{ console.log(data);
          if(data.insertedId){
            Swal.fire({
              title: "Services Added!",
              text: "You clicked the button!",
              icon: "success"
            });
          }
      
  });
      
 
  
  
  };
  return (
    <div>
      <h2 className="text-center font-semibold text-4xl">Add Service</h2>

      <form onSubmit={handelForm} className="card-body">
        <div className="md:flex  mx-auto gap-6">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="username"
              placeholder=""
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder=""
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="md:flex mx-auto gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photoURL"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="md:flex mx-auto gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Area</span>
            </label>
            <input
              type="text"
              name="area"
              placeholder=""
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder=""
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text mx-auto">Description</span>
          </label>
          <input
            type="description"
            name="description"
            placeholder=""
            className="input input-bordered mx-auto justify-left w-1/2"
            required
          />
        </div>

        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-secondary flex mx-auto w-1/2"
          >
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
