import React, { useState} from 'react'
import './SlideBar.css'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import styled from 'styled-components'

function SlideBar() {
    const [isOpen, setIsOpen] = useState(true)
    

    //styled components
    const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out; 
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; 
`;
    return (
        <SidebarContainer isOpen={isOpen}>
            <div className="closeICon" onClick={() => setIsOpen(false)} > <AiOutlineClose /> </div>
            <ul className="SlideLists">
                <li className='list' onClick={() => setIsOpen(false)}>
                    <Link className='link' to='/'> Home </Link>
                </li>
                <li className="list" onClick={() => setIsOpen(false)}>
                    <Link className='link' to='/services'> Services </Link>
                </li >
                <li className="list" onClick={() => setIsOpen(false)}>
                    <Link className='link' to='/about'> About </Link>
                </li>
                <li className="list" onClick={() => setIsOpen(false)}>
                    <Link className='link' to='/contact'> Contact </Link>
                </li>
                <li className="list" onClick={() => setIsOpen(false)}>
                    <Link className='link' to='/career'> Career </Link>
                </li>
            </ul>
        </SidebarContainer>
    )
}

export default SlideBar