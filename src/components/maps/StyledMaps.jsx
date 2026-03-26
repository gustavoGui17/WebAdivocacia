import styled from "styled-components";

const Section = styled.section`
  padding: 100px 0px;
  background: #fff;
  text-align: center;
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  
  h4 {
    margin-bottom: 10px;
    font-weight: bold;
    color: #373b4d;
  }

  p {
    font-size: 14px;
    color: #444;
  }
`;

export default function StyledMaps() {
  return (
    <Section>
      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.02626053052!2d-46.7367593!3d-23.495563599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef93af38ab65b%3A0x6d3fc13bf793b485!2sAv.%20do%20Anast%C3%A1cio%2C%201525%20-%20City%20Am%C3%A9rica%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005119-000!5e0!3m2!1spt-BR!2sbr!4v1773265430470!5m2!1spt-BR!2sbr" 
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapWrapper>
  
      <InfoGrid>
        <InfoCard>
          <h4>Endereço</h4>
          <p>Avenida do Anastácio, 1525 - City América São Paulo/SP</p>
        </InfoCard>

        <InfoCard>
          <h4>Horário de funcionamento </h4>
          <p>Seg-Sex (09:00 as 18:00)</p>
        </InfoCard>
      </InfoGrid>
    </Section>
  );
}