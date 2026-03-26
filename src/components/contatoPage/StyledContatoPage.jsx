import styled from 'styled-components';
import StyledEmail from '../email/StyledEmail'; 
import StyledMaps from '../maps/StyledMaps';

const ContatoWrapper = styled.section`
  display: flex;
  flex-direction: row; 
  align-items: flex-start;
  justify-content: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1;
  width: 100%;
`;

export default function ContatoPage() {
  return (
    <ContatoWrapper id="Contato">
      <Column>
        <StyledEmail />
      </Column>
      <Column>
        <StyledMaps />
      </Column>
    </ContatoWrapper>
  );
}