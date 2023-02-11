import { Outlet } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
}

export default App;
