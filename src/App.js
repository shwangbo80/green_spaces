import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Container fluid className="main-container px-0">
      <MainContainer />
    </Container>
  );
}

export default App;
