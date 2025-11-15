import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';

const Rightside = () => {
    return (
        <div className='space-y-3'>
            <SocialLogin/>
            <FindUs/>
        </div>
    );
};

export default Rightside;