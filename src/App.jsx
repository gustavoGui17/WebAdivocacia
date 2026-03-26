import StyledNavbar from "./components/header/StyledNavbar";
import StyledMain from "./components/main/StyledMain";
import StledService from "./components/serviços/StyledService";
import StyledContatoPage from "./components/contatoPage/StyledContatoPage";
import StyledRodape from "./components/rodape/StyledRodape";

export default function App() {

  return (
    <div>
      <StyledNavbar/>
      <StyledMain/>
      <StledService/>
      <StyledContatoPage/>
      <StyledRodape/>
    </div>
  )
}
