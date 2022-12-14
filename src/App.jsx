import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import ListadoBebidas from "./components/ListadoBebidas";
import ModalBebidas from "./components/ModalBebidas";

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <Formulario></Formulario>
          <ListadoBebidas></ListadoBebidas>
          <ModalBebidas/>
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
