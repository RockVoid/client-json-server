import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
    background-color: var(--primary);

    li { display: inline;}
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
`;

const footerLinks = [
    {
        name: 'API',
        url: 'https://jsonplaceholder.typicode.com'
    },
    {
        name: 'Desenvolvedor',
        url: 'https://github.com/RockVoid'
    },
    {
        name: 'React',
        url: 'https://reactjs.org'
    },
];

const Footer = () => {
    return (
        <StyledFooter>
            <ul>
                {footerLinks.map((link) => {
                    return (
                        <li key={link.name}>
                            <a 
                                href={link.url}
                                target="_blank"
                                rel="noopenen noreferrer"
                            >{link.name}</a>
                        </li>
                    );
                })}
            </ul>
        </StyledFooter>
    );
}

export default Footer;