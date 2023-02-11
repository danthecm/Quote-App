import { Outlet } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";

import "./App.css";
function App() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
