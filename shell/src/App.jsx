import React, { Suspense } from "react";

// Import dynamique du module distant
const Header = React.lazy(() => import("headerMfe/Header"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Chargement du header...</div>}>
        <Header />
        <h1>Bienvenue dans le shell</h1>
      </Suspense>
      
    </div>
  );
 
};

export default App;
