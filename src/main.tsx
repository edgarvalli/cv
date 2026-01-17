import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Curriculum from './components/Curriculum'
import "./assets/style.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Curriculum />
  </StrictMode>,
)
