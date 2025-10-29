import React from 'react';
import './App.css';

import WiresHorizontal from "./pages/WiresHorizontal.tsx"
import SidebarLeft from "./pages/SidebarLeft.tsx";

function App() {
  return (
    <>
<SidebarLeft />
      <WiresHorizontal />
	</>
  );
}

export default App;
