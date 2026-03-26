import { useState } from 'react';
import styled from 'styled-components'
import fotoSobreNos from '../../img/image.jpg'

const StyleHeader = styled.header`
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  backdrop-filter: blur(5px);

   @media(max-width: 768px){
    padding: 0 20px;
  }
`;

const StyleNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 30px;

    @media(max-width: 768px){
      display: ${({ open }) => open ? 'flex' : 'none'};
      position: absolute;
      top: 100px;
      right: 0;
      background: #fff;
      width: 100%;
      flex-direction: column;
      gap: 20px;
      padding: 20px 0;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    padding: 20px 30px;
    text-transform: uppercase;
  }

  a:hover,
  a.active {
    background: #373b4d;
    border-radius: 5px;
    transition: 0.3s;
  }
`;

const StyleBanner = styled.section`
  width: 100%;
  height: 90vh;
  background-image: url(${fotoSobreNos});
  background-size: cover;
  background-position: center;
  transition: transform 0.7s ease;
  position: relative;

    &:hover {
      transform: scale(1.02);
    }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  span {
    width: 25px;
    height: 3px;
    background: black;
  }

  @media(max-width: 768px){
    display: flex;
  }
`;

export default function StyledNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <StyleHeader >
        <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburger>
        <StyleNav open={menuOpen}>
          <ul>
          <a href="#Home">Home</a><br />
          <a href="#Empresa">Empresa</a><br />
          <a href="#Area">Área de atuação</a><br />
          <a href="#Contato">Contato</a>
          </ul>
        </StyleNav>
      </StyleHeader>
      <StyleBanner id="Home" />
    </>
  );
}