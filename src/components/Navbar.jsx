import React, { useState } from 'react';
import { logo, close, menu } from '../assets';

import NavItems from './NavItems';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [toggle, setToggle] = useState(false);

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                <NavItems active={active} setActive={setActive} isMobile={false} />
            </ul>

            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prevT) => !prevT)}
                />

                <div
                    className={`${
                        !toggle ? 'hidden' : 'flex'
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex justify-end items-start flex-1 flex-col'>
                        <NavItems active={active} setActive={setActive} isMobile={true} />
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
