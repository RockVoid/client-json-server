import React from 'react';
import styled from 'styled-components';

const StyledPresentation = styled.div`
    background-color: var(--white);
    display: grid;
    grid-template-columns: auto 400px;
    gap: 50px;

    @media screen and (max-width: 826px) { grid-template-columns: auto; }
`;

const StyledImageContainer = styled.div`
    background: url(https://images.unsplash.com/photo-1665194425357-9f06f47d7c8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80) no-repeat;
    height: 75vh;
    border-radius: 1rem;
    margin: 1rem 0.25rem;
    box-shadow: #00000059 0px 5px 15px;

    @media screen and (max-width: 826px) { 
        width: 78vw;
        margin: 0 auto;
    }
`;

const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    h1 { font-size: 3rem; }
    p { 
        position: relative;
        top: 5rem;
    }

    @media screen and (max-width: 826px) {
        p { 
            position: relative;
            top: 2rem;
        }

    }
`;

const Home = () => {
    return (
        <main>
            <StyledPresentation>
                <StyledLayout>
                    <h1>Bem-vindo ao teste TDZAIN!!</h1>
                    <p>
                        Me chamo Roque Costa e estou participando do processo seletivo da TDZAIN,
                        este projeto é uma Single Page Application(SPA) feita em React JS e executa
                        requisições HTTP via axios, buscando informações da api jsonplaceholder, mais informações
                        sobre o API, desenvolvedor e tecnologias usadas, consulte o rodapé da página.
                    </p>
                </StyledLayout>
                <StyledImageContainer />
            </StyledPresentation>
        </main>
    );
}

export default Home;