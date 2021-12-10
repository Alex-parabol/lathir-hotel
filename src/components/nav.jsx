import React from 'react';
import { Link } from 'gatsby';//react-router-dom for gatsby
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media(min-width: 768px){
        padding-bottom: 0;
    }
`;

const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans';
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

        &:last-of-type {
            margin-right: 0;
        }

        &.active{
            border-bottom: 2px solid #fff;
        }
`

export default function Navigation() {
    return (
        <Nav>
            <NavLink
             activeClassName='active'
             to={'/'} >Home</NavLink>
            <NavLink 
            activeClassName='active'
            to={'/nosotros'}>Us</NavLink>
        </Nav>
    )
}
