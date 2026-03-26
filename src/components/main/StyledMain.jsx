import styled from 'styled-components'
import FotoEmpresa from '../../img/empresa.jpg'

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 125px 20px;
`;

const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  gap: 40px; 
  @media (max-width: 768px) {
    flex-direction: column; 
  }
`;

const StyleFotoEmpresa = styled.div`
  background-image: url(${FotoEmpresa});
  background-size: cover;
  background-position: center;
  flex: 1;
  min-width: 40%; 
  height: 500px; 
  border-radius: 12px;
  transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const TextWrapper = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
`;

const TopLine = styled.div`
  width: 200px;
  height: 7px;
  background-color: #373b4d;
  margin-bottom: 20px;
`;

const StyleTitle = styled.h1`
  font-size: 45px;
  margin: 0 0 20px 0;
  color: #333;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 32px;
  }
`;

const StyleParagrafo = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
  }
`;

const BottomLine = styled.div`
  width: 100%;
  height: 4px;
  background-color: #373b4d;
  margin-top: 10px;
`;

export default function StyledMain() {
  return (
    <StyleMain id="Empresa">
      <ContentWrapper>
        <StyleFotoEmpresa />
        <TextWrapper>
          <TopLine />
          <StyleTitle>Sobre nós</StyleTitle>
          <StyleParagrafo>
            Na Tax Finity Consultoria Tributária, acreditamos que a excelência jurídica é o alicerce para o crescimento sustentável de qualquer negócio. Especializados nas áreas Tributária e Empresarial, unimos o rigor técnico à visão estratégica para transformar desafios fiscais em oportunidades de eficiência. 
            <br /><br />
            Nosso compromisso é oferecer soluções personalizadas que garantam segurança jurídica e otimização financeira para nossos clientes. Com uma equipe focada em antecipar cenários e mitigar riscos, a Tax Finity atua como uma parceira estratégica, permitindo que os empreendedores foquem no que realmente importa: o sucesso de suas operações.
          </StyleParagrafo>
          <BottomLine />
        </TextWrapper>
      </ContentWrapper>
    </StyleMain>
  );
}