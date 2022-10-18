import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    width: 100vw;
    background-color: #8a2be2;
    padding: 1rem;
    text-align: center;
`;

const navLinks = [
    {
        name: 'Home',
        route: '/',
    },
    {
        name: 'Cadastro',
        route: '/register',
    },
    {
        name: 'Livros',
        route: '/books',
    }
];

const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    {navLinks.map((link) => {
                        return <Link to={link.route}>{link.name}</Link>
                    })}
                </ul>
            </nav>
        </StyledHeader>
    );
}

export default Header;