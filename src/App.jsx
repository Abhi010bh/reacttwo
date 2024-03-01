import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticlesBg from 'particles-bg'
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/open-sans/400.css"; // Specify weight
import "@fontsource/open-sans/400-italic.css"; // Specify weight and style


import Cover from './components/Cover'
import { StyledEngineProvider } from '@mui/material'

function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Cover />
      </StyledEngineProvider>
    </>
  );
}


export default App
