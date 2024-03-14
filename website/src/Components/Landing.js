import logo from '../assets/logo.png';
import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';
import Img4 from '../assets/Img4.jpg';
import L1 from '../assets/Leaders/1.jpg';
import L2 from '../assets/Leaders/2.jpg';
import L3 from '../assets/Leaders/3.jpg';
import L4 from '../assets/Leaders/4.jpg';
import L5 from '../assets/Leaders/5.jpg';
import Hero from './Hero.js';
import Nav from './Nav.js';
import Leaders from './Leaders.js';


const Landing = (props) => {
    return(
        <body>
            <Hero bi={[{Img1}, {Img2}, {Img3}, {Img4}]} width={props.width}>
                <Nav img={props.logo} width={props.width} txt="mina"></Nav>
            </Hero>
            <main>
                <Leaders leader={[{L1}, {L2}, {L3}, {L4}, {L5}]}></Leaders>
            </main>
        </body>
    )
}

export default Landing;