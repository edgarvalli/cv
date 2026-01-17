import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Curriculum from './components/Curriculum'
import "./assets/style.css";
import { AppContextView } from './context/context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextView>
      <Curriculum />
    </AppContextView>
  </StrictMode>,
)
