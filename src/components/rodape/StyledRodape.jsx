import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #373b4d;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 20px 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1000px;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 250px;

  h3 {
    color: #ffffff;
    margin-bottom: 15px;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  p, a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    line-height: 1.6;
    display: block; 
    margin-bottom: 8px;
  }

  a:hover {
    color: #b8a178;
  }
`;

const CopyRight = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
  color: #ffffff;
`;

export default function StyledFooter() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Sobre Nós</h3>
          <p>Tax Finity Consiltoria tributária - Nosso compromisso é oferecer soluções personalizadas que garantam segurança jurídica e otimização financeira para nossos clientes.</p>
        </FooterSection>
        <FooterSection>
          <h3>Contato</h3>
          <p>Email: Jessica@taxfinity.com.br</p>
          <p>Telefone: (11) 98338-2289</p>
        </FooterSection>
      </FooterContent>
      <CopyRight>© 2026 Tax Finity Consiltoria tributária. Todos os direitos reservados.</CopyRight>
    </FooterContainer>
  );
}
