import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../components/form/input';
import { registerFields } from '../components/form/formFields';
import { StyledButton } from '../components/button/Button';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #c1c1c1;
    border-radius: 1rem;
    background-color: #dcdcdc;

    h1 { margin-bottom: 2rem }
    p { color: var(--error); }

    input {
        margin: 10px 0;
        border: none;
        display: block;
        border-radius: 0.2rem;
        padding: 0.75rem 0.4rem;
        width: 100%;
        border: 2px solid var(--primary);
    }

    @media screen and (max-width: 600px){
        width: 100vw;
        margin: 0;
        border: none;
        border-radius: 0;
    }
`;

const fields = registerFields;
let fieldsState = {};
fields.forEach(field => fieldsState[field.id] = '');

const Register = () => {

    const [registerState, setRegisterState] = useState(fieldsState);
    const [error, setError] = useState('');

    // Refatorar
    const checkName = () => {
        if(registerState.username.length < 10) {
            setError('Nome deve ter no minimo 10 caracteres.')
            return;
        }
        setError('');
    }

    const checkEmail = () => {
        if(registerState['email-address'].length < 10) {
            setError('Email deve ter no minimo 10 caracteres.')
            return;
        }
        setError('');
    }

    const checkPassword = () => {
        const isPasswordValid = registerState['password'].length > 6;

        if(!isPasswordValid) {
            setError('Senha deve no mínimo 6 caracteres.')
            return;
        }
        setError('');
    }

    const checkPasswordConfirm = () => {
        const isPasswordsEquals = registerState['confirmPassword'] === registerState['password'];
        if(isPasswordsEquals) {
            setError('Senhas não correspondem!');
            return;
        }
        setError('');
    }

    const checkInputs = (e) => {
        const options = {
            username: () => checkName(),
            email: () => checkEmail(),
            password: () => checkPassword(),
            confirmPassword: () => checkPasswordConfirm()
        }
        const verifyToDo = options[e.target.name];
        verifyToDo();
    }

    const handleChange= (e) => {
        checkInputs(e);
        setRegisterState({...registerState, [e.target.id]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerState);
    }

    return (
        <StyledContainer>
            <StyledForm onSubmit={handleSubmit}>
                <h1>Formulário de cadastro</h1>
                {
                    fields.map((field) =>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={registerState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    )
                }
                <p>{error}</p>
                <StyledButton type="submit">Cadastrar</StyledButton>
            </StyledForm>
        </StyledContainer>
    );
}

export default Register;