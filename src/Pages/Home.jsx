import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';

const Home = () => {
    const toysAll=useLoaderData()
    
      useEffect(() => {
    document.title = "Home | ToyTopia";
  }, []);
    return (
        <div>
            <h1 className='text-2xl'>Popular Toys</h1>
            {toysAll.map(toy=> <div className="card bg-base-100 w-full shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 my-5 ">
        <figure>
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
          />
        </figure>
        <div className="card-body col-span-2">
          <h2 className="card-title">
            {toy.toyName}
            <div className="badge badge-secondary">{toy.rating}</div>
          </h2>
         
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline md:border-0 ">Price: {toy.price}$</div>
            <div className="badge badge-outline md:border-0">Available: {toy.availableQuantity}</div>

          </div>
          <Link to={`/toys/${toy.toyId}`} className="btn btn-secondary">View More Info</Link>
        </div>
      </div>)}
        </div>
    );
};

export default Home;