import React, { Suspense } from 'react';
import Category from './Category';
const categoryPromise=fetch('/cat.json').then(res=>res.json());
const Leftside = () => {
    return (
        <div>
           <Suspense fallback={<div>Loading...</div>}>
            <Category categoryPromise={categoryPromise}/>
           </Suspense>
            
        </div>
    );
};

export default Leftside;