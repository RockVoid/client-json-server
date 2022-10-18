import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    background-color: var(--primary);
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 0.4rem;
    padding: 0.4rem;
    color: var(--white);
    margin: 10px 0;

    &:hover {
        background-color: var(--white);
        color: var(--primary);
        cursor: pointer;
    }
`;