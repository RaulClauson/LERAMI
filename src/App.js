import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Projects from "./Components/Projects";
import Team from "./Components/Team";
import Texture from "./Components/Texture";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Texture></Texture>
      <Menu></Menu>
      <Home></Home>
      <About></About>
      <Projects
        titulo='Projetos'
        texto='Aqui você confere os projetos que desenvolvemos juntos, demonstrando nossa paixão por tecnologia e capacidade de criar soluções inovadoras.'
      />
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;