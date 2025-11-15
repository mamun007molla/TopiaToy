import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../component/Header';
import Leftside from '../component/Leftside';
import Rightside from '../component/Rightside';


const HomeLayout = () => {
    const {state}=useNavigation();
    return (
        <div>
            <header className='w-11/12 mx-auto my-3'>
                
                <Header/>
            </header>
            <main className='grid grid-cols-12 w-11/12 mx-auto my-3 gap-10'>
                {/* Content will be rendered here */}
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <Leftside />
                </aside>
                <section className='main col-span-6'>
                    {state=="loading"?<div>Loading...</div>:<Outlet/>}
                </section>
                <aside className='col-span-3 mx-auto sticky top-0 h-fit'>
                    
                    <Rightside />
                </aside>
            </main>
            <footer>
                <p>&copy; 2024 Toy Topia</p>
            </footer>
        </div>
    );
};

export default HomeLayout;