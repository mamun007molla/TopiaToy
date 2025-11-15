import React from 'react';
import { Link } from 'react-router';

const Toys = ({t}) => {
    
    const {toyName,rating,availableQuantity,price,pictureURL}=t
    return (
        <div className="card bg-base-100 w-full shadow-sm grid grid-cols-1 md:grid-cols-3 gap-4 my-5 ">
        <figure>
          <img
            src={pictureURL}
            alt={toyName}
          />
        </figure>
        <div className="card-body col-span-2">
          <h2 className="card-title">
            {toyName}
            <div className="badge badge-secondary">{rating}</div>
          </h2>
         
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline md:border-0 ">Price: {price}$</div>
            <div className="badge badge-outline md:border-0">Available: {availableQuantity}</div>

          </div>
          <Link to={`/toys/${t.toyId}`} className="btn btn-secondary">View More Info</Link>
        </div>
      </div>
    );
};

export default Toys;