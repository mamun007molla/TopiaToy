import React, { useEffect } from "react";
import Header from "../component/Header";
import { Link, useLoaderData, useParams } from "react-router";

const ToysDetails = () => {
      useEffect(() => {
    document.title = "Toys Details | ToyTopia";
  }, []);
  const { id } = useParams();
  const data = useLoaderData();
  const filteredToy = data.find((t) => t.toyId == id);
  const {toyName,price,rating,pictureURL,sellerName,sellerEmail,availableQuantity,description}=filteredToy;
  const handleform=(event)=>{
    event.preventDefault();
    alert('Form submitted successfully');
    event.target.reset();
  }
  return (
    <div className="">
      <header className="py-3">
        <Header />
      </header>
      <main>
        {filteredToy ? (
            <div className="w-11/12 mx-auto">
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src={pictureURL}
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div className="space-y-3">
                <h1 className="text-5xl font-bold">{toyName}</h1>
                <h2 className="text-2xl font-semibold">{`Description`}</h2>
                <p>{description}</p>
                <p>{`Price: $${price}`}</p>
                <p>{`Rating: ${rating}`}</p>
                <p>{`Seller: ${sellerName}`}</p>
                <p>{`Email: ${sellerEmail}`}</p>
                <p>{`Available Quantity: ${availableQuantity}`}</p>
                <Link to="/" className="btn btn-secondary">Back to All Toys</Link>
              </div>
               
            </div>
            
           
          </div>
          <form onSubmit={handleform}  className="card-body w-1/2 mx-auto border p-4 rounded-lg shadow-lg mb-10">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input name="name" type="text" className="input" placeholder="Name" />
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
             
              
              <button type="submit" className="btn btn-neutral mt-4">Try Now</button>
            </fieldset>
            
          </form>
            </div>
        ) : (
          <p>Toy not found</p>
        )}
      </main>
    </div>
  );
};

export default ToysDetails;
