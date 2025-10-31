import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import Controller from "./pages/Controller.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Controller />
  </StrictMode>,
)
