import './App.css';
import Nav from './Components/Nav.js';
import Hero from './Components/Hero.js';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {ChakraProvider, extendTheme, Center, Divider} from '@chakra-ui/react';
import logo from './assets/logo.png';


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
            <Hero>
              <Nav img={logo} width={width} txt="mina"></Nav>
            </Hero>
          </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
