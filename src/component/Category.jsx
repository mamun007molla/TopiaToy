import React, { use } from 'react';
import { NavLink } from 'react-router';


const Category = ({categoryPromise}) => {
    const categories=use(categoryPromise);
    return (
        <div>
             <h2 className='text-xl font-bold text-center'>Toy's Category ({categories.length})</h2>
             <div>
                {categories.map(category=>(
                    <NavLink
                    to={`/category/${category.categoryId}`}
                    key={category.categoryId} className='border-0  p-2 my-2 rounded bg-base-100 btn w-full hover:bg-base-200 '>
                        <h3 className='font-semibold '>{category.categoryName}</h3>
                    </NavLink>
                ))}
             </div>
        </div>
    );
};

export default Category;