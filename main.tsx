import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './main.css'
import WiresHorizontal from "./pages/WiresHorizontal.tsx"
import SidebarLeft from "./pages/SidebarLeft.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <SidebarLeft />
      <WiresHorizontal />
  </StrictMode>,
)
