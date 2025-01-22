import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeContext } from './themeContext'
import './App.css'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App
