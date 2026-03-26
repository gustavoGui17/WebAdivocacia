import { useState } from "react";
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 135px;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 700px;
  max-height: 80vh;
  overflow-y: auto;
  text-align: left;
`;

const CloseButton = styled.button`
  margin-top: 10px;
  padding: 10px 25px;
  border: none;
  border-radius: 6px;

  background: #373b4d;
  color: white;

  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #2b2f3d;
  }
`;

const ModalTitle = styled.h2`
  font-size: 48px;
  text-align: center;
  color: #373b4d;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const COLORS = {
  darkBlue: '#373b4d',
  gold: '#b8a178',
  white: '#ffffff',
};

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 300px;
  font-family: sans-serif;

  scroll-margin-top: 400px;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.3s ease;

  background-color: ${props => props.dark ? COLORS.darkBlue : COLORS.white};
  color: ${props => props.dark ? COLORS.gold : COLORS.gold};

  &:hover {
    opacity: 0.9;
  }

  h3 {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 20px 0 10px 0;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.dark ? COLORS.gold : '#a08a60'}; 
  }

  span {
    font-size: 0.8rem;
    color: ${props => props.dark ? COLORS.white : COLORS.darkBlue};
    text-decoration: none;
  }
`;

const StledService = () => {

  const [modal, setModal] = useState(null);

  return ( 
    <>
      <GridContainer id="Area"> 

        <ServiceCard dark onClick={() => setModal("tributario")}>
          <h3>Tributário</h3>
          <span>Saiba mais</span>
        </ServiceCard>

        <ServiceCard onClick={() => setModal("empresarial")}>
          <h3>Empresarial</h3>
          <span>Saiba mais</span>
        </ServiceCard>

      </GridContainer>

      {modal && (
        <ModalOverlay onClick={() => setModal(null)}>

          <ModalContent onClick={(e) => e.stopPropagation()}>

            {modal === "tributario" && (
              <>
                <ModalTitle>Tributário</ModalTitle>
                <p>
                  Independente do segmento, sabe-se que todas as empresas têm a obrigatoriedade
                  de pagar tributos. Contudo, nem todas elas sabem que podem estar pagando
                  tributos a maior e de forma indevida, por exemplo.
                </p>

                <p>
                  Além disso, é importante saber que os entes públicos também cobram as
                  empresas de forma indevida através de autuações e execuções fiscais.
                  Estamos aqui para ajudar!
                </p>

                <p>
                  Nossa atuação no direito tributário é macro. Primeiro, analisamos a
                  necessidade do cliente para, somente depois, oferecer uma solução
                  especializada, focada no que ele precisa no momento e de acordo com a
                  sua realidade.
                </p>

                <h3>Ajudamos você no:</h3>

                <ul>
                  <li>Contencioso judicial e administrativo municipal, estadual e federal</li>
                  <li>Administração de passivo com análise e acompanhamento de execuções fiscais</li>
                  <li>Ajuizamento de ações com foco na recuperação do que foi pago indevidamente</li>
                  <li>Recuperação de crédito em via administrativa</li>
                  <li>Consultoria, planejamento e compliance tributário</li>
                  <li>Atendimento e acompanhamento de fiscalizações</li>
                  <li>Aproveitamento e revisão de créditos tributários</li>
                  <li>Revisão de procedimentos fiscais e fluxos de operações</li>
                  <li>Estruturação de regimes especiais e incentivos fiscais</li>
                  <li>Representação de empresas em contencioso tributário</li>
                  <li>Certidão Negativa de Débitos (CDN/CPEN)</li>
                  <li>Parcelamentos e transações municipais, estaduais e federais</li>
                  <li>Defesas judiciais e administrativas</li>
                  <li>Alinhamento de estratégia e novos mercados</li>
                  <li>Tributação do agronegócio</li>
                  <li>Tributação e-commerce</li>
                  <li>Tributação de clínicas médicas</li>
                  <li>Crimes contra a ordem tributária</li>
                </ul>
              </>
            )}

            {modal === "empresarial" && (
              <>
                <ModalTitle>Empresarial</ModalTitle>
                <p>
                  Quando falamos de negócios devemos enxergar o cenário de forma ampla, atuando em todas as frentes da empresa para conseguir prestar um serviço ou vender um produto com qualidade e excelência.
                </p>

                <p>
                  Por isso, é importante não só resolver problemas, mas também se antecipar a eles, atuando de forma sólida e objetiva. Entre os principais serviços oferecidos, estão:
                </p>

                <ul>
                  <li>Organização e reorganização societária</li>
                  <li>Planejamento patrimonial, sucessório empresarial e de pessoa física</li>
                  <li>Governança corporativa</li>
                  <li>Preparação, revisão e negociação de protocolos de intenção, termos de compromisso, contratos preliminares e memorandos de entendimento até a total assessoria pós-contratual no gerenciamento de contratos, solução de conflitos, alterações e rescisões de contratos</li>
                  <li>Direitos autorais e propriedade intelectual</li>
                  <li>Imobiliário</li>
                  <li>Franquias</li>
                  <li>LGPD</li>
                </ul>
              </>
            )}

            <CloseButton onClick={() => setModal(null)}>
              Fechar
            </CloseButton>

          </ModalContent>

        </ModalOverlay>
      )}

    </>
  );
};
export default StledService;