import React from 'react';
import { navLinks } from '../constants/';

const NavItems = ({ active, setActive, isMobile }) => {
    return navLinks.map((item, idx) => (
        <li
            key={idx}
            className={`font-poppins cursor-pointer text-[16px] ${active === item.title ? 'text-white' : 'text-dimWhite'} ${
                !isMobile ? (idx === navLinks.length - 1 ? 'mr-0' : 'mr-10') : idx === navLinks.length - 1 ? 'mb-0' : 'mb-4'
            } ${isMobile ? 'font-medium' : 'font-normal'}`}
            onClick={() => setActive(item.title)}
        >
            <a href={`#${item.id}`}>{item.title}</a>
        </li>
    ));
};

export default NavItems;
