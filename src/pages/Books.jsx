import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledButton } from '../components/button/Button';

const StyledContainer = styled.div`
    width: 80vw;
    margin: 1rem auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1;
    justify-content: space-around;
    overflow: hidden;
`;

const StyledCard = styled.div`
    margin: 1rem 0;
    padding: 1rem;
    width: 400px;
    height: 400px;
    border-radius: 1rem;
    box-shadow: var(--black) 0px 5px 15px;
    background-color: #d8ffff;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

const Books = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        await fetch('http://localhost:3000/books')
        .then(res => res.json())
        .then(data => setData(data));
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <StyledContainer>
            {data.map(item => {
                return(
                    <StyledCard key={item.name}>
                        <h2>{item.name}</h2>
                        <h3>Descrição</h3>
                        <p>{item.desc}</p>
                        <p>Genero: {item.genero} - ISBN: {item.ISBN}</p>
                        <StyledButton>Conferir</StyledButton>
                    </StyledCard>
                );
            })}
        </StyledContainer>
    );
}

export default Books;