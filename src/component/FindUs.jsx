import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div>
                <div className="join join-vertical w-full space-y-3">
                    <button className="btn join-item btn-neutral btn-outline"><FaFacebook/> Facebook</button>
                    <button className="btn join-item btn-neutral btn-outline"><FaTwitter/> Twitter</button>
                    <button className="btn join-item btn-neutral btn-outline"><FaInstagram/> Instagram</button>
                    <button className="btn join-item btn-neutral btn-outline"><FaLinkedin/> LinkedIn</button>
                    <button className="btn join-item btn-neutral btn-outline"><FaYoutube/>YouTube</button>
                </div>
            </div>
        </div>
    );
};

export default FindUs;