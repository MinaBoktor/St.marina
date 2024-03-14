import './App.css';

import Nav from './Components/Nav.js';
import Hero from './Components/Hero.js';
import Leaders from './Components/Leaders.js';
import Landing from './Components/Landing.js';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {ChakraProvider, extendTheme, Center, Divider} from '@chakra-ui/react';
import logo from './assets/logo.png';
import Img1 from './assets/Img1.jpg';
import Img2 from './assets/Img2.jpg';
import Img3 from './assets/Img3.jpg';
import Img4 from './assets/Img4.jpg';
import L1 from './assets/Leaders/1.jpg';
import L2 from './assets/Leaders/2.jpg';
import L3 from './assets/Leaders/3.jpg';
import L4 from './assets/Leaders/4.jpg';
import L5 from './assets/Leaders/5.jpg';


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  },
}

const backgroundimg = 'background';
const header = 'header';


const theme = extendTheme({ colors })

function App() {

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {setWidth(window.innerWidth)});
    return () => {
      window.removeEventListener("resize", () => {setWidth(window.innerWidth)})
    }
  })

  return (
    <BrowserRouter>
          <ChakraProvider theme={theme}>
            <Landing logo={logo} width={width}></Landing>
          </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
