import { useState } from 'react';
import styled from "styled-components";
import emailjs from '@emailjs/browser';

const StyledContainerContato = styled.div`
    padding: 40px 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const StyledTitle = styled.h1`
    margin-bottom: 14px;
    text-align: center;

    &::after {
        content: '';
        display: block;
        height: 5px;
        width: 100%;
        background-color: #373b4d;
;
    }
`;

const StyledParagrafo = styled.p`
  font-size: 18px;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const StyledForm = styled.form`
    max-width: 600px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

const StyledInput = styled.input`
    margin-bottom: 14px;

    height: 50px;
    border-radius: 4px;
    padding: 0 12px;
    font-size: 16px;

    @media (max-width: 500px) {
      height: 45px;
    }
`;

const StyledTextArea = styled.textarea`
    margin-bottom: 14px;
    border-radius: 4px;
    padding: 12px;
    height: 100px;
    resize: none;
    font-size: 16px;

    @media (max-width: 500px) {
      height: 80px;
    }
`;

const StyledButton = styled.button`
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    border: 0;
    background-color: #373b4d
;
    font-size: 18px;
    transition: background-color, transform 0.8s;

    &:hover {
        background-color: #373b4d
;
        transform: scale(1.01);
    }

    @media (max-width: 500px) {
      height: 36px;
      font-size: 16px;
    }
`;

export default function StyledEmail() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || message === '') {
            alert("Prencha todos os campos");
            return;
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        };

        emailjs.send("service_cksrh3p", "template_6xkfhdt", templateParams, "isVDGDbUIJ9noKVQT")
            .then((response) => {
                console.log("EMAIL ENVIADO", response.status, response.text);
                setName('');
                setEmail('');
                setMessage('');
            }, (err) => {
                console.log("Erro: ", err);
            });
    }

    return (
        <StyledContainerContato id="Contato">
            <StyledTitle>Contato</StyledTitle>
            <StyledParagrafo>Coloque abaixo as suas informações de contato!
                Nossa equipe <br /> irá entrar em contato com você o mais breve possível.
            </StyledParagrafo>
            <StyledForm onSubmit={sendEmail}>
                <StyledInput
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <StyledInput
                    type="text"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <StyledTextArea
                    placeholder="Digite sua mensagem..."
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <StyledButton type="submit">Enviar mensagem</StyledButton>
            </StyledForm>
        </StyledContainerContato>
    );
}
