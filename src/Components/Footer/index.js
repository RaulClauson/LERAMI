import { TiArrowSortedUp } from "react-icons/ti";
import './Footer.css'
import Logo_icon from "../../svgs/Logo/Logo_icon";

const Footer = () => {
    return(
        <footer id='Footer' className='container-fluid'>
            <div className='footer row'>
                <div className='footer_container col-md-4'>
                    <h6>LERAMI: Onde a tecnologia encontra a criatividade.</h6>
                    <div>
                        <p>Sitemap</p>
                        <ul>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#About">Sobre</a></li>
                            <li><a href="#Projects">Projetos</a></li>
                            <li><a href="#Team">Integrantes</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Redes Sociais</p>
                        <ul>
                            <li><a href="#">Linkedin</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer_container col-md-4'>
                    <Logo_icon width='25%' height='25%'></Logo_icon>
                </div>
                <div className='footer_container col-md-4'>
                    <div>
                        <p>Nos envie uma mensagem!</p>
                        <form action="https://formsubmit.co/rclauson141@gmail.com" method="POST">
                            <input type="text" name="name" placeholder="Nome" required></input>
					        <input type="email" name="email" placeholder="Email" required></input>
					        <textarea name="mensagem" cols="30" rows="10" placeholder="Mensagem"></textarea>
                            <div className="send d-flex flex-wrap">
                                <button type="submit" id="plane" className="enviar">ENVIAR</button>
                            </div>
                        </form>
                    </div>
                    <a className="email" href="mailto:LERAMI@gmail.com">LERAMI@gmail.com</a>
                </div>
            </div>
            <div className='footer_below d-flex flex-column flex-md-row justify-content-md-between p-3'>
                <p>Agradecemos pela sua visita!</p>
                <h6>© 2024 LERAMI</h6>
                <a href="#Home">Voltar para o topo <TiArrowSortedUp/></a>
            </div>
        </footer>
    )
}

export default Footer